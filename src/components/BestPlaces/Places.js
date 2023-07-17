import React, { Component } from 'react';
import axios from "axios";
import "./places.css";
import PlacesDisplay from './PlacesDisplay';


const placeurl = "https://travel-api1.herokuapp.com/places";

class Places extends Component{
    constructor(props){
        super(props);
            this.state={
                placesList : ""
        }
        
    }

    render()
    {
        return(
            

            <>
                <section class="packg" id="packg">

                    <h1 class="heading">
                        <span>B</span>
                        <span>e</span>
                        <span>s</span>
                        <span>t</span>
                        <span class="space"></span>
                        <span>P</span>
                        <span>l</span>
                        <span>a</span>
                        <span>c</span>
                        <span>e</span>
                        <span>s</span>
                    </h1>

                    <div class="box-container">

                        {/* <div class="box">
                            <img src="./images/ind2.jpg" alt="" />
                            <div class="content">
                                <h3> <i class="fas fa-map-marker-alt"></i> The Beaches of Goa </h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!</p>
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="far fa-star"></i>
                                </div>
                            </div>
                        </div> */}

                        <PlacesDisplay placeData={this.state.placesList} />

                    </div>
                    </section>
            </>
        )
    }

    componentDidMount(){
        let countryid = this.props.match.params.country_id;
        console.log(countryid);
        axios.get(`${placeurl}/${countryid}`)

        .then((res)=>{this.setState(
            {
                placesList :res.data
            }
        )})
    }
}

export default Places;