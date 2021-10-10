import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import SWRConfig from "./config/SWRConfig";
import Home from './routes/Home';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
          <Route path="/" component={IndexPage} />
      </Switch>
    </Router>

  );
}

export default RouterConfig;
