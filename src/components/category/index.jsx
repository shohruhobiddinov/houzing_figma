import React from 'react';
import './index.scss';
import home from "../../assets/home 1.png";
import apartment from "../../assets/apartment.png";
import office from "../../assets/business-and-trade.png";
import villa from "../../assets/villa.png"

function Index(props) {
    return (
        <div className={"category"}>
            <div className="text">
                <h1>Category</h1>
                <p>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
            </div>
            <div className="cards">
                <div className="card">
                    <img src={home} alt=""/>
                    <h3>Home</h3>
                </div>
                <div className="card">
                    <img src={apartment} alt=""/>
                    <h3>Apartment</h3>
                </div>
                <div className="card">
                    <img src={office} alt=""/>
                    <h3>Office</h3>
                </div>
                <div className="card">
                    <img src={villa} alt=""/>
                    <h3>Villa</h3>
                </div>
            </div>
        </div>
    );
}

export default Index;