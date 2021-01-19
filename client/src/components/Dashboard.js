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
            <div>

                <Navbar/>


                <div className="container2">
                    <div className="heading">
                        <h4>On Going Projects</h4>
                    </div>
                    <div className="Active-project-list">
                        <ul>
                            <li className="Project-Title"><a href="#">ProjectTitle</a></li>
                            <li className="Duration">Duration</li>
                            <li className="Pricing">Pricing</li>
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
