import { Router } from "express";
import {
  getLessons,
  createLesson,
  editLesson,
  deleteLesson,
} from "../controllers/lessons.controller.js";

const router = new Router();

router.get("/lessons", getLessons);
router.post("/lessons", createLesson);
router.put("/lessons/:id", editLesson);
router.delete("/lessons/:id", deleteLesson);

export default router;