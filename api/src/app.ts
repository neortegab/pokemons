import express from "express";
import morgan from "morgan";

const server = express();

/* Middleware definitions */
server.use(morgan("tiny"));

export default server;
