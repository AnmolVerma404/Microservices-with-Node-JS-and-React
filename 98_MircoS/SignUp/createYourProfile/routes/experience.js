import express from "express";
import { user } from "../models/user.js";

const router = express.Router();

router.get("/signup/experience", (req, res) => {
  res
    .status(200)
    .send(
      '<form action="/signup/experience" method="post"><input type="text" placeholder="experience" name="experience" /><button type="submit">Subbmit</button></form>'
    );
});

router.post("/signup/experience", (req, res) => {
  const { areaOfExperience } = req.body;
  //schema.areaOfExperience = areaOfExperience;
  res.status(200).redirect("/signup/skills");
  res.end();
});

export { router as experience };
