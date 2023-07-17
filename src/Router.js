import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./components/Home/Home";
import Places from "./components/BestPlaces/Places";
import GallaryData from "./components/DetailGallary/GallaryData";

function Routing()
{
    return(
        <BrowserRouter>
            <div>
                <Header />
                <Route exact path="/" component={Home} />
                <Route exact path="/places/:country_id" component={Places} />
                <Route exact path="/gallary/:country_id" component={GallaryData} />
                <Footer />
            </div>
        </BrowserRouter>
    )    
}

export default Routing;