// const axios = require("axios");

console.log("Working");
document.getElementById("submit").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  console.log(name, email, password);
});
