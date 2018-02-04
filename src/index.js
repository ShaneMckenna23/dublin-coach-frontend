import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Prompt
} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import Helmet from 'react-helmet';

import Homepage from './components/Homepage'

const App = () => (
  <Router>
    <div>
      <Helmet>
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
      </Helmet>
      <Route path="/" exact component={Homepage}/>
    </div>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
