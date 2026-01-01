
import { Intent, ProjectAnalysis } from './types';

export const LEGACY_INTENTS: Intent[] = [
  {
    tag: "greeting",
    patterns: ["Hi", "How are you", "Is anyone there?", "Hello", "Good day", "Hey"],
    responses: ["Hello, I'm Hari Bot! How can I assist you with college info today?", "Hi there! I'm your college assistant.", "Greetings! How can I help?"]
  },
  {
    tag: "admission",
    patterns: ["How to join?", "Admission process", "Application form", "When is the deadline?", "Eligibility criteria"],
    responses: [
      "You can apply via the online portal. Deadlines are typically in late August.",
      "The admission process involves filling an online form followed by an entrance interview and document verification.",
      "Eligibility: 10+2 with minimum 60% in Science/Math streams for B.Tech programs."
    ]
  },
  {
    tag: "courses",
    patterns: ["What courses are available?", "List of departments", "B.Tech subjects", "Degree programs"],
    responses: ["We offer CS, IT, Mechanical, Electrical, and Civil Engineering.", "Our top programs are Computer Science, Artificial Intelligence, and Data Science."]
  },
  {
    tag: "fees",
    patterns: ["Fee structure", "How much is tuition?", "Scholarships?", "Payment plan"],
    responses: [
      "Annual fees are approx. $5,000 for local students. Scholarships are available for top 5% performers.",
      "Tuition can be paid in two installments (Semester-wise). Visit the bursar office for the detailed breakdown."
    ]
  },
  {
    tag: "placement",
    patterns: ["Placement records", "Job opportunities", "Average package", "Which companies visit?"],
    responses: ["Our placement rate is 95%. Top recruiters include Google, Microsoft, and TCS.", "The average salary package is $8.5 LPA, with the highest reaching $45 LPA."]
  }
];

export const ANALYSIS_DATA: ProjectAnalysis = {
  architecture: "Hybrid LLM-Grounded Architecture. It combines static Intent mapping (Knowledge Grounding) with Generative AI (NLP Inference) to provide flexible yet accurate responses.",
  languages: ["TypeScript (Frontend/Logic)", "Python (Legacy ML/Training)", "SQL (Database Concept)", "HTML5/CSS3"],
  frameworks: ["React 19 (UI)", "Tailwind CSS (Styling)", "@google/genai (LLM Engine)", "Vite (Build Tool)"],
  issues: [
    "Legacy version used 'Bag of Words' vectorization which is sensitive to typos.",
    "Hard-coded file paths in Python code made cross-platform deployment impossible.",
    "TensorFlow 2.x/Keras deprecations caused 'NoneType' errors in old inference scripts.",
    "Static responses lacked conversational depth and context retention."
  ]
};
