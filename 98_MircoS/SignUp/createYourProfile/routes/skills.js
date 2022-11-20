import express from "express";
import { user } from "../models/user.js";

const router = express.Router();


router.get("/signup/skills", (req, res) => {
    res
      .status(200)
      .send(
        '<form action="/signup/skills" method="post"><input type="text" placeholder="skills" name="skills" /><button type="submit">Subbmit</button></form>'
      );
  });
  
  router.post("/signup/skills", (req, res) => {
    const { areaOfExperience } = req.body;
    //schema.areaOfExperience = areaOfExperience;
    res.status(200).redirect("/signup/skills");
    res.end();
  });

export { router as skills };
