const express = require("express");
const helmet= require('helmet');

const projRouter = require('../project/project_router');

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/project/", projRouter);

module.exports = server;