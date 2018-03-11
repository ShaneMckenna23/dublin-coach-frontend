// This example uses React Router v4, although it should work
import Express from 'express';

import Loadable from 'react-loadable'

import compression from 'compression'
import serverRenderer from './middleware/renderer'

const path = require("path");
const PORT = 4000;

const app = new Express();

// app.use(function(req, res, next) {
//   console.log(req.get('Host'))
//   if((!req.secure) && (req.get('X-Forwarded-Proto') !== 'https')) {
//     if(req.get('Host')=='localhost:4000'){
//       next();
//     }else{
//       res.redirect('https://' + req.get('Host') + req.url);
//     }
//   }
//   else
//       next();
// });

app.use(compression())

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

