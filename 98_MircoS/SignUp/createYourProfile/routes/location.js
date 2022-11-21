import express, { urlencoded } from "express";
import axios from "axios";
import { user } from "../models/user.js";
import emptyEmail from "../services/emptyEmail.js";

const router = express.Router();

const userEmail = {
  email: "",
};

router.get("/signup/location", (req, res) => {
  res
    .status(200)
    .send(
      '<form action="/signup/location" method="post"><input type="text" placeholder="Location" name="location" /><button type="submit">Subbmit</button></form>'
    );
});

router.post("/signup/location", async (req, res) => {
  const { email, location, timezone } = req.body;
  userEmail.email = email;
  console.log(email);
  if (emptyEmail(email)) return;
  const newUser = await user.updateOne(
    { email: userEmail.email },
    {
      $set: {
        location: location || "India",
        timezone: timezone,
      },
    }
  );
  console.log(newUser);
  res.status(200).redirect("/signup/graduation");
  res.end();
});

export { router as location, userEmail };
