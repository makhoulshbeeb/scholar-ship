import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js"
import usersRoutes from "./routes/users.routes.js";
import coursesRoutes from "./routes/courses.routes.js";
import lessonsRoutes from "./routes/lessons.routes.js";
import connectToDatabase from "./database/connection.js";
import { populateDatabase } from "./database/populate.js";
import BodyParser from "body-parser"

const app = express();
dotenv.config();

app.use(BodyParser.json());

app.use("/auth", authRoutes)
app.use("/users", usersRoutes);
app.use("/courses", coursesRoutes);
app.use("/lessons", lessonsRoutes);

app.listen(process.env.PORT, () => {
  connectToDatabase();
});

populateDatabase();