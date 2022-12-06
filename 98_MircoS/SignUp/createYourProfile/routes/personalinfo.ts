import express from "express";
import { user } from "../models/user";
import { userEmail } from "./location";

const router = express.Router();

router.get("/api/signup/personalinfo", (req, res) => {
  res
    .status(200)
    .send(
      '<form action="/signup/personalinfo" method="post"><input type="text" placeholder="personalinfo" name="personalinfo" /><button type="submit">Subbmit</button></form>'
    );
});

router.post("/api/signup/personalinfo", async (req, res) => {
  const {
    username,
    alternateEmail,
    mobile,
    aboutMe,
  }: {
    username: string;
    alternateEmail: string;
    mobile: number;
    aboutMe: string;
  } = req.body;
  console.log("E", userEmail.email);
  try {
    const newUser = await user.updateOne(
      { email: userEmail.email },
      {
        $set: {
          username: username,
          alternateEmail: alternateEmail,
          mobile: mobile,
          aboutMe: aboutMe,
        },
      }
    );
    console.log("personalinfo", newUser);
    res
      .status(200)
      .send({ success: true, message: "Personal info set successfully" });
  } catch (error) {
    res.send({ success: false, message: error });
  }
  res.end();
});

export { router as personalinfo };
