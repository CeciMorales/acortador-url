import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Url from './components/Url';
import UrlDetail from './components/UrlDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Url></Url>
          </Route>
          <Route exact path="/:id">
            <UrlDetail></UrlDetail>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
