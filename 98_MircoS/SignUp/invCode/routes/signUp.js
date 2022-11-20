import express from "express";
import { user } from "../models/user.js";

const router = express.Router();

/*
TODO - Hash Password
*/

const userInit = {
  //Default for dev purpose
  name: "av",
  email: "ala@gmail.com",
  password: "password123",
};

router.get("/signup", (req, res) => {
  res
    .status(200)
    .send(
      '<form action="/signup" method="post"><input type="text" id="name" placeholder="Full Name" name="usernaem" /><input type="email" id="email" placeholder="Email" name="email" /><input type="password" id="password" placeholder="Password" name="password" /><button type="submit">Subbmit</button></form>'
    );
});

router.post("/signup", async (req, res) => {
  let { name, email, password } = req.body;
  if (name === undefined) name = userInit.name;
  else userInit.name = name;
  if (email === undefined) email = userInit.email;
  else userInit.email = email;
  if (password === undefined) password = userInit.password;
  else userInit.password = password;
  console.log(name, email, password);
  const alreadyUsedEmail = await user.findOne({ email: email });
  if (alreadyUsedEmail) {
    console.log("Email already Present, try to Signin");
    return res.status(200).redirect("/signup/");
  }
  const newUser = new user({
    name: name,
    email: email,
    password: password,
  });
  try {
    const newUserRes = await newUser.save();
    console.log(newUserRes);
    if (true) {
      //Check if email and password are valid, also hash the password using Middleware
      // res.send({ name: name, email: email, password: password });
      return res.status(200).redirect("/signup/verifyEmail");
    }
  } catch (error) {
    res.json({ message: error });
  }
  /*
    Code for sending OPT to user gmail accout
    */
});

export { router as signUp, userInit };
