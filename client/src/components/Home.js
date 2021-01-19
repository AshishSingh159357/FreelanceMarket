import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Redirect, Link } from 'react-router-dom';



export default class Home extends Component {
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



    logout() {
        localStorage.removeItem("token");
    }


    render() {
        if (this.state.login == "false") {
            return <Redirect to="/" />
        }
        return (
            <div>
                {this.state.login}
                Welcome to FreelanceMarket
                <Link to="/" onClick={this.logout.bind(this)}>ok</Link>
            </div>
        )

    }
}
