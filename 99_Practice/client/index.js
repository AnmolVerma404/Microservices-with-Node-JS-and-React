import express, { json } from "express";
import axios from "axios";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(cors());

const data = {
  text: "",
};

app.get("/", (req, res) => {
  res.send(data.text);
});

app.post("/", async (req, res) => {
  const { text } = req.body;
  data.text = text;
  console.log("receiving data", text);

  // const text = await axios.get(`http://localhost:5001/posttext`);
  res.status(201).send(text);
});

app.listen(PORT, () => {
  console.log(`All listning at http://localhost:${PORT}`);
});
