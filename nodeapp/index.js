const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
 
// parse application/json
app.use(bodyParser.json());
 
//create database connection
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'skripsihayatistore'
});
 
//connect to database
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});
 
//show all products
app.get('/proses_mining',(req, res) => {
  let sql = "SELECT * FROM proses_mining INNER JOIN produk ON proses_mining.id_produk = produk.id ORDER BY produk.nama ASC";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(results );
  });
});
 
//Server listening
app.use(express.static("public"));
app.listen(3800,() =>{
    console.log('Server started on port 3800...');
  });