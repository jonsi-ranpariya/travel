import React from "react";
import First from "./First";
import Book from "./Book";
import Packages from "./Package";
import Services from "./Services";
import Gallary from "./Gallary";
import Contact from "./Contact";

function Home(){
    return(
        <>
            <First />
            <Book />
            <Packages />
            <Services />
            <Gallary />
            <Contact />
        </>
    )
}

export default Home;