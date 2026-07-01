"use client";

import { useState } from "react";
import Link from "next/link";

export default function StudentSignupPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    school: "",
    program: "",
    gradYear: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  function update(field: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/membership/student", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {/* Hero */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0f1f5c 0%, #0a1645 60%, #060d38 100%)" }}
      >
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Free Student Membership</h1>
          <p className="text-lg text-gray-300">
            For students enrolled in an undergraduate engineering program in Canada. No payment required — just tell us about yourself.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          {status === "success" ? (
            <div className="rounded-xl bg-green-50 border border-green-200 p-8 text-center">
              <h2 className="text-2xl font-bold text-[#0f1f5c] mb-2">You&apos;re in! 🎉</h2>
              <p className="text-[#4a5a52] mb-6">
                Thanks for joining APEC as a student member. We&apos;ve received your details and our team will be in touch with next steps and upcoming events.
              </p>
              <Link href="/events" className="inline-block px-6 py-3 bg-[#C8A24B] text-[#0a1645] font-bold rounded-lg hover:bg-[#d4aa5a] transition-colors">
                See upcoming events →
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <p className="text-[#4a5a52] text-sm">
                Fields marked <span className="text-red-500">*</span> are required.
              </p>

              <div>
                <label className="block text-sm font-semibold text-[#0f1f5c] mb-1">Full name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-[#0f1f5c] focus:ring-1 focus:ring-[#0f1f5c] outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-[#0f1f5c] mb-1">Email <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-[#0f1f5c] focus:ring-1 focus:ring-[#0f1f5c] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0f1f5c] mb-1">Phone</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-[#0f1f5c] focus:ring-1 focus:ring-[#0f1f5c] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0f1f5c] mb-1">School / University</label>
                <input
                  type="text"
                  value={form.school}
                  onChange={(e) => update("school", e.target.value)}
                  placeholder="e.g. University of Calgary"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-[#0f1f5c] focus:ring-1 focus:ring-[#0f1f5c] outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-[#0f1f5c] mb-1">Program</label>
                  <input
                    type="text"
                    value={form.program}
                    onChange={(e) => update("program", e.target.value)}
                    placeholder="e.g. Electrical Engineering"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-[#0f1f5c] focus:ring-1 focus:ring-[#0f1f5c] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0f1f5c] mb-1">Expected graduation</label>
                  <input
                    type="text"
                    value={form.gradYear}
                    onChange={(e) => update("gradYear", e.target.value)}
                    placeholder="e.g. 2027"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-[#0f1f5c] focus:ring-1 focus:ring-[#0f1f5c] outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full px-6 py-3.5 bg-[#C8A24B] text-[#0a1645] font-bold rounded-lg hover:bg-[#d4aa5a] transition-colors disabled:opacity-60"
              >
                {status === "sending" ? "Submitting…" : "Join as Student Member"}
              </button>

              {status === "error" && (
                <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-2">
                  Something went wrong. Please try again or email us at{" "}
                  <a href="mailto:info@apecanada.ca" className="underline">info@apecanada.ca</a>.
                </p>
              )}

              <p className="text-center text-xs text-gray-400">
                Not a student?{" "}
                <Link href="/membership" className="text-[#4A90D9] hover:underline">See all membership options →</Link>
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
