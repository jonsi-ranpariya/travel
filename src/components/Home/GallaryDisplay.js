import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const GallaryDisplay = (props)=>{

    const renderData = ({gallaryData}) => {
        if(gallaryData)
        {
            return gallaryData.map((item)=>{
                return(
                
                    <div className="box">
                        <img src={item.country_img} alt="" />
                        <div className="content">
                            <h3>{item.country_name}</h3>
                            <p>{item.description}</p>

                            <Link to={`/gallary/${item.country_id}`} >
                                <a href="./pkg1_ind.html" className="btn">see more</a>
                            </Link>

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

export default GallaryDisplay;