import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login.jsx';

class NavBar extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [
        {
          "id": 1,
          "name": "Login",
          "path": "/login"
        },
        {
          "id": 2,
          "name": "Signup",
          "path": "/signup"
        }
      ]
    };
  }

   render() {
      return (
        <nav>
          <ul>
            {this.state.data.map((item, i) => <NavItem key={i} data={item} />)}
          </ul>
        </nav>
      );
   }
}

class NavItem extends React.Component {
   render() {
      return (
        <li><Link to={this.props.data.path}>{this.props.data.name}</Link></li>
      );
   }
}

export default NavBar;
