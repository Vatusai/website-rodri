// start.js
import serve from 'serve';
const server = serve('dist', {
  // Optional: Configure server options like port, etc.
  port: 5173,  // Adjust as necessary
});

server.start();