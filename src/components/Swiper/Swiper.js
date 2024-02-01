// import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import './Swiper.css'
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { EffectCoverflow, Pagination, Navigation,Autoplay } from 'swiper/modules';


// export default function SwiperComponent() {
//   return (
//     <div>
//                                                                   <Swiper
//                                                                 spaceBetween={30}
//                                                                 centeredSlides={true}
//                                                                 autoplay={{
//                                                                 delay: 2500,
//                                                                 disableOnInteraction: false,
//                                                                 }}
//                                                                 pagination={{
//                                                                 clickable: true,
//                                                                 }}
//                                                                 navigation={true}
//                                                                 modules={[Autoplay, Pagination, Navigation]}
//                                                                 className="mySwiper"
//                                                             >
//                                                                 <SwiperSlide>
//                                                                     <div className='swiper-div'>
//                                                                         <p>I highly recommend Ojaskri Physio Center to anyone seeking top-notch physiotherapy services. Their commitment to patient care, coupled with their expertise, sets them apart as a premier destination for rehabilitation. I am grateful for the positive impact they've had on my journey to recovery.</p>
//                                                                     </div>
//                                                                 </SwiperSlide>
//                                                                 <SwiperSlide>Slide 2</SwiperSlide>
//                                                                 <SwiperSlide>Slide 3</SwiperSlide>
//                                                                 <SwiperSlide>Slide 4</SwiperSlide>
//                                                                 <SwiperSlide>Slide 5</SwiperSlide>
//                                                                 <SwiperSlide>Slide 6</SwiperSlide>
//                                                                 <SwiperSlide>Slide 7</SwiperSlide>
//                                                                 <SwiperSlide>Slide 8</SwiperSlide>
//                                                                 <SwiperSlide>Slide 9</SwiperSlide>
//                                                             </Swiper>
//     </div>
//   )
// }


import React,{useRef,useEffect,useState} from 'react'
import './Swiper.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination,Autoplay } from 'swiper/modules';
import Button from '@mui/material/Button';
// import { useNavigate } from 'react-router-dom';




export default function Component() {
    
const swiperRef = useRef(null);

useEffect(() => {
  // Attach event listeners for keydown events
  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      // Move to the previous slide when the left arrow key is pressed
      swiperRef.current.slidePrev();
    } else if (event.key === 'ArrowRight') {
      // Move to the next slide when the right arrow key is pressed
      swiperRef.current.slideNext();
    }
  };

  // Add event listeners when the component mounts
  document.addEventListener('keydown', handleKeyDown);

  // Remove event listeners when the component unmounts
  return () => {
    document.removeEventListener('keydown', handleKeyDown);
  };
}, []);
  return (
    <div>
            <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={1}
        autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="swiper_container"
        noSwiping={true}
        noSwipingClass="swiper-no-swiping"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        <SwiperSlide style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <div className='swiper_slide_content'>
            <div className='swiper_slide_content_stars'>
                <span className='swiper_slide_content_star'>&#9733;</span>
                <span className='swiper_slide_content_star'>&#9733;</span>
                <span className='swiper_slide_content_star'>&#9733;</span>
                <span className='swiper_slide_content_star'>&#9733;</span>
                <span className='swiper_slide_content_star'>&#9733;</span>
            </div>
            <p className='swiper_slide_content_text'>❝Ojaskri's physiotherapy services have helped me to recover from a sports-related injury.
            Their team provided me with a customized treatment plan that helped me to get back to my active lifestyle in no time❞.</p>
            <p className='swiper_slide_content_name'>- JULIE ROBINSON</p>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <div className='swiper_slide_content'>
            <div className='swiper_slide_content_stars'>
                <span className='swiper_slide_content_star'>&#9733;</span>
                <span className='swiper_slide_content_star'>&#9733;</span>
                <span className='swiper_slide_content_star'>&#9733;</span>
                <span className='swiper_slide_content_star'>&#9733;</span>
                <span className='swiper_slide_content_star'>&#9733;</span>
            </div>
            <p className='swiper_slide_content_text'>❝Ojaskri's physiotherapy services have helped me to manage my chronic pain condition effectively.
            Their team of experts is knowledgeable, compassionate and always ready to help❞. </p>
            <p className='swiper_slide_content_name'>- JAMES BROOK</p>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <div className='swiper_slide_content'>
            <div className='swiper_slide_content_stars'>
                <span className='swiper_slide_content_star'>&#9733;</span>
                <span className='swiper_slide_content_star'>&#9733;</span>
                <span className='swiper_slide_content_star'>&#9733;</span>
                <span className='swiper_slide_content_star'>&#9733;</span>
                <span className='swiper_slide_content_star'>&#9733;</span>
            </div>
            <p className='swiper_slide_content_text'>❝I highly recommend Ojaskri to anyone seeking top-notch physiotherapy services.
            Their experienced team of physiotherapists is dedicated to providing personalized care and effective treatment plans❞. </p>
            <p className='swiper_slide_content_name'>- EMILY HUNT</p>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <div className='swiper_slide_content'>
            <div className='swiper_slide_content_stars'>
                <span className='swiper_slide_content_star'>&#9733;</span>
                <span className='swiper_slide_content_star'>&#9733;</span>
                <span className='swiper_slide_content_star'>&#9733;</span>
                <span className='swiper_slide_content_star'>&#9733;</span>
                <span className='swiper_slide_content_star'>&#9733;</span>
            </div>
            <p className='swiper_slide_content_text'>❝The team of Ojaskri is simply the best. Their physiotherapy services helped me to 
            recover from an accident and get back to work in record time❞.</p>
            <p className='swiper_slide_content_name'>- MORGAN JONATHAN</p>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <div className='swiper_slide_content'>
            <div className='swiper_slide_content_stars'>
                <span className='swiper_slide_content_star'>&#9733;</span>
                <span className='swiper_slide_content_star'>&#9733;</span>
                <span className='swiper_slide_content_star'>&#9733;</span>
                <span className='swiper_slide_content_star'>&#9733;</span>
                <span className='swiper_slide_content_star'>&#9733;</span>
            </div>
            <p className='swiper_slide_content_text'>❝I had a fantastic experinece at Ojaskri Physiotherapy. The staff was extremely
            knowledgeable and friendly, and the facility was clean and well-maintained. I saw great results from my sessions and 
            would highly recommend their services to anyone in need of physiotherapy in Hyderabad❞.</p>
            <p className='swiper_slide_content_name'>- SAMANTHA</p>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <div className='swiper_slide_content'>
            <div className='swiper_slide_content_stars'>
                <span className='swiper_slide_content_star'>&#9733;</span>
                <span className='swiper_slide_content_star'>&#9733;</span>
                <span className='swiper_slide_content_star'>&#9733;</span>
                <span className='swiper_slide_content_star'>&#9733;</span>
                <span className='swiper_slide_content_star'>&#9733;</span>
            </div>
            <p className='swiper_slide_content_text'>❝I am extremely greatful for the exceptional physiotherapy services provided by Ojaskri.
            Their expertise and personalized approach helped me recover from my injury quickly. The staff is friendly and the clinic is well-equipped.
            Thank you for your outstanding care❞.</p>
            <p className='swiper_slide_content_name'>- SOPHIA</p>
          </div>
        </SwiperSlide>
        
          <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  )
}
