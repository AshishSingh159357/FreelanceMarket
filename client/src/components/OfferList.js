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

        axios.post('http://localhost:3001/OfferList', { user: localStorage.getItem("token") })
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
                <div class="table-container">

                    <table class="content-table">
                        <thead>
                            <tr>
                                <td><h3>Buyer Requests</h3></td>
                                <td></td>
                                <td></td>
                             
                                <td class="last-column"></td>
                            </tr>
                        </thead>
                        <thead class="table-heading">
                            <tr>
                                <th class="column-1">Project Title</th>
                                <th>Freelancer</th>
                                <th>Bid_Amount</th>
                                <th>Delivery Time</th>
                              
                            </tr>
                        </thead>


                        {OfferList.map(o => (
                            <tr class="row-content">
                                <Link to={`/OfferList/${o.Project_id}`}>
                                    <td class="column-1-content">
                                        {o.Project_name}
                                    </td>
                                </Link>
                                <td>{o.Bid_Username}</td>
                                <td>${o.Amount}</td>
                                <td>{o.Delivery_Time} days</td>
                               
                            </tr>

                        ))}

                    </table>
                </div>

            </div>
        )
    }
}





