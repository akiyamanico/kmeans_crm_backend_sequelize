import { Sequelize } from "sequelize";
import  mysql  from "mysql";
import express from "express";
const app = express();

 
const db = new Sequelize('skripsihayatistore', 'root', '', {
    host: "localhost",
    dialect: "mysql",
    define: {
        timestamps: false
    }
});


export default db;
