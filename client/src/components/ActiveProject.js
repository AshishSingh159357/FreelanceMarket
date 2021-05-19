import React from 'react';
import './componentCss/ActiveProjectCss.css';
import Navbar from './BuyerNavbar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function loadRazorpay(src) {
    return new Promise(resolve => {
        const script = document.createElement('script');
        script.src = src
        document.body.appendChild(script);
        script.onload = () => {
            resolve(true)
        }
        script.onerror = () => {
            resolve(false)
        }
        document.body.appendChild(script)

    })

}
export default function ActiveProject({ match }) {

    const [state, setstate] = useState({});
    const [amount, setAmount] = useState({});

    useEffect(() => {
       
   

    });




function star(v) {
    alert(v)
}

function review() {
    // confirm("Are you sure!");
    axios.post(`http://localhost:3001/Review/${match.params.id}`, state);
}

function Comment(event) {
    setstate({ [event.target.name]: event.target.value });
}

function Cancel() {
    axios.post(`http://localhost:3001/Cancel/${match.params.id}`);
}

function Amount() {

}





async function displayRazorpay() {


 axios.post('http://localhost:3001/amountTopay/', { id: match.params.id })
   


    const res = await loadRazorpay('https://checkout.razorpay.com/v1/checkout.js');
    if (!res) {
        alert('Razorpay SDK failed to load. Are you Online?');
        return
    }

    const data = await fetch('http://localhost:3001/razorpay', { method: 'POST' }).then((t) =>
        t.json()
    )





    var options = {
        "key": "rzp_test_xAFR31hwFzwh7u", // Enter the Key ID generated from the Dashboard
        "amount": "45", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": data.currency,
        "name": "Acme Corp",
        "description": "Test Transaction",
        "image": "https://example.com/your_logo",
        "order_id": data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
        "prefill": {
            "name": "Gaurav Kumar",
            "email": "gaurav.kumar@example.com",
            "contact": "9999999999"
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }
    };
    var rzp1 = new window.Razorpay(options);

    rzp1.open();


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
                <textarea cols='104' rows='5' name='comment' onChange={e => Comment(e)}></textarea>
                <Link to="/ActiveBuyerProject"><button className="Done" onClick={review}>Done</button></Link>
                <Link to="/ActiveBuyerProject"><button className="Cancel" onClick={Cancel}>Cancel</button></Link>
                <button className="Pay" onClick={displayRazorpay}>Pay</button>
            </div>

        </div>


    </div>
)
}
