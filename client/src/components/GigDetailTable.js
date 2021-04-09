import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Redirect, Link } from 'react-router-dom';
import './componentCss/GigDetailTableCss.css';
import Nav from './Navbar';
import axios from 'axios';

export default class GigDetailTable extends Component {

    constructor(props) {
        super(props)
        const token = localStorage.getItem("token");
        var login = "true";
       const GigDetail=[];


        if (token == null) {
            //this.setState({login:"false"})
            login = "false"
        }
        this.state = {
        
            GigDetail,
            login
        }
      
this.delete=this.delete.bind(this)
    }


    delete(id){

        axios.post("http://localhost:3001/GigDelete",{id:id});
        this.componentDidMount();

    }




    componentDidMount() {

      axios.post('http://localhost:3001/Gig',{username:localStorage.getItem("token")})
         .then(function (response) {
         //   alert(response.data[0].GigTitle);
            
            this.setState({GigDetail:response.data});

         }.bind(this));

       // alert(this.state.GigDetail);
    }



    render() {

        var { GigDetail,login }=this.state;

        if (this.state.login == "false") {
            return <Redirect to="/" />
        }
        return (
            <div>
                <Nav />
                <div class="table-container">

                    <table class="content-table">
                        <thead>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td class="last-column"><a href="/Gig-detail-submit"><button>Create</button></a></td>
                            </tr>
                        </thead>
                        <thead class="table-heading">
                            <tr>
                                <th class="column-1">Gig Title</th>
                                <th>Clicks</th>
                                <th>Impression</th>
                                <th>Orders</th>
                                <th class="last-column"></th>
                            </tr>
                        </thead>


                        { GigDetail.map(GigDetails=>(
                            <tr class="row-content">
                            <td class="column-1-content">
                           {GigDetails.GigTitle}
                            </td>
                            <td>{GigDetails.Clicks}</td>
                            <td>{GigDetails.Impression}</td>
                            <td>5</td>
                            <td class="last-column"><input classname="delete-gig" type="submit" value="Delete" onClick={this.delete(GigDetails.GigId)}/></td>
                        </tr>

                        ))}
  
                    </table>
                </div>

            </div>
        )
    }
}
