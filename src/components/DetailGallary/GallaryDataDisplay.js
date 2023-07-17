import React from 'react';

const GallaryDataDisplay = (props) =>

{
    const gallaryList = ({gallaryData}) => {
        if(gallaryData)
        {
            return gallaryData.map((item)=>{
                return (
                    <>
                       
                        <div class="box">
                            <img src={item.location_img} alt="" />
                            <div class="content">
                                <h3> <i class="fas fa-map-marker-alt"></i> {item.location_name} </h3>
                                <p> {item.description} </p>
                                <div class="stars">
                                    {item.rating}
                                </div>
                            </div>
                        </div>
                        
                    </>
                )
            })
        }
    }

    return(
        <>
            {gallaryList(props)}
        </>
    )

}

export default GallaryDataDisplay;