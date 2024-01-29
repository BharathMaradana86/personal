import React from 'react'

export default function ServicesItem({image,heading,text}) {
  return (
    <>
        <div className='services_list_member_111'>
          <img src={image} alt='Physio' style={{height:'400px',width:'100%',borderRadius:'15px',boxShadow:'0px 4px 4px 0px #00000040'}} />
          <p style={{lineHeight:'36px',fontSize:'28px',fontWeight:'bold',color:'#15b6e3',letterSpacing:'0.5px'}}>{heading}</p>
          <p style={{lineHeight:'28px',fontSize:'20px',color:'#6F7D97'}}>{text}</p>
        </div>
    </>
  )
}
