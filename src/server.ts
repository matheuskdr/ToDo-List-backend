import express from "express";
import helmet from "helmet";
import path from "path";
import dotenv from "dotenv";
import router from "./routes";
import mongoose from "mongoose";

dotenv.config();

const server = express();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("Conected on MongoDB");
  } catch (error) {
    console.log("Error on conect to MongoDB", error);
  }
};

connectDB();

server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, "../public")));

server.use("/", router);

server.listen(3000, () => {
  console.log("Servidor rodando em: http://localhost:3000");
});
