import { Sequelize } from "sequelize";
import mysql from "mysql";
import express from "express";
const app = express();
import fs from "fs";

const db = new Sequelize("defaultdb", "avnadmin", "AVNS_BWZ389d1XfCW7Ny0obc", {
  host: "mysql-3a3beccc-hayatistore.f.aivencloud.com",
  port: "15554",
  dialect: "mysql",
  ssl: {
    ca: [fs.readFileSync("ca.pem")],
  },
});

export default db;
