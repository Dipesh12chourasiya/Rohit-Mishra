import React from 'react'
import "./MyWork.css"

import CafeAndResturant from '../../assets/Projects/CafeAndResturant';
import ClothingIndustryPost from '../../assets/Projects/ClothingIndustryPost';
import LiugongGraphics from '../../assets/Projects/LiugongGraphics';
import Logos from '../../assets/Projects/Logos';
import MakeupStudio from '../../assets/Projects/MakeupStudio';
import MenuCard from '../../assets/Projects/MenuCard';
import VisitingCard from '../../assets/Projects/VisitingCard';

import vid1 from '../../assets/Projects/Liugong Graphics/Liugong reel.mp4'
import vid2 from '../../assets/Projects/Clothing Industry Post & Reels/2.mp4'
import vid3 from '../../assets/Projects/Clothing Industry Post & Reels/3.mp4'
import vid4 from '../../assets/Projects/Clothing Industry Post & Reels/4.mp4'
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
        
        <h3>Cafe & Resturant</h3>
        <div className="mywork-container">
            {CafeAndResturant.map((work , ind)=>{
              return <div key={ind} className='img-btn-con'>
                <img src={work.w_img} alt='work' />
              </div>
            })}
        </div>

        <h3>Clothing Industry Post</h3>
        <div className="mywork-container">
            {ClothingIndustryPost.map((work , ind)=>{
              return <div key={ind} className='img-btn-con'>
                <img src={work.w_img} alt='work' />
              </div>
            })}
        </div>

        <h3>Liugong Graphics</h3>
        <div className="mywork-container">
            {LiugongGraphics.map((work , ind)=>{
              return <div key={ind} className='img-btn-con'>
                <img src={work.w_img} alt='work' />
              </div>
            })}
        </div>


        <h3>Logo</h3>
        <div className="mywork-container">
            {Logos.map((work , ind)=>{
              return <div key={ind} className='img-btn-con'>
                <img src={work.w_img} alt='work' />
              </div>
            })}
        </div>

        <h3>Makeup Studio</h3>
        <div className="mywork-container">
            {MakeupStudio.map((work , ind)=>{
              return <div key={ind} className='img-btn-con'>
                <img src={work.w_img} alt='work' />
              </div>
            })}
        </div>

        <h3>Menu Card</h3>
        <div className="mywork-container">
            {MenuCard.map((work , ind)=>{
              return <div key={ind} className='img-btn-con'>
                <img src={work.w_img} alt='work' />
              </div>
            })}
        </div>

        <h3>Visiting Card</h3>
        <div className="mywork-container">
            {VisitingCard.map((work , ind)=>{
              return <div key={ind} className='img-btn-con'>
                <img src={work.w_img} alt='work' />
              </div>
            })}
        </div>

        <h3>Reels</h3>
        <div className="mywork-container">
          <div className='img-btn-con'>
              <video src={vid1} width='200px' autoPlay={false} controls={true}></video>
          </div>
          <div className='img-btn-con'>
              <video src={vid2} width='200px' autoPlay={false} controls={true}></video>
          </div>
        </div>

        <div className='mywork-container'>
            <div className='img-btn-con'>
                    <video src={vid4} width='300px' autoPlay={false} controls={true}></video>
                </div>
                <div className='img-btn-con'>
                    <video src={vid3} width='300px' autoPlay={false} controls={true}></video>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyWork;
