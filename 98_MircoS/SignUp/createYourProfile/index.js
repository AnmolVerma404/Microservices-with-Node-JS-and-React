import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import "dotenv/config";
import { location } from "./routes/location.js";
import { graduation } from "./routes/graduation.js";
import { personalinfo } from "./routes/personalinfo.js";
import { interests } from "./routes/interests.js";
import { experience } from "./routes/experience.js";
import { skills } from "./routes/skills.js";

const app = express();
const PORT = 4002;

app.use(cors());
app.use(bodyParser.json());
app.use(location);
app.use(graduation);
app.use(personalinfo);
app.use(interests);
app.use(experience);
app.use(skills);

mongoose
  .connect(process.env.DB_CONNECTION)
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Running live on http://localhost:${PORT}`);
});
