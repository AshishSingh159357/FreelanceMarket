import React, { Component } from 'react'
import './componentCss/NavbarCss.css';


export default class Navbar extends Component {

 
    logout() {
        localStorage.removeItem("token");
    }

    render() {
        return (
            <div>
                <div class="Navbar-container">
                    <div class="navbar">
                        <ul>
                            <li class="Dashboard">Dashboard</li>
                            <li class="Gig">Gig</li>
                            <li class="Projects">Projects</li>
                            <li class="Inbox">Inbox</li>
                        </ul>
                        <div>
                        <button class="switch-interface">Button</button>
                        <a href="/" onClick={this.logout.bind(this)}>log out</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
