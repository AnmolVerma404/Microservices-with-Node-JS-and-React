import express from "express";
import axios from 'axios';
import { userEmail } from "./location.js";
import { user } from "../models/user.js";

const router = express.Router();

router.get("/signup/interests", (req, res) => {
  res
    .status(200)
    .send(
      '<form action="/signup/interests" method="post"><input type="text" placeholder="interests" name="interests" /><button type="submit">Subbmit</button></form>'
    );
});

router.post("/signup/interests", async (req, res) => {
  const { roles } = req.body;
  const newUser = await user.updateOne(
    { email: userEmail.email },
    {
      $set: {
        roles:roles || ['a','b','c']
      },
    }
  );
  res.status(200).redirect("/signup/experience");
  res.end();
});

export { router as interests };
