import express from "express";
import axios from "axios";
import { user } from "../models/user.js";
import { userEmail } from "./location.js";

const router = express.Router();

router.get("/signup/personalinfo", (req, res) => {
  res
    .status(200)
    .send(
      '<form action="/signup/personalinfo" method="post"><input type="text" placeholder="personalinfo" name="personalinfo" /><button type="submit">Subbmit</button></form>'
    );
});

router.post("/signup/personalinfo", async (req, res) => {
  const { username, alternateEmail, mobile, aboutMe } = req.body;
  const newUser = await user.updateOne(
    { email: userEmail.email },
    {
      $set: {
        username: username || 'anon',
        alternateEmail: alternateEmail,
        mobile: mobile,
        aboutMe: aboutMe,
      },
    }
  );
  res.status(200).redirect("/signup/interests");
  res.end();
});

export { router as personalinfo };
