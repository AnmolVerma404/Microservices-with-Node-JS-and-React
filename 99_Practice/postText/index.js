import express, { json } from "express";
import axios from "axios";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = 5001;

app.use(bodyParser.json());
app.use(cors());

const data = {
  text: "",
};

app.get("/posttext", (req, res) => {
  res.send("This is Post Text Service");
});

app.post("/posttext", async (req, res) => {
  data.text = req.body.text;
  await axios
    .post("http://localhost:3001/", { text: data.text })
    .catch((err) => {
      console.log(err.message);
    });
  res.status(201).send(`Text Update to ${data.text}`);
});

app.listen(PORT, () => {
  console.log(`All listning at http://localhost:${PORT}`);
});
