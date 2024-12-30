const { onRequest } = require('firebase-functions/v2/https');
const server = import('firebase-frameworks');
const functions = require("firebase-functions");
const next = require("next");

const app = next({ dev: false, conf: { distDir: ".next" } });
const handle = app.getRequestHandler();

exports.nextApp = functions.https.onRequest((req, res) => {
  return app.prepare().then(() => handle(req, res));
}); 
exports.ssrreactblogfe082 = onRequest({"region":"asia-east1"}, (req, res) => server.then(it => it.handle(req, res)));
  