import React, { Component } from 'react'
import './componentCss/LoginCss.css';
import Registration from './Registration';
import { Link } from 'react-router-dom';


export default class Login extends Component {
   
constructor(props){
   super(props);
   this.state={
      username:"",
      password:""

   }
}

changeInput(event){
   var name=event.target.name;
   var value=event.target.value;
   this.setState({[name]:value});
}

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
                     <input type="text" name="username" className="form-control" placeholder="User Name" onChange={(e)=>this.changeInput(e)}/>
                  </div>
                  <div className="form-group">
                     <label>Password</label>
                     <input type="password" name="password" className="form-control" placeholder="Password" onChange={(e)=>this.changeInput(e)}/>
                  </div>
                  <button type="submit" className="btn btn-black" >Login</button>
                  <button type="submit" className="btn btn-secondary"><Link to="/Registration">Register</Link></button>
               </form>
            </div>
         </div>
      </div>
            </div>
        )
    }
}
