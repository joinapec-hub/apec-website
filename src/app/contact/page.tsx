export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-[#1B3A6B]">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-300">We would love to hear from you. Reach out any time.</p>
        </div>
      </section>

      {/* Contact grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <h2 className="text-2xl font-bold text-[#1B3A6B] mb-6">Contact Information</h2>
              <div className="space-y-5">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#C9A227]/10 flex items-center justify-center text-[#C9A227] flex-shrink-0">📍</div>
                  <div>
                    <p className="font-semibold text-[#1B3A6B]">Head Office</p>
                    <p className="text-gray-500 text-sm">Calgary, Alberta, Canada</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#C9A227]/10 flex items-center justify-center text-[#C9A227] flex-shrink-0">✉️</div>
                  <div>
                    <p className="font-semibold text-[#1B3A6B]">Email</p>
                    <a href="mailto:info@apecanada.ca" className="text-[#4A90D9] hover:underline text-sm">info@apecanada.ca</a>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#C9A227]/10 flex items-center justify-center text-[#C9A227] flex-shrink-0">👥</div>
                  <div>
                    <p className="font-semibold text-[#1B3A6B]">Community</p>
                    <a href="https://www.facebook.com/groups/781259795220477/" target="_blank" rel="noopener noreferrer" className="text-[#4A90D9] hover:underline text-sm">Join our Facebook Group →</a>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#C9A227]/10 flex items-center justify-center text-[#C9A227] flex-shrink-0">🌐</div>
                  <div>
                    <p className="font-semibold text-[#1B3A6B]">Website</p>
                    <p className="text-gray-500 text-sm">www.apecanada.ca</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-gray-50 rounded-xl border border-gray-200 text-sm text-gray-600">
                <strong className="text-[#1B3A6B]">Important:</strong> APEC is not affiliated with or associated with any political party or government. We are a non-partisan, non-political voluntary professional organization.
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-[#1B3A6B] mb-6">Send a Message</h2>
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input type="text" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3A6B]" placeholder="Jane" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input type="text" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3A6B]" placeholder="Smith" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3A6B]" placeholder="jane@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3A6B] bg-white">
                    <option>General Inquiry</option>
                    <option>Membership Question</option>
                    <option>Sponsorship</option>
                    <option>Event Information</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea rows={5} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3A6B] resize-none" placeholder="How can we help you?" />
                </div>
                <button type="submit" className="w-full py-3 bg-[#C9A227] text-[#1B3A6B] font-bold rounded-lg hover:bg-yellow-400 transition-colors">
                  Send Message
                </button>
                <p className="text-xs text-gray-400 text-center">We typically respond within 2-3 business days.</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
