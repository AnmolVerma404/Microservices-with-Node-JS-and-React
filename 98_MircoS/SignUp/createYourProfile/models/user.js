import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  location: {
    type: String,
  },
  timezone: {
    type: String,
  },
  college: {
    type: String,
  },
  graduationYear: {
    type: String,
  },
  degree: {
    type: String,
  },
  major: {
    type: String,
  },
  username: {
    type: String,
  },
  alternateEmail: {
    type: String,
  },
  mobile: {
    type: Number,
  },
  aboutMe: {
    type: String,
  },
  alternateMobile: {
    type: String,
  },
  roles: {
    type: String,
  },
  social: {
    type: String,
  },
  areaOfExperience: {
    type: String,
  },
  skills: {
    type: String,
  },
  isAccountActive: {
    type: Boolean,
  },
  referredBy: {
    type: String,
  },
});

export const user = mongoose.model("User", UserSchema);
