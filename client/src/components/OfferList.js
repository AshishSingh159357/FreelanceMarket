import React, { Component } from 'react'
import Navbar from './BuyerNavbar';
import './componentCss/BrowseProjectCss.css'
import axios from 'axios';
import { BrowserRouter as Router, Switch, Redirect, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';

export default class OfferList extends Component {

    constructor(props) {
        super(props)
        const token = localStorage.getItem("token");
        var login = "true";
        const OfferList = [];


        if (token == null) {

            login = "false"
        }
        this.state = {
           
            OfferList,
            login
        }

    

    }

  

    componentDidMount() {

        axios.post('http://localhost:3001/OfferList',{user:localStorage.getItem("token")})
            .then(function (response) {
                //alert(response.data[1].Project_name)
                this.setState({ OfferList: response.data });

            }.bind(this));
    }



    render() {
      
        var { OfferList } = this.state;

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
                          <h3> Buyer Offers </h3>
                        </div>


                        {OfferList.map(O => (
                            <Link to={`/OfferList/${O.Project_id}`}><div className="Post-Project" >
                                <p >{O.Bid_Username}</p>
                                <p>${O.Amount}</p>
                            </div>
                            </Link>
                           

                        ))}

                    </div>
                </div>
            </div>
        )
    }
}





