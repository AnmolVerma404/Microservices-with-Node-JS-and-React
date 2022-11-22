import express from "express";
import { userInit } from "./signUp.js";
import { user } from "../models/user.js";

const router = express.Router();

router.get("/signup/verifyEmail", (req, res) => {
  res
    .status(200)
    .send(
      '<form action="/signup/verifyEmail" method="post"><input type="number" placeholder="Enter OTP" name="OTP" /><button type="submit">Subbmit</button></form>'
    );
});

router.post("/signup/verifyEmail", async (req, res) => {
  // Navigate to signup/location
  const { otp } = req.body;
  console.log(otp);
  if (otp == "123456") {
    // Verify the OPT by checking the sent and intered OPT, after this Microservice 1 part is complete
    // store data in some kind of logic then if user close the application he can resume with Microservice 2
    try {
      const newUser = new user({
        name: userInit.name,
        email: userInit.email,
        password: userInit.password,
      });
      const newUserRes = await newUser.save();
      console.log(newUserRes);
      res.send({ success: true, message: newUser });
    } catch (error) {
      res.send({ success: false, message: error });
    }
  }
});

export { router as verifyEmail };
