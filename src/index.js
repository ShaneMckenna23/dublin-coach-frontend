import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { ApolloLink } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { persistCache } from 'apollo-cache-persist';
import { HttpLink } from 'apollo-link-http';

import Loadable from 'react-loadable'
import Layout from './components/Layout'

const API_HOST =
  process.env.NODE_ENV == 'production'
    ? 'https://api.dublincoachconcept.com/graphql'
    : 'http://localhost:3000/graphql';


const cache = new InMemoryCache().restore(window.__APOLLO_STATE__);

persistCache({
  cache,
  storage: window.localStorage,
});

const client = new ApolloClient({
  ssrForceFetchDelay: 100,
  connectToDevTools: true,
  link: new HttpLink({ uri: API_HOST }),
  cache: cache,
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

registerServiceWorker();

