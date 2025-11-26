import { Target, Lightbulb, Zap, CheckCircle, TrendingUp } from "lucide-react";

export default function CompanyPage() {
  return (
    <main className="bg-white min-h-screen pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-5xl font-display font-bold text-sayada-graphite mb-4">
            Our Intelligence Infrastructure
          </h1>
          <p className="text-xl text-gray-600">
            Clarity, Capability, and Competitive Advantage in Every Sector.
          </p>
        </div>

        {/* Brand Story Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-sayada-blue mb-6">The Sayada.ai Story</h2>
          <div className="grid md:grid-cols-2 gap-12 text-lg text-gray-700">
            <p>
              Sayada.ai was created with a simple idea: Businesses should have access to world-class intelligence, strategy, and automation without needing a massive corporate budget.
            </p>
            <p>
              Born under **Velocity Venture Holdings, LLC**, Sayada.ai represents the next generation of business enablement. We stand at the crossroads of advanced AI systems, elite business consulting, and enterprise automation to build a scalable, global platform.
            </p>
          </div>
        </section>
        
        {/* Mission and Vision */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
            <div className="p-8 border border-sayada-mist rounded-xl bg-sayada-cloud">
                <div className="flex items-center gap-3 mb-4 text-sayada-blue">
                    <Target size={24} />
                    <h3 className="text-2xl font-bold">Our Mission</h3>
                </div>
                <p className="text-gray-700">
                    To empower organizations with intelligent tools, strategic insight, and automated systems that unlock growth, enhance performance, and build long-term success.
                </p>
            </div>
            <div className="p-8 border border-sayada-mist rounded-xl bg-sayada-cloud">
                <div className="flex items-center gap-3 mb-4 text-sayada-blue">
                    <Lightbulb size={24} />
                    <h3 className="text-2xl font-bold">Our Vision</h3>
                </div>
                <p className="text-gray-700">
                    To become the world’s most trusted AI-driven strategic partner—delivering clarity, capability, and competitive advantage across every sector of business.
                </p>
            </div>
        </div>

        {/* Brand Principles */}
        <section>
          <h2 className="text-3xl font-bold text-sayada-blue mb-10 text-center">Core Brand Principles</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <PrincipleCard icon={<CheckCircle />} title="Precision" description="Data-rich intelligence that replaces guesswork." />
            <PrincipleCard icon={<Zap />} title="Speed" description="Automated insights delivered fast." />
            <PrincipleCard icon={<Lightbulb />} title="Clarity" description="Insights written in human language, not technical jargon." />
            <PrincipleCard icon={<TrendingUp />} title="Strength" description="Tools designed for real-world business pressure." />
            <PrincipleCard icon={<TrendingUp />} title="Scalability" description="Every tool must grow with the customer." />
          </div>
        </section>

      </div>
    </main>
  );
}

// Reusable card component for principles (placed at the bottom of the file)
const PrincipleCard = ({ title, description, icon }) => (
    <div className="text-center p-4">
        <div className="text-sayada-slate mx-auto w-fit mb-3">
            {icon}
        </div>
        <h4 className="text-lg font-bold text-sayada-graphite mb-1">{title}</h4>
        <p className="text-sm text-gray-500">{description}</p>
    </div>
);