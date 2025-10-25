const { createServer } = require("http");

const hostName = '127.0.0.1';
const port = 3000;

const server = createServer((_, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('hello world');
});

server.listen(port, hostName, () => {
  console.log(`服务器运行在 http://${hostName}:${port}/`);
});