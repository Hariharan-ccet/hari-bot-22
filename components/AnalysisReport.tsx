
import React from 'react';
import { ANALYSIS_DATA } from '../constants';

const AnalysisReport: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 h-full overflow-y-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">Project Analysis & Rebuild Report</h2>
      
      <section className="mb-8">
        <h3 className="text-lg font-semibold text-indigo-700 mb-3 flex items-center">
          <span className="bg-indigo-100 p-1 rounded mr-2">1.</span>
          High-Level Architecture
        </h3>
        <p className="text-gray-600 bg-gray-50 p-4 rounded-lg leading-relaxed">
          {ANALYSIS_DATA.architecture}
          <br /><br />
          <strong className="text-gray-800">New Proposed Architecture:</strong> A modern Serverless SPA utilizing React for the View Layer, Tailwind for Styling, and Google Gemini Pro for the NLP Intelligence Layer. This removes the need for locally hosted heavyweight models.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-lg font-semibold text-indigo-700 mb-3 flex items-center">
          <span className="bg-indigo-100 p-1 rounded mr-2">2.</span>
          Tech Stack Analysis
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-indigo-50 p-3 rounded-lg">
            <h4 className="font-bold text-xs uppercase text-indigo-400 mb-2">Original Languages</h4>
            <div className="flex flex-wrap gap-2">
              {ANALYSIS_DATA.languages.map(lang => (
                <span key={lang} className="bg-white px-2 py-1 rounded text-xs border border-indigo-100">{lang}</span>
              ))}
            </div>
          </div>
          <div className="bg-purple-50 p-3 rounded-lg">
            <h4 className="font-bold text-xs uppercase text-purple-400 mb-2">Original Frameworks</h4>
            <div className="flex flex-wrap gap-2">
              {ANALYSIS_DATA.frameworks.map(fw => (
                <span key={fw} className="bg-white px-2 py-1 rounded text-xs border border-purple-100">{fw}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center">
          <span className="bg-red-100 p-1 rounded mr-2">3.</span>
          Issue Identification
        </h3>
        <ul className="space-y-2">
          {ANALYSIS_DATA.issues.map((issue, idx) => (
            <li key={idx} className="flex items-start text-sm text-gray-600 bg-red-50 p-2 rounded">
              <span className="text-red-500 mr-2 font-bold">•</span>
              {issue}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-green-700 mb-3 flex items-center">
          <span className="bg-green-100 p-1 rounded mr-2">4.</span>
          Rebuild Improvements
        </h3>
        <div className="space-y-4 text-sm text-gray-600">
          <div className="border-l-4 border-green-500 pl-4 py-1">
            <h4 className="font-bold text-gray-800">Contextual Intelligence</h4>
            <p>Migrated from static Bag-of-Words to Generative AI (Gemini), allowing the bot to understand nuances, typos, and out-of-intent queries.</p>
          </div>
          <div className="border-l-4 border-green-500 pl-4 py-1">
            <h4 className="font-bold text-gray-800">Modern Frontend</h4>
            <p>Built with React 18+ and Tailwind, providing a responsive, state-driven UI that works on mobile and desktop.</p>
          </div>
          <div className="border-l-4 border-green-500 pl-4 py-1">
            <h4 className="font-bold text-gray-800">Secure & Scalable</h4>
            <p>Logic is modularized into services, making it easy to swap LLM providers or add database connections (Supabase/Firebase) for student auth.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnalysisReport;
