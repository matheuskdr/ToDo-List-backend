import express from "express";
import helmet from "helmet";
import path from "path";

const server = express();

server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, "../public")));

server.get("/", (req, res) => {
  res.json("Olá mundo");
});

server.listen(3000, () => {
  console.log("Servidor rodando em: http://localhost:3000");
});
