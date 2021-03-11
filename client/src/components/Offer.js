import React from 'react';
import Navbar from './BuyerNavbar';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './componentCss/OfferCss.css';


export default function Offer({ match }) {

    const [item, setItem] = useState({});
   



    useEffect(() => {

        axios.get(`http://localhost:3001/OfferList/${match.params.id}`).then(res => {
            // alert(res.data);
            setItem(res.data);
            // console.log(res);
        });

    }, [])






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

               <button className="Accept">Accept</button>
            </div>


        </div>
    </div>
    )
}
