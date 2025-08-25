import express from "express";
import taskRouter from "./task";

const router = express.Router();

router.use("/task", taskRouter);

router.get("/ping", (req, res) => {
  res.json({ pong: true });
});

export default router;
