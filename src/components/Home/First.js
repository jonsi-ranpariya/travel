import React, { Component } from "react";

class First extends Component{

    

    render(){
        return(
            <section className="home" id="home">

                <div className="content">
                    <h3>Life is either a daring adventure or nothing</h3>
                    <p>dicover new places with us, adventure awaits</p>
                </div>

               
                <div className="controls">
                    <span className="vid-btn active" data-src="/images/vid-1.mp4"></span>
                    <span className="vid-btn" data-src="/images/vid-2.mp4"></span>
                    <span className="vid-btn" data-src="/images/vid-3.mp4"></span>
                    <span className="vid-btn" data-src="/images/vid-4.mp4"></span>
                    <span className="vid-btn" data-src="/images/vid-5.mp4"></span>
                </div>

                <div className="video-container">
                    <video src="/images/vid-1.mp4" id="video-slider" loop autoplay muted></video>
                </div>

               
            </section>
        )
    }
}

export default First;