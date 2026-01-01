
import { GoogleGenAI } from "@google/genai";
import { LEGACY_INTENTS } from "../constants";

export const getBotResponse = async (userInput: string) => {
  try {
    // Create instance inside function to ensure latest API_KEY is used
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const systemPrompt = `
      You are "Hari Bot", a high-performance College Chatbot developed for academic research.
      
      CORE KNOWLEDGE (GROUNDING DATA):
      ${JSON.stringify(LEGACY_INTENTS)}
      
      INSTRUCTIONS:
      1. Primary Goal: Answer questions about college admissions, fees, courses, and placements accurately.
      2. If query is within Knowledge Base: Use the information provided but rephrase it naturally.
      3. If query is outside Knowledge Base (e.g. general science, history): Use your general LLM knowledge to help, but keep it college-student focused.
      4. Tone: Professional, encouraging, and helpful.
      5. Constraint: If the user asks for something harmful or illegal, decline politely.
      6. Context: You are currently a "Rebuilt" model replacing a legacy Bag-of-Words system.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userInput,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.8,
        topP: 0.95,
        topK: 40,
      },
    });

    if (!response.text) {
      return "I processed your request but couldn't generate a text response. Please try rephrasing.";
    }

    return response.text;
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    
    if (error.message?.includes("API_KEY")) {
      return "System Error: API Key missing or invalid. Please check your Vercel Environment Variables.";
    }
    
    return "I'm experiencing a temporary connectivity issue with my NLP engine. Please try again in a moment.";
  }
};
