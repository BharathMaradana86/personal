import React from 'react'
import './Section.css'
import { useNavigate } from 'react-router-dom'

export default function Section() {

  const navigate = useNavigate()
  return (
    <div>
      <div className='section_main_111' >
        <div className='section_submain_111 image_bg_111 image_bg1_111'>
            <div className='section_left_submain_111' style={{zIndex:'1'}}>
                <p className='section-heading'>Heal Your Body</p>
                <p style={{fontSize:'22px',color:'#ffffff'}}>Get expert physiotherapy treatments to relieve pain and improve mobility.</p>
                <button className='section_left_submain_btn_111'  onClick={()=>navigate('/book')} >Book an Appointment Now</button>
            </div>
        </div>
      </div>
    </div>
  )
}
