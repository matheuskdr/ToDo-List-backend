import express from "express";
import helmet from "helmet";
import path from "path";
import dotenv from "dotenv";
import router from "./routes";
import mongoose from "mongoose";

dotenv.config();

const server = express();
console.log("Variáveis disponíveis:", process.env);
const PORT = process.env.PORT || 3000;

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

server.listen(PORT, () => {
  console.log(`Server is running on: ${PORT}`);
});
