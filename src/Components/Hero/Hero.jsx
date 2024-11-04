import React from 'react'
import './Hero.css'
import dark_arrow from '../../edusity_assets/dark-arrow.png' 

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We ensure a better education for a better world</h1>
            <p>Our cutting-edge curriculum is designed to empower students with knkowledge, skillsm and experiences needed to excel in the dynamic field of education</p>
            <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero