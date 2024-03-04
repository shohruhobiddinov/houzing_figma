import React from 'react';
import './index.scss';
import discord from "../../assets/discord (1).png";
import house from "../../assets/house 1.png";
import calculator from "../../assets/calculator.png";
import map from "../../assets/maps.png";

function Index(props) {
    return (
        <div className={"choose"}>
            <div className="text">
                <h1>Why Choose Us?</h1>
                <p>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
            </div>
            <div className="cards">
                <div className="card">
                    <img src={discord} alt=""/>
                    <h4>Trusted By Thousands</h4>
                    <p>With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</p>
                </div>
                <div className="card">
                    <img src={house} alt=""/>
                    <h4>Wide Renge Of Properties</h4>
                    <p>With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</p>
                </div>
                <div className="card">
                    <img src={calculator} alt=""/>
                    <h4>Financing Made Easy</h4>
                    <p>With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</p>
                </div>
                <div className="card">
                    <img src={map} alt=""/>
                    <h4>See Neighborhoods</h4>
                    <p>With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</p>
                </div>
            </div>
        </div>
    );
}

export default Index;