import { Router } from "express";
import {
  getCourses,
  getCourseById,
  getCoursesBySearch,
  createCourse,
  editCourse,
  deleteCourse,
} from "../controllers/courses.controller.js";
import { userAuth } from "../middleware/userAuth.js";

const router = new Router();

router.get("/", getCourses);
router.get("/id/:id", getCourseById);
router.get("/:search", getCoursesBySearch)
router.post("/", createCourse);
router.patch("/:id", editCourse);
router.delete("/:id", deleteCourse);

export default router;