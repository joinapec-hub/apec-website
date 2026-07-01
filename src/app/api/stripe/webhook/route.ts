import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { notifyNewMember } from "@/lib/members";
import { membershipTypeFromAmount } from "@/lib/payments";

// Verify Stripe's webhook signature (scheme: "t=<ts>,v1=<hex>") using the
// endpoint's signing secret. No Stripe API key required.
function verifyStripeSignature(payload: string, header: string | null, secret: string): boolean {
  if (!header) return false;
  const parts: Record<string, string> = {};
  for (const kv of header.split(",")) {
    const [k, v] = kv.split("=");
    if (k && v) parts[k.trim()] = v.trim();
  }
  const timestamp = parts["t"];
  const provided = parts["v1"];
  if (!timestamp || !provided) return false;

  // Reject events older than 5 minutes to guard against replay.
  const ageSeconds = Math.abs(Date.now() / 1000 - Number(timestamp));
  if (Number.isFinite(ageSeconds) && ageSeconds > 300) return false;

  const expected = crypto
    .createHmac("sha256", secret)
    .update(`${timestamp}.${payload}`, "utf8")
    .digest("hex");

  const a = Buffer.from(provided);
  const b = Buffer.from(expected);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

function formatAmount(cents: number | null | undefined, currency: string | null | undefined): string {
  if (cents == null) return "—";
  return `$${(cents / 100).toFixed(2)}${currency ? " " + currency.toUpperCase() : ""}`;
}

export async function POST(req: NextRequest) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret) {
    return NextResponse.json({ error: "Webhook not configured" }, { status: 500 });
  }

  const payload = await req.text();
  const signature = req.headers.get("stripe-signature");

  if (!verifyStripeSignature(payload, signature, secret)) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  let event: { type?: string; data?: { object?: Record<string, unknown> } };
  try {
    event = JSON.parse(payload);
  } catch {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  // We only act on completed checkouts (membership or donation).
  if (event.type === "checkout.session.completed") {
    const session = (event.data?.object ?? {}) as {
      amount_total?: number;
      currency?: string;
      mode?: string;
      customer_details?: { name?: string; email?: string; phone?: string };
    };
    const details = session.customer_details ?? {};

    try {
      await notifyNewMember({
        type: membershipTypeFromAmount(session.amount_total),
        name: details.name || "(name not provided)",
        email: details.email || "",
        phone: details.phone || undefined,
        amount: formatAmount(session.amount_total, session.currency),
        recurring: session.mode === "subscription",
        source: "stripe",
      });
    } catch {
      // Acknowledge to Stripe regardless; it retries on non-2xx, and we don't
      // want a downstream email hiccup to cause duplicate processing.
    }
  }

  return NextResponse.json({ received: true });
}
