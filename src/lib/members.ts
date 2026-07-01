import { Resend } from "resend";

export type MemberRecord = {
  type: string; // e.g. "Regular Membership (annual)", "Student Member (Free)", "Donation"
  name: string;
  email: string;
  phone?: string;
  amount?: string; // formatted, e.g. "$10.00 CAD"
  recurring?: boolean;
  source: "stripe" | "student-form";
  note?: string;
};

const NOTIFY_TO = "info@apecanada.ca";
// Override with a verified sender (e.g. "APEC <noreply@apecanada.ca>") once the
// apecanada.ca domain is verified in Resend, for best deliverability.
const FROM = process.env.MEMBER_FROM_EMAIL || "APEC <onboarding@resend.dev>";

/**
 * Records a new member/donation by (1) optionally forwarding to an external
 * datastore (e.g. a Google Sheet Apps Script Web App via MEMBER_SINK_URL),
 * (2) emailing APEC a notification, and (3) sending the member a welcome /
 * thank-you email. All steps are best-effort and degrade gracefully when their
 * env vars are absent.
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

  const key = process.env.RESEND_API_KEY;
  if (!key) return;
  const resend = new Resend(key);

  // 2) Internal notification to APEC.
  await sendApecNotification(resend, rec, receivedAt);

  // 3) Welcome / thank-you email to the member.
  if (rec.email) {
    try {
      await sendMemberEmail(resend, rec);
    } catch {
      // A member-email hiccup must not fail the webhook/form response.
    }
  }
}

async function sendApecNotification(resend: Resend, rec: MemberRecord, receivedAt: string) {
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
    from: FROM,
    to: [NOTIFY_TO],
    replyTo: rec.email || undefined,
    subject: `New ${rec.type}: ${rec.name}`,
    html,
    text,
  });
}

async function sendMemberEmail(resend: Resend, rec: MemberRecord) {
  const isDonation = rec.type.toLowerCase().includes("donation");
  const firstName = rec.name?.trim().split(/\s+/)[0] || "there";

  const subject = isDonation ? "Thank you for supporting APEC 💛" : "Welcome to APEC 🎉";

  const intro = isDonation
    ? `Thank you so much for your generous donation${rec.amount ? ` of ${rec.amount}` : ""} to the Association of Pakistani Engineers in Canada. Your support directly funds our community programs, events, and scholarships.`
    : `Thank you for joining APEC as a ${rec.type.replace(/\s*\(.*\)/, "")}. We're delighted to welcome you to our community of engineers and professionals across Canada.`;

  const nextSteps = isDonation
    ? `You're always welcome at our events — we'd love to see you there.`
    : `Here's what's next:
       • Watch for our event announcements and join us in person.
       • Explore mentorship and career-development opportunities.
       • Connect with the community on our Facebook and WhatsApp groups.`;

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#1D2621;max-width:560px">
      <h2 style="color:#0f1f5c">Hi ${firstName},</h2>
      <p style="line-height:1.6">${intro}</p>
      <p style="line-height:1.6;white-space:pre-line">${nextSteps}</p>
      ${
        rec.amount && !isDonation
          ? `<p style="line-height:1.6;color:#555">A payment receipt (${rec.amount}) has been sent separately by Stripe.</p>`
          : ""
      }
      <p style="line-height:1.6">Questions? Just reply to this email or reach us at
        <a href="mailto:info@apecanada.ca">info@apecanada.ca</a>.</p>
      <p style="line-height:1.6">Warm regards,<br/><strong>The APEC Team</strong><br/>
        <span style="color:#888;font-size:13px">Association of Pakistani Engineers in Canada · Calgary, AB</span></p>
    </div>
  `;
  const text =
    `Hi ${firstName},\n\n${intro}\n\n${nextSteps}\n\n` +
    (rec.amount && !isDonation ? `A payment receipt (${rec.amount}) has been sent separately by Stripe.\n\n` : "") +
    `Questions? Reply to this email or contact info@apecanada.ca.\n\n` +
    `Warm regards,\nThe APEC Team\nAssociation of Pakistani Engineers in Canada · Calgary, AB`;

  await resend.emails.send({
    from: FROM,
    to: [rec.email],
    subject,
    html,
    text,
  });
}
