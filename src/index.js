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
import QueueLink from 'apollo-link-queue';
import { RetryLink } from 'apollo-link-retry';

import Loadable from 'react-loadable'
import Layout from './components/Layout'

const API_HOST =
  process.env.NODE_ENV == 'production'
    ? 'https://api.dublincoachconcept.com/graphql'
    : 'http://localhost:3000/graphql';



const offlineLink = new QueueLink();

// Note: remove these listeners when your app is shut down to avoid leaking listeners.
window.addEventListener('offline', () => {offlineLink.close()});
window.addEventListener('online', () => offlineLink.open());

const link = ApolloLink.from([
  offlineLink,
  new HttpLink({ uri: API_HOST }),
  new RetryLink(),
]);

const cache = new InMemoryCache().restore(window.__APOLLO_STATE__).restore(window.localStorage.getItem("apollo-cache-persist"));
console.log(cache)

persistCache({
  cache,
  storage: window.localStorage,
});

const client = new ApolloClient({
  ssrForceFetchDelay: 100,
  connectToDevTools: true,
  link: link,
  cache: cache
});

window.onload = () => {

  //Delete index.html, server-side-render instead
  caches.open('sw-precache-v3-sw-precache-webpack-plugin-https://www.dublincoachconcept.com/').then(function(cache) {
    cache.delete('index.html').then(function(response) {
      console.log(response)
    });
  })

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

