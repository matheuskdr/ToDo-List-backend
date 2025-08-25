import express from "express";
import task from "../schemas/task";

const router = express.Router();

router.get("/task", async (req, res) => {
  try {
    const newTask = await task.find();
    res.json(newTask);
  } catch (error) {
    res.json({ error: error });
  }
});

router.post("/task", async (req, res) => {
  try {
    const newTask = await task.create(req.body);
    res.json(newTask);
  } catch (error) {
    res.json({ error: error });
  }
});

router.put("/task/:id", async (req, res) => {
  try {
    const newTask = await task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(newTask);
  } catch (error) {
    res.json({ error: error });
  }
});

router.delete("/task/:id", async (req, res) => {
  try {
    const DeletedTask = await task.findByIdAndDelete(req.params.id);
    res.json(DeletedTask);
  } catch (error) {
    res.json({ error: error });
  }
});

export default router;
