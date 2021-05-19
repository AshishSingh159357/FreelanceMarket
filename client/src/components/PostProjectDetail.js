import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import './componentCss/PostProjectDetailCss.css';
import Navbar from './Navbar';


export default function PostProjectDetail({ match }) {

    const [item, setItem] = useState({});
    const [skill, setSkill] = useState({});
    const [bid, setBid] = useState({});
    const [Price, setPrice] = useState({});
    const [Duration, setDuration] = useState({});

    const [Detail, setDetail] = useState({});


    useEffect(() => {

        axios.get(`http://localhost:3001/Browse/${match.params.id}`).then(res => {
            // alert(res.data);
            setItem(res.data);
            // console.log(res);
        });

    }, [])




    function onChangeInput(event) {
        var name = event.target.name;
        var value = event.target.value;
        setBid({ [name]: value });
        setDetail({ Error: "" });
    }
    function onChangeInput2(event) {
        var name = event.target.name;
        var value = event.target.value;
        setPrice({ [name]: value });
        setDetail({ Error: "" });
    }
    function onChangeInput3(event) {
        var name = event.target.name;
        var value = event.target.value;
        setDuration({ [name]: value });
        setDetail({ Error: "" });
    }





    function Bid() {
        var data = {
            BidUsername: localStorage.getItem("token"),
            PostProjectId: item.Project_id,
            Price: Price.Price,
            Duration: Duration.Duration,
            Description: bid.Description
        }

        if (!Price.Price || !Duration.Duration || !bid.Description) {
            setDetail({ Error: "Feilds Should not be Empty" });
            return
        }

        axios.post('http://localhost:3001/Bid', data)
            .then(function (response) {
                // alert(data.Price);
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        alert("Offer Send Successfully");
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

                        <div className="Skill-section">
                            <h6>Skill Required :</h6>
                            <div className="Skills">
                                <p>python</p>
                                <p>java</p>
                                <p>kotlin</p>
                            </div>

                        </div>
                    </div>


                    <div className="Project-Duration-budget">
                        <p>Duration : {item.Duration} Days</p>
                        <p>Budget : ${item.budget}</p>
                    </div>

                </div>





                <div className="Offer-Detail">
                    <div className="Offer-Price-Duration">
                        <div>
                            <h6>Offer Price</h6>
                            {/**<p className="dollar">$</p> */} <input type="text" name="Price" onChange={(e) => onChangeInput2(e)} />
                        </div>
                        <div>
                            <h6>Duration</h6>
                            <input type="text" name="Duration" onChange={(e) => onChangeInput3(e)} />{/*<p className="Days">Days</p>*/}                        </div>
                    </div>


                    <div className="Offer-Description">
                        <div>
                            <h6>Offer Description</h6>
                            <textarea name="Description" onChange={(e) => onChangeInput(e)}></textarea>
                        </div>
                    </div>

                    <div style={{ color: 'red' }}>
                        {Detail.Error}
                    </div>

                    
                    <div className="Send-Offer-Button">
                        <button onClick={() => Bid()} >Send Offer</button>
                    </div>
                </div>








            </div>
        </div>
    )
}



