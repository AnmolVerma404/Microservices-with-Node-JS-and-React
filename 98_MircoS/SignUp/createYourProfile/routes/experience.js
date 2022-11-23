import express from "express";
import axios from 'axios';
import { user } from "../models/user.js";
import { userEmail } from "./location.js";

const router = express.Router();

router.get("/api/signup/experience", (req, res) => {
  res
    .status(200)
    .send(
      '<form action="/signup/experience" method="post"><input type="text" placeholder="experience" name="experience" /><button type="submit">Subbmit</button></form>'
    );
});

router.post("/api/signup/experience", async (req, res) => {
  const { areaOfExperience } = req.body;
  const newUser = await user.updateOne(
    { email: userEmail.email },
    {
      $set: {
        areaOfExperience:areaOfExperience || ['d','e']
      },
    }
  );
  res.status(200).redirect("/signup/skills");
  res.end();
});

export { router as experience };
