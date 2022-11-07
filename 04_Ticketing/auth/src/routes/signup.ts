import express, { Request, Response } from "express";
import { body } from "express-validator";
import { User } from "../models/user";
import { BadRequestError } from "../errors/bad-request-error";
import jwt from "jsonwebtoken";
import { validateRequest } from "../middlewares/validate-request";
const router = express.Router();

router.get(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Password must be between 4 and 20 character"!),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new BadRequestError("Email in Use!");
    }
    const user = User.build({ email, password });
    await user.save();
    //As cookies are allowed in index.ts
    //This userJWT will allow us to store cookies but first sign them using JWT, so that they are manipulated it will result error.
    //"asdf" is a imp key to store it in env and use in different pods, we can create a secret in kubernetes cluster using - 
    // kubectl create secret generic jwt-seceret --from-literal=JWT_KEY=asdf
    const userJwt = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_KEY!);
    req.session = {
      jwt: userJwt,
    };
    res.status(201).send(user);
  }
);

export { router as signupRouter };
