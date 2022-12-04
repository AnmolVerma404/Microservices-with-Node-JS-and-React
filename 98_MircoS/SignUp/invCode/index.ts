import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import "dotenv/config";
import { inviteCode } from "./routes/inviteCode";
import { signUp } from "./routes/signUp";
import { verifyEmail } from "./routes/verifyEmail";

const app = express();
const PORT = 4001;
app.use(bodyParser.json());
app.use(cors());
app.use(inviteCode);
app.use(signUp);
app.use(verifyEmail);

mongoose
  .connect((process.env.DB_CONNECTION as string))
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Running live on http://localhost:${PORT}`);
});
