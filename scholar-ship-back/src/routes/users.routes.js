import { Router } from "express";
import {
  getUsers,
  getUserByUsername,
  createUser,
  editUser,
  deleteUser,
} from "../controllers/users.controller.js";

const router = new Router();

// router.use((req, res, next) => {
//   if (userAuth(req, res)) next();
// });

router.get("/", getUsers);
router.get("/:username", getUserByUsername);
router.post("/", createUser);
router.patch("/:id", editUser);
router.delete("/:id", deleteUser);

export default router;