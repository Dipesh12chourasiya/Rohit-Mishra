import React from 'react'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CafeResturant from './components/MyWork/Cate&resturant';
import Clothing from './components/MyWork/Clothing';
import Header from './components/Header/Header';
import LiugongGrap from './components/MyWork/LiugongGrap';
import LogoC from './components/MyWork/Logo';
import MakeUpC from './components/MyWork/MakeUpC';
import MenuCardC from './components/MyWork/MenuCardC';
import VisitingCardC from './components/MyWork/VisitingCardC';
import ReelsC from './components/MyWork/ReelsC';


const App = () => {
  return (
    <div>
       {/* <Hero />
       <MyWork />
       <Footer /> */}

       <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path='/cafe-resturant' element={<CafeResturant />} />
            <Route path='/clothing' element={<Clothing />} />
            <Route path='/liugong' element={<LiugongGrap />} />
            <Route path='/logo' element={<LogoC />} />
            <Route path='/makeup-studio' element={<MakeUpC />} />
            <Route path='/menu-card' element={<MenuCardC />} />
            <Route path='/visiting-card' element={<VisitingCardC />} />
            <Route path='/reels' element={<ReelsC />} />
          </Routes>

          <Footer />
        </BrowserRouter>
    </div>
  )
}

export default App;
// 1:12