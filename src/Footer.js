import React, { Component } from "react";

class Footer extends Component{
    render(){
        return(
            <section className="footer">

                <div className="box-container">

                    <div className="box">
                        <h3>about us</h3>
                        <p>Here at CheapTickets, we believe that travel enriches our lives and makes us better human beings.</p>
                    </div>
                    <div className="box">
                        <h3>branch locations</h3>
                        <a href="#">india</a>
                        <a href="#">USA</a>
                        <a href="#">UAE</a>
                    </div>
                    <div className="box">
                        <h3>quick links</h3>
                        <a href="#home">home</a>
                        <a href="#book">book</a>
                        <a href="#packages">packages</a>
                        <a href="#services">services</a>
                        <a href="#gallery">gallery</a>
                        <a href="#contact">contact</a>
                    </div>
                
                </div>

                <h1 className="credit"> created by <span> Jevin Viradiya </span> | all rights reserved! </h1>

            </section>
        )
    }
}

export default Footer;