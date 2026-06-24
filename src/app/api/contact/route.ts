import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
  }

  const body = await req.json();
  const { firstName, lastName, email, subject, message } = body;

  if (!firstName || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "APEC Contact Form <onboarding@resend.dev>",
    to: ["info@apecanada.ca"],
    replyTo: email,
    subject: `APEC Contact: ${subject}`,
    text: `From: ${firstName} ${lastName} <${email}>\nSubject: ${subject}\n\n${message}`,
    html: `
      <h2>New message from APEC website contact form</h2>
      <table cellpadding="8" style="border-collapse:collapse;width:100%">
        <tr><td style="font-weight:bold;width:120px">Name</td><td>${firstName} ${lastName}</td></tr>
        <tr><td style="font-weight:bold">Email</td><td><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="font-weight:bold">Subject</td><td>${subject}</td></tr>
        <tr><td style="font-weight:bold;vertical-align:top">Message</td><td style="white-space:pre-wrap">${message}</td></tr>
      </table>
    `,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
