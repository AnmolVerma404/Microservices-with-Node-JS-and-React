const app = require("express")();
const bodyParser = require("body-parser");
const axios = require("axios");

const PORT = 4003;

app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Running live on: http://localhost:${PORT}`);
});
