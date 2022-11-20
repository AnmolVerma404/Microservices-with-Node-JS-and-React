import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import "dotenv/config";
import { inviteCode } from "./routes/inviteCode.js";
import { signUp, userInit } from "./routes/signUp.js";
import { verifyEmail } from "./routes/verifyEmail.js";

const app = express();
const PORT = 4001;

app.use(bodyParser.json());
app.use(cors());
app.use(inviteCode);
app.use(signUp);
console.log(userInit);
app.use(verifyEmail);

mongoose
  .connect(process.env.DB_CONNECTION)
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Running live on http://localhost:${PORT}`);
});
