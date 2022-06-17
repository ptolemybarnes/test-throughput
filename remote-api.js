const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const server = http.createServer((req, res) => {
  console.log("request received")
  setTimeout(() => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Hola Mundo');
  }, randomIntFromInterval(200, 1000));
});

server.listen(port, hostname, () => {
  console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});
