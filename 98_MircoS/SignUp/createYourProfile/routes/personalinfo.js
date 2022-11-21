import express from "express";
import axios from 'axios';
import { user } from "../models/user.js";

const router = express.Router();

router.get("/signup/personalinfo", (req, res) => {
  res
    .status(200)
    .send(
      '<form action="/signup/personalinfo" method="post"><input type="text" placeholder="personalinfo" name="personalinfo" /><button type="submit">Subbmit</button></form>'
    );
});

router.post("/signup/personalinfo", (req, res) => {
  const { username, alternateEmail, mobile, aboutMe } = req.body;
  //schema.username = username;
  //schema.alternateEmail = alternateEmail;
  //schema.mobile = mobile;
  //schema.aboutMe = aboutMe;
  res.status(200).redirect("/signup/interests");
  res.end();
});

export { router as personalinfo };
