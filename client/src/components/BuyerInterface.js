import React, { Component } from 'react';
import './componentCss/BuyerInterfaceCss.css';
import Navbar from './BuyerNavbar';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Redirect, Link } from 'react-router-dom';



export default class BuyerInterface extends Component {
    constructor(props) {
        super(props)
        const gigs = [];
        const token = localStorage.getItem("token");
        var login = "true";
        //var data=[]


        if (token == null) {
            //this.setState({login:"false"})

            login = "false"
        }

        this.state = {
            // data,
            gigs,
            login
        }
    }

    handleCallback = (childData) => {
        this.setState({ gigs: childData })
    }



    componentDidMount() {

        axios.get('http://localhost:3001/GigAll')
            .then(function (response) {
                //alert(response.data[0].GigTitle);


                this.setState({ gigs: response.data });

            }.bind(this));

        // alert(this.state.GigDetail);
    }




    render() {
        if (this.state.login == "false") {
            return <Redirect to="/" />
        }

        var { gigs } = this.state;
        const { data } = this.state;

        return (
            <div>
                <Navbar parentCallback={this.handleCallback} />
                <div class="freelnacer-gigs-container">

                    {gigs.map(Gig => (
                        <div class="freelancer-gig">

                            <div>
                                <img src='images/website.jpg' />
                            </div>

                            <div className="gig-detail">
                                <p>{Gig.UserName}</p>
                                <h6>{Gig.GigTitle}</h6>
                                <h6>4.5</h6>
                                <h6>${Gig.Pricing}</h6>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        )
    }
}
