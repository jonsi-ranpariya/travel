import React, { Component } from 'react';
import axios from 'axios';
import "./gallaryData.css";
import GallaryDataDisplay from './GallaryDataDisplay';


let gallaryurl = "https://travel-api1.herokuapp.com/gallary";

class GallaryData extends Component{
    constructor(props){
        super()

        this.state={
            gallaryList : ""
        }
    }

    render()
    {
        return(
            <>
                <section class="packg" id="packg">

                    <h1 class="heading">
                        <span>G</span>
                        <span>a</span>
                        <span>l</span>
                        <span>l</span>                        
                        <span>a</span>
                        <span>r</span>
                        <span>y</span>

                    </h1>

                    <div class="box-container">

                        {/* <div class="box">
                            <img src="images/ind2.jpg" alt="" />
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
                        
                        <GallaryDataDisplay gallaryData = {this.state.gallaryList} />

                    </div>
                    </section>
            </>
        )
    }

    componentDidMount(){

        let countryId = this.props.match.params.country_id;
        console.log(countryId);
        axios.get(`${gallaryurl}/${countryId}`)
        .then((res)=>{this.setState(
            {
                gallaryList :res.data
            }
        )})
    }
        

        

}

export default GallaryData;