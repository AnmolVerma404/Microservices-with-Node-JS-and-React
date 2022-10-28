const app = require("express")();
const bodyParser = require("body-parser");
const axios = require("axios");
const PORT = 4005;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("This is Event-bus server");
});

const events = [];

app.post("/events", (req, res) => {
  const event = req.body;
  events.push(event);
  console.log("Bus", events);
  axios.post("http://posts-clusterip-srv:4000/events", event).catch((err) => {
    console.log(err.message);
  });
  axios.post("http://comments-srv:4001/events", event).catch((err) => {
    console.log(err.message);
  });
  axios.post("http://query-srv:4002/events", event).catch((err) => {
    console.log(err.message);
  }); //Was showing an error and there was no port 4002
  axios.post("http://moderation-srv:4003/events", event).catch((err) => {
    console.log(err.message);
  });

  res.send({ status: "OK" });
});

app.get("/events", (req, res) => {
  res.send(events);
});

app.listen(PORT, () => {
  console.log(`Running live on: http://localhost:${PORT}`);
});
