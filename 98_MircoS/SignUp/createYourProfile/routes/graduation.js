import express from "express";
import { user } from "../models/user.js";

const router = express.Router();

router.get("/signup/graduation", (req, res) => {
  res
    .status(200)
    .send(
      '<form action="/signup/graduation" method="post"><input type="text" placeholder="graduation" name="graduation" /><button type="submit">Subbmit</button></form>'
    );
});

router.post("/signup/graduation", (req, res) => {
  const { college, graduationYear, degree, major } = req.body;
  //schema.college = college;
  //schema.graduationYear = graduationYear;
  //schema.degree = degree;
  //schema.major = major;
  res.status(200).redirect("/signup/personalinfo");
  res.end();
});

export { router as graduation };
