import mongoose from "mongoose";

const otpSchema = mongoose.Schema({
  email: String,
  otp: String,
  createdAt: Date,
  expiresAt: Date,
});

export const Otp = mongoose.model("opt", otpSchema);
