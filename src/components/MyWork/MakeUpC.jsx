import React, { useEffect } from 'react'
import "./MyWork.css"

import MakeupStudio from '../../assets/Projects/MakeupStudio';



const MakeUpC = () => {
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
     
        <h3>Makeup Studio</h3>
        <div className="mywork-container">
            {MakeupStudio.map((work , ind)=>{
              return <div key={ind} className='img-btn-con'>
                <img src={work.w_img} alt='work' />
              </div>
            })}
        </div>
    </div>
  )
}

export default MakeUpC;
