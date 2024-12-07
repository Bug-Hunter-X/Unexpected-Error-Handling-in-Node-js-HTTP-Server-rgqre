const http = require('http');

const server = http.createServer((req, res) => {
  // Handle the request here
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

const port = 3000;

// Improved Error Handling
const onError = (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error('Port in use. Please close the application using the port or choose a different port.');
  } else if (error.syscall !== undefined && error.syscall === 'listen') {
    console.error(`Failed to listen on port ${port}. Reason: ${error.message}`);
  } else if (error) {
    console.error('Unexpected error:', error);
  }
  process.exit(1);
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  console.log(`Listening on ${bind}`);
};

server.on('error', onError);
server.on('listening', onListening);

server.listen(port);