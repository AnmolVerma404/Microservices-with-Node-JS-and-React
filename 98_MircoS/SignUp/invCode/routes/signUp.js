import express from "express";
import { user } from "../models/user.js";

const router = express.Router();

const userInit = {
  name: "",
  email: "",
  password: "",
};

router.get("/signup", (req, res) => {
  res
    .status(200)
    .send(
      '<form action="/signup" method="post"><input type="text" id="name" placeholder="Full Name" name="usernaem" /><input type="email" id="email" placeholder="Email" name="email" /><input type="password" id="password" placeholder="Password" name="password" /><button type="submit">Subbmit</button></form>'
    );
});

router.post("/signup", async (req, res) => {
  // Navitate to verifyEmail
  const { name, email, password } = req.body;
  //Do a check for above three variable
  userInit.name = name;
  userInit.email = email;
  userInit.password = password;
  console.log(name, email, password);
  const alreadyUsedEmail = await user.findOne({ email: email });
  if (alreadyUsedEmail) {
    console.log("Email already Present, try to Signin");
    return res.status(200).send({ message: "Email already in use" });
  }
  try {
    if (true) {
      //Check if email and password are valid, also  *** hash the password using Middleware ***
      // Send OPT to email default OPT 123456
      // res.send({ name: name, email: email, password: password });
      return res.status(200).send({
        success: true,
        message: `OPT sent to ${email.substring(0, 3)}... email`,
      });
    }
  } catch (error) {
    res.send({ success: false, message: error });
  }
});

export { router as signUp, userInit };
