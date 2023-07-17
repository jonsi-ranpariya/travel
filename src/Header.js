import React, { Component } from "react";


class Header extends Component{
    render(){
        return(
            <nav>
                <header>

                <div id="menu-bar" className="fas fa-bars"></div>

                <a href="#" className="logo"><span>T</span>ravel</a>

                <nav className="navbar">
                    <a href="#home">home</a>
                    <a href="#book">book</a>
                    <a href="#packages">packages</a>
                    <a href="#services">services</a>
                    <a href="#gallery">gallery</a>
                    <a href="#contact">contact</a>
                </nav>

                <div className="icons">
                    <i className="fas fa-search" id="search-btn"></i>
                    <i className="fas fa-user" id="login-btn"></i>
                </div>

                <form onClick="fas fa-search" className="search-bar-container">
                    <input type="search" id="search-bar" placeholder="search here..." />
                    <label for="search-bar" className="fas fa-search"></label>
                </form>
                

                </header>
            </nav>
        )
    }
}

export default Header;