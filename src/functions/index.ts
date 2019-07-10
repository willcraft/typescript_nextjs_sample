// import * as express from 'express';

// import next from 'next';

// // const next = require('next');

// const port = parseInt(process.env.PORT, 10) || 3000;
// const dev = process.env.NODE_ENV !== 'production';
// const app = next({ dev });
// const handle = app.getRequestHandler();

// app.prepare().then(() => {
//   const server = express();

//   server.get('/test', (req, res) => {
//     return app.render(req, res, '/test', req.query);
//   });

//   server.get('/post/:id', (req, res) => {
//     return app.render(req, res, '/post', { id: req.params.id });
//   });

//   server.get('*', (req, res) => {
//     return handle(req, res);
//   });

//   server.listen(port, err => {
//     if (err) throw err;
//     console.log(`> Ready on http://localhost:${port}`);
//   });
// });

const path = require('path');
const functions = require('firebase-functions');
const next = require('next');

var dev = process.env.NODE_ENV !== 'production';
var app = next({
  dev,
  conf: { distDir: `${path.relative(process.cwd(), __dirname)}/next` },
});
var handle = app.getRequestHandler();

exports.next = functions.https.onRequest((req: any, res: any) => {
  console.log('File: ' + req.originalUrl); // log the page.js file that is being requested
  return app.prepare().then(() => handle(req, res));
});
