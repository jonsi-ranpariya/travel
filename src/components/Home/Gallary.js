import React, { Component } from "react";
import GallaryDisplay from "./GallaryDisplay";


let gallaryurl = "https://travel-api1.herokuapp.com/gallaryFirst";

class Gallary extends Component{

    constructor(){
        super()

        this.state={
            gallaryList : ""
        }
    }

    render()
    {
        return(
            <section className="gallery" id="gallery">

                <h1 className="heading">
                    <span>g</span>
                    <span>a</span>
                    <span>l</span>
                    <span>l</span>
                    <span>a</span>
                    <span>r</span>
                    <span>y</span>
                </h1>

                <div className="box-container">

                {/* <div class="box">
                    <img src="images/shimla manali.jpg" alt=""/>
                    <div class="content">
                        <h3>Jammu and Kashmir, India</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
                        <Link to="/gallary/${item.country_id}"><a href="./pkg1_ind.html" class="btn">see more</a></Link>
                    </div>
                </div> */}
            

                    <GallaryDisplay gallaryData={this.state.gallaryList} />
                   
                </div>
                
            </section>
            
        )
    }

    componentDidMount(){
        fetch(gallaryurl, {method : "GET"})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({
                gallaryList : data
            })
        })
    }

}

export default Gallary;