import React from 'react'
import './About.css'
import Navbar from '../Navbar/Navbar'

export default function About() {
  return (
    <div>
      <Navbar/>
      <div className='about_main'>
        <div className='about_submain'>
            <p className='about_us'>About Us</p>
            <p className='para'><span style={{fontSize:'40px'}}>❝W</span>elcome to OJAS-KRI Physio and Rehab Center, where evidence-based expertise fuels your journey to wellness.
            Our clinic blends advanced research with personalized care, ensuring your rehabilitation is rooted in proven methodologies.
            At OJAS-KRI, trust in the science behind your recovery, as we tailor precision-driven physiotherapy to elevate your health 
            and vitality.
            Your well-being is our evidence, and we're dedicated to guiding you towards a healthier, stronger future.<span style={{fontSize:'25px'}}>❞</span></p>
        </div>
      </div>
    </div>
  )
}