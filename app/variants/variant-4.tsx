"use client";

import { useState } from 'react';
import { JetBrains_Mono, Manrope } from 'next/font/google';
import Script from 'next/script';

const jetbrains = JetBrains_Mono({ subsets: ['latin'] });
const manrope = Manrope({ subsets: ['latin'] });

export default function TablingosLanding() {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <div className={`${manrope.className} min-h-screen bg-gray-950 text-gray-100`}>
      <Script src="https://assets.calendly.com/assets/external/widget.js" />
      
      {/* Navigation */}
      <nav className="relative z-50 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold text-white">Tablingos</div>
          <button
            type="button"
            onClick={() => setShowCalendly(true)}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            call
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black opacity-90"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
                Effortlessly
                <span className="block text-red-500">harness</span>
                your data power
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Streamlined data onboarding platform. No more data struggles, just seamless collection, validation, and transformation.
              </p>
              
              <button
                type="button"
                onClick={() => setShowCalendly(true)}
                className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all hover:scale-105 shadow-lg hover:shadow-red-600/25"
              >
                call
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
            
            <div className="relative">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 shadow-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className={`${jetbrains.className} text-gray-400 text-sm ml-2`}>data-transform.js</span>
                </div>
                <div className={`${jetbrains.className} text-sm space-y-2`}>
                  <div className="text-blue-400">const <span className="text-white">transform</span> = <span className="text-yellow-400">(</span><span className="text-orange-400">rawData</span><span className="text-yellow-400">) =></span> <span className="text-yellow-400">{</span></div>
                  <div className="text-gray-400 ml-4">// Validate structure</div>
                  <div className="ml-4 text-purple-400">validate<span className="text-yellow-400">(</span><span className="text-orange-400">rawData</span><span className="text-yellow-400">)</span></div>
                  <div className="text-gray-400 ml-4">// Transform fields</div>
                  <div className="ml-4 text-green-400">.map<span className="text-yellow-400">(</span><span className="text-orange-400">normalizeFields</span><span className="text-yellow-400">)</span></div>
                  <div className="text-gray-400 ml-4">// Export clean data</div>
                  <div className="ml-4 text-cyan-400">.export<span className="text-yellow-400">(</span><span className="text-red-400">'csv'</span><span className="text-yellow-400">)</span></div>
                  <div className="text-yellow-400">}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              No-code/low-code platform for
              <span className="block text-red-500">any data transformation</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cut out importer development time and automate data ETL for everything from billing data to EEG data.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:border-red-500/50 transition-colors">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Data Validation</h3>
              <p className="text-gray-400">Ensure data integrity with built-in validation rules and custom constraints.</p>
            </div>
            
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:border-red-500/50 transition-colors">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Smart Transformation</h3>
              <p className="text-gray-400">Define custom transformation rules through an intuitive interface.</p>
            </div>
            
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:border-red-500/50 transition-colors">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Automated ETL</h3>
              <p className="text-gray-400">Streamline your data pipeline with automated extraction, transformation, and loading.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Demo */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              Let your data work
              <span className="block text-red-500">for you, not against you</span>
            </h2>
          </div>
          
          <div className="bg-gray-900/30 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Flexible Solutions for Any Use Case</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  From billing data to EEG data, and everything in between. Our platform adapts to your specific requirements with flexible transformation rules and validation logic.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-300">Billing & Financial Data</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-300">Medical & EEG Data</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-300">IoT Sensor Data</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-300">Customer Analytics</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-950/50 border border-gray-700 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className={`${jetbrains.className} text-gray-400 text-sm ml-2`}>transformation-pipeline</span>
                </div>
                <div className={`${jetbrains.className} text-sm space-y-3`}>
                  <div className="text-gray-400">// Input: Raw CSV data</div>
                  <div className="text-blue-400">INPUT <span className="text-yellow-400">→</span> <span className="text-orange-400">raw_billing_data.csv</span></div>
                  <div className="text-gray-400">// Validation rules</div>
                  <div className="text-purple-400">VALIDATE <span className="text-yellow-400">→</span> <span className="text-green-400">schema_compliance</span></div>
                  <div className="text-gray-400">// Transform fields</div>
                  <div className="text-cyan-400">TRANSFORM <span className="text-yellow-400">→</span> <span className="text-red-400">normalize_currency</span></div>
                  <div className="text-gray-400">// Output: Clean data</div>
                  <div className="text-green-400">OUTPUT <span className="text-yellow-400">→</span> <span className="text-white">structured_billing.json</span></div>
                  <div className="mt-4 text-green-400">✓ <span className="text-gray-300">Pipeline completed successfully</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-t from-gray-950 to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-8">
            Ready to transform your
            <span className="block text-red-500">data workflow?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            With our flexible solutions, the sky is the limit. Start your data transformation journey today.
          </p>
          <button
            type="button"
            onClick={() => setShowCalendly(true)}
            className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-12 py-6 rounded-xl text-xl font-bold transition-all hover:scale-105 shadow-2xl hover:shadow-red-600/25"
          >
            call
            <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </section>

      {/* Calendly Modal */}
      {showCalendly && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-4xl h-[600px] relative">
            <button
              onClick={() => setShowCalendly(false)}
              className="absolute top-4 right-4 z-10 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/ibrahim-ansari4161/new-meeting"
              style={{ minWidth: '320px', height: '600px' }}
            ></div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-bold text-white">Tablingos</div>
            <div className="flex items-center gap-8">
              <a 
                href="https://x.com/ibrahimansr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Twitter
              </a>
              <a 
                href="https://www.friedmann.ai/privacy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 Tablingos. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
