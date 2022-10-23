const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");
const { randomBytes } = require("crypto");
const axios = require("axios");
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

app.post("/posts/:id/comments", async (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;
  // console.log(content);
  const comments = commentsByPostId[req.params.id] || [];
  comments.push({ id: commentId, content });
  commentsByPostId[req.params.id] = comments;

  await axios.post("http://localhost:4005/events", {
    type: "CommentCreated",
    data: {
      id: commentId,
      content,
      postId: req.params.id,
    },
  });

  res.status(201).send(comments);
});

app.listen(PORT, () => {
  console.log(`Running live on: http://localhost:${PORT}`);
});
