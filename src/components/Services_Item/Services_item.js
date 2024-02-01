import React from 'react'
import './Services_item.css'

export default function ServicesItem({image,heading,text}) {
  return (
    <>
        <div className='services_list_member_111'>
          <img src={image} alt='Physio' style={{width:'100%',borderRadius:'15px',boxShadow:'0px 4px 4px 0px #00000040'}} className='service_item_image_show'/>
          <p style={{lineHeight:'36px',fontWeight:'bold',color:'#15b6e3',letterSpacing:'0.5px'}} className='services-item-heading'>{heading}</p>
          <p style={{lineHeight:'28px',color:'#6F7D97'}} className='services-item-text'>{text}</p>
        </div>
    </>
  )
}
