
import { Intent, ProjectAnalysis } from './types';

export const LEGACY_INTENTS: Intent[] = [
  {
    tag: "greeting",
    patterns: ["Hi", "How are you", "Is anyone there?", "Hello", "Good day"],
    responses: ["Hello, thanks for visiting", "Good to see you again", "Hi there, how can I help?"]
  },
  {
    tag: "admission",
    patterns: ["How to join the college?", "What is the admission process?", "Admission date"],
    responses: ["You can apply through our website portal.", "Admissions are open from July to August."]
  },
  {
    tag: "fees",
    patterns: ["What are the fees?", "Tuition cost", "How much for B.Tech?"],
    responses: ["Fees vary by course. Generally, it is $5000 per semester.", "Please check the 'Fee Structure' section on our site."]
  }
];

export const ANALYSIS_DATA: ProjectAnalysis = {
  architecture: "Model-View-Controller (MVC) typically using Flask (Backend), NLTK/TensorFlow (ML Engine), and HTML/JS (Frontend).",
  languages: ["Python", "JavaScript", "HTML", "CSS"],
  frameworks: ["Flask", "NLTK", "TensorFlow", "Keras", "Pickle", "JSON"],
  issues: [
    "Hard-coded logic for pattern matching.",
    "Deprecated NLTK libraries lacking deep context understanding.",
    "Inefficient vectorization (Bag of Words) leading to poor accuracy on unseen queries.",
    "Lack of state management in the frontend.",
    "No secure API authentication for student data."
  ]
};
