import axios from "axios"
import { Request, Response } from "express"

export const generateAIContent = async (req: Request, res: Response) => { 
    const { text, maxToken } = req.body

   const aiResponse = await axios.post("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
    {
        contents: [
            {
                parts : [ {text} ]
            }
        ],
        generationConfig: {
            maxOutputTokens: maxToken || 150,
        }
    },
    {
        headers: {
            "Content-Type": "application/json",
            "X-goog-api-key":"AIzaSyCr0w5SlhkW8HMXjmFmbWweWpxmp0qeQJ8"
    }
})

const generatedContent =
      aiResponse.data?.candidates?.[0]?.content?.[0]?.text ||
      aiResponse.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No data"
      
      console.log(res)

    res.status(200).json({  
        message: "AI content generated successfully",
        data: generatedContent
    })


    //token - word (in machine learning)
}