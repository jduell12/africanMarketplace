const express = require("express");
const server = express();
const userRouter = require("../users/userRouter");

server.use(express.json());
server.use("/users", userRouter);

server.get("/", (req, res) => {
  res.status(200).json({ server: "Working" });
});

module.exports = server;
