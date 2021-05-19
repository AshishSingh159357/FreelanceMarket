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
        const Reviews = []
        const completeProject = []

        if (token == null) {
            //this.setState({login:"false"})

            login = "false"
        }
        this.state = {
            login,
            ActiveProject,
            completeProject,
            Reviews
        }



    }

    componentDidMount() {
        axios.post('http://localhost:3001/dashboard', { username: localStorage.getItem("token") })
            .then(function (response) {
                //   alert(response.data[0].GigTitle);

                this.setState({ ActiveProject: response.data });

            }.bind(this));


        axios.post('http://localhost:3001/UserReviews', { username: localStorage.getItem("token") })
            .then(function (response) {
                //   alert(response.data[0].GigTitle);

                this.setState({ Reviews: response.data });

            }.bind(this));


        axios.post('http://localhost:3001/completeProject', { freelancer: localStorage.getItem("token") })
            .then(function (response) {
                //   alert(response.data[0].GigTitle);

                this.setState({ completeProject: response.data });

            }.bind(this));




    }



    render() {
        var { login, ActiveProject, Reviews } = this.state

        if (this.state.login == "false") {
            return <Redirect to="/" />
        }
        return (
            <div>
                <Navbar />

                <div class="DashboardContainer">

                    <div className="UserInformation">
                        <div className="User">
                            <h6>  Reviews</h6>
                        </div>
                        {Reviews.map(R => (
                            <div className="Reviews">{R.buyer}</div>

                        ))}

                    </div>


                    <div>
                        <div className="dashboard-section-1">
                            <div>
                                <h6>Completed Project</h6>
                                <p>{this.state.completeProject.length}</p>
                            </div>
                            <div>
                                <h6>Cancel Project</h6>
                                <p>0</p>
                            </div>
                            <div>
                                <h6>Active Projects</h6>
                                <p>{this.state.ActiveProject.length}</p>
                            </div>
                        </div>

                        <div className="container2">
                            <div className="heading">
                                <h4>Active Projects</h4>
                            </div>


                            <div className="Active-project-list">
                                {ActiveProject.map(A => (
                                    <div>
                                        <ul>
                                            <li className="Project-Title"><Link to={`/FreelancerActiveProject/${A.Project_name}`}> {A.Project_name}</Link></li>
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

                </div>
            </div>
        )
    }
}
