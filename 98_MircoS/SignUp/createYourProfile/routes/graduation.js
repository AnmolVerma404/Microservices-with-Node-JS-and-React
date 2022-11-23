import express from "express";
import axios from "axios";
import { user } from "../models/user.js";
import { userEmail } from "./location.js";

const router = express.Router();

router.get("/api/signup/graduation", (req, res) => {
  res
    .status(200)
    .send(
      '<form action="/signup/graduation" method="post"><input type="text" placeholder="graduation" name="graduation" /><button type="submit">Subbmit</button></form>'
    );
});

router.post("/api/signup/graduation", async (req, res) => {
  const { college, graduationYear, degree, major } = req.body;
  try {
    const newUser = await user.updateOne(
      { email: userEmail.email },
      {
        $set: {
          college: college,
          graduationYear: graduationYear,
          degree: degree,
          major: major,
        },
      }
    );
    console.log("Graduation", newUser);
    res
      .status(200)
      .send({ success: true, message: "Education set successfully" });
  } catch (error) {
    res.send({ success: false, message: error });
  }
  res.end();
});

export { router as graduation };
