import React, { Component } from 'react'
import './componentCss/DashboardCss.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Redirect, Link } from 'react-router-dom';


export default class Dashboard extends Component {


    constructor(props) {
        super(props)
        const token = localStorage.getItem("token");
        var login = "true";


        if (token == null) {
            //this.setState({login:"false"})

            login = "false"
        }
        this.state = {
            login
        }

    }




    render() {
        if (this.state.login == "false") {
            return <Redirect to="/" />
        }
        return (
            <div class="DashboardContainer">

                <Navbar />

                <div className="container2">
                    <div className="heading">
                        <h4>Active Projects</h4>
                    </div>
                    <div className="Active-project-list">
                        <ul>
                            <li className="Project-Title"><a href="#">1. Make Hotel management Web-app</a></li>
                            <li className="Duration">3 Days</li>
                            <li className="Pricing">$100</li>
                        </ul>
                        <div className="Requirement">
                            <h5>Requirement :</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus beatae omnis quasi in officia
                            perspiciatis quaerat nam accusamus ad obcaecati ab nostrum illum necessitatibus nesciunt id deserunt
                            inventore nobis aperiam, magnam, consequuntur voluptates eius possimus rerum placeat. Nobis, sed
                            quas. In vitae consequuntur quod sint repellat explicabo suscipit assumenda illo quis minus, alias
                            dolores sequi!</p>
                            <h5>Delivery Time</h5>
                            <p>2days ago</p>

                        </div>

                    </div>


                    <div className="Active-project-list">
                        <ul>
                            <li className="Project-Title"><a href="#">2. Music Web-app</a></li>
                            <li className="Duration">3 Days</li>
                            <li className="Pricing">$100</li>
                        </ul>
                        <div className="Requirement">
                            <h5>Requirement :</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus beatae omnis quasi in officia
                            perspiciatis quaerat nam accusamus ad obcaecati ab nostrum illum necessitatibus nesciunt id deserunt
                            inventore nobis aperiam, magnam, consequuntur voluptates eius possimus rerum placeat. Nobis, sed
                            quas. In vitae consequuntur quod sint repellat explicabo suscipit assumenda illo quis minus, alias
                            dolores sequi!</p>
                            <h5>Delivery Time</h5>
                            <p>2days ago</p>

                        </div>

                    </div>

                    <div className="Active-project-list">
                        <ul>
                            <li className="Project-Title"><a href="#">3. Make Transprotation management Web-app</a></li>
                            <li className="Duration">3 Days</li>
                            <li className="Pricing">$100</li>
                        </ul>
                        <div className="Requirement">
                            <h5>Requirement :</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus beatae omnis quasi in officia
                            perspiciatis quaerat nam accusamus ad obcaecati ab nostrum illum necessitatibus nesciunt id deserunt
                            inventore nobis aperiam, magnam, consequuntur voluptates eius possimus rerum placeat. Nobis, sed
                            quas. In vitae consequuntur quod sint repellat explicabo suscipit assumenda illo quis minus, alias
                            dolores sequi!</p>
                            <h5>Delivery Time</h5>
                            <p>2days ago</p>

                        </div>
                    </div>


                    <div className="Active-project-list">
                        <ul>
                            <li className="Project-Title"><a href="#">4. Restaurant application</a></li>
                            <li className="Duration">3 Days</li>
                            <li className="Pricing">$100</li>
                        </ul>
                        <div className="Requirement">
                            <h5>Requirement :</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus beatae omnis quasi in officia
                            perspiciatis quaerat nam accusamus ad obcaecati ab nostrum illum necessitatibus nesciunt id deserunt
                            inventore nobis aperiam, magnam, consequuntur voluptates eius possimus rerum placeat. Nobis, sed
                            quas. In vitae consequuntur quod sint repellat explicabo suscipit assumenda illo quis minus, alias
                            dolores sequi!</p>
                            <h5>Delivery Time</h5>
                            <p>2days ago</p>

                        </div>
                    </div>


                </div>
            </div>
        )
    }
}
