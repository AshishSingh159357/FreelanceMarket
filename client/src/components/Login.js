import React, { Component } from 'react'
import './componentCss/LoginCss.css';
import Registration from './Registration';

export default class Login extends Component {
    render() {
        return (
            <div>
                <div className="sidenav">
         <div className="login-main-text">
            <h2>FreelanceMarket</h2> 
            <h2>Login Page</h2>
            <p>Login or register from here to access.</p>
         </div>
      </div>
      <div className="main">
         <div className="col-md-6 col-sm-12">
            <div className="login-form">
               <form>
                  <div className="form-group">
                     <label>User Name</label>
                     <input type="text" className="form-control" placeholder="User Name"/>
                  </div>
                  <div className="form-group">
                     <label>Password</label>
                     <input type="password" className="form-control" placeholder="Password"/>
                  </div>
                  <button type="submit" className="btn btn-black">Login</button>
                  <button type="submit" className="btn btn-secondary"><a href="/Registration">Register</a></button>
               </form>
            </div>
         </div>
      </div>
            </div>
        )
    }
}
