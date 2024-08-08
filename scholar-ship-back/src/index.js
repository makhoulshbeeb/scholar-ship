import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js"
import usersRoutes from "./routes/users.routes.js";
import coursesRoutes from "./routes/courses.routes.js";
import lessonsRoutes from "./routes/lessons.routes.js";
import connectToDatabase from "./database/connection.js";
import { populateDatabase } from "./database/populate.js";
import BodyParser from "body-parser"
import cors from "cors"
import { userAuth } from "./middleware/userAuth.js";

const app = express();
dotenv.config();

app.use(BodyParser.json());
app.use(cors());

app.use("/auth", authRoutes)
app.use("/users", userAuth, usersRoutes);
app.use("/courses",  coursesRoutes);
app.use("/lessons", lessonsRoutes);

app.listen(process.env.PORT, () => {
  connectToDatabase();
});

// populateDatabase();