const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());

const PORT = 4002;
const posts = {};

app.get("/posts", (req, res) => {
    res.send(posts);
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;

  if (type === "PostCreated") {
    const { id, title } = data;

    posts[id] = { id, title, comments: [] };
  }
  if (type === "CommentCreated") {
    const { id, content, postId, status } = data;
    const post = posts[postId];
    post.comments.push({ id, content, status });
  }
  if(type === 'CommentUpdated'){
    const {id,content,postId,status} = data;
    const post = posts[postId];
    const comment = post.comments.find((comment) => {
      return comment.id === id;
    });
    comment.status = status;
    comment.content = content;
  }

  //console.log(posts.inspect(myObject, {showHidden: false, depth: null, colors: true}))
  console.dir(posts,{depth:null});//This will show fill object, instead of showing stoping at certain depth
  /*The funny part is, if we add a post and restart this service then add a comment it will crash and there are many same bugs, but if we do it correctly it will work like a charm*/
  res.send({});
});

app.listen(PORT, () => {
  console.log(`Running live on: http://localhost:${PORT}`);
});