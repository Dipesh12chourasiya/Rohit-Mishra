import React from 'react'
import "./MyWork.css"
import { Link } from 'react-router-dom';

// import CafeAndResturant from '../../assets/Projects/CafeAndResturant';
// import ClothingIndustryPost from '../../assets/Projects/ClothingIndustryPost';
// import LiugongGraphics from '../../assets/Projects/LiugongGraphics';
// import Logos from '../../assets/Projects/Logos';
// import MakeupStudio from '../../assets/Projects/MakeupStudio';
// import MenuCard from '../../assets/Projects/MenuCard';
// import VisitingCard from '../../assets/Projects/VisitingCard';


// import vid5 from '../../assets/Projects/Clothing Industry Post & Reels/ASW Customer reel.mov'
// import vid6 from '../../assets/Projects/Clothing Industry Post & Reels/ASW.MOV'

const MyWork = () => {
  return (
    <div>
      <div className="mywork" id='work'>
        <div className="mywork-title">
            <h1>My latest work</h1>
            {/* <img src={theme_pattern} alt="" /> */}
        </div>
        
        <Link className='mywork-LinkTag' to='/cafe-resturant'><h3>1. Cafe & Resturant</h3></Link>
        {/* <div className="mywork-container">
            {CafeAndResturant.map((work , ind)=>{
              return <div key={ind} className='img-btn-con'>
                <img src={work.w_img} alt='work' />
              </div>
            })}
        </div> */}

        <Link className='mywork-LinkTag' to='/clothing'><h3>2. Clothing Industry Post</h3></Link>
        {/* <div className="mywork-container">
            {ClothingIndustryPost.map((work , ind)=>{
              return <div key={ind} className='img-btn-con'>
                <img src={work.w_img} alt='work' />
              </div>
            })}
        </div> */}

        <Link className='mywork-LinkTag' to='/liugong'><h3>3. Liugong Graphics</h3></Link>
        {/* <div className="mywork-container">
            {LiugongGraphics.map((work , ind)=>{
              return <div key={ind} className='img-btn-con'>
                <img src={work.w_img} alt='work' />
              </div>
            })}
        </div> */}


        <Link className='mywork-LinkTag' to='/logo'><h3>4. Logo</h3></Link>
        {/* <div className="mywork-container">
            {Logos.map((work , ind)=>{
              return <div key={ind} className='img-btn-con'>
                <img src={work.w_img} alt='work' />
              </div>
            })}
        </div> */}

        <Link className='mywork-LinkTag' to='/makeup-studio'><h3>5. Makeup Studio</h3></Link>
        {/* <div className="mywork-container">
            {MakeupStudio.map((work , ind)=>{
              return <div key={ind} className='img-btn-con'>
                <img src={work.w_img} alt='work' />
              </div>
            })}
        </div> */}

        <Link className='mywork-LinkTag' to='/menu-card'><h3>6. Menu Card</h3></Link>
        {/* <div className="mywork-container">
            {MenuCard.map((work , ind)=>{
              return <div key={ind} className='img-btn-con'>
                <img src={work.w_img} alt='work' />
              </div>
            })}
        </div> */}

        <Link className='mywork-LinkTag' to='/visiting-card'><h3>7. Visiting Card</h3></Link>
        {/* <div className="mywork-container">
            {VisitingCard.map((work , ind)=>{
              return <div key={ind} className='img-btn-con'>
                <img src={work.w_img} alt='work' />
              </div>
            })}
        </div> */}

        <Link className='mywork-LinkTag' to='/reels'><h3>8. Reels</h3></Link>
        {/* <div className="mywork-container">
          <div className='img-btn-con'>
              <video src={vid1} width='200px' autoPlay={false} controls={true}></video>
          </div>
          <div className='img-btn-con'>
              <video src={vid2} width='200px' autoPlay={false} controls={true}></video>
          </div>
        </div> */}

        {/* <div className='mywork-container'>
            <div className='img-btn-con'>
                    <video src={vid4} width='300px' autoPlay={false} controls={true}></video>
                </div>
                <div className='img-btn-con'>
                    <video src={vid3} width='300px' autoPlay={false} controls={true}></video>
                </div>
            </div>
        <div /> */}
        
      </div>
    </div>
  )
}

export default MyWork;
