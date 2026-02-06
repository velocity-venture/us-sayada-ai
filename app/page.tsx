'use client'
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, BarChart3, Cpu, Layers, CheckCircle, Loader2 } from "lucide-react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [betaStatus, setBetaStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleBetaSignup = async () => {
    if (!email.trim() || !email.includes("@")) return;
    setBetaStatus("loading");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "",
          email,
          subject: "New Beta Signup — Sayada.ai US",
          from_name: "Sayada.ai Beta Form",
        }),
      });
      if (res.ok) {
        setBetaStatus("success");
        setEmail("");
      } else {
        setBetaStatus("error");
      }
    } catch {
      setBetaStatus("error");
    }
  };
  return (
    <main className="flex min-h-screen flex-col">
     
      {/* Hero Section: Slogan and Primary Value Proposition */}
      <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-28 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-sayada-mist/30 text-sayada-blue font-medium text-sm mb-8">
              <span className="block">Velocity Venture Holdings, LLC</span>
            </div>
<h1 className="text-4xl font-bold">Intelligence at the Speed of Business</h1>
<p className="text-lg text-gray-600 mt-2 text-center">From solo consultants to Fortune 500—automate the noise, scale the wins.</p>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              We empower organizations with intelligent tools, strategic insight, and automated systems that unlock growth and enhance performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/platform" className="px-8 py-4 bg-sayada-blue text-white rounded-lg font-semibold hover:bg-sayada-slate transition-all shadow-lg shadow-blue-900/10 flex items-center justify-center gap-2">
                Explore The Platform <ArrowRight size={18} />
              </Link>
              <Link href="/partners" className="px-8 py-4 bg-white border border-gray-200 text-sayada-graphite rounded-lg font-semibold hover:border-sayada-blue transition-all flex items-center justify-center">
                For Consultants
              </Link>
            </div>
          </div>
        </div>
       
        {/* Abstract Background Element - Reinforcing data-driven theme without neon */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 opacity-5 pointer-events-none">
           <svg width="600" height="600" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#0F4C75" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,70.6,31.2C59,40.9,47.1,47.4,36.1,53.4C25.1,59.4,15,64.9,3.7,68.9C-7.6,72.9,-20.1,75.4,-31.6,71.6C-43.1,67.8,-53.6,57.7,-61.8,46.3C-70,34.9,-75.9,22.2,-78.3,8.7C-80.7,-4.8,-79.6,-19.1,-72.6,-31.1C-65.6,-43.1,-52.7,-52.8,-39.7,-60.5C-26.7,-68.2,-13.3,-73.9,0.9,-75.4C15.1,-76.9,30.5,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
            </svg>
        </div>
      </section>
      {/* The Trinity: Core Services Overview */}
      <section className="py-24 bg-sayada-cloud">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
           
            {/* Card 1: Intelligence */}
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-sayada-blue">
                <BarChart3 size={24} />
              </div>
              <h3 className="text-xl font-bold text-sayada-graphite mb-3">Intelligence & Analysis</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Data-rich intelligence that replaces guesswork. Our MSI Engine calculates TAM, SAM, and SOM with AI-powered accuracy.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex gap-2"><span>•</span> Market Sizing Intelligence (MSI) Engine</li>
                <li className="flex gap-2"><span>•</span> Competitor Landscape & Positioning</li>
                <li className="flex gap-2"><span>•</span> Industry Trends & Predictive Insights</li>
              </ul>
            </div>
            {/* Card 2: Operations */}
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-sayada-blue">
                <Cpu size={24} />
              </div>
              <h3 className="text-xl font-bold text-sayada-graphite mb-3">Operations Automation</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Tools designed for real-world business pressure. We automate administrative tasks and optimize process bottlenecks.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex gap-2"><span>•</span> Business Workflow Automation</li>
                <li className="flex gap-2"><span>•</span> AI-Driven Process Optimization</li>
                <li className="flex gap-2"><span>•</span> Compliance and Reporting</li>
              </ul>
            </div>
            {/* Card 3: Strategy */}
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-sayada-blue">
                <Layers size={24} />
              </div>
              <h3 className="text-xl font-bold text-sayada-graphite mb-3">Strategic Advisory</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Executive clarity. The goal is to build an intelligence infrastructure for high-performance organizations.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex gap-2"><span>•</span> Executive Decision Engine</li>
                <li className="flex gap-2"><span>•</span> Business Architecture Mapping</li>
                <li className="flex gap-2"><span>•</span> Risk Assessment & Execution Planning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Beta Signup CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-sayada-graphite mb-4">Start Your 14-Day Free Trial</h2>
          <p className="text-gray-600 mb-8">No credit card required. Get full access to our intelligence platform.</p>
          {betaStatus === "success" ? (
            <div className="flex items-center justify-center gap-2 text-green-600 font-medium">
              <CheckCircle size={20} />
              <span>You&apos;re in! Check your email for next steps.</span>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <input
                type="email"
                placeholder="Your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleBetaSignup()}
                className="px-4 py-3 border border-gray-300 rounded-lg text-base focus:ring-2 focus:ring-sayada-slate focus:border-sayada-slate outline-none flex-1 max-w-sm"
              />
              <button
                className="px-6 py-3 bg-sayada-blue text-white rounded-lg font-semibold hover:bg-sayada-slate transition-colors shadow-md disabled:opacity-50 flex items-center justify-center gap-2"
                onClick={handleBetaSignup}
                disabled={betaStatus === "loading" || !email.includes("@")}
              >
                {betaStatus === "loading" ? (
                  <Loader2 size={18} className="animate-spin" />
                ) : null}
                Join Beta — 14 Days Free
              </button>
            </div>
          )}
          {betaStatus === "error" && (
            <p className="text-red-500 text-sm mt-3">Something went wrong. Please try again or contact sales@us.sayada.ai.</p>
          )}
        </div>
      </section>
    </main>
  );
}
