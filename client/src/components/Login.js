import React, { Component } from 'react'
import './componentCss/LoginCss.css';
import axios from 'axios';

import { Link } from 'react-router-dom';


export default class Login extends Component {
   
constructor(props){
   super(props);
   this.state={
      username:"",
      password:"",
      login:"t"

   }
   this.changeInput=this.changeInput.bind(this);
   this.validate=this.validate.bind(this);
}




/*callAPI() {
   fetch("http://localhost:3001/login")
       .then(res => res.text())
       .then(res => this.setState({ login:"kkk" }));
}
*/

validate(){
   var Data={
      username:this.state.username,
      password:this.state.password
   }

   axios.post('http://localhost:3001/login',Data)
   .then(function (response) {
      //this.setState({login:response.data});
      alert(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

   
  // this.callAPI();
 // alert(this.state.login);


}



changeInput(event){
   var name=event.target.name;
   var value=event.target.value;
   this.setState({[name]:value});
   console.log("---name---",name);
   console.log("---value---",value);
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
                  <button type="submit" className="btn btn-black" onClick={this.validate}>Login</button>
                  <button type="submit" className="btn btn-secondary"><Link to="/Registration">Register</Link></button>
               </form>
            </div>
         </div>
      </div>
            </div>
        )
    }
}
