import { Router } from "express"
import { generateAIContent } from "../controllers/ai.controller"

const router = Router()

router.post("/generate", generateAIContent)
export default router