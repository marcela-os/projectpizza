/* global require, process */

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('dist/db/app.json');
const middlewares = jsonServer.defaults({
  static: 'dist',
  noCors: true
});
const port = process.env.PORT || 3130;

server.use(middlewares);
server.use(router);

server.listen(port);
