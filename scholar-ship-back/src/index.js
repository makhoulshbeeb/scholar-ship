import express from "express";
import dotenv from "dotenv";
import usersRoutes from "./routes/users.routes.js";
import connectToDatabase from "./database/connection.js";

const app = express();
dotenv.config();

app.use(express.json());

app.use("/users", usersRoutes);

app.listen(process.env.PORT, () => {
  connectToDatabase();
});