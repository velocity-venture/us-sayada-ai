import { Briefcase, Gavel, Heart, TrendingUp } from "lucide-react";

export default function SolutionsPage() {
  return (
    <main className="bg-white min-h-screen pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mb-16">
          <h1 className="text-4xl font-display font-bold text-sayada-graphite mb-6">
            Enterprise & Vertical-Specific Solutions
          </h1>
          <p className="text-xl text-gray-600">
            Intelligent solutions tailored to the unique pressures and complexities of high-stakes sectors. Every tool is designed to deliver customized insights and superior performance.
          </p>
        </div>

        <div className="space-y-16">
          
          {/* Section E.1: Government & Public Sector */}
          <section>
            <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-sayada-mist rounded-full text-sayada-blue">
                    <Briefcase size={20} />
                </div>
                <h2 className="text-2xl font-bold text-sayada-blue">Government & Public Sector Intelligence</h2>
            </div>
            <p className="text-gray-700 mb-6 max-w-4xl">
                Analysis engines built for effective operational planning, resource allocation, and budget management in the public sector. Sayada.ai provides the data clarity needed for impactful public service.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-600">
                <div className="p-4 bg-sayada-cloud rounded-lg border border-gray-100">Budget Analysis & Forecasting</div>
                <div className="p-4 bg-sayada-cloud rounded-lg border border-gray-100">Population Trends & Resource Allocation</div>
                <div className="p-4 bg-sayada-cloud rounded-lg border border-gray-100">Operational Planning & Optimization</div>
            </div>
          </section>

          {/* Section E.2: Industry-Specific AI Modules */}
          <section>
            <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-sayada-mist rounded-full text-sayada-blue">
                    <TrendingUp size={20} />
                </div>
                <h2 className="text-2xl font-bold text-sayada-blue">Industry-Specific AI Modules</h2>
            </div>
            <p className="text-gray-700 mb-6 max-w-4xl">
                Customized AI modules that tailor insights for the specific needs of each sector, driving performance and competitive advantage.
            </p>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
                <ModuleCard title="Healthcare" icon={<Heart size={20} />} />
                <ModuleCard title="Legal" icon={<Gavel size={20} />} />
                <ModuleCard title="Logistics" icon={<Briefcase size={20} />} />
                <ModuleCard title="Finance" icon={<TrendingUp size={20} />} />
                <ModuleCard title="Education" icon={<Briefcase size={20} />} />
                <ModuleCard title="Manufacturing" icon={<Briefcase size={20} />} />
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}

// Reusable card component for the modules (placed at the bottom of the file)
const ModuleCard = ({ title, icon }) => (
    <div className="p-4 text-center bg-gray-50 border border-gray-200 rounded-lg hover:border-sayada-slate transition-colors">
        <div className="text-sayada-graphite mb-2 mx-auto w-fit">
            {icon}
        </div>
        <span className="text-base font-medium text-sayada-graphite">{title}</span>
    </div>
);