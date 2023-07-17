import React, { Component } from "react";
import PackageDisplay from "./PackageDisplay";

const url = "https://travel-api1.herokuapp.com/location";

class Packages extends Component{

    constructor()
    {
        super()
        this.state={
            locationData : ""
        }
    }

    render(){
        return(
            <section className="packages" id="packages">

                <h1 className="heading">
                    <span>p</span>
                    <span>a</span>
                    <span>c</span>
                    <span>k</span>
                    <span>a</span>
                    <span>g</span>
                    <span>e</span>
                    <span>s</span>
                </h1>

                <div className="box-container">


                {/* <div className="box-container">

                    <div className="box">
                        <img src="images/gateway india.jpg" alt="" />
                        <div className="content">
                            <h3> <i className="fas fa-map-marker-alt"></i> mumbai </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!</p>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="far fa-star"></i>
                            </div>
                            <div className="price"> $90.00 <span>$120.00</span> </div>
                        </div>
                    </div>
                </div> */}
                <PackageDisplay packgData = {this.state.locationData} />
                </div>
            </section>
        )
    }

    componentDidMount(){
        fetch(url, {method : "GET"})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({
                locationData : data
            })
        })
    }
}

export default Packages;