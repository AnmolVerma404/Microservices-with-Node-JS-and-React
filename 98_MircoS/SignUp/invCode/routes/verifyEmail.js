import express from "express";
import axios from "axios";
import { userInit } from "./signUp.js";

const router = express.Router();

router.get("/signup/verifyEmail", (req, res) => {
  res
    .status(200)
    .send(
      '<form action="/signup/verifyEmail" method="post"><input type="number" placeholder="Enter OTP" name="OTP" /><button type="submit">Subbmit</button></form>'
    );
});

router.post("/signup/verifyEmail", async (req, res) => {
  const { opt } = req.body;
  if (true) {
    // Verify the OPT by checking the sent and intered OPT, after this Microservice 1 part is complete
    // store data in some kind of logic then if user close the application he can resume with Microservice 2
    await axios.post("http://localhost:4002/signup/location", {
      email: userInit.email,
    });
    res.redirect("http://localhost:4002/signup/location");
  }
});

export { router as verifyEmail };
