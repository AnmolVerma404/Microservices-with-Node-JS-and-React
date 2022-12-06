import express from "express";
import { user } from "../models/user";
import { userEmail } from "./location";

const router = express.Router();

router.get("/api/signup/experience", (req, res) => {
  res
    .status(200)
    .send(
      '<form action="/signup/experience" method="post"><input type="text" placeholder="experience" name="experience" /><button type="submit">Subbmit</button></form>'
    );
});

router.post("/api/signup/experience", async (req, res) => {
  const { areaOfExperience } : {areaOfExperience : [string]} = req.body;
  console.log("areaOfExperience", areaOfExperience);
  try {
    const newUser = await user.updateOne(
      { email: userEmail.email },
      {
        $set: {
          areaOfExperience: areaOfExperience,
        },
      }
    );
    console.log("areaOfExperience", newUser);
    res
      .status(200)
      .send({ success: true, message: "Area Of Experience set successfully" });
  } catch (error) {
    res.send({ success: false, message: error });
  }
  res.end();
});

export { router as experience };
