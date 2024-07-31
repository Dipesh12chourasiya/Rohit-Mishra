import React, { useEffect } from 'react'
import "./MyWork.css"

import CafeAndResturant from '../../assets/Projects/CafeAndResturant';


const CafeResturant = () => {
    
    // slide to top function
    useEffect(() => {
        const goToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        };
        goToTop();
    }, []);

  return (
    <div className="mywork" id='work'>       

        <h3>Cafe & Resturant</h3>
        <div className="mywork-container">
            {CafeAndResturant.map((work , ind)=>{
              return <div key={ind} className='img-btn-con'>
                <img src={work.w_img} alt='work' />
              </div>
            })}
        </div>
    </div>
  )
}

export default CafeResturant;
