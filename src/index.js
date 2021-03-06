import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { ApolloLink } from 'apollo-link';
import { withClientState } from 'apollo-link-state';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { persistCache } from 'apollo-cache-persist';
import { HttpLink } from 'apollo-link-http';
import QueueLink from 'apollo-link-queue';
import { RetryLink } from 'apollo-link-retry';

import Loadable from 'react-loadable'
import Layout from './components/Layout'

import {resolvers, defaults} from './resolvers'

const API_HOST =
  process.env.NODE_ENV === 'production'
    ? 'https://api.dublincoachconcept.com/graphql'
    : 'http://localhost:3000/graphql';


const offlineLink = new QueueLink();
// Note: remove these listeners when your app is shut down to avoid leaking listeners.
window.addEventListener('offline', () => offlineLink.close());
window.addEventListener('online', () => offlineLink.open());



const cache = new InMemoryCache().restore(window.__APOLLO_STATE__)

const stateLink = withClientState({cache, defaults, resolvers});

const link = ApolloLink.from([
  stateLink,
  new RetryLink(),
  offlineLink,
  new HttpLink({ uri: API_HOST }),
]);

persistCache({
  cache,
  storage: window.localStorage,
});

const client = new ApolloClient({
  ssrForceFetchDelay: 100,
  connectToDevTools: true,
  cache: cache,
  link: link
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

