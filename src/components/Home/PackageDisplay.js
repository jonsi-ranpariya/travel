import React from 'react';
import {Link} from "react-router-dom/cjs/react-router-dom.min";



function PackageDisplay(props)
{
    const listPackg = ({packgData}) => {
        if(packgData)
        {
            return packgData.map((item)=>{
                return(
                    <>
                        
                            <div className="box">

                            <Link to={`/places/${item.country_id}`} key={item.location_id}>

                                <a href="pkg1_ind.html"><img src={item.image} alt="" /></a>
                                <div className="content">
                                    <h3> <i className="fas fa-map-marker-alt"></i> {item.location_name}, {item.country_name} </h3>
                                    <p>{item.description}</p>
                                    <div className="stars">
                                        {/* <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i> */}
                                        <h1>{item.rating}</h1>
                                    </div>
                                    <div className="price"> {item.offer_price} <span>{item.real_price}</span> </div>
                                </div>

                            </Link>

                            </div>
                        
                    </>
                )
            })
        }
    }
    return(
        <>
            {listPackg(props)}
        </>
    )
}

export default PackageDisplay;