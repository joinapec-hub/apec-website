export const metadata = {
  title: "Privacy Policy – APEC Canada",
};

export default function PrivacyPage() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[#1B3A6B] mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-400 mb-8">Last updated: June 2026</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-600 text-sm leading-relaxed">

          <section>
            <h2 className="text-lg font-bold text-[#1B3A6B] mb-2">1. Who We Are</h2>
            <p>The Association of Pakistani Engineers in Canada (APEC) is a non-profit, voluntary professional organization based in Calgary, Alberta, Canada. We operate the website at www.apecanada.ca. APEC is not affiliated with any political party or government body.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1B3A6B] mb-2">2. Information We Collect</h2>
            <p>We may collect the following personal information when you register for membership, sign up for events, or contact us:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Full name, email address, and phone number</li>
              <li>Professional information (engineering discipline, designation)</li>
              <li>Mailing address (optional)</li>
              <li>Educational background</li>
              <li>Payment information (processed securely through Showpass or GoFundMe — we do not store payment card details)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1B3A6B] mb-2">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>To process membership registrations and renewals</li>
              <li>To communicate about events, programs, and updates</li>
              <li>To issue membership numbers and maintain our membership list</li>
              <li>To comply with our bylaws and legal obligations</li>
              <li>To improve our website and services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1B3A6B] mb-2">4. Information Sharing</h2>
            <p>We do not sell, rent, or trade your personal information. We may share information only:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>With APEC Executive Committee members for operational purposes</li>
              <li>With service providers (e.g., Showpass for event ticketing) under confidentiality agreements</li>
              <li>Where required by law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1B3A6B] mb-2">5. Data Retention</h2>
            <p>We retain your information for as long as your membership is active, plus a reasonable period thereafter for legal and administrative purposes. You may request deletion of your data by contacting us.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1B3A6B] mb-2">6. Your Rights</h2>
            <p>Under applicable Canadian privacy law (PIPEDA), you have the right to access, correct, or request deletion of your personal information. Contact us at info@apecanada.ca to exercise these rights.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1B3A6B] mb-2">7. Cookies</h2>
            <p>Our website may use essential cookies for functionality. We do not use tracking or advertising cookies without your consent.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1B3A6B] mb-2">8. Security</h2>
            <p>We take reasonable steps to protect your information. However, no internet transmission is completely secure. Please exercise caution when sharing sensitive information online.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1B3A6B] mb-2">9. Contact</h2>
            <p>Questions about this policy? Email us at <a href="mailto:info@apecanada.ca" className="text-[#4A90D9] hover:underline">info@apecanada.ca</a>.</p>
          </section>

        </div>
      </div>
    </div>
  );
}
