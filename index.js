const http = require('http')
const express = require('express')

const app = express()

const hostname = '0.0.0.0'
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.end('Hello World!')
})

app.listen(port, hostname, function(){
  console.log('Server running at http://${' + hostname + '}:${' + port + '}/');
})