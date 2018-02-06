import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import Layout from './components/Layout'

import Homepage from './components/Homepage'
import NewsPage from './components/NewsPage'
import ContactPage from './components/ContactPage'


const App = () => (
  <Router>
    <Layout>
      <Route path="/" exact component={Homepage}/>
      <Route path="/news" exact component={NewsPage}/>
      <Route path="/contact" exact component={ContactPage}/>
    </Layout>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
