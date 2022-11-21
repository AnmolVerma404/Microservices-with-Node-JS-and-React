import express from "express";
import axios from 'axios';
import { user } from "../models/user.js";
import { userEmail } from "./location.js";

const router = express.Router();


router.get("/signup/skills", (req, res) => {
    res
      .status(200)
      .send(
        '<form action="/signup/skills" method="post"><input type="text" placeholder="skills" name="skills" /><button type="submit">Subbmit</button></form>'
      );
  });
  
  router.post("/signup/skills", async (req, res) => {
    const { skills } = req.body;
    const newUser = await user.updateOne(
      { email: userEmail.email },
      {
        $set: {
          skills:skills || ['f','g']
        },
      }
    );
    res.status(200).redirect("/signup/skills");
    res.end();
  });

export { router as skills };
