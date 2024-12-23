import {GoogleGenerativeAI} from "@google/generative-ai";


  const apiKey = process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 1000,
    responseMimeType: "text/plain",
  };
  
  export async function getRoasts(info) {
    const prompt = `Write a playful insult also called roast in a pirate like language based on the followind information : ${info}. Make it about four sentences long.`


    const chatSession = model.startChat({
      generationConfig,
    });
  
    const result = await chatSession.sendMessage(prompt);
    return result.response.text();
  }

export default async function handler(req, res){
  const roast = await getRoasts(req.body);
  roast.search("\"");
  roast.slice(roast.search("\""), roast.length-1);
  res.status(200).json({"body": roast});
}

