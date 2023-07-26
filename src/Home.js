import React from 'react'
import Header from "./Header";
import Slider from "./Slider"
import Footer from './Footer';
import Tab from "./Tab"
import Testimonials from './Testimonials';
import Contact from './Contact'
const Home = () => {
  return (
    <div>
        
        <Slider/>
        <Tab/>
      <Testimonials/>
        <Contact/>
    </div>
  )
}

export default Home