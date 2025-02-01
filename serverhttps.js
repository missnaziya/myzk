const { createServer } = require('https');
const { parse } = require('url');
const next = require('next');
const fs = require('fs');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev : false });
const handle = app.getRequestHandler();

const httpsOptions = {
  key: fs.readFileSync('/etc/letsencrypt/live/myzk.in/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/myzk.in/fullchain.pem')
};

app.prepare().then(() => {
  createServer(httpsOptions, (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(443, (err) => {
    if (err) throw err;
    console.log('> Ready on https://localhost:443');
    // change to 3000  from  443
  });
});

