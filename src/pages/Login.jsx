import React, { Component } from 'react';
import { Redirect } from 'react-router';

class Login extends Component {

   state = {
      email: [],
      password: [],
      auth: false
   };

   emailChange = (event) => {
      this.setState({ email: event.target.value });
   }

   passwordChange = (event) => {
      this.setState({ password: event.target.value });
   }

   handleClick = (event) => {

      if (this.state.email === 'zhdanovich@gmail.com' && this.state.password === 'zhdanovich') {
         this.setState({ auth: true });
      } else {
         alert('Bad credentials');
      }
   }

   render() {

      const { auth } = this.state;

      if (auth) {
         return <Redirect to='/app' />;
      }

      return (
         <div>
            <div className='center-container'>
               <h1>Welcome</h1>
               <h5>Login to get started!</h5>
            </div>
            <input className='login-input' type='email' name='email' placeholder='Email' required onChange={this.emailChange}></input>
            <input className='login-input' type='password' name='password' placeholder='Password' required onChange={this.passwordChange}></input><br />
            <div className='login-container'>
               <input className='login-submit' type='button' value='Login' onClick={this.handleClick} /></div>
         </div>
      );
   }
}
export default Login;