import express, { urlencoded } from "express";
import { user } from "../models/user.js";

const router = express.Router();

const userEmail = {
  email: "",
};

router.get("/api/signup/location", (req, res) => {
  res
    .status(200)
    .send(
      '<form action="/signup/location" method="post"><input type="text" placeholder="Location" name="location" /><button type="submit">Subbmit</button></form>'
    );
});

router.post("/api/signup/location", async (req, res) => {
  //To graduation
  const { email, location, timezone } = req.body;
  userEmail.email = email;
  console.log("Email recived on location api", email);
  try {
    const newUser = await user.updateOne(
      { email: userEmail.email },
      {
        $set: {
          location: location,
          timezone: timezone,
        },
      }
    );
    console.log(newUser);
    res.status(200).send({
      success: true,
      message: "Location and timezone successfully set",
    });
  } catch (error) {
    res.send({ success: false, message: error });
  }
  res.end();
});

export { router as location, userEmail };
