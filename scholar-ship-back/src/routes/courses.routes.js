import { Router } from "express";
import {
  getCourses,
  createCourse,
  editCourse,
  deleteCourse,
} from "../controllers/courses.controller.js";

const router = new Router();

router.get("/courses", getCourses);
router.post("/courses", createCourse);
router.put("/courses/:id", editCourse);
router.delete("/courses/:id", deleteCourse);

export default router;