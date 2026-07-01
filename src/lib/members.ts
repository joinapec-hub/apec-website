import { Resend } from "resend";

export type MemberRecord = {
  type: string; // e.g. "Regular Membership (annual)", "Student Member (Free)"
  name: string;
  email: string;
  phone?: string;
  amount?: string; // formatted, e.g. "$10.00 CAD"
  recurring?: boolean;
  source: "stripe" | "student-form";
  note?: string;
};

const NOTIFY_TO = "info@apecanada.ca";

/**
 * Records a new member/donation by (1) optionally forwarding to an external
 * datastore (e.g. a Google Sheet Apps Script Web App via MEMBER_SINK_URL) and
 * (2) emailing APEC a notification via Resend. Both steps are best-effort and
 * degrade gracefully when their env vars are absent.
 */
export async function notifyNewMember(rec: MemberRecord): Promise<void> {
  const receivedAt = new Date().toISOString();

  // 1) Optional external "database" sink (no backend required) — e.g. a Google
  // Apps Script Web App bound to a Sheet. Set MEMBER_SINK_URL to enable.
  const sink = process.env.MEMBER_SINK_URL;
  if (sink) {
    try {
      await fetch(sink, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...rec, receivedAt }),
      });
    } catch {
      // Never let the datastore break the payment/webhook flow.
    }
  }

  // 2) Email notification to APEC.
  const key = process.env.RESEND_API_KEY;
  if (!key) return;
  const resend = new Resend(key);

  const rows: [string, string][] = [
    ["Type", rec.type],
    ["Name", rec.name],
    ["Email", rec.email],
    ["Phone", rec.phone || "—"],
    ["Amount", rec.amount || "—"],
    ["Billing", rec.recurring ? "Recurring" : "One-time"],
    ["Source", rec.source === "stripe" ? "Stripe payment" : "Student signup form"],
  ];
  if (rec.note) rows.push(["Details", rec.note]);

  const html = `
    <h2>New ${rec.type}</h2>
    <table cellpadding="8" style="border-collapse:collapse;width:100%;max-width:560px">
      ${rows
        .map(
          ([k, v]) =>
            `<tr><td style="font-weight:bold;width:140px;vertical-align:top">${k}</td><td>${v}</td></tr>`,
        )
        .join("")}
    </table>
    <p style="color:#888;font-size:12px">Received ${receivedAt}</p>
  `;
  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n") + `\nReceived: ${receivedAt}`;

  await resend.emails.send({
    from: "APEC Website <onboarding@resend.dev>",
    to: [NOTIFY_TO],
    replyTo: rec.email,
    subject: `New ${rec.type}: ${rec.name}`,
    html,
    text,
  });
}
