import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { ApolloLink } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

import Loadable from 'react-loadable'
import Layout from './components/Layout'
import {API_HOST} from '../../config/graphQL'

const client = new ApolloClient({
  ssrForceFetchDelay: 100,
  connectToDevTools: true,
  link: new HttpLink({ uri: API_HOST }),
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
});

window.onload = () => {
  Loadable.preloadReady().then(() => {
    hydrate(
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </ApolloProvider>,
      document.getElementById('root')
    );
  });
};

//registerServiceWorker();

