import React from "react"
import ReactDOMServer from 'react-dom/server'

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { StaticRouter } from 'react-router';
import { InMemoryCache } from "apollo-cache-inmemory";
import fetch from "node-fetch"
import { renderToStringWithData } from "react-apollo"
import Loadable from 'react-loadable'

import manifest from '../../build/asset-manifest.json';
import Layout from '../../src/components/Layout'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import {getSemanticCss} from './semantic'
import {API_HOST} from '../../config/graphQL'

const path = require("path");
const fs = require("fs");
const MobileDetect = require('mobile-detect')

var semantic
getSemanticCss().then(function(result) {
  semantic = '<style>'+result+'</style>'
})

const extractAssets = (assets, chunks) => Object.keys(assets)
    .filter(asset => chunks.indexOf(asset.replace('.js', '')) > -1)
    .map(k => assets[k]);

const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html');

function serverRenderer(req, res){
    const client = new ApolloClient({
      ssrMode: true,
      link: createHttpLink({
        uri: `${API_HOST}/graphql`,
        fetch
      }),
      cache: new InMemoryCache(),
    });

    const context = {};

    const md = new MobileDetect(req.headers['user-agent'])

    const isMobile = !!md.mobile()

    const sheet = new ServerStyleSheet()

    let modules = [];
    const App = (
      <Loadable.Capture report={m => modules.push(m)}>
        <StyleSheetManager sheet={sheet.instance}>
          <ApolloProvider client={client}>
            <StaticRouter location={req.url} context={context}>
              <Layout server isMobile={isMobile}/>
            </StaticRouter>
          </ApolloProvider>
        </StyleSheetManager>
      </Loadable.Capture>
    );

    renderToStringWithData(App).then((content) => {
      const extraChunks = extractAssets(manifest, modules)
      .map(c => `<script type="text/javascript" src="/${c}"></script>`);

      const styleTags = sheet.getStyleTags()

      // point to the html file created by CRA's build tool
      fs.readFile(filePath, 'utf8', (err, htmlData) => {
      if (err) {
          console.error('err', err);
          return res.status(404).end()
      }

      /*
        Send CRA's html with:
        custom style
        semantic ui css
        js chunks needed
        apollo state
        rendered content
      */
      return res.send(
        htmlData
            .replace(
              '</head>',
              styleTags + '</head>'
            ).replace(
              '</head>',
              semantic + '</head>'
            )
            .replace(
              '</body>',
              extraChunks.join('')+'</body>'
            )
            .replace(
              '<div id="root"></div>',
              '<div id="root"></div><script> window.__APOLLO_STATE__ =' +JSON.stringify(client.extract()).replace(/</g, '\\u003c')+'</script>'
            )
            .replace(
              '<div id="root"></div>',
              `<div id="root">${content}</div>`
            )
      );
     });
    })
    .catch(e => {
      console.error('RENDERING ERROR:', e); // eslint-disable-line no-console
      res.status(500);
      res.end(
        `An error occurred.${e.stack}`
      );
    });
  };

export default serverRenderer
