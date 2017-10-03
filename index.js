const http = require('http')

const hostname = '0.0.0.0';
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {

  if (req.method === 'GET') {    

    res.writeHead(200, {'Content-Type': 'application/json'})    
    res.end()

  }

}).listen(port, hostname, function(){
  console.log('Server running at http://${' + hostname + '}:${' + port + '}/');
})