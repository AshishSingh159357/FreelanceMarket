import React, { Component } from 'react'
import './componentCss/BuyerNavbarCss.css';


export default class Navbar extends Component {


    logout() {
        localStorage.removeItem("token");
    }

    render() {
        return (
            <div>
                <div class="Buyer-navbar-container">
                    <section class="section-1">
                        Logo
                    </section>
                    <section class="section-2">
                        <input type="text" class="search-freelancer" placeholder="Search Freelancer" />
                        <button class="search-freelancer-button">Search</button>
                    </section>
                    <section class="section-3" >
                        <a href="/PostProject"> <button type="button" class="switch-to-freelancer">
                            Post
                        </button></a>

                        <a href="/dashboard"> <button type="button" class="switch-to-freelancer">
                            Switch
                        </button></a>

                        <div class="dropdown">
                            <button class="dropbtn">Me</button>
                            <div class="dropdown-content">
                                <a href="/OfferList">Offer</a>
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
