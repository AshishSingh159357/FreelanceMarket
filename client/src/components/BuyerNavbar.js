import React, { Component } from 'react'
import './componentCss/BuyerNavbarCss.css';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default class Navbar extends Component {

    constructor(props) {
        super(props)
        const token = localStorage.getItem("token");
        var login = "true";
        const gig=[]

        if (token == null) {
            //this.setState({login:"false"})

            login = "false"
        }


        this.state = {
            SearchValue:"",
            gig,
            login
        }
      
    }



/*
    onTrigger = (event) => {
        this.props.parentCallback(this.state.gig);
        event.preventDefault();
    }
*/









    logout() {
        localStorage.removeItem("token");
    }


    search(event){

        axios.post('http://localhost:3001/SearchGig', {tag:this.state.SearchValue})
        .then(function (response) {
            //   alert(response.data[0].GigTitle);
               
               this.setState({gig:response.data});
   
            }.bind(this));

            //this for passing varible to BuyerInterface
            this.props.parentCallback(this.state.gig);
            event.preventDefault();
    }



    handle(event){
        this.setState({[event.target.name]:event.target.value})
    }



    render() {
        return (
            <div className="nav-back">
                <div class="Buyer-navbar-container">
                  
                  <Link to="/Buyer">  <section class="section-1">
                        Logo
                    </section>
                    </Link>
                    <section class="section-2">
                        <input type="text" class="search-freelancer" name="SearchValue" placeholder="Search Freelancer" onChange={(e) => this.handle(e)}/>
                        <button class="search-freelancer-button" onClick={this.search.bind(this)}>Search</button>
                      
                    </section>
                    <section class="section-3" >
                        <a href="/PostProject"> <button type="button" class="switch-to-freelancer">
                            Post
                        </button></a>

                        <a href="/dashboard"> <button type="button" class="switch-to-freelancer">
                            Switch
                        </button></a>

                        <div class="dropdown">
                        <a href="/" class="dropbtn" onClick={this.logout.bind(this)} className="arrow-container"><img classname="arrow" src="images/arr2.svg" /></a>
                            <div class="dropdown-content">
                                <a href="/OfferList">Request</a>
                                <a href="/ActiveBuyerProject">Active</a>
                                
                                <a href="/" onClick={this.logout.bind(this)}>Log out</a>
                            </div>
                        </div>
                    </section>
                  
                </div>
            </div>

        )
    }
}
