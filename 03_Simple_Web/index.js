const app = require("express")();

const PORT = 8080;

app.get("/", (req, res) => {
  res.send("Hi there");
});

app.listen(PORT, () => {
  console.log(`Listining on http://localhost:${PORT}`);
});
