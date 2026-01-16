
import mongoose from "mongoose";

const leadSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  company: String,
  stage: String,
  source: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Lead", leadSchema);
