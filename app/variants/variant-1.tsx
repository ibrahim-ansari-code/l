"use client";

import { useState } from 'react';
import { JetBrains_Mono, Bebas_Neue, Manrope } from 'next/font/google';
import Script from 'next/script';

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] });
const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'] });
const manrope = Manrope({ subsets: ['latin'] });

export default function TablingosLanding() {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <div className={`${manrope.className} min-h-screen bg-gray-950 text-white overflow-hidden`}>
      <Script src="https://assets.calendly.com/assets/external/widget.js" />
      
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 px-4 md:px-8 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className={`${bebasNeue.className} text-2xl md:text-3xl text-white tracking-wide`}>
            TABLINGOS
          </div>
          <div className="flex items-center space-x-6">
            <div className={`${jetbrainsMono.className} text-sm text-gray-400 hidden md:block`}>
              v2.1.3
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-4 md:px-8 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className={`${bebasNeue.className} text-5xl md:text-7xl lg:text-8xl leading-none mb-6`}>
                HARNESS YOUR
                <br />
                <span className="text-red-500">DATA POWER</span>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Effortlessly transform, validate, and onboard data with our streamlined platform. 
                No more data struggles—just seamless automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  onClick={() => setShowCalendly(true)}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-red-500/25"
                >
                  SCHEDULE DEMO
                </button>
                <div className={`${jetbrainsMono.className} text-sm text-gray-400 flex items-center px-4`}>
                  → No-code/low-code platform
                </div>
              </div>
            </div>
            
            {/* Code Preview */}
            <div className="relative">
              <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden shadow-2xl">
                <div className="bg-gray-800 px-4 py-2 flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className={`${jetbrainsMono.className} text-sm text-gray-400 ml-4`}>data-transform.js</div>
                </div>
                <div className={`${jetbrainsMono.className} p-6 text-sm`}>
                  <div className="text-purple-400">const</div>
                  <span className="text-blue-400"> transform</span>
                  <span className="text-white"> = </span>
                  <span className="text-yellow-400">await</span>
                  <span className="text-blue-400"> tablingos</span>
                  <span className="text-white">.</span>
                  <span className="text-green-400">validate</span>
                  <span className="text-white">(</span>
                  <br />
                  <span className="text-white ml-4">rawData,</span>
                  <br />
                  <span className="text-white ml-4">{</span>
                  <br />
                  <span className="text-red-400 ml-8">schema:</span>
                  <span className="text-green-300"> 'billing-data-v2'</span>
                  <span className="text-white">,</span>
                  <br />
                  <span className="text-red-400 ml-8">autoFix:</span>
                  <span className="text-yellow-300"> true</span>
                  <br />
                  <span className="text-white ml-4">}</span>
                  <br />
                  <span className="text-white">);</span>
                  <br /><br />
                  <span className="text-gray-500">// ✓ Validated 10,000 records in 0.3s</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-red-500/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className={`${bebasNeue.className} text-4xl md:text-6xl text-center mb-16`}>
            FROM CHAOS TO <span className="text-red-500">CLARITY</span>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 border border-gray-800 p-8 rounded-lg backdrop-blur-sm">
              <div className={`${jetbrainsMono.className} text-red-500 text-sm mb-4`}>01_COLLECT</div>
              <h3 className={`${bebasNeue.className} text-2xl mb-4`}>SEAMLESS INGESTION</h3>
              <p className="text-gray-300 leading-relaxed">
                Automatically collect data from any source. Our platform handles the complexity 
                while you focus on insights.
              </p>
            </div>
            
            <div className="bg-gray-900/50 border border-gray-800 p-8 rounded-lg backdrop-blur-sm">
              <div className={`${jetbrainsMono.className} text-red-500 text-sm mb-4`}>02_VALIDATE</div>
              <h3 className={`${bebasNeue.className} text-2xl mb-4`}>INTELLIGENT VALIDATION</h3>
              <p className="text-gray-300 leading-relaxed">
                Define schemas through our intuitive UI. Catch errors before they become problems 
                with real-time validation.
              </p>
            </div>
            
            <div className="bg-gray-900/50 border border-gray-800 p-8 rounded-lg backdrop-blur-sm">
              <div className={`${jetbrainsMono.className} text-red-500 text-sm mb-4`}>03_TRANSFORM</div>
              <h3 className={`${bebasNeue.className} text-2xl mb-4`}>AUTOMATED ETL</h3>
              <p className="text-gray-300 leading-relaxed">
                From billing data to EEG signals—transform anything. Cut development time 
                with our no-code approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="relative z-10 px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className={`${bebasNeue.className} text-4xl md:text-6xl mb-8`}>
                UNLIMITED
                <br />
                <span className="text-red-500">POSSIBILITIES</span>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Financial Data Processing</h4>
                    <p className="text-gray-400">Billing, transactions, and compliance reporting</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Scientific Data</h4>
                    <p className="text-gray-400">EEG signals, sensor data, research datasets</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Enterprise Integration</h4>
                    <p className="text-gray-400">CRM imports, data migrations, API transformations</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <div className={`${jetbrainsMono.className} text-sm space-y-2`}>
                  <div className="text-gray-500">// Real-time processing stats</div>
                  <div className="text-green-400">✓ 2.3M records processed today</div>
                  <div className="text-green-400">✓ 99.7% validation accuracy</div>
                  <div className="text-green-400">✓ 0.2s average transform time</div>
                  <div className="text-yellow-400">⚡ 15 active pipelines</div>
                  <div className="text-blue-400">📊 Zero data loss guarantee</div>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-red-500/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`${bebasNeue.className} text-4xl md:text-6xl mb-8`}>
            READY TO TRANSFORM
            <br />
            <span className="text-red-500">YOUR DATA WORKFLOW?</span>
          </div>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Let your data work for you, not against you. Schedule a demo and see 
            how Tablingos can streamline your data operations.
          </p>
          
          <button
            type="button"
            onClick={() => setShowCalendly(true)}
            className="bg-red-600 hover:bg-red-700 text-white px-12 py-6 text-xl font-bold transition-all duration-200 transform hover:scale-105 shadow-2xl hover:shadow-red-500/25 mb-8"
          >
            START YOUR TRANSFORMATION
          </button>
          
          <div className={`${jetbrainsMono.className} text-sm text-gray-500`}>
            → 15-minute demo • No commitment required
          </div>
        </div>
      </section>

      {/* Calendly Modal */}
      {showCalendly && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-4xl h-[80vh] relative">
            <button
              onClick={() => setShowCalendly(false)}
              className="absolute top-4 right-4 z-10 bg-gray-800 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-700"
            >
              ×
            </button>
            <div 
              className="calendly-inline-widget w-full h-full rounded-lg"
              data-url="https://calendly.com/ibrahim-ansari4161/new-meeting"
            ></div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800 px-4 md:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
            <div>
              <div className={`${bebasNeue.className} text-2xl mb-2`}>TABLINGOS</div>
              <p className="text-gray-400 text-sm">Streamlined data transformation platform</p>
            </div>
            
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
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
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <div className={`${jetbrainsMono.className} text-sm text-gray-500`}>
              © 2024 Tablingos. Built for data transformation excellence.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
