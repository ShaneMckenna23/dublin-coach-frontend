import React from 'react';

import {
  Link,
  Route,
  Switch,
} from 'react-router-dom';

import { Redirect } from 'kit/lib/routing';
import { WhenNotFound } from 'src/components/routes';

import Playground from 'src/components/playground';
import HomePage from 'src/components/homePage';


export default () => (
  <div>
    <Route exact path="/" component={HomePage} />
    <Route path="/playground" component={Playground} />
  </div>
);
