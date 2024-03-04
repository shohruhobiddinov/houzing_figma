import React from 'react';
import './index.scss';
import Houzing from '../../assets/logo.png';
import {Button} from "antd";
import {UpOutlined} from "@ant-design/icons";
import pin from '../../assets/pin.png';
import phone from '../../assets/phone.png';
import email from '../../assets/email 1.png';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import instageam from '../../assets/instageam.png';
import linkedin from '../../assets/linkedin.png';

function Index(props) {
    return (
        <div className={"footer"}>
            <div className="top">
                <div className="first">
                    <h3>Contact Us</h3>
                    <div className="contact">
                        <img src={pin} alt=""/>
                        <p>329 Queensberry Street, North Melbourne VIC 3051, Australia.</p>
                    </div>
                    <div className="contact">
                        <img src={phone} alt=""/>
                        <p>123 456 7890</p>
                    </div>
                    <div className="contact">
                        <img src={email} alt=""/>
                        <p>support@houzing.com</p>
                    </div>
                    <div className="icons">
                        <img src={facebook} alt=""/>
                        <img src={twitter} alt=""/>
                        <img src={instageam} alt=""/>
                        <img src={linkedin} alt=""/>
                    </div>
                </div>
                <div className="card">
                    <h3>Discover</h3>
                    <p>Chicago</p>
                    <p>Los Angeles</p>
                    <p>Miami</p>
                    <p>New York</p>
                </div>
                <div className="card">
                    <h3>Lists by Category</h3>
                    <p>Apartments</p>
                    <p>LCondos</p>
                    <p>Houses</p>
                    <p>Offices</p>
                </div>
                <div className="card">
                    <h3>Lists by Category</h3>
                    <p>About Us</p>
                    <p>Terms & Conditions</p>
                    <p>Support Center</p>
                    <p>Contact Us</p>
                </div>
            </div>
            <hr/>
            <div className="bottom">
                <img src={Houzing} alt=""/>
                <p>Copyright © 2021 CreativeLayers. All Right Reserved.</p>
                <Button icon={<UpOutlined/>} type={"primary"}></Button>
            </div>
        </div>
    );
}

export default Index;