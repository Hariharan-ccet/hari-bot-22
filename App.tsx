
import React, { useState } from 'react';
import ChatInterface from './components/ChatInterface';
import AnalysisReport from './components/AnalysisReport';
import { ViewMode } from './types';
import { LEGACY_INTENTS } from './constants';

const App: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.CHAT);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navigation Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              </div>
              <h1 className="text-xl font-bold text-gray-900">Hari Bot <span className="text-indigo-600">Rebuild</span></h1>
            </div>
            
            <nav className="flex space-x-1 sm:space-x-4">
              <button 
                onClick={() => setViewMode(ViewMode.CHAT)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  viewMode === ViewMode.CHAT ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                }`}
              >
                Chat
              </button>
              <button 
                onClick={() => setViewMode(ViewMode.ANALYSIS)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  viewMode === ViewMode.ANALYSIS ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                }`}
              >
                Analysis
              </button>
              <button 
                onClick={() => setViewMode(ViewMode.DATASET)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  viewMode === ViewMode.DATASET ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                }`}
              >
                Dataset
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col max-w-7xl mx-auto w-full p-4 sm:p-6 lg:p-8 h-[calc(100vh-64px)] overflow-hidden">
        {viewMode === ViewMode.CHAT && (
          <div className="max-w-3xl mx-auto w-full h-full pb-4">
             <ChatInterface />
          </div>
        )}

        {viewMode === ViewMode.ANALYSIS && (
          <div className="h-full">
            <AnalysisReport />
          </div>
        )}

        {viewMode === ViewMode.DATASET && (
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 h-full overflow-y-auto">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Legacy Intent Dataset</h2>
              <p className="text-gray-500 text-sm mt-1">Extracted from intents.json in the original project.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {LEGACY_INTENTS.map((intent, idx) => (
                <div key={idx} className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider mb-3">
                    {intent.tag}
                  </span>
                  <div className="mb-4">
                    <h4 className="text-xs font-bold text-gray-400 uppercase mb-1">Patterns</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {intent.patterns.map((p, i) => <li key={i}>• {p}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase mb-1">Responses</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {intent.responses.map((r, i) => <li key={i}>→ {r}</li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-indigo-900 text-white p-6 rounded-xl">
              <h3 className="text-lg font-bold mb-2">Academic Instructions</h3>
              <p className="text-indigo-200 text-sm mb-4">
                To run the legacy Python version of this project:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-indigo-100 text-sm">
                <li>Install Python 3.9+</li>
                <li>Install dependencies: <code className="bg-indigo-800 px-1 rounded">pip install nltk tensorflow flask</code></li>
                <li>Run <code className="bg-indigo-800 px-1 rounded">python train.py</code> to generate model.h5 and words.pkl</li>
                <li>Run <code className="bg-indigo-800 px-1 rounded">python app.py</code> to start the local server</li>
                <li>Access the bot at <code className="bg-indigo-800 px-1 rounded">http://localhost:5000</code></li>
              </ol>
              <div className="mt-6 p-4 bg-indigo-800 rounded-lg border border-indigo-700">
                <p className="text-xs italic">Note: This rebuild replaces the static ML model with a dynamic Gemini-powered LLM service for superior NLP performance while maintaining the core college data logic.</p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
