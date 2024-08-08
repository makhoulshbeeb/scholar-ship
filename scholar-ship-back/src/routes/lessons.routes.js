import { Router } from "express";
import {
  getLessons,
  getLessonById,
  createLesson,
  editLesson,
  deleteLesson,
} from "../controllers/lessons.controller.js";

const router = new Router();

// router.use((req, res, next) => {
//   if (userAuth(req, res)) next();
// });

router.get("/", getLessons);
router.get("/:id", getLessonById);
router.post("/", createLesson);
router.patch("/:id", editLesson);
router.delete("/:id", deleteLesson);

export default router;