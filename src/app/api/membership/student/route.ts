import { NextRequest, NextResponse } from "next/server";
import { notifyNewMember } from "@/lib/members";

export async function POST(req: NextRequest) {
  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { name, email, phone, school, program, gradYear } = body;
  if (!name || !email) {
    return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
  }

  const noteParts = [
    school ? `School: ${school}` : null,
    program ? `Program: ${program}` : null,
    gradYear ? `Expected graduation: ${gradYear}` : null,
  ].filter(Boolean);

  try {
    await notifyNewMember({
      type: "Student Member (Free)",
      name,
      email,
      phone: phone || undefined,
      source: "student-form",
      note: noteParts.join(" · ") || undefined,
    });
  } catch {
    return NextResponse.json({ error: "Could not submit. Please try again or email us." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
