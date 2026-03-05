"use client";

import { useState } from 'react';
import { JetBrains_Mono, Manrope } from 'next/font/google';
import Script from 'next/script';

const jetbrains = JetBrains_Mono({ subsets: ['latin'] });
const manrope = Manrope({ subsets: ['latin'] });

export default function Tablingos() {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <div className={`min-h-screen bg-gray-950 text-white ${manrope.className}`}>
      <Script src="https://assets.calendly.com/assets/external/widget.js" />
      
      {/* Navigation */}
      <nav className="relative z-50 px-4 md:px-8 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-white">Tablingos</div>
          <button 
            onClick={() => setShowCalendly(true)}
            className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            call
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-4 md:px-8 py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black opacity-80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(239,68,68,0.1),transparent_50%)] opacity-60"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Harness Your
                <span className="block text-red-500">Data Power</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Streamlined data onboarding platform that eliminates data struggles through seamless collection, validation, and transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setShowCalendly(true)}
                  className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
                >
                  call
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden shadow-2xl">
                <div className="bg-gray-800 px-4 py-3 flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className={`text-sm text-gray-400 ml-4 ${jetbrains.className}`}>data-transform.js</span>
                </div>
                <div className={`p-6 ${jetbrains.className} text-sm`}>
                  <div className="space-y-2">
                    <div><span className="text-purple-400">const</span> <span className="text-blue-400">transform</span> = <span className="text-yellow-400">async</span> (<span className="text-orange-400">data</span>) => {</div>
                    <div className="pl-4"><span className="text-green-400">// Validate structure</span></div>
                    <div className="pl-4"><span className="text-purple-400">const</span> <span className="text-blue-400">validated</span> = <span className="text-orange-400">validateSchema</span>(<span className="text-orange-400">data</span>);</div>
                    <div className="pl-4"><span className="text-green-400">// Transform fields</span></div>
                    <div className="pl-4"><span className="text-purple-400">return</span> <span className="text-orange-400">processFields</span>(<span className="text-blue-400">validated</span>);</div>
                    <div>};</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 md:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">No-Code Data Transformation</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Cut out importer development time with our intuitive platform. From billing data to EEG data—automate ETL for any use case.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-red-500/50 transition-colors">
              <div className="w-12 h-12 bg-red-600 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Data Collection</h3>
              <p className="text-gray-400">Seamlessly gather data from multiple sources with automated validation and error handling.</p>
            </div>
            
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-red-500/50 transition-colors">
              <div className="w-12 h-12 bg-red-600 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Smart Validation</h3>
              <p className="text-gray-400">Define data structure requirements and let our platform handle validation automatically.</p>
            </div>
            
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-red-500/50 transition-colors">
              <div className="w-12 h-12 bg-red-600 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Flexible ETL</h3>
              <p className="text-gray-400">Transform any data type with our no-code platform. The sky is the limit for your use cases.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="px-4 md:px-8 py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Let Your Data Work <span className="text-red-500">For You</span></h2>
              <p className="text-xl text-gray-300 mb-8">
                Through an intuitive UI, define how your data should be structured and transformed. No more data struggles, just seamless automation.
              </p>
              <button 
                onClick={() => setShowCalendly(true)}
                className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all inline-flex items-center space-x-2"
              >
                <span>call</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            <div className="bg-gray-950 rounded-xl border border-gray-700 overflow-hidden">
              <div className="bg-gray-800 px-4 py-3 border-b border-gray-700">
                <span className={`text-sm text-gray-300 ${jetbrains.className}`}>Terminal</span>
              </div>
              <div className={`p-6 ${jetbrains.className} text-sm space-y-2`}>
                <div className="text-green-400">$ tablingos transform --input billing.csv</div>
                <div className="text-gray-400">✓ Schema validation passed</div>
                <div className="text-gray-400">✓ 10,000 records processed</div>
                <div className="text-gray-400">✓ Data transformation complete</div>
                <div className="text-blue-400">Output: transformed_billing.json</div>
                <div className="text-green-400 animate-pulse">$</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Modal */}
      {showCalendly && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden relative">
            <button 
              onClick={() => setShowCalendly(false)}
              className="absolute top-4 right-4 z-10 bg-gray-200 hover:bg-gray-300 rounded-full p-2 text-gray-600"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/ibrahim-ansari4161/new-meeting"
              style={{ minWidth: '320px', height: '700px' }}
            ></div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 px-4 md:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-2xl font-bold">Tablingos</div>
            <div className="flex items-center space-x-8">
              <a href="https://x.com/ibrahimansr" className="text-gray-400 hover:text-white transition-colors">
                Twitter
              </a>
              <a href="https://www.friedmann.ai/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; 2024 Tablingos. Streamlined data transformation platform.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
