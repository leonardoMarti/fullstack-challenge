const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("api rodando");
});
app.listen(3000);
