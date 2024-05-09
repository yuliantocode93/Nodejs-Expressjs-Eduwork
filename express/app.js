const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send({
    status: "success",
    message: "Welcome to my API express",
    version: "1.0.0",
    author: "yulianto",
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
