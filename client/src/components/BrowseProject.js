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

            SearchValue: "",
            PostProject,
            login
        }

        //   this.ProjectDetail= this.ProjectDetail.bind(this);

    }

    /* ProjectDetail = (Project_name) => {
        // alert(event.target.innerText);   
      // alert(n);
      
      //<Redirect to="/dashboard"/>
      //alert(Project_name);
       //localStorage.setItem("Post_Project_name",Project_name);
      
     
     
     }*/


    componentDidMount() {

        axios.post('http://localhost:3001/Browse')
            .then(function (response) {

                this.setState({ PostProject: response.data });

            }.bind(this));
    }


    SearchProject(event) {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({ [name]: value });
    }


    SearchButton() {
        var data = {
            SearchValue: this.state.SearchValue
        };
        axios.post('http://localhost:3001/SearchValue', data)
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
                            <input type="text" className="search-project" placeholder="Your Skill" name="SearchValue" onChange={(e) => this.SearchProject(e)} />
                            <button className="Search-Project-Button" onClick={this.SearchButton.bind(this)}>Search</button>
                        </div>


                        {PostProject.map(P => (
                           
                                <div className="Post-Project">
                                     <a  href={`/Browse/${P.Project_name}`}>
                                    <div className="Post-Project-section-1">
                                        <h6>{P.Project_name}</h6>
                                        <p>Pricing : ${P.budget}</p>
                                    </div> 
                                    </a>
                                    <div className="Post-Project-section-2">
                        <p>{P.Project_Desc}</p>
                                    </div>

                                </div>
                            
                           
                        ))}



                    </div>
                </div>
            </div>
        )
    }
}




