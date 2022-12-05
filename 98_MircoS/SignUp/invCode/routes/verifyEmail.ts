import express from "express";
import { userInit } from "./signUp";
import { user } from "../models/user.js";
import { Otp } from "../models/Otp";

const router = express.Router();

router.get("/api/signup/verifyEmail", (req, res) => {
  res
    .status(200)
    .send(
      '<form action="/signup/verifyEmail" method="post"><input type="number" placeholder="Enter OTP" name="OTP" /><button type="submit">Subbmit</button></form>'
    );
});

router.post("/api/signup/verifyEmail", async (req, res) => {
  // Navigate to signup/location
  const { otp } : {otp : string} = req.body;
  console.log(otp);
  const currTime = Date.now();
  const userOptVarRecord = await Otp.find({ email: userInit.email });
  userOptVarRecord.reverse();
  console.log("OTPs", otp, userOptVarRecord);
  if (userOptVarRecord.length <= 0){
    res.send({ success: false, message: "OPT expired try to send it again" });
  }
  else if(currTime>userOptVarRecord[0].expiresAt){//Also check if OTP is expired
    res.send({ success: false, message: "OPT expired try to send it again" });
  }
  else if (otp == userOptVarRecord[0].otp) {
    // Verify the OPT by checking the sent and intered OPT, after this Microservice 1 part is complete
    // store data in some kind of logic then if user close the application he can resume with Microservice 2
    try {
      await Otp.deleteMany({ email: userInit.email });
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
  } else {
    res.send({ success: false, message: "Invalid OPT" });
  }
});

export { router as verifyEmail };
