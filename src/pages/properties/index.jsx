import React from 'react';
import Navbar from "../../components/navbar/index.jsx";
import MainCarousel from "../../components/mainCarousel/index.jsx";
import Recommended from "../../components/recommended/index.jsx";
import Choose from "../../components/choose/index.jsx";
import Category from "../../components/category/index.jsx";
import Vermonth from "../../components/vermonth/index.jsx";
import Testimonials from "../../components/testimonials/index.jsx";
import FooterPage from "../../components/footer/index.jsx";

function Index(props) {
    return (
        <div>
            <Navbar/>
            <Vermonth/>
            <Recommended/>
            <Choose/>
            <Category/>
            <Testimonials/>
            <FooterPage/>
        </div>
    );
}

export default Index;