const app = require("express")();
const bodyParser = require("body-parser");
const axios = require("axios");
const PORT = 4005;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("This is Event-bus server");
});

app.post("/event", (req, res) => {
  const event = req.body;

  axios.post("http://localhost:4000/events", event);
  axios.post("http://localhost:4001/events", event);
  axios.post("http://localhost:4002/events", event);

  res.send({ status: "OK" });
});

app.listen(PORT, () => {
  console.log(`Running live on: http://localhost:${PORT}`);
});
