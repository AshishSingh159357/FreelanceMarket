import React, { Component } from 'react'
import axios from 'axios';

export default class Registration extends Component {


    constructor(props) {
        super(props);
        this.state = {
          username: "",
          password: "",
          fullname:"",
          mobile:"",
          email:"",
          confirm:""
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
    
    
      validateForm(){
        const username=this.state.username;
        const password=this.state.password;
        const  fullname=this.state.fullname;
        const  mobile=this.state.mobile;
        const email=this.state.email;
        const confirm=this.state.confirm;

        if(confirm!=password)
        {
          alert("incorrect confirm password");
        }
        else
        {
            var data={
                username:username,
                password:password,
                fullname:fullname,
                mobile:mobile,
                email:email
              }
             
              axios.post('http://localhost:3001/registration', data)
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
              
              alert("Registration successfull");

        }
    
        
      }
    
      onChangeInput(event) {
       
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]:value})
      
      }
    
    


    render() {
        return (
            <div>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-8">
                            <div class="card">
                                <div class="card-header">Register</div>
                                <div class="card-body">

                                    <form class="form-horizontal" method="post" action="#">

                                        <div class="form-group">
                                            <label for="name" class="cols-sm-2 control-label">Your Full Name</label>
                                            <div class="cols-sm-10">
                                                <div class="input-group">
                                                    <span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
                                                    <input type="text" class="form-control" name="fullname" id="name" placeholder="Enter your Name" onChange={(e) => this.onChangeInput(e)}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="email" class="cols-sm-2 control-label">Your Email</label>
                                            <div class="cols-sm-10">
                                                <div class="input-group">
                                                    <span class="input-group-addon"><i class="fa fa-envelope fa" aria-hidden="true"></i></span>
                                                    <input type="text" class="form-control" name="email" id="email" placeholder="Enter your Email" onChange={(e) => this.onChangeInput(e)}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="username" class="cols-sm-2 control-label">Username</label>
                                            <div class="cols-sm-10">
                                                <div class="input-group">
                                                    <span class="input-group-addon"><i class="fa fa-users fa" aria-hidden="true"></i></span>
                                                    <input type="text" class="form-control" name="username" id="username" placeholder="Enter your Username" onChange={(e) => this.onChangeInput(e)}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="mobile" class="cols-sm-2 control-label">Mobile</label>
                                            <div class="cols-sm-10">
                                                <div class="input-group">
                                                    <span class="input-group-addon"><i class="fa fa-users fa" aria-hidden="true"></i></span>
                                                    <input type="text" class="form-control" name="mobile" id="username" placeholder="Enter your mobile" onChange={(e) => this.onChangeInput(e)}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="password" class="cols-sm-2 control-label">Password</label>
                                            <div class="cols-sm-10">
                                                <div class="input-group">
                                                    <span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                                    <input type="password" class="form-control" name="password" id="password" placeholder="Enter your Password" onChange={(e) => this.onChangeInput(e)}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="confirm" class="cols-sm-2 control-label">Confirm Password</label>
                                            <div class="cols-sm-10">
                                                <div class="input-group">
                                                    <span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                                    <input type="password" class="form-control" name="confirm" id="confirm" placeholder="Confirm your Password" onChange={(e) => this.onChangeInput(e)}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group ">
                                            <button type="button" class="btn btn-primary btn-lg btn-block login-button" onClick={this.validateForm.bind(this)}>Register</button>
                                        </div>
                                        <div class="login-register">
                                            <a href="index.php">Login</a>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
