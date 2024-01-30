import React from 'react'
import { Link } from 'react-router-dom'
import './Services.css'
import physio_2 from '../../images/physio_2.png'
import physio_3 from '../../images/physio_3.jpg'
import physio_4 from '../../images/physio_4.webp'
import physio_5 from '../../images/physio_5.jpg'
import physio_6 from '../../images/physio_6.jpg'
import physio_7 from '../../images/physio_7.jpg'
import physio_8 from '../../images/physio_8.webp'
import physio_9 from '../../images/physio_9.jpeg'
import physio_10 from '../../images/physio_10.jpg'
import physio_11 from '../../images/physio_11.jpg'
import ServicesItem from '../../components/Services_Item/Services_item'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default function Services() {

  const data = [
    {
      image : physio_2,
      heading: "Orthopedic Rehabilitation",
      text: "Treats injuries, surgeries, and chronic issues affecting bones, joints, ligaments, and muscles."
    },
    {
      image : physio_3,
      heading: "Neurological Rehabilitation",
      text: "Specialized care for individuals with neurological disorders or injuries."
    },
    {
      image : physio_4,
      heading: "Cardiopulmonary Rehabilitation",
      text: "Aims to improve cardiovascular health and respiratory function."
    },
    {
      image : physio_5,
      heading: "Sports Medicine",
      text: "Addresses sports-related injuries, enhances performance, and promotes injury prevention."
    },
    {
      image : physio_6,
      heading: "Geriatric Rehabilitation",
      text: "Specialized care for the elderly population.Addresses age-related issues, mobility, and function."
    },
    {
      image : physio_7,
      heading: "Women's Health Rehabilitation",
      text: "Focuses on conditions specific to women, such as pregnancy-related concerns and pelvic floor dysfunction."
    },
    {
      image : physio_8,
      heading: "Hand Therapy",
      text: "Specialized rehabilitation for hand and upper extremity injuries."
    },
    {
      image : physio_9,
      heading: "Pain Management",
      text: "Utilizes various techniques to alleviate chronic pain.Integrates physical therapy, exercises, and other modalities."
    },
    {
      image : physio_10,
      heading: "Amputee Rehabilitation",
      text: "Specialized care for individuals who have undergone limb amputation."
    },
    {
      image : physio_11,
      heading: "Cancer Rehabilitation",
      text: "Addresses physical challenges arising from cancer treatments."
    },
  ]
  return (
    <div className='services_main_111'>
      <Navbar/>
      <div className='services_submain_111 image_bg_111'>
        <div className='services_left_submain_111'>
          <p style={{fontSize:'42px',fontWeight:'bold',color:'#ffffff'}}>Recover with Expert Physiotherapy</p>
          <p style={{fontSize:'22px',color:'#ffffff'}}>Get personalized care to restore your mobility and strength.</p>
          <Link to='/book'><button className='services_left_submain_btn_111'>Book an Appointment Now</button></Link>
        </div>
      </div>
      <div className='services_submain_111' style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <div className='services_submain_para_111'>
          <p style={{fontWeight:'bold',fontSize:'24px',color:'#ffffff',textAlign:'center'}}>Our Services</p>
        </div>
        <div className='services_list_111'>
          {data.map((value) =>{ return (
          <ServicesItem image={value.image} heading={value.heading} text={value.text}/>
          )
          })
        }
        </div>
      </div>
      <Footer/>
    </div>
  )
}
