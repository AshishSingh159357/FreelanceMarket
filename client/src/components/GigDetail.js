import React, { Component } from 'react';
import './componentCss/GigDetailCss.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Redirect, Link } from 'react-router-dom';

export default class GigDetail extends Component {

    constructor(props) {
        super(props)
        const token = localStorage.getItem("token");
        var login = "true";


        if (token == null) {
            //this.setState({login:"false"})

            login = "false"
        }
      

        this.state = {
            file: null,
            login
        }
        this.handleChange = this.handleChange.bind(this);
    }




    handleChange(event) {
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
        })
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
                        <input className="Input-Style" type="text" name="gig-title" />

                        <label for="gig-description" >Description :</label>
                        <textarea className="gig-description" name="gig-description" rows="15" cols="10"></textarea>
                        <div className="small-detail">
                            <label for="gig-pricing" >Pricing :</label>
                            <input className="Input-Style" type="text" name="gig-pricing" />

                            <label for="gig-deliveryTime" >Delivery Time :</label>
                            <input className="Input-Style" type="text" name="gig-deliveryTime" />

                            <label for="gig-revision" >Revision :</label>
                            <input className="Input-Style" type="text" name="gig-revision" />
                        </div>

                        <label for="gig-skill" >Skill :</label>
                        <input className="Input-Style" type="text" name="gig-skill" />

                        <label for="gig-requirement">Requirement :</label>
                        <textarea className="gig-requirement" name="gig-description" rows="5" cols="10"></textarea>


                        <div className="upload-image-section">
                            <input type="file" onChange={this.handleChange} />

                            <img src={this.state.file} />

                        </div>


                        <div className="submit-gig-detail">
                            <button className="submit-gig-detail-button">Submit</button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
