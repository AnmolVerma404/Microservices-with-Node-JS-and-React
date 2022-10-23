const app = require("express")();
const bodyParser = require("body-parser");
const cors = require('cors');
const { randomBytes } = require("crypto");
const PORT = 4001;

app.use(bodyParser.json());
app.use(cors());

const commentsByPostId = {};

app.get("/", (req, res) => {
  res.send("This is comments server");
});

app.get("/posts/:id/comments", (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post("/posts/:id/comments", (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;
  // console.log(content);
  const comments = commentsByPostId[req.params.id] || [];
  comments.push({ id: commentId, content });
  commentsByPostId[req.params.id] = comments;

  res.status(201).send(comments);
});

app.listen(PORT, () => {
  console.log(`Running live on: http://localhost:${PORT}`);
});
