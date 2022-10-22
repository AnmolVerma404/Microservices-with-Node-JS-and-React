const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = 4000;
const posts = {};

app.get("/", (req, res) => {
  res.send("We are running live");
});

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;
  posts[id] = {
    id,
    title,
  };

  res.status(201).send(posts[id]);
});

app.listen(PORT, () => {
  console.log(`Running live on: http://localhost:${PORT}`);
});
