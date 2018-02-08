import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

import Layout from './components/Layout'
import Playground from './components/Playground'
import Homepage from './components/Homepage'
import NewsPage from './components/NewsPage'
import ContactPage from './components/ContactPage'

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://192.168.1.11:3000/graphql' }),
  cache: new InMemoryCache()
});

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <Layout>
        <Route path="/" exact component={Homepage}/>
        <Route path="/news" component={NewsPage}/>
        <Route path="/contact" component={ContactPage}/>
        <Route path="/playground" component={Playground}/>
      </Layout>
    </Router>
  </ApolloProvider>
)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
