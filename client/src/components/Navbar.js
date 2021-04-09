import React, { Component } from 'react'
import './componentCss/NavbarCss.css';


export default class Navbar extends Component {


    logout() {
        localStorage.removeItem("token");
    }

    render() {
        return (
            <div>

                <div className="Navbar-container">
                    <div className="navbar">

                        <ul>
                            <li className="Dashboard"><a class="nav-item" href="/dashboard">Dashboard</a></li>
                            <li className="Gig"><a class="nav-item" href="/Gig">Gig</a></li>
                            <li className="Gig"><a class="nav-item" href="/Browse">Browse</a></li>
                            <li className="Projects">Projects</li>
                            <li className="Inbox">Inbox</li>
                        </ul>

                        <div className="section-3"> 
                            <a href='/Buyer'><button className="switch-interface">Switch</button></a>

                            <div class="dropdown">

                                <a href="/" class="dropbtn" onClick={this.logout.bind(this)} className="arrow-container"><img classname="arrow" src="images/arr2.svg" /></a>
                                <div class="dropdown-content">
                                <a href="">Account</a>
                                    <a href="/ActiveBuyerProject">Active</a>
                                    <a href="/" onClick={this.logout.bind(this)}>Log out</a>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
