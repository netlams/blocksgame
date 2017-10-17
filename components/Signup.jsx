import React from 'react';

const Signup = () => (
  <div>
    <label for="username">Username</label>
    <input type="text" name="username" />
    <label for="password">Password</label>
    <input type="password" name="password" />
    <label for="c-password">Confirm Password</label>
    <input type="password" name="c-password" />
    <label for="dob">DOB</label>
    <input type="date" name="dob" />
  </div>
)

export default Signup;
