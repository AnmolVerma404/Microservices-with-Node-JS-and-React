import express from "express";

const app = express();
const PORT = 3001;

app.get("/", (req, res) => {
  res.send("Hello to TS");
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
