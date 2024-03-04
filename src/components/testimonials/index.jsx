import React from 'react';
import "./index.scss";
import avatar from "../../assets/Ellipse 11 (3).png";

function Index(props) {
    return (
        <div className={"testimonials"}>
            <div className="text">
                <h1>Testimonials</h1>
                <p>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
            </div>
            <div className="cards">
                <div className="card">
                    <div className="text">
                        <p>“ I believe in lifelong learning and Skola is a great place to learn from experts. I've
                            learned a lot and recommend it to all my friends “</p>
                    </div>
                    <div className="identify">
                        <img src={avatar} alt=""/>
                        <h4>Marvin McKinney</h4>
                        <p>Designer</p>
                    </div>
                </div>
                <div className="card">
                    <div className="text">
                        <p>“ I believe in lifelong learning and Skola is a great place to learn from experts. I've
                            learned a lot and recommend it to all my friends “</p>
                    </div>
                    <div className="identify">
                        <img src={avatar} alt=""/>
                        <h4>Marvin McKinney</h4>
                        <p>Designer</p>
                    </div>
                </div>
                <div className="card">
                    <div className="text">
                        <p>“ I believe in lifelong learning and Skola is a great place to learn from experts. I've
                            learned a lot and recommend it to all my friends “</p>
                    </div>
                    <div className="identify">
                        <img src={avatar} alt=""/>
                        <h4>Marvin McKinney</h4>
                        <p>Designer</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;