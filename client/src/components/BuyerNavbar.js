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
                        <input type="text" class="search-freelancer" placeholder="search freelancer" />
                        <button class="search-freelancer-button">Search</button>
                    </section>
                    <section class="section-3" >
                        <a href="/dashboard"> <button type="button" class="switch-to-freelancer">
                            Switch
                        </button></a>
                        <a href="#">Log out</a>
                    </section>
                </div>
            </div>
        )
    }
}
