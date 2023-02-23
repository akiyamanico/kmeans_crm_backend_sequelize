var express = require('express');
var router = express.Router();
var db=require('../database');
// another routes also appear here
// this script to fetch data from MySQL databse table
router.get('/proses_mining2', function(req, res, next) {
    var sql='SELECT Iterasi_1 FROM proses_mining WHERE Iterasi_1 = 1 AND Iterasi_2 = 0 OR Iterasi_1 = 0 AND Iterasi_2 = 1';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('user-list', { title: 'User List', userData: data});
  });
});
module.exports = router;