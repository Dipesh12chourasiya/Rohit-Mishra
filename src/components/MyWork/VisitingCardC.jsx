import React, { useEffect } from 'react'
import "./MyWork.css"

import VisitingCard from '../../assets/Projects/VisitingCard';



const VisitingCardC = () => {
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
     
        <h3>Visiting Card</h3>
        <div className="mywork-container">
            {VisitingCard.map((work , ind)=>{
              return <div key={ind} className='img-btn-con'>
                <img src={work.w_img} alt='work' />
              </div>
            })}
        </div>
    </div>
  )
}

export default VisitingCardC;
