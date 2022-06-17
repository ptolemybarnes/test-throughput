const http = require('node:http');

const host = 'localhost';
const port = 3001;

const handler = (req, response) => {
    response.writeHead(200);
    const request = http.request({ hostname: 'localhost', port: 3000, path: '/', method: 'GET', }, res => res.pipe(response));
    request.end()
};

const server = http.createServer(handler);

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
