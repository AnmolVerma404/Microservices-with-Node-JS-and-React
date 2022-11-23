import express from "express";
import axios from "axios";
import { user } from "../models/user.js";
import { userEmail } from "./location.js";

const router = express.Router();

router.get("/api/signup/skills", (req, res) => {
  res
    .status(200)
    .send(
      '<form action="/signup/skills" method="post"><input type="text" placeholder="skills" name="skills" /><button type="submit">Subbmit</button></form>'
    );
});

router.post("/api/signup/skills", async (req, res) => {
  const { skills } = req.body;
  console.log(skills);
  try {
    const newUser = await user.updateOne(
      { email: userEmail.email },
      {
        $set: {
          skills: skills,
        },
      }
    );
    console.log("skills", newUser);
    res.status(200).send({ success: true, message: "Skills set successfully" });
  } catch (error) {
    res.send({ success: false, message: error });
  }
  res.end();
});

export { router as skills };
