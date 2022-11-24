import mongoose from "mongoose";

const otpSchema = new mongoose.Schema({
  userId: String,
  otp: String,
  createdAt: Date,
  expiresAt: Date,
});

const opt = mongoose.Model("opt", otpSchema);

export default opt;
