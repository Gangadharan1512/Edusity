import React from 'react'
import './About.css'
import about_img from '../../edusity_assets/about.png'
import play_icon from '../../edusity_assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Embark on a transformative educagtional journey with out universoty's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills and experiences needed to excel in the dynamic field of education</p>
            <p>With focus on inovation, hands-on learning, and personalized mentorship, out programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>
            <p>Whether you aspire to became a teacher, administrator, counselor, or a educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education</p>
        </div>
    </div>
  )
}

export default About