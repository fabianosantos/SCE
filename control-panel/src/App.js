import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Home from './home/home-component'

class App extends Component {
  render() {
    return (
      <Router basename="simple-login">
        <div>
          <Switch>
            <Route path="/" component={Home} />
            <Redirect to="/notfound" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
