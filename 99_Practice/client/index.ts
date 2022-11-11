import express, { json } from "express";
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

const data: { text: string } = {
  text: "",
};

app.get("/", (req, res) => {
  res.send(data.text);
});

app.post("/settext", (req, res) => {
  data.text = req.body.text;
  res.send(`Text Update to ${data.text}`);
});

app.listen(PORT, () => {
  console.log(`All listning at http://localhost:${PORT}`);
});
