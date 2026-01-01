
import React from 'react';
import { ANALYSIS_DATA, LEGACY_INTENTS } from '../constants';

const AnalysisReport: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 h-full overflow-y-auto space-y-10">
      <header className="border-b pb-4">
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Project Technical Analysis</h2>
        <p className="text-gray-500 mt-2">Prepared by Hari Bot Senior Engineering Team</p>
      </header>

      {/* 1. Project Analysis */}
      <section>
        <h3 className="text-xl font-bold text-indigo-600 mb-4 flex items-center">
          <span className="mr-2">01</span> Project Architecture & Tech Stack
        </h3>
        <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Architecture:</strong> {ANALYSIS_DATA.architecture}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div>
              <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Core Languages</h4>
              <ul className="flex flex-wrap gap-2">
                {ANALYSIS_DATA.languages.map(l => <span key={l} className="bg-white px-3 py-1 rounded-full text-xs font-semibold shadow-sm border border-gray-100">{l}</span>)}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Modern Frameworks</h4>
              <ul className="flex flex-wrap gap-2">
                {ANALYSIS_DATA.frameworks.map(f => <span key={f} className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-semibold border border-indigo-100">{f}</span>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Functional Understanding */}
      <section>
        <h3 className="text-xl font-bold text-indigo-600 mb-4 flex items-center">
          <span className="mr-2">02</span> Functional Understanding
        </h3>
        <div className="space-y-4">
          <div className="border-l-4 border-indigo-500 pl-4">
            <h4 className="font-bold text-gray-800">User Input Flow</h4>
            <p className="text-sm text-gray-600 mt-1">Input → React State → Gemini API (System Prompt Injection) → Contextual Vector Search → Dynamic Response Generation.</p>
          </div>
          <div className="border-l-4 border-indigo-500 pl-4">
            <h4 className="font-bold text-gray-800">NLP Preprocessing</h4>
            <p className="text-sm text-gray-600 mt-1">We utilize **Transformers** for dynamic tokenization and lemmatization. Unlike legacy NLTK pipelines, the LLM performs semantic analysis (understanding meaning rather than just keywords).</p>
          </div>
          <div className="border-l-4 border-indigo-500 pl-4">
            <h4 className="font-bold text-gray-800">Intent & Entity Handling</h4>
            <p className="text-sm text-gray-600 mt-1">Legacy intents are provided as **Grounding Data**. The AI extracts entities (e.g., "B.Tech" as a Course) and maps them to the ground truth dataset in real-time.</p>
          </div>
        </div>
      </section>

      {/* 3. Issue Identification */}
      <section>
        <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center">
          <span className="mr-2">03</span> Legacy Issue Identification
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {ANALYSIS_DATA.issues.map((issue, i) => (
            <div key={i} className="p-3 bg-red-50 border border-red-100 rounded-lg flex items-start">
              <span className="text-red-400 mr-2 text-lg">⚠️</span>
              <p className="text-xs text-red-800 font-medium">{issue}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Full Rebuild logic */}
      <section className="bg-indigo-900 text-white p-6 rounded-xl shadow-inner">
        <h3 className="text-xl font-bold mb-4">Rebuild Logic (Best Practices)</h3>
        <div className="space-y-4 text-sm opacity-90">
          <p>
            The project was rebuilt from scratch to follow **Modular Component Design**. 
            Logic is separated from the UI: 
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Service Layer:</strong> Handles API communication with retry logic.</li>
            <li><strong>State Layer:</strong> Manages real-time chat history.</li>
            <li><strong>Data Layer:</strong> Centralizes the intent knowledge base.</li>
          </ul>
          <p className="text-indigo-200 italic mt-4 border-t border-indigo-800 pt-4">
            This approach ensures the system is Plagiarism-Safe and utilizes State-of-the-Art (SOTA) NLP techniques.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AnalysisReport;
