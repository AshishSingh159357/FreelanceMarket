import React, { Component } from 'react'
import './componentCss/LoginCss.css';
import axios from 'axios';

import { Link } from 'react-router-dom';


export default class Login extends Component {

   constructor(props) {
      super(props);
      this.state = {
         username: "",
         password: "",
         login: "t"

      }
      this.changeInput = this.changeInput.bind(this);
      this.validate = this.validate.bind(this);
   }




   /*callAPI() {
      fetch("http://localhost:3001/login")
          .then(res => res.text())
          .then(res => this.setState({ login:"kkk" }));
   }
   */

   validate() {
      var Data = {
         username: this.state.username,
         password: this.state.password
      }

      axios.post('http://localhost:3001/login', Data)
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



   changeInput(event) {
      var name = event.target.name;
      var value = event.target.value;
      this.setState({ [name]: value });
      console.log("---name---", name);
      console.log("---value---", value);
   }

   render() {
      return (
         <div className="Main">

            <div className="container">
               <div className="login">
                  <h2>Login</h2>
                  <form>
                     <input className="username-input" type="text" name="username" placeholder="Username" onChange={(e) => this.changeInput(e)} />
                     <input className="password-input" type="text" name="password" placeholder="Password" onChange={(e) => this.changeInput(e)} />
                     </form>
                  <button className="login-button" type="submit" name="submit" onClick={this.validate}>Login</button>
                  <div>
                     <h5>Not Have Account?<a href="/registration">Register</a></h5>
                  </div>
               </div>
            </div>

         </div>
      )
   }
}
