"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", subject: "General Inquiry", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formsubmit.co/ajax/joinapec@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: `${form.firstName} ${form.lastName}`.trim(),
          email: form.email,
          _subject: `APEC Website Contact: ${form.subject}`,
          subject: form.subject,
          message: form.message,
          _template: "table",
          _captcha: "false",
        }),
      });
      const data = await res.json();
      const ok = res.ok && (data.success === true || data.success === "true");
      setStatus(ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {/* Hero */}
      <section
        className="relative py-28 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #15604A 0%, #0E3D2E 60%, #0a2c1e 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, #C8A24B 0, #C8A24B 1px, transparent 0, transparent 50%)",
            backgroundSize: "16px 16px",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-300">We would love to hear from you. Reach out any time.</p>
        </div>
      </section>

      {/* Contact grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <h2 className="text-3xl font-bold text-[#15604A] mb-6">Contact Information</h2>
              <div className="space-y-5">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-[#15604A]/10 flex items-center justify-center text-[#15604A] flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#15604A]">Head Office</p>
                    <p className="text-[#4a5a52] text-sm">Calgary, Alberta, Canada</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-[#15604A]/10 flex items-center justify-center text-[#15604A] flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#15604A]">Email</p>
                    <a href="mailto:joinapec@gmail.com" className="text-[#4A90D9] hover:underline text-sm">joinapec@gmail.com</a>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-[#15604A]/10 flex items-center justify-center text-[#15604A] flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#15604A]">Community</p>
                    <a href="https://www.facebook.com/groups/781259795220477/" target="_blank" rel="noopener noreferrer" className="text-[#4A90D9] hover:underline text-sm">Join our Facebook Group →</a>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-[#F2E9D2] rounded-xl border border-[#C8A24B]/30 text-sm text-[#4a5a52]">
                <strong className="text-[#15604A]">Important:</strong> APEC is not affiliated with or associated with any political party or government. We are a non-partisan, non-political voluntary professional organization.
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-[#15604A] mb-6">Send a Message</h2>

              {status === "success" ? (
                <div className="rounded-xl bg-green-50 border border-green-200 p-8 text-center">
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7 text-green-600">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
                  <p className="text-green-700 text-sm">Thank you for reaching out. We typically respond within 2–3 business days.</p>
                  <button onClick={() => { setStatus("idle"); setForm({ firstName: "", lastName: "", email: "", subject: "General Inquiry", message: "" }); }} className="mt-5 px-5 py-2 bg-[#15604A] text-white rounded-lg text-sm font-medium hover:bg-[#0E3D2E] transition-colors">Send Another Message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#1D2621] mb-1">First Name</label>
                      <input name="firstName" value={form.firstName} onChange={handleChange} required type="text" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#15604A] focus:border-[#15604A]" placeholder="Jane" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1D2621] mb-1">Last Name</label>
                      <input name="lastName" value={form.lastName} onChange={handleChange} required type="text" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#15604A] focus:border-[#15604A]" placeholder="Smith" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1D2621] mb-1">Email</label>
                    <input name="email" value={form.email} onChange={handleChange} required type="email" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#15604A] focus:border-[#15604A]" placeholder="jane@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1D2621] mb-1">Subject</label>
                    <select name="subject" value={form.subject} onChange={handleChange} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#15604A] focus:border-[#15604A] bg-white">
                      <option>General Inquiry</option>
                      <option>Membership Question</option>
                      <option>Sponsorship</option>
                      <option>Event Information</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1D2621] mb-1">Message</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required rows={5} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#15604A] focus:border-[#15604A] resize-none" placeholder="How can we help you?" />
                  </div>
                  {status === "error" && (
                    <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-2">Something went wrong. Please email us directly at <a href="mailto:joinapec@gmail.com" className="underline">joinapec@gmail.com</a>.</p>
                  )}
                  <button type="submit" disabled={status === "sending"} className="w-full py-3 bg-[#15604A] text-white font-bold rounded-lg hover:bg-[#0E3D2E] transition-colors disabled:opacity-60 disabled:cursor-not-allowed">
                    {status === "sending" ? "Sending…" : "Send Message"}
                  </button>
                  <p className="text-xs text-gray-400 text-center">We typically respond within 2–3 business days.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
