import type { Metadata } from "next";
// We import the fonts defined in globals.css
import "./globals.css";
import Link from "next/link"; 
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

// Define local font variables for use in tailwind.config.ts
const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: '--font-jakarta' });

// SEO Metadata: Reinforcing the official slogan
export const metadata: Metadata = {
  title: "Sayada.ai | Intelligence at the Speed of Business.", //
  description: "The intelligence infrastructure for high-performance organizations. A Velocity Venture Holdings Company.", //
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Apply font classes and color scheme */}
      <body className={`${inter.variable} ${jakarta.variable} font-sans bg-sayada-cloud text-sayada-graphite antialiased`}>
        
        {/* Navigation Bar */}
        <nav className="border-b border-gray-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20 items-center">
              <div className="flex-shrink-0 flex items-center gap-2">
                <Link href="/" className="text-2xl font-display font-bold tracking-tighter text-sayada-blue">
                  SAYADA.AI
                </Link>
              </div>
              <div className="hidden sm:flex space-x-8">
                <Link href="/platform" className="text-sm font-medium text-gray-600 hover:text-sayada-blue transition-colors">Platform</Link>
                <Link href="/solutions" className="text-sm font-medium text-gray-600 hover:text-sayada-blue transition-colors">Solutions</Link>
                <Link href="/partners" className="text-sm font-medium text-gray-600 hover:text-sayada-blue transition-colors">Partners</Link>
                <Link href="/company" className="text-sm font-medium text-gray-600 hover:text-sayada-blue transition-colors">Company</Link>
              </div>
              <div>
                <Link href="/contact" className="px-5 py-2.5 text-sm font-medium text-white bg-sayada-blue rounded-md hover:bg-sayada-slate transition-colors shadow-sm">
                  Get Access
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {children}

        {/* Corporate Footer */}
        <footer className="bg-white border-t border-gray-200 mt-20">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <span className="text-xl font-display font-bold text-sayada-blue">SAYADA.AI</span>
                <p className="mt-4 text-sm text-gray-500 max-w-sm">
                  Born under Velocity Venture Holdings, LLC. We build intelligence infrastructure for high-performance organizations worldwide.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Platform</h3>
                <ul className="mt-4 space-y-4">
                  <li><Link href="/platform" className="text-base text-gray-500 hover:text-sayada-blue">Intelligence Engine</Link></li>
                  <li><Link href="/platform" className="text-base text-gray-500 hover:text-sayada-blue">Automation</Link></li>
                  <li><Link href="/platform" className="text-base text-gray-500 hover:text-sayada-blue">Strategic Advisory</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Connect</h3>
                <ul className="mt-4 space-y-4">
                  <li><Link href="/contact" className="text-base text-gray-500 hover:text-sayada-blue">Contact Sales</Link></li>
                  <li><span className="text-base text-gray-400">Velocity Venture Holdings</span></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-8">
              <p className="text-base text-gray-400 text-center">
                &copy; {new Date().getFullYear()} Sayada.ai. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}