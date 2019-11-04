const http = require("http");
const hostname = 'localhost';
const port = 4500;
const server = http.createServer((req, res) => {
//Set the response variables
// HTTP status code 200 OK res.statusCode = 200;
// HTTP header as plain text res.setHeader('Content-Type', 'text/plain'); // Text to be displayed
res.end('Hello World\n'); });
server.listen(port, hostname, () => {
console.log('http://'+hostname+':'+port+'ok');});
