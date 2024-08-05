import { Router } from "express";
import {
  getUsers,
  createUser,
  editUser,
  deleteUser,
} from "../controllers/users.controller.js";

const router = new Router();

router.get("/users", getUsers);
router.post("/users", createUser);
router.put("/users/:id", editUser);
router.delete("/users/:id", deleteUser);

export default router;