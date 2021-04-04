import React from 'react'
import Navbar from './Navbar';

export default function FreelancerActiveProject({match}) {
    return (
        <div>

            <Navbar />

            <div className="Active-Project-Container">
                <div className="Download-Project">
                    Here you can upload the files!
               <button>upload</button>
                </div>
               


                <div className="Comment">
                  
                    <button className="Done">Done</button>
                </div>
               
            </div>


        </div>
    )
}
