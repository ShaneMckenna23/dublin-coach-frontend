import React from 'react';

import {
  Link,
  Route,
  Switch,
} from 'react-router-dom';

import { Redirect } from 'kit/lib/routing';
import { WhenNotFound } from 'src/components/routes';

import Playground from 'src/components/playground';
import Homepage from '../Homepage';


export default () => (
  <div>
    <Route exact path="/" component={Homepage} />
    <Route path="/playground" component={Playground} />
  </div>
);
