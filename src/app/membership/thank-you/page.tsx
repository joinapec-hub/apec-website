import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Thank you for your payment to APEC.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/membership/thank-you" },
};

export default function ThankYouPage() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-9 h-9 text-green-600">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-[#0f1f5c] mb-4">Thank you!</h1>
        <p className="text-[#4a5a52] leading-relaxed mb-2">
          Your payment was received and a receipt has been emailed to you by Stripe. We&apos;ve recorded your details and the APEC team will follow up shortly with next steps.
        </p>
        <p className="text-[#4a5a52] leading-relaxed mb-8">
          Welcome to the community — we&apos;re glad to have you with us.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/events" className="inline-flex items-center justify-center px-7 py-3.5 bg-[#C8A24B] text-[#0a1645] font-bold rounded-lg hover:bg-[#d4aa5a] transition-colors">
            See upcoming events
          </Link>
          <Link href="/" className="inline-flex items-center justify-center px-7 py-3.5 bg-[#0f1f5c] text-white font-semibold rounded-lg hover:bg-[#0a1645] transition-colors">
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
