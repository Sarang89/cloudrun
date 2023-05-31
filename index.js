const express = require("express");

const app = express();
console.log("Hello from inside Cloud_RUn");

const PORT = process.env.PORT || 3003;

console.log(process.env.PORT);

app.get("/", (req, res, next) => {
  res.json("Hey there from inside Cloud Run!");
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
