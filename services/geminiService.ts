
import { GoogleGenAI } from "@google/genai";
import { LEGACY_INTENTS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getBotResponse = async (userInput: string) => {
  try {
    const systemPrompt = `
      You are an expert College Assistant Chatbot named Hari Bot. 
      Base your primary knowledge on this dataset: ${JSON.stringify(LEGACY_INTENTS)}.
      However, you are more advanced. Use your LLM capabilities to handle queries 
      not explicitly in the dataset with professional, helpful, and concise college-related responses.
      If a user asks about something completely unrelated to a college, politely redirect them.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userInput,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error: I'm having trouble connecting to my brain right now.";
  }
};
