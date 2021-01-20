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
                                <li className="Gig"><a class="nav-item" href="/Gig-detail-submit">Gig</a></li>
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
