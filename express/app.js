const express = require("express");
const path = require("path");
const app = express();
const router = require("./routes");
const logger = require("./middleware/logger");

app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "uploads")));
app.use(router);
app.use((req, res, next) => {
  res.status(404);
  res.send({
    status: "error",
    message: "Resource " + req.originalUrl + " not found",
  });
});
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
