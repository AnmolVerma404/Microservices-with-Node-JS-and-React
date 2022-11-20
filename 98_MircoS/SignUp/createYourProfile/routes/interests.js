import express from "express";
import { user } from "../models/user.js";

const router = express.Router();

router.get("/signup/interests", (req, res) => {
  res
    .status(200)
    .send(
      '<form action="/signup/interests" method="post"><input type="text" placeholder="interests" name="interests" /><button type="submit">Subbmit</button></form>'
    );
});

router.post("/signup/interests", (req, res) => {
  const { roles } = req.body;
  //schema.roles = roles;
  res.status(200).redirect("/signup/experience");
  res.end();
});

export { router as interests };
