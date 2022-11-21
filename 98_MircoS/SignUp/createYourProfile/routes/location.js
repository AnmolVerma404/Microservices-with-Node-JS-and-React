import express, { urlencoded } from "express";
import axios from 'axios';
import { user } from "../models/user.js";

const router = express.Router();

router.get("/signup/location", (req, res) => {
  res
    .status(200)
    .send(
      '<form action="/signup/location" method="post"><input type="text" placeholder="Location" name="location" /><button type="submit">Subbmit</button></form>'
    );
});

router.post("/signup/location", async (req, res) => {
  const { email, location, timezone } = req.body;
  console.log(email);
  const newUser = await user.updateOne(
    { email: email },
    {
      $set: {
        location: location || "India",
        timezone: timezone,
      },
    }
  );
  console.log(newUser);
  await axios
  res.status(200).redirect("/signup/graduation/?pstr=" + passString);
  res.end();
});

export { router as location };
