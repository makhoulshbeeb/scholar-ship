import { Router } from "express";
import {
  getCourses,
  getCoursesBySearch,
  createCourse,
  editCourse,
  deleteCourse,
} from "../controllers/courses.controller.js";
import { userAuth } from "../middleware/userAuth.js";

const router = new Router();

router.use((req, res, next) => {
  if (userAuth(req, res)) next();
})

router.get("/", getCourses);
router.get("/:search", getCoursesBySearch)
router.post("/", createCourse);
router.patch("/:id", editCourse);
router.delete("/:id", deleteCourse);

export default router;