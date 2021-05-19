import React, { Component } from 'react'
import './componentCss/LoginCss.css';
import axios from 'axios';
import home from './Home'
import { Link, Redirect } from 'react-router-dom';
import Route from 'react-router-dom/Route'
import { BrowserRouter as Router, Switch } from 'react-router-dom';



export default class Login extends Component {

   constructor(props) {
      super(props);
      let login = false
      this.state = {
         username: "",
         password: "",
         UsernameError: "",
         PasswordError: "",
         login
      
      }
      this.changeInput = this.changeInput.bind(this);
      this.validate = this.validate.bind(this);

      //axios.defaults.withCredentials=true;
   }




   validate() {

      var Data = {
         username: this.state.username,
         password: this.state.password
      }

      //validating Username if it is empty
      if(!this.state.username || !this.state.password)
      {
         this.setState({UsernameError:"Fields should not be empty"});
         return ;
      }
      else{
         this.setState({UsernameError:""});
      }

      axios.post('http://localhost:3001/login', Data)
         .then(function (response) {
            if (response.data) {
               localStorage.setItem("token", Data.username);
               this.setState({ login: response.data });
            }
            else {
               this.setState({ UsernameError: "Invalid Username or password" });
            }


         }.bind(this))
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
      this.setState({UsernameError:""});
      this.setState({PasswordError:""})
   }

   render() {
      if (this.state.login) {
         return <Redirect to="/dashboard" />
      }
      else {
         return (
            <div className="Main">

               <div className="container">
                  <div className="login">
                     <h2>Login</h2>
                     <form>
                        <input className="username-input" type="text" name="username" placeholder="Username" onChange={(e) => this.changeInput(e)} />
                        <input className="password-input" type="password" name="password" placeholder="Password" onChange={(e) => this.changeInput(e)} />
                     </form>
                     <div style={{ color: 'red' }}>
                           {this.state.UsernameError}
                        </div>

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
}
