import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      username: null,
      password: null
    };

    this.handleUsernameUpdate = this.handleUsernameUpdate.bind(this);
    this.handlePasswordUpdate = this.handlePasswordUpdate.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  };

  handleUsernameUpdate(e) {
    this.setState({
      username: e.target.value
    });
  };

  handlePasswordUpdate(e) {
    this.setState({
      password: e.target.value
    });
  };

  handleLogin(e) {
    alert("hi there " + this.state.username + " " + this.state.password);
    e.preventDefault();
  };
   render() {
      return (
        <form onSubmit={this.handleLogin} >
          <label for="username">Username</label>
          <input type="text" value={this.state.username} onChange={this.handleUsernameUpdate}/>
          <label for="password">Password</label>
          <input type="password" value={this.state.password} onChange={this.handlePasswordUpdate}/>
          <input type="submit" value="Login" />


        </form>
      );
   }
}

export default Login;
