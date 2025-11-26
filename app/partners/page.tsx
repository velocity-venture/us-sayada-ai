import Link from "next/link";
import { CheckCircle2, LayoutDashboard, Library } from "lucide-react";

export default function PartnersPage() {
  return (
    <main className="min-h-screen">
      
      {/* Hero Banner: Partner Focus */}
      <div className="bg-sayada-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-display font-bold mb-6">Partner & Consultant Toolkit</h1>
          <p className="text-xl max-w-2xl mx-auto text-blue-100">
            Scale your consultancy with enterprise-grade intelligence. Input client scenarios in plain language and generate professional insights.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Section 1: Consultant Intelligence Dashboard */}
          <div>
            <div className="w-12 h-12 bg-sayada-slate rounded-lg flex items-center justify-center mb-4 text-white">
                <LayoutDashboard size={24} />
            </div>
            <h2 className="text-3xl font-bold text-sayada-graphite mb-6">Consultant Intelligence Dashboard</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Sayada.ai is structured to grow into a global brand capable of serving operational partners. Our AI dashboard turns plain language client scenarios into actionable, data-driven strategy.
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <CheckCircle2 className="text-sayada-blue flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-700">Input client scenarios in plain language</span>
              </div>
              <div className="flex gap-3 items-start">
                <CheckCircle2 className="text-sayada-blue flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-700">Generate market reports and draft strategy documents</span>
              </div>
              <div className="flex gap-3 items-start">
                <CheckCircle2 className="text-sayada-blue flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-700">Perform rapid opportunity and risk assessments</span>
              </div>
            </div>
          </div>
          
          {/* Dashboard Placeholder */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 h-96 flex items-center justify-center shadow-lg">
            
          </div>
          
        </div>

        <div className="mt-20 pt-12 border-t border-gray-100 grid md:grid-cols-2 gap-12 items-center">
             {/* Section 2: Partner Resource Library */}
            <div className="bg-sayada-cloud p-8 rounded-xl border border-gray-100">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-sayada-blue">
                    <Library size={24} />
                </div>
                <h3 className="text-2xl font-bold text-sayada-graphite mb-4">Partner Resource Library</h3>
                <p className="text-gray-600 mb-6">
                    Immediate access to the resources you need to deliver world-class intelligence.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                    <li><span>•</span> Whitepapers and Executive Briefs</li>
                    <li><span>•</span> Training modules for Sayada.ai systems</li>
                    <li><span>•</span> Client-ready proposal templates</li>
                </ul>
            </div>
            
            <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold text-sayada-graphite mb-4">Become a Sayada Partner</h2>
                <p className="text-gray-600 mb-6">
                    Join the infrastructure that powers better decisions, stronger performance, and faster growth worldwide.
                </p>
                <Link href="/contact" className="inline-block px-8 py-3 bg-sayada-blue text-white rounded-md font-medium hover:bg-sayada-slate transition-colors shadow-lg">
                    Apply for Partnership
                </Link>
            </div>
        </div>
      </div>
    </main>
  );
}
