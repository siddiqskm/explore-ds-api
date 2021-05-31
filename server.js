/* eslint-disable no-undef */
// Fetch Configs
// eslint-disable-next-line no-unused-vars
const _ = require('./src/config');

// You are welcome to drop express for any other server implementation
const express = require('express');
const server = express();
server.use(express.json());

// Get router to register
const router = require('./src/routes');

// Registering base routes to quickly verify if the API server is running or not
server.get('/', (req, resp)=> {
  resp.send({'msg': 'Welcome, Backend is up and running :)'});
});

// register router
server.use(router);

// The tests exercise the server by requiring it as a module,
// rather than running it in a separate process and listening on a port
module.exports = server;

if (require.main === module) {
  // Start server only when we run this on the command line and explicitly
  // ignore this while testing

  const port = process.env.PORT || 3000;
  server.listen((port), () => {
    console.log(`App listening at http://localhost:${port}`);
  });
}
