import React, { Component } from 'react';
import './componentCss/GigDetailCss.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Redirect, Link } from 'react-router-dom';
import axios from 'axios';


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
            gigTitle: "",
            gigDescription: "",
            gigPricing: 0,
            gigDeliveryTime: 0,
            gigRevision: "",
            gigSkill: "",
            gigDescription: "",
            error: "",
            login
        }
        this.handleChange = this.handleChange.bind(this);
    }



    validateForm() {

        if (!this.state.gigTitle || !this.state.gigDescription || !this.state.gigPricing || !this.state.gigDeliveryTime || !this.state.gigRevision || !this.state.gigSkill || !this.state.gigRequirement) {
            this.setState({ error: "Field should not be empty" })
            return;
        }


        var data = {

            file: this.state.file,
            gigTitle: this.state.gigTitle,
            username: localStorage.getItem("token"),
            gigDescription: this.state.gigDescription,
            gigPricing: this.state.gigPricing,
            gigDeliveryTime: this.state.gigDeliveryTime,
            gigRevision: this.state.gigRevision,
            gigSkill: this.state.gigSkill,
            gigRequirement: this.state.gigRequirement,
            gigTag:this.state.gigTag
        }

        axios.post('http://localhost:3001/GigDetail', data)
            .then(function (response) {
                if(response.data=="0"){
                    this.setState({error:"Srry error from server"})
                }
                else{
                    alert("Gig Created Successfully")
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }





    handleChange(event) {
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
        })
        //alert(this.state.file);
    }


    onChangeInput(event) {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({ [name]: value });
        this.setState({error:""});
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
                        <textarea className="gig-description" name="gigDescription" rows="15" cols="10" onChange={(e) => this.onChangeInput(e)} />
                        <div className="small-detail">
                            <label for="gig-pricing" >Pricing :</label>
                            <input className="Input-Style" type="text" name="gigPricing" onChange={(e) => this.onChangeInput(e)} />

                            <label for="gig-deliveryTime" >Delivery Time :</label>
                            <input className="Input-Style" type="text" name="gigDeliveryTime" onChange={(e) => this.onChangeInput(e)} />

                            <label for="gig-revision" >Revision :</label>
                            <input className="Input-Style" type="text" name="gigRevision" onChange={(e) => this.onChangeInput(e)} />
                        </div>

                        <label for="gig-skill" >Skills :</label>
                        <input className="Input-Style" type="text" name="gigSkill" onChange={(e) => this.onChangeInput(e)} />

                        <label for="gig-tag" >Tags :</label>
                        <input className="Input-Style" type="text" name="gigTag" onChange={(e) => this.onChangeInput(e)} />

                        <label for="gig-requirement">Requirement :</label>
                        <textarea className="gig-requirement" name="gigRequirement" rows="5" cols="10" onChange={(e) => this.onChangeInput(e)} />


                        <div className="upload-image-section">
                            <input type="file" name="file" onChange={this.handleChange} />
                            <img src={this.state.file} />
                        </div>

                        <div style={{color:"red"}}>{this.state.error}</div>
                        <div className="submit-gig-detail">
                        <button className="submit-gig-detail-button" onClick={this.validateForm.bind(this)}>Submit</button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
