// This example uses React Router v4, although it should work
import Express from 'express';

import Loadable from 'react-loadable'

import compression from 'compression'
import serverRenderer from './middleware/renderer'

const path = require("path");
const redirectToHTTPS = require('express-http-to-https').redirectToHTTPS

const PORT = 4000;

const app = new Express();

// compress all responses
app.use(compression())

// Don't redirect if the hostname is `localhost:port`
app.use(redirectToHTTPS([/localhost:(\d{4})/]));

const router = Express.Router();

router.use(Express.static(
  path.resolve(__dirname, '..', 'build'),
  { maxAge: '30d' },
));

router.use(serverRenderer)

app.get('/',serverRenderer)

app.use(router);

Loadable.preloadAll().then(() => {
  app.listen(PORT, () => console.log( // eslint-disable-line no-console
    `app Server is now running on http://localhost:${PORT}`
  ));
});
