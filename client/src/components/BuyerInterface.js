import React, { Component } from 'react';
import './componentCss/BuyerInterfaceCss.css';
import Navbar from './BuyerNavbar';
import axios from 'axios';
export default class BuyerInterface extends Component {
    constructor(props){
        super(props)
        const gigs=[];

        this.state={
            gigs
        }
    }


    componentDidMount() {
       
        axios.get('http://localhost:3001/GigAll')
           .then(function (response) {
              //alert(response.data[0].GigTitle);
           
              
              this.setState({gigs:response.data});
  
           }.bind(this));
  
         // alert(this.state.GigDetail);
      }




    render() {

        var { gigs }=this.state;

        return (
            <div>
               <Navbar/>
                <div class="freelnacer-gigs-container">

                    {gigs.map(Gig=>(
                         <div class="freelancer-gig">
                         <div>
                             <img src="website.jpg" />
                         </div>
                         <small>{Gig.UserName}</small>
                         <strong>{Gig.GigTitle}</strong>
                         <b>4.5</b>
                         <b>{Gig.Pricing}</b>
                     </div>
                    ))}

                </div>
            </div>
        )
    }
}
