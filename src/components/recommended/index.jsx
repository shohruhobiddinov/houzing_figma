import React from 'react';
import {Card, Carousel} from "antd";
import Img from "../../assets/unsplash_ZtC4_rPCRXA.png";

const {Meta} = Card;
import './index.scss'
import img1 from '../../assets/img.png';
import img2 from '../../assets/img (1).png';
import img3 from '../../assets/img (2).png';
import bed2 from "../../assets/Group (1).png";
import bath2 from "../../assets/bath (1).png";
import car2 from "../../assets/car (1).png";
import ruler2 from "../../assets/ruler (1).png";
import arrow from "../../assets/resize 1.png";
import heart from "../../assets/love 1.png";
import avatar1 from "../../assets/Ellipse 11.png";
import avatar2 from "../../assets/Ellipse 11 (1).png";
import avatar3 from "../../assets/Ellipse 11 (2).png";
import featured from "../../assets/featured.png";
import sale from "../../assets/sale.png";

const contentStyle = {
    height: '80vh',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

function Index(props) {

    return (
        <div className={"recommended"}>
            <div className="text">
                <h1>Recommended</h1>
                <p>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
            </div>

            <div className={"cards"}>
                <Card hoverable cover={<img src={img1} alt=""/>} className={"cardOutside"}>
                    <h3>New Apartment Nice Wiew</h3>
                    <p>Quincy St, Brooklyn, NY, USA</p>
                    <div className="cards">
                        <div className="card">
                            <img src={bed2} alt=""/>
                            <p>4 beds</p>
                        </div>
                        <div className="card">
                            <img src={bath2} alt=""/>
                            <p>5 Baths</p>
                        </div>
                        <div className="card">
                            <img src={car2} alt=""/>
                            <p>1 Garage</p>
                        </div>
                        <div className="card">
                            <img src={ruler2} alt=""/>
                            <p>1200 Sq Ft</p>
                        </div>
                    </div>
                    <img className="avatar" src={avatar1} alt=""/>
                    <img className={"featured"} src={featured} alt=""/>
                    <img className={"sale"} src={sale} alt=""/>
                    <hr/>
                    <div className="footer">
                        <div className="price">
                            <del>$2,800/mo</del>
                            <h4>$7,500/mo</h4>
                        </div>
                        <div className="icons">
                            <img src={arrow} alt=""/>
                            <img src={heart} alt=""/>
                        </div>
                    </div>
                </Card>
                <Card hoverable cover={<img src={img2} alt=""/>} className={"cardOutside"}>
                    <h3>New Apartment Nice Wiew</h3>
                    <p>Quincy St, Brooklyn, NY, USA</p>
                    <div className="cards">
                        <div className="card">
                            <img src={bed2} alt=""/>
                            <p>4 beds</p>
                        </div>
                        <div className="card">
                            <img src={bath2} alt=""/>
                            <p>5 Baths</p>
                        </div>
                        <div className="card">
                            <img src={car2} alt=""/>
                            <p>1 Garage</p>
                        </div>
                        <div className="card">
                            <img src={ruler2} alt=""/>
                            <p>1200 Sq Ft</p>
                        </div>
                    </div>
                    <img className="avatar" src={avatar2} alt=""/>
                    <img className={"featured"} src={featured} alt=""/>
                    <img className={"sale"} src={sale} alt=""/>
                    <hr/>
                    <div className="footer">
                        <div className="price">
                            <del>$2,800/mo</del>
                            <h4>$7,500/mo</h4>
                        </div>
                        <div className="icons">
                            <img src={arrow} alt=""/>
                            <img src={heart} alt=""/>
                        </div>
                    </div>
                </Card>
                <Card hoverable cover={<img src={img3} alt=""/>} className={"cardOutside"}>
                    <h3>New Apartment Nice Wiew</h3>
                    <p>Quincy St, Brooklyn, NY, USA</p>
                    <div className="cards">
                        <div className="card">
                            <img src={bed2} alt=""/>
                            <p>4 beds</p>
                        </div>
                        <div className="card">
                            <img src={bath2} alt=""/>
                            <p>5 Baths</p>
                        </div>
                        <div className="card">
                            <img src={car2} alt=""/>
                            <p>1 Garage</p>
                        </div>
                        <div className="card">
                            <img src={ruler2} alt=""/>
                            <p>1200 Sq Ft</p>
                        </div>
                    </div>
                    <img className="avatar" src={avatar3} alt=""/>
                    <img className={"featured"} src={featured} alt=""/>
                    <img className={"sale"} src={sale} alt=""/>
                    <hr/>
                    <div className="footer">
                        <div className="price">
                            <del>$2,800/mo</del>
                            <h4>$7,500/mo</h4>
                        </div>
                        <div className="icons">
                            <img src={arrow} alt=""/>
                            <img src={heart} alt=""/>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default Index;

