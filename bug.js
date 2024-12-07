const http = require('http');

const server = http.createServer((req, res) => {
  // Handle the request here
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

// Unexpected Error handling
 server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error('Address in use, please close the application using the port or choose a different port.');
    process.exit(1);
  } else {
    console.error('Unexpected error:', err);
    process.exit(1);
  }
});