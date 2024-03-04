import React from 'react';
import './index.scss';
import {Button} from "antd";

function Index(props) {
    return (
        <div className={"vermonth"}>
            <div className="blur">
                <h1>Vermont Farmhouse With Antique Jail Is <br/>
                    the Week's Most Popular Home</h1>
                <Button size={"large"} style={{borderRadius: 0}} type={"primary"}>Read More</Button>
            </div>
        </div>
    );
}

export default Index;