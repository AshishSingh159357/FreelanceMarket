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
                            <li className="Dashboard">Dashboard</li>
                            <li className="Gig">Gig</li>
                            <li className="Projects">Projects</li>
                            <li className="Inbox">Inbox</li>
                        </ul>
                        <div>
                        <button className="switch-interface">Button</button>
                        <a href="/" onClick={this.logout.bind(this)}>log out</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
