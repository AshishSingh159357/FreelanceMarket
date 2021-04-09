import React from 'react';
import './componentCss/ActiveProjectCss.css';
import Navbar from './BuyerNavbar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function ActiveProject({match}) {

    const [state, setstate] = useState({});
   
    
    function star(v) {
        alert(v)
    }

   function review()
    {
       // confirm("Are you sure!");
        axios.post(`http://localhost:3001/Review/${match.params.id}`,state);
    }

    function Comment(event)
    {
       setstate({[event.target.name]:event.target.value});
    }

    function Cancel()
    {
        axios.post(`http://localhost:3001/Cancel/${match.params.id}`);
    }




    return (
        <div>

            <Navbar />

            <div className="Active-Project-Container">
                <div className="Download-Project">
                    You have a Delivery of your Project !
               <button>Download</button>
                </div>
                <div className="Review">
                    <p>Rating</p>
                    <div class="rate">
                        <input type="radio" id="star5" name="rate" value="5" />
                        <label for="star5" title="text">5 stars</label>
                        <input type="radio" id="star4" name="rate" value="4" />
                        <label for="star4" title="text">4 stars</label>
                        <input type="radio" id="star3" name="rate" value="3" />
                        <label for="star3" title="text">3 stars</label>
                        <input type="radio" id="star2" name="rate" value="2" />
                        <label for="star2" title="text">2 stars</label>
                        <input type="radio" id="star1" name="rate" value="1" />
                        <label for="star1" title="text">1 star</label>
                    </div>
                </div>


                <div className="Comment">
                    <p>Comment</p>
                    <textarea cols='104' rows='5' name='comment' onChange={e=>Comment(e)}></textarea>
                    <Link to="/ActiveBuyerProject"><button className="Done" onClick={review}>Done</button></Link>
                    <Link to="/ActiveBuyerProject"><button className="Cancel" onClick={Cancel}>Cancel</button></Link>
                </div>
               
            </div>


        </div>
    )
}
