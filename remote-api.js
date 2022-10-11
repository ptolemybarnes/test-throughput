const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const TIME_BETWEEN_WRITES_MS = 25

const server = http.createServer((req, res) => {
  console.log("request received")
  var counter = 0;
  const interval = setInterval(() => {
    console.log("writing: " + counter)
    // writing to the body of the response
    res.write("" + counter + " body\n")
    if (counter++ > 100) {
      res.statusCode = 200;
      res.end()
      console.log("REQUEST COMPLETE")
      clearInterval(interval);
      return
    }
  }, TIME_BETWEEN_WRITES_MS);
});

server.listen(port, hostname, () => {
  console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});
