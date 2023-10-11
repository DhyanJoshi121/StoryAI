import express from "express";
import { postPrompt } from "../controllers/openaicontroller.js";

const router = express.Router();

router.post("/", postPrompt);

export default router;
