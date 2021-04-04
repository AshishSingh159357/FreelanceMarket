import React, { Component } from 'react'
import './componentCss/DashboardCss.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Redirect, Link } from 'react-router-dom';
import axios from 'axios';


export default class Dashboard extends Component {


    constructor(props) {
        super(props)
        const token = localStorage.getItem("token");
        var login = "true";
        const ActiveProject = [];

        if (token == null) {
            //this.setState({login:"false"})

            login = "false"
        }
        this.state = {
            login,
            ActiveProject
        }

    }

    componentDidMount() {
        axios.post('http://localhost:3001/dashboard', { username: localStorage.getItem("token") })
            .then(function (response) {
                //   alert(response.data[0].GigTitle);

                this.setState({ ActiveProject: response.data });

            }.bind(this));

    }



    render() {
        var { login,ActiveProject } = this.state

        if (this.state.login == "false") {
            return <Redirect to="/" />
        }
        return (
            <div class="DashboardContainer">

                <Navbar />

                <div className="container2">
                    <div className="heading">
                        <h4>Active Projects</h4>
                    </div>


                   
                        <div className="Active-project-list">
                        {ActiveProject.map(A => (
                            <div>
                            <ul>
                                <li className="Project-Title"><Link to={`/FreelancerActiveProject/${A.Project_name}`}>1. {A.Project_name}</Link></li>
                                <li className="Duration">{A.Duration} days</li>
                                <li className="Pricing">$ {A.budget}</li>
                            </ul>
                          {/* <div className="Requirement">
                                <h5>Requirement :</h5>
                                <p>{A.Project_Desc}</p>
                                <h5>{A.Duration}</h5>
                                <p>2days ago</p>
                        </div>*/ }
                            </div>
                            ))}
                        </div>
                 
                    


                </div>
            </div>
        )
    }
}
