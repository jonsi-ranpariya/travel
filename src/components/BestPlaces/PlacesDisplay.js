import React from 'react';


const PlacesDisplay = (props)=>{

    const renderData = ({placeData}) => {
        if(placeData)
        {
            return placeData.map((item)=>{
                return(

                    <div class="box">
                            <img src={item.img3} alt="" />
                            <div class="content">
                                <h3> <i class="fas fa-map-marker-alt"></i> {item.location_name} </h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!</p>
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="far fa-star"></i>
                                </div>
                        </div>
                    </div>
                )
            })
        }
    }

    return(
        <>
            {renderData(props)}
        </>
    )
}

export default PlacesDisplay;