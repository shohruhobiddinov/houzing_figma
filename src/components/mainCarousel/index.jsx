import React from 'react';
import {Button, Carousel, Input} from 'antd';
import './index.scss';
import bed from '../../assets/bed.png';
import bath from '../../assets/bath.png';
import car from '../../assets/car.png';
import ruler from '../../assets/ruler.png';
import Home from "../../assets/Vector (6).png";
import CarKey from "../../assets/car-key 1.png";
import Price from "../../assets/price 1.png";
import Advanced from "../../assets/Group.png";
import {SearchOutlined} from "@ant-design/icons";

const App = () => (
    <Carousel className={"mainCarousel"}>
        <div className={"page1"}>
            <div className="blur">
                <h1>Skyper Pool Partment</h1>
                <h4>112 Glenwood Ave Hyde Park, Boston, MA</h4>
                <div className="cards">
                    <div className="card">
                        <img src={bed} alt=""/>
                        <p>4 beds</p>
                    </div>
                    <div className="card">
                        <img src={bath} alt=""/>
                        <p>5 Baths</p>
                    </div>
                    <div className="card">
                        <img src={car} alt=""/>
                        <p>1 Garage</p>
                    </div>
                    <div className="card">
                        <img src={ruler} alt=""/>
                        <p>1200 Sq Ft</p>
                    </div>
                </div>
                <h2>$5,250/mo</h2>
                <Button className={"button"}>Read more</Button>
                <div className="navbarBottom">
                    <Input className="input" placeholder={"Enter an address, neighborhood, city, or ZIP code"} prefix={<img src={Home} alt=""/>}/>
                    <Input className="input" prefix={<img src={CarKey} alt=""/>} placeholder={"Status"}/>
                    <Input className="input" prefix={<img src={Price} alt=""/>} placeholder={"Price"}/>
                    <div className="buttons">
                        <Button className="button" icon={<img src={Advanced} alt=""/>}>Advanced</Button>
                        <Button className="button" icon={<SearchOutlined/>} type={"primary"}>Search</Button>
                    </div>
                </div>
            </div>
        </div>

        <div className={"page2"}>
            <div className="blur">
                <h1>Trusted By Thousands</h1>
                <h4>With over 1 million+ homes for sale available</h4>
                <div className="cards">
                    <div className="card">
                        <img src={bed} alt=""/>
                        <p>10 beds</p>
                    </div>
                    <div className="card">
                        <img src={bath} alt=""/>
                        <p>6 Baths</p>
                    </div>
                    <div className="card">
                        <img src={car} alt=""/>
                        <p>7 Garage</p>
                    </div>
                    <div className="card">
                        <img src={ruler} alt=""/>
                        <p>1200 Sq Ft</p>
                    </div>
                </div>
                <h2>$8,400/mo</h2>
                <Button className={"button"}>Read more</Button>
                <div className="navbarBottom">
                    <Input className="input" placeholder={"Enter an address, neighborhood, city, or ZIP code"}
                           prefix={<img src={Home} alt=""/>}/>
                    <Input className="input" prefix={<img src={CarKey} alt=""/>} placeholder={"Status"}/>
                    <Input className="input" prefix={<img src={Price} alt=""/>} placeholder={"Price"}/>
                    <div className="buttons">
                        <Button className="button" icon={<img src={Advanced} alt=""/>}>Advanced</Button>
                        <Button className="button" icon={<SearchOutlined/>} type={"primary"}>Search</Button>
                    </div>
                </div>
            </div>
        </div>

        <div className={"page3"}>
            <div className="blur">
                <h1>Wide Renge Of Properties</h1>
                <h4>Nulla quis curabitur velit volutpat </h4>
                <div className="cards">
                    <div className="card">
                        <img src={bed} alt=""/>
                        <p>6 beds</p>
                    </div>
                    <div className="card">
                        <img src={bath} alt=""/>
                        <p>8 Baths</p>
                    </div>
                    <div className="card">
                        <img src={car} alt=""/>
                        <p>2 Garage</p>
                    </div>
                    <div className="card">
                        <img src={ruler} alt=""/>
                        <p>4000 Sq Ft</p>
                    </div>
                </div>
                <h2>$8,000/mo</h2>
                <Button className={"button"}>Read more</Button>
                <div className="navbarBottom">
                    <Input className="input" placeholder={"Enter an address, neighborhood, city, or ZIP code"}
                           prefix={<img src={Home} alt=""/>}/>
                    <Input className="input" prefix={<img src={CarKey} alt=""/>} placeholder={"Status"}/>
                    <Input className="input" prefix={<img src={Price} alt=""/>} placeholder={"Price"}/>
                    <div className="buttons">
                        <Button className="button" icon={<img src={Advanced} alt=""/>}>Advanced</Button>
                        <Button className="button" icon={<SearchOutlined/>} type={"primary"}>Search</Button>
                    </div>
                </div>
            </div>
        </div>

        <div className={"page4"}>
            <div className="blur">
                <h1>Financing Made Easy</h1>
                <h4>House you will want to call home.</h4>
                <div className="cards">
                    <div className="card">
                        <img src={bed} alt=""/>
                        <p>8 beds</p>
                    </div>
                    <div className="card">
                        <img src={bath} alt=""/>
                        <p>5 Baths</p>
                    </div>
                    <div className="card">
                        <img src={car} alt=""/>
                        <p>10 Garage</p>
                    </div>
                    <div className="card">
                        <img src={ruler} alt=""/>
                        <p>1200 Sq Ft</p>
                    </div>
                </div>
                <h2>$4,900/mo</h2>
                <Button className={"button"}>Read more</Button>
                <div className="navbarBottom">
                    <Input className="input" placeholder={"Enter an address, neighborhood, city, or ZIP code"}
                           prefix={<img src={Home} alt=""/>}/>
                    <Input className="input" prefix={<img src={CarKey} alt=""/>} placeholder={"Status"}/>
                    <Input className="input" prefix={<img src={Price} alt=""/>} placeholder={"Price"}/>
                    <div className="buttons">
                        <Button className="button" icon={<img src={Advanced} alt=""/>}>Advanced</Button>
                        <Button className="button" icon={<SearchOutlined/>} type={"primary"}>Search</Button>
                    </div>
                </div>
            </div>
        </div>
    </Carousel>
);
export default App;