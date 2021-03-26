import React from 'react';
import Navbar from './BuyerNavbar';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './componentCss/OfferCss.css';
import { Link } from 'react-router-dom';


export default function Offer({ match }) {

    const [item, setItem] = useState({});
   



    useEffect(() => {

        axios.get(`http://localhost:3001/OfferList/${match.params.id}`).then(res => {
            // alert(res.data);
            setItem(res.data);
            // console.log(res);
        });

    }, [])



    function Accept(){
       var data={
            Project_id:item.Post_Project_id
        }

        axios.post('http://localhost:3001/ActiveProject',data).then(res => {
            // alert(res.data);
            // console.log(res);
            if(res.data=="1"){
                alert("Accepted");
            }
            else{
                alert("error while Accepting");
            }
        });

    }



    return (
        <div>
        <Navbar />
        <div className="Project-Detail-Container">
            <div className="Offer-Detail">
                <div className="Project-title">
                    <h3>{item.Bid_Username}</h3>
                </div>

                <div className="Project-Desc">
                    <p>{item.Description}</p>
                </div>

                <div className="Project-Duration-budget">
                    <p>Duration : {item.Delivery_Time}</p>
                    <p>Budget : ${item.Amount}</p>
                </div>

              <Link to={`/ActiveBuyerProject/${item.Post_Project_id}`}><button className="Accept" onClick={Accept}>Accept</button></Link>
            </div>


        </div>
    </div>
    )
}
