import React, { Component } from 'react';
import './componentCss/GigDetailCss.css';

import { BrowserRouter as Router, Switch, Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from './BuyerNavbar';

export default class PostProject extends Component {

    constructor(props) {
        super(props)
        const token = localStorage.getItem("token");
        var login = "true";


        if (token == null) {
            //this.setState({login:"false"})

            login = "false"
        }


        this.state = {
         
            gigTitle: "",
            gigDescription: "",
            gigPricing: 0,
            gigDeliveryTime: 0,
            gigSkill: "",
            login
        }

    }



    Post() {
      
       
        var data = {
          
            Title: this.state.gigTitle,
            username: localStorage.getItem("token"),
            Description: this.state.gigDescription,
            Pricing: this.state.gigPricing,
            DeliveryTime: this.state.gigDeliveryTime,
            gigSkill: this.state.gigSkill
        }

        axios.post('http://localhost:3001/PostProject', data)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        alert("Project Posted Successful");
    }





    /*  handleChange(event) {
          this.setState({
              file: URL.createObjectURL(event.target.files[0])
          })
      }*/


    onChangeInput(event) {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({ [name]: value });
    }



    render() {
        if (this.state.login == "false") {
            return <Redirect to="/" />
        }
        return (
            <div className="gig-main-container">

                <Navbar />


                <div className="gig-create-container">
                    <div className="gig-detail">
                        <label for="gig-title">Title :</label>
                        <input className="Input-Style" type="text" name="gigTitle" onChange={(e) => this.onChangeInput(e)} />

                        <label for="gig-description" >Description :</label>
                        <textarea className="gig-description" name="gigDescription" rows="10" cols="10" onChange={(e) => this.onChangeInput(e)} />

                        <label for="gig-skill">Skills :</label>
                        <input className="Input-Style" type="text" name="gigSkill" onChange={(e) => this.onChangeInput(e)} />


                        <div className="small-detail">

                            <label for="gig-pricing" >Pricing :</label>
                            <input className="Input-Style" type="text" name="gigPricing" onChange={(e) => this.onChangeInput(e)} />

                            <label for="gig-deliveryTime" >Delivery Time :</label>
                            <input className="Input-Style" type="text" name="gigDeliveryTime" onChange={(e) => this.onChangeInput(e)} />

                        </div>

                        <div className="submit-gig-detail">
                            <button className="submit-post-detail-button" onClick={this.Post.bind(this)}>Submit</button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
