var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  port: process.env.MSQL_PORT || 3306,
  user: 'root',
  password: process.env.MYSQL_PASSWORD || 'Dekh24791le',
  database: 'authorsdb'
});

var authors;
connection.connect();
connection.query('SELECT * from authors', function (err, rows, fields) {
  if (!err) {
    console.log('The solution is: ', rows);
    authors = rows;
  } else
    console.log('Error while performing Query.' + err);
});

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Deploying stateful NodeJS containers on Kubernetes',
    authors: authors
  });
});

console.log('Host: ' + process.env.Host + 'password: ' + process.env.password);
connection.end();
module.exports = router;