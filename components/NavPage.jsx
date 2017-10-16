import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Login from './Login.jsx';


class NavPage extends React.Component {
  render() {
      return (
      <main>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route path='/login' component={Login}/>
        </Switch>
      </main>
      );
  }
}

export default NavPage;
