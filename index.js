const http = require('http')
const express = require('express')
const assert = require('assert')
const MongoClient = require('mongodb').MongoClient

const app = express('mongodb')

const hostname = '0.0.0.0'
const port = process.env.PORT || 3000

const url = 'mongodb://localhost:27017/shortner-microservice';

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server")
  db.close();
});

app.get('/', (req, res) => {
  res.end('Hello World!')
})

app.listen(port, hostname, function(){
  console.log('Server running at http://${' + hostname + '}:${' + port + '}/')
})