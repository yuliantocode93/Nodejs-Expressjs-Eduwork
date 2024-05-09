const http = require("http");
const momment = require("moment");

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/welcome":
      Welcome(req, res);
      break;
    default:
      res.statusCode = 404;
      res.end();
  }
  console.log(req.url);
});

const Welcome = (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.write(
    JSON.stringify({
      status: "success",
      message: "Welcome to my API",
      version: "1.0.0",
      author: "yulianto",
      time: momment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
    })
  );
  res.end();
};
server.listen(3000, () => {
  console.log("Server running on port 3000");
});
