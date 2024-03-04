import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/navbar/index.jsx";
import MainCarousel from "./components/mainCarousel/index.jsx";
import Recommended from "./components/recommended/index.jsx";
import Choose from "./components/choose/index.jsx";
import Category from "./components/category/index.jsx";
import Vermonth from "./components/vermonth/index.jsx";
import Testimonials from "./components/testimonials/index.jsx";
import FooterPage from "./components/footer/index.jsx";
import Home from "./pages/home/index.jsx";
import Properties from "./pages/properties/index.jsx";
import Contacts from "./pages/contacts/index.jsx";

function App(props) {
    return (
        <div>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/properties"} element={<Properties/>}/>
                <Route path={"/contacts"} element={<Contacts/>}/>
            </Routes>

        </div>
    );
}

export default App;