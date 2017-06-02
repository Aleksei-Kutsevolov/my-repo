var express = require('express');
var mysql = require('mysql');
var app = express();


var connection = mysql.createConnection({
  connectionLimit: 50,
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'test',
});


connection.connect();

connection.query('SELECT firstName FROM users WHERE ?', function(err, result) {
  console.log(err);
  var info = (result.firstName + result.lastName + result.image);
});

var docInfo = {
  info:{
    title: 'User',
},
  pageSize: 'A4',
  pageOrientation: 'portrait',

  content: 'info',
};


pdfMake.createPdf(docInfo).download('User.pdf');

connection.query('INSERT INTO users SET ?', 'User.pdf', function(err, result) {
  if(!err) {"result": false};
  return result {"result": true}; 
});



module.exports.query = query;
module.exports.answer = answer;
