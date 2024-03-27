const express = require("express");
const app = express();

app.get("/api/info", (req, res) => {
  res.json({
    hellow: "express",
  });
});

app.listen("9000");
