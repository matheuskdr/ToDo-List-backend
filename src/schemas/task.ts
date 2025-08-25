import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  name: String,
  done: Boolean,
});

export default mongoose.model("Task", taskSchema);
