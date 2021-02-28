import React, { Component } from 'react'
import Navbar from './Navbar';
import './componentCss/BrowseProjectCss.css'
import axios from 'axios';
import { BrowserRouter as Router, Switch, Redirect, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';

export default class BrowseProject extends Component {

    constructor(props) {
        super(props)
        const token = localStorage.getItem("token");
        var login = "true";
        const PostProject = [];


        if (token == null) {

            login = "false"
        }
        this.state = {
           
            PostProject,
            login
        }

       this.ProjectDetail= this.ProjectDetail.bind(this);

    }

    ProjectDetail = (Project_name) => {
       // alert(event.target.innerText);   
     // alert(n);
     
     //<Redirect to="/dashboard"/>
     //alert(Project_name);
      //localStorage.setItem("Post_Project_name",Project_name);
     
    
    
    }


    componentDidMount() {

        axios.post('http://localhost:3001/Browse')
            .then(function (response) {

                this.setState({ PostProject: response.data });

            }.bind(this));
    }



    render() {
      
        var { PostProject } = this.state;

        return (
            <div>
                <Navbar />
                <div className="Post-Project-Container">
                    <div className="filter">
                        <p>Web application</p>
                        <p>100$</p>
                    </div>




                    <div className="Post-Projects-container">
                        <div className="Post-Project-first-row">
                            <input type="text" className="search-project" placeholder="Search for Projects" />
                            <input type="submit" className="Search-Project-Button" value="Search"></input>
                        </div>


                        {PostProject.map(P => (
                            <Link to={`/Browse/${P.Project_name}`}><div className="Post-Project" onClick={() => this.ProjectDetail(P.Project_name)}>
                                <p >{P.Project_name}</p>
                                <p>${P.budget}</p>
                            </div>
                            </Link>
                           

                        ))}

                    </div>
                </div>
            </div>
        )
    }
}





class rr extends Component {
    render() {
        return (
            <div>
                <h1>sadsa</h1>
            </div>
        )
    }
}