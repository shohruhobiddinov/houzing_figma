import React from 'react';
import Navbar from "../../components/navbar/index.jsx";
import Register from "../register/index.jsx";
import FooterPage from "../../components/footer/index.jsx";

function Index(props) {
    return (
        <div>
            <Navbar/>
            <Register/>
            <FooterPage/>
        </div>
    );
}

export default Index;