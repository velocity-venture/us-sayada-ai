export default function PlatformPage() {
  return (
    <main className="bg-white min-h-screen pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl font-display font-bold text-sayada-graphite mb-6">
            Strategic Services & Business Suite
          </h1>
          <p className="text-xl text-gray-600">
            A unified AI ecosystem blending deep market analysis, predictive modeling, and operational automation. It delivers clarity, capability, and competitive advantage.
          </p>
        </div>

        <div className="space-y-20">
          
          {/* Section A: Intelligence & Market Analysis Tools */}
          <section>
            <h2 className="text-2xl font-bold text-sayada-blue mb-8 border-b border-sayada-mist pb-4">A. Intelligence & Market Analysis Tools</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-sayada-cloud rounded-lg border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">1. Market Sizing Intelligence (MSI) Engine</h3>
                <p className="text-gray-600">AI-powered analysis calculating Total Addressable Market (TAM), Serviceable Addressable Market (SAM), and Serviceable Obtainable Market (SOM). Includes segmentation, forecasting, and competitor landscape.</p>
              </div>
              <div className="p-6 bg-sayada-cloud rounded-lg border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">2. Industry Trends & Predictive Insights</h3>
                <p className="text-gray-600">Real-time data signals: industry growth, emerging niches, risk flags, and opportunity forecasts.</p>
              </div>
              <div className="p-6 bg-sayada-cloud rounded-lg border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">3. Competitor Intelligence Suite</h3>
                <p className="text-gray-600">Breakdown of competitor strengths, weaknesses, pricing strategy, positioning, and market share estimates.</p>
              </div>
            </div>
          </section>

          {/* Section B: Operations & Automation Systems */}
          <section>
            <h2 className="text-2xl font-bold text-sayada-blue mb-8 border-b border-sayada-mist pb-4">B. Operations & Automation Systems</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-sayada-cloud rounded-lg border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">4. Business Workflow Automation</h3>
                <p className="text-gray-600">Automates administrative tasks, reporting, scheduling, customer onboarding, and compliance documentation.</p>
              </div>
              <div className="p-6 bg-sayada-cloud rounded-lg border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">5. AI-Driven Process Optimization</h3>
                <p className="text-gray-600">Recommends bottleneck reduction, cost savings, time optimization, and resource allocation.</p>
              </div>
            </div>
          </section>
          
          {/* Section C: Strategic Advisory Tools */}
          <section>
            <h2 className="text-2xl font-bold text-sayada-blue mb-8 border-b border-sayada-mist pb-4">C. Strategic Advisory Tools</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-sayada-cloud rounded-lg border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">6. Executive Decision Engine</h3>
                <p className="text-gray-600">Generates strategic options, pros/cons, risk assessments, execution plans, and leadership briefings.</p>
              </div>
              <div className="p-6 bg-sayada-cloud rounded-lg border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">7. Business Architecture Mapping</h3>
                <p className="text-gray-600">Creates models of processes, customer journeys, value chains, and organizational structures.</p>
              </div>
            </div>
          </section>

        {/* Note: Partner & Enterprise solutions are handled on /partners and /solutions pages respectively */}
        </div>
      </div>
    </main>
  );
}