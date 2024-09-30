require('dotenv').config();
const express = require('express');
const path = require("path");
const logger = require('morgan');
const cors = require("cors");
const authRouter = require('../auth/authRoutes');
const todoRouter = require('../todo/todoRoutes');


exports.createServer = () => {
  // view engine setup
  app = express();

  app.set("views", path.join(__dirname, "../views"));
  app.set("view engine", "ejs");

  app.use(express.json());
  app.use(logger("dev"));
  app.use(cors());

  app.use(authRouter);
  app.use(todoRouter);

  return app;
}