import React from 'react';
import Form from './components/Form';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import Mapbox from './components/Mapbox';
import { CgTrack } from 'react-icons/all'

function App() {
  return (
    <div className="appContainer">
      <div className="appTop">
        <h1 className="header d-flex align-items-center justify-content-center"><Link className="text-decoration-none text-dark d-flex align-items-center" to="/">IP Tracker <CgTrack className="icon"/></Link></h1>
        <Form />
      </div>
      <div className="main">
        <Switch>
          <Route exact path="/">
            <Mapbox />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
