import React from 'react';
import bgImg from "../../assets/img.png";
import "./home.css";


let Home = ()=>{
    return (

        <React.Fragment>
            <div className="landing-page">
                <div className="wrapper">
                    <div className="text-center  d-flex flex-center justify-content-around">
                        <h1 className="display-4">Welcome to Flight Booking Application</h1>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home;