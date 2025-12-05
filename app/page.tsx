export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Build Amazing Things
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            The fastest way to ship your product. Start building today.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-purple-700">
              Get Started Free
            </button>
            <button className="bg-white text-purple-600 px-8 py-4 rounded-xl text-lg font-semibold border-2 border-purple-600 hover:bg-purple-50">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">
          Everything You Need
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: '⚡', title: 'Lightning Fast', desc: 'Optimized performance' },
            { icon: '🔒', title: 'Secure', desc: 'Enterprise-grade security' },
            { icon: '📱', title: 'Responsive', desc: 'Works on all devices' },
          ].map((feature, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-16 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Join thousands of happy customers today
          </p>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100">
            Start Free Trial
          </button>
        </div>
      </section>
    </div>
  )
}