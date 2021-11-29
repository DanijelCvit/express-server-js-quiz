import express from "express";
import {
  getQuestions,
  getQuestion,
  updateQuestion,
  deleteQuestion,
  createQuestion,
} from "../controllers/questions.js";

const router = express.Router();

router.get("/", getQuestions);
router.get("/:id", getQuestion);
router.post("/", createQuestion);
router.put("/:id", updateQuestion);
router.delete("/:id", deleteQuestion);

export default router;
