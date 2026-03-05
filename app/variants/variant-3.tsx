"use client";

import { useState } from 'react';
import { JetBrains_Mono, Manrope } from 'next/font/google';
import Script from 'next/script';

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] });
const manrope = Manrope({ subsets: ['latin'] });

export default function TablingosLanding() {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <div className={`min-h-screen bg-gray-900 text-white ${manrope.className}`}>
      <Script src="https://assets.calendly.com/assets/external/widget.js" />
      
      {/* Navigation */}
      <nav className="relative z-50 px-6 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight">Tablingos</div>
          <button 
            type="button"
            onClick={() => setShowCalendly(true)}
            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Schedule Demo
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 to-gray-900/40"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-900/10 to-transparent transform skew-x-12 translate-x-1/4"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
                Harness Your
                <span className="block text-red-500">Data Power</span>
              </h1>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Streamlined data onboarding platform that eliminates data struggles through seamless collection, validation, and transformation. No-code solutions for any use case.
              </p>
              <button 
                type="button"
                onClick={() => setShowCalendly(true)}
                className="bg-red-600 hover:bg-red-700 px-8 py-4 text-lg font-semibold rounded-lg transition-all transform hover:scale-105"
              >
                Start Your Transformation
              </button>
            </div>
            
            <div className="relative">
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 shadow-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className={`ml-4 text-sm text-gray-400 ${jetbrainsMono.className}`}>data-transform.js</span>
                </div>
                <div className={`text-sm ${jetbrainsMono.className}`}>
                  <div className="text-blue-400">const</div>
                  <div className="text-white ml-4">transform = (rawData) => {</div>
                  <div className="text-green-400 ml-8">// Validate structure</div>
                  <div className="text-white ml-8">validate(rawData.schema);</div>
                  <div className="text-green-400 ml-8">// Transform & clean</div>
                  <div className="text-white ml-8">return cleanData(rawData);</div>
                  <div className="text-white ml-4">};</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg">
                ✓ Automated
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Demo */}
      <section className="px-6 py-24 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">See It In Action</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From billing data to EEG data, our platform handles any transformation challenge with intuitive UI and powerful automation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-red-400">Before: Manual Processing</h3>
              <div className={`bg-gray-800 rounded-lg p-4 ${jetbrainsMono.className} text-sm`}>
                <div className="text-red-400">❌ Hours of manual validation</div>
                <div className="text-red-400 mt-2">❌ Error-prone transformations</div>
                <div className="text-red-400 mt-2">❌ Custom code for each dataset</div>
                <div className="text-red-400 mt-2">❌ Delayed insights</div>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-xl p-8 border border-red-500/30">
              <h3 className="text-2xl font-bold mb-6 text-green-400">After: Tablingos Platform</h3>
              <div className={`bg-gray-800 rounded-lg p-4 ${jetbrainsMono.className} text-sm`}>
                <div className="text-green-400">✓ Automated validation rules</div>
                <div className="text-green-400 mt-2">✓ Visual transformation builder</div>
                <div className="text-green-400 mt-2">✓ Reusable templates</div>
                <div className="text-green-400 mt-2">✓ Real-time processing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                No-Code Meets
                <span className="block text-red-500">Enterprise Power</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Define data structures through our intuitive UI while maintaining the flexibility and power needed for complex enterprise transformations. Cut development time without sacrificing capability.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                  <div className="text-red-400 text-2xl mb-3">⚡</div>
                  <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
                  <p className="text-gray-300">Process datasets in seconds, not hours</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                  <div className="text-red-400 text-2xl mb-3">🔧</div>
                  <h3 className="text-xl font-bold mb-2">Flexible ETL</h3>
                  <p className="text-gray-300">Adapt to any data format or structure</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                  <div className="text-red-400 text-2xl mb-3">🛡️</div>
                  <h3 className="text-xl font-bold mb-2">Built-in Validation</h3>
                  <p className="text-gray-300">Catch errors before they impact your pipeline</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                  <div className="text-red-400 text-2xl mb-3">🔄</div>
                  <h3 className="text-xl font-bold mb-2">Automated Workflows</h3>
                  <p className="text-gray-300">Set it once, run it everywhere</p>
                </div>
              </div>
              
              <button 
                type="button"
                onClick={() => setShowCalendly(true)}
                className="bg-red-600 hover:bg-red-700 px-8 py-4 text-lg font-semibold rounded-lg transition-all inline-flex items-center gap-2"
              >
                Get Started Today
                <span className="text-xl">→</span>
              </button>
            </div>
            
            <div className="relative">
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 sticky top-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className={`text-sm text-gray-400 ${jetbrainsMono.className}`}>Live Processing</span>
                </div>
                <div className={`text-xs ${jetbrainsMono.className} space-y-2`}>
                  <div className="text-blue-400">Processing: customer_data.csv</div>
                  <div className="bg-gray-900 rounded p-2">
                    <div className="text-green-400">✓ Schema validated</div>
                    <div className="text-green-400">✓ 10,000 rows cleaned</div>
                    <div className="text-green-400">✓ Duplicates removed</div>
                    <div className="text-yellow-400">⚡ Transforming...</div>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full w-3/4 transition-all duration-1000"></div>
                  </div>
                  <div className="text-gray-400">ETA: 2 seconds</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 bg-gradient-to-r from-red-900/20 to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8">
            Ready to Transform
            <span className="block text-red-500">Your Data Workflow?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join companies who've eliminated data struggles and accelerated their insights with our streamlined platform.
          </p>
          <button 
            type="button"
            onClick={() => setShowCalendly(true)}
            className="bg-red-600 hover:bg-red-700 px-12 py-5 text-xl font-bold rounded-lg transition-all transform hover:scale-105 shadow-2xl"
          >
            Schedule Your Demo
          </button>
        </div>
      </section>

      {/* Calendly Modal */}
      {showCalendly && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-4xl h-[600px] relative">
            <button 
              onClick={() => setShowCalendly(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl z-10 bg-white rounded-full w-8 h-8 flex items-center justify-center"
            >
              ×
            </button>
            <div 
              className="calendly-inline-widget w-full h-full" 
              data-url="https://calendly.com/ibrahim-ansari4161/new-meeting"
            ></div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="px-6 py-12 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-bold">Tablingos</div>
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
            <p>© 2024 Tablingos. Streamlined data transformation for the modern enterprise.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
