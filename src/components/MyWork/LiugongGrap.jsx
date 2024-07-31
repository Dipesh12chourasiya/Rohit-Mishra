import React, { useEffect } from 'react'
import "./MyWork.css"

import LiugongGraphics from '../../assets/Projects/LiugongGraphics';




const LiugongGrap = () => {

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
     
     <h3>Liugong Graphics</h3>
        <div className="mywork-container">
            {LiugongGraphics.map((work , ind)=>{
              return <div key={ind} className='img-btn-con'>
                <img src={work.w_img} alt='work' />
              </div>
            })}
        </div>
    </div>
  )
}

export default LiugongGrap;
