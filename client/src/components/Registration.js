import React, { Component } from 'react'
import axios from 'axios';
import './componentCss/Form.css';
export default class Registration extends Component {


    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            fullname: "",
            mobile: "",
            email: "",
            confirm: "",
            Error: ""
        };

        this.onChangeInput = this.onChangeInput.bind(this);
    }

    /* callAPI() {
       fetch("http://localhost:3001/kk")
           .then(res => res.text())
           .then(res => this.setState({ apiResponse: res }));
   }
   
   componentWillMount() { 
       this.callAPI();
   }
   */


    validateForm() {
        var EmailPattern=new RegExp('[a-zA-Z0-9]+@[A-Za-z]+.[A-Za-z]+');
        var MobilePattern =new RegExp('[0-9]{10}');

        if (!this.state.username || !this.state.password || !this.state.fullname || !this.state.mobile || !this.state.email || !this.state.confirm){
            this.setState({Error:"Field should not be empty"});
            return;
        }
        if(!EmailPattern.test(this.state.email)){
            this.setState({Error:"Invalid Email"});
            return;
        }
        if(!MobilePattern.test(this.state.mobile)){
            this.setState({Error:"Invalid Mobile"});
            return;
        }

        const username = this.state.username;
        const password = this.state.password;
        const fullname = this.state.fullname;
        const mobile = this.state.mobile;
        const email = this.state.email;
        const confirm = this.state.confirm;

        if (confirm != password) {
            alert("incorrect confirm password");
        }
        else {
            var data = {
                username: username,
                password: password,
                fullname: fullname,
                mobile: mobile,
                email: email
            }

            axios.post('http://localhost:3001/registration', data)
                .then(function (response) {
                    console.log(response);
                    if (response.data=='0'){
                        this.setState({Error:"Username is not available"})
                    }
                    else{
                        alert("Registration Success");
                    }
                }.bind(this))
                .catch(function (error) {
                    console.log(error);
                });

            //alert("Registration successfull");
        }
    }

    onChangeInput(event) {

        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value })
        this.setState({Error:""});

    }




    render() {
        return (
            <div className="Main">
                <div className="container">
                    <div className="registration">
                        <h2>Regiter</h2>
                        <form>
                            <input className="fulName-input" type="text" name="fullname" placeholder="Full Name" onChange={(e) => this.onChangeInput(e)} />
                            <input className="email-input" type="text" name="email" placeholder="Email" onChange={(e) => this.onChangeInput(e)} />
                            <input className="username-input" type="text" name="username" placeholder="Username" onChange={(e) => this.onChangeInput(e)} />
                            <input className="mobile-input" type="text" name="mobile" placeholder="Mobile" onChange={(e) => this.onChangeInput(e)} />
                            <input className="password-input" type="text" name="password" placeholder="Password" onChange={(e) => this.onChangeInput(e)} />
                            <input className="confirm-password-input" type="text" name="confirm"
                                placeholder="Confirm Password" onChange={(e) => this.onChangeInput(e)} />
                        </form>
                        <div style={{color:"red"}}>
                            {this.state.Error}
                        </div>
                        <button className="login-button" type="submit" name="submit" onClick={this.validateForm.bind(this)}>Regiter</button>
                        <div>
                            <h5>Already Have Account?<a href="/">Login</a></h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
