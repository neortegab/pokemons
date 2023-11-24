import express from "express";
import morgan from "morgan";
import { Sequelize } from "sequelize-typescript";
import 'dotenv/config';
import path from "path";

/* Environment variables */

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

/* Database definition */

export const db = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
  logging: false,
});

db.addModels([path.join(__dirname, "/Models/**/*.ts")]);

/* Server definition */

const server = express();

/* Middleware definitions */

server.use(morgan("tiny"));

export default server;
