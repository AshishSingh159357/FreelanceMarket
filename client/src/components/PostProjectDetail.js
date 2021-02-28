import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import './componentCss/PostProjectDetailCss.css';
import Navbar from './Navbar';


export default function PostProjectDetail({ match }) {

    const [item, setItem] = useState({});
    const [bid, setBid] = useState(false);



    useEffect(() => {

        axios.get(`http://localhost:3001/Browse/${match.params.id}`).then(res => {
            // alert(res.data);
            setItem(res.data);
            // console.log(res);
        });

    }, [])


    function Bid() {
        setBid(true);

    }

    return (
        <div>
            <Navbar />
            <div className="Project-Detail-Container">
                <div className="Project-Detail">
                    <div className="Project-title">
                        <h3>{item.Project_name}</h3>
                    </div>

                    <div className="Project-Desc">
                        <p>{item.Project_Desc}</p>
                    </div>

                    <div className="Project-Duration-budget">
                        <p>Duration : {item.Duration}</p>
                        <p>Budget : ${item.budget}</p>
                    </div>
                   
                </div>




                <div className="Offer-Detail">
                    <div className="Offer-Price-Duration">
                        <div>
                            <h6>Offer Price</h6>
                            <p className="dollar">$</p><input type="text" />
                        </div>
                        <div>
                            <h6>Duration</h6>
                            <input type="text" /><p className="Days">Days</p>
                        </div>
                    </div>

                    <div className="Offer-Description">
                        <div>
                            <h6>Offer Description</h6>
                           <textarea ></textarea>
                        </div>
                    </div>
                    <div className="Send-Offer-Button">
                        <button onClick={() => Bid()}>Send Offer</button>
                    </div>
                </div>



            </div>
        </div>
    )
}



