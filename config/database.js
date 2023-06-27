import { Sequelize } from "sequelize";
import  mysql  from "mysql";
import express from "express";
const app = express();

 
const db = new Sequelize('skripsihayatistore', '03ncavdktsvy5juozpqi', 'pscale_pw_pX43mt3xiHazkdDyi6ezOvc42nXaOqgk1BWEC4Wg4hE', {
    host: "aws.connect.psdb.cloud",
    dialect: "mysql",
    define: {
        timestamps: false
    },dialectOptions: {
    ssl: {
      rejectUnauthorized: true,
    },
  },
  define: {
    timestamps: false,
  },
    ssl: {}
});


export default db;
