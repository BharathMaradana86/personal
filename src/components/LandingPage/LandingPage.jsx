import React from 'react';
import './LandingPage.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import basicImage from '../../images/8443649.png'
import physio from '../../images/Physio_6.png'
import Navbar from '../../pages/Navbar/Navbar';
import physio1 from '../../images/Physio_4.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import orthopedic from '../../images/orthopedic.jpeg'
import Typography from '@mui/material/Typography';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Neuro from '../../images/Neuro.jpg'
import 'swiper/css/navigation';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import physio6 from '../../images/Physio_6.png'
import cardio from '../../images/cardio.jpg'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import Section from '../../pages/Section/Section';
import { Link } from "react-router-dom";
import Footer from '../../pages/Footer/Footer';


const LandingPage = () => {
    return (<>
        <Navbar/>
        <div className='landingPage__1'>
                    <div className='landingPage'>
                                    <div className='landingPage_1'>
                                            <div className='content_1'>
                                                    <h1>Experience the Best Physiotherapy Services in Hyderabad</h1>
                                                    <p>Ojaskri offers expert physiotherapy services to help you recover from injuries, manage chronic pain, and improve your mobility and function. Our personalized care and effective treatment plans are tailored to meet your individual needs.</p>
                                                    <div className='landingpage_btn'>
                                                      <Link to='/services'><Button  variant="contained" style={{marginTop:'20px',height:'60px',width:'220px',fontSize:'15px'}}><b>View All Services</b></Button></Link>
                                                    </div>
                                            </div>
                                            <div className='content_2'>
                                                    <img src={basicImage} style={{height:'400px',width:'80%'}}/>
                                            </div>
                                            
                                    </div>
                    </div>
                    <div className='landingPage_2'>
                                            <div className='landingPage_background'>
                                                        <div className='clinic_1'>
                                                                <img src={physio} style={{height:'400px',width:'80%',marginTop:'100px',borderRadius:'10px'}}/>
                                                        </div>
                                                    <div className='clinic_2'>
                                                        <div className='clinic_3'>
                                                                        <div className='clinic_4'>
                                                                                        <h1 style={{color:'#f83292'}}>OJAS-KRI Physio Clinic</h1>
                                                                                        <p>
                                                                                        "OjasKri Physical Clinic is a dedicated wellness center, providing comprehensive healthcare services to promote physical well-being. Our expert team of healthcare professionals offers personalized treatments, rehabilitation, and therapeutic solutions, ensuring a holistic approach to health. With state-of-the-art facilities and a patient-centric ethos, OjasKri Physical Clinic is committed to fostering vitality and enhancing the overall quality of life for our patients."
                                                                                        </p>
                                                                        </div>
                                                        </div>
                                                    </div></div>
                                          
                     </div>
                     <div className='landingPage_3'>
                        <div className='landingPage_head'>
                                    <div className='services_main'>
                                          <div><h1 style={{fontWeight:'1200',fontSize:'50px'}}>Our Services</h1></div> 
                                          <div className='all-services-button-1'>
                                          <Link to="/services"> <Button  variant='contained' style={{width:'200px',height:'60px',fontSize:'15px',marginTop:'10px'}}>
                                                <b>View All Services</b>
                                            </Button></Link>
                                          </div>
                                           
                                    </div>
                                    <div className='services_body'>
                                    <div className='services_card' style={{ 
                                                            border: '1px solid #ddd', // Border color
                                                            borderRadius: '8px',       // Border radius
                                                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Box shadow for a subtle elevation
                                                            padding: '20px',          // Padding inside the card
                                                            textAlign: 'center'        // Text alignment
                                                        }}>
                                                            <img src={orthopedic} style={{ 
                                                                height: '350px',        // Image height
                                                                width: '80%',           // Image width
                                                                objectFit: 'cover',     // Make sure the image covers the entire container
                                                                borderRadius: '8px',    // Border radius for the image
                                                                marginBottom: '15px'    // Some space between image and text
                                                            }}/>
                                                            <h3 style={{ 
                                                                fontSize: '1.5rem',      // Heading font size
                                                                margin: '0',             // Remove default margin
                                                                color: '#333'            // Heading text color
                                                            }}>
                                                                Orthopedic Rehabilitation
                                                            </h3>
                                                            <p style={{ 
                                                                fontSize: '15px',        // Paragraph font size
                                                                fontWeight: '400',       // Paragraph font weight
                                                                padding: '20px',         // Padding inside the paragraph
                                                                color: '#666'            // Paragraph text color
                                                            }}>
                                                               At Ojas-Kri, we offer a comprehensive range of orthopedic rehabilitation services tailored to meet your unique needs. Our expert team of orthopedic specialists, physiotherapists, and rehabilitation professionals collaborates to design personalized programs that foster recovery and enhance your overall quality of life. </p>
                                        </div>

                                        <div className='services_card' style={{ 
                                                            border: '1px solid #ddd', // Border color
                                                            borderRadius: '8px',       // Border radius
                                                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Box shadow for a subtle elevation
                                                            padding: '20px',          // Padding inside the card
                                                            textAlign: 'center'        // Text alignment
                                                        }}>
                                                            <img src={Neuro} style={{ 
                                                                height: '350px',        // Image height
                                                                width: '80%',           // Image width
                                                                objectFit: 'cover',     // Make sure the image covers the entire container
                                                                borderRadius: '8px',    // Border radius for the image
                                                                marginBottom: '15px'    // Some space between image and text
                                                            }}/>
                                                            <h3 style={{ 
                                                                fontSize: '1.5rem',      // Heading font size
                                                                margin: '0',             // Remove default margin
                                                                color: '#333'            // Heading text color
                                                            }}>
                                                                Neurological Rehabilitation
                                                            </h3>
                                                            <p style={{ 
                                                                fontSize: '15px',        // Paragraph font size
                                                                fontWeight: '400',       // Paragraph font weight
                                                                padding: '20px',         // Padding inside the paragraph
                                                                color: '#666'            // Paragraph text color
                                                            }}>
                                                               Ojas-kri offers a comprehensive array of neurological rehabilitation services tailored to meet the unique needs of individuals dealing with neurological challenges. Our multidisciplinary team, comprising neurologists, physiotherapists, and rehabilitation specialists, collaborates to design personalized programs that foster recovery and enhance overall well-being.   </p>
                                        </div>
                                        <div className='services_card' style={{ 
                                                            border: '1px solid #ddd', // Border color
                                                            borderRadius: '8px',       // Border radius
                                                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Box shadow for a subtle elevation
                                                            padding: '20px',          // Padding inside the card
                                                            textAlign: 'center'        // Text alignment
                                                        }}>
                                                            <img src={cardio} style={{ 
                                                                height: '350px',        // Image height
                                                                width: '80%',           // Image width
                                                                objectFit: 'cover',     // Make sure the image covers the entire container
                                                                borderRadius: '8px',    // Border radius for the image
                                                                marginBottom: '15px'    // Some space between image and text
                                                            }}/>
                                                            <h3 style={{ 
                                                                fontSize: '1.5rem',      // Heading font size
                                                                margin: '0',             // Remove default margin
                                                                color: '#333'            // Heading text color
                                                            }}>
                                                                Cardiopulmonary Rehabilitation
                                                            </h3>
                                                            <p style={{ 
                                                                fontSize: '15px',        // Paragraph font size
                                                                fontWeight: '400',       // Paragraph font weight
                                                                padding: '20px',         // Padding inside the paragraph
                                                                color: '#666'            // Paragraph text color
                                                            }}>
                                                             OjasKri offers a holistic range of cardiopulmonary rehabilitation services, addressing the unique needs of individuals navigating heart and lung-related health concerns. Our expert team, consisting of cardiologists, pulmonologists, physiotherapists, and rehabilitation professionals, collaborates to tailor personalized programs that promote recovery and enhance overall well-being. </p>
                                        </div>
                                    </div>

                                    <div className='all-services-button-2'>
                                          <Link to="/services"> <Button  variant='contained' style={{width:'200px',height:'60px',fontSize:'15px',marginTop:'10px'}}>
                                                <b>View All Services</b>
                                            </Button></Link>
                                    </div>

                        </div>
                     </div>
                     <div className='landingPage_4' >
                                        <div className='features'>
                                               <div className='features_head'>
                                                                <div className='features_line_1'></div>
                                                                <h1>Features & Benefits</h1>
                                                                <div className='features_line_1'>

                                                                </div>
                                                                
                                               </div>
                                               <div className='features_body'>
                                                              <div className='feature_points'>
                                                                <h3>Features</h3>
                                                                <ul>
                                                                <li>
                                                                    <input type='radio' id='feature3' name='feature12' checked/>
                                                                    <label htmlFor='feature3' style={{marginLeft:'5px'}}>Personalized Care</label>
                                                                </li>
                                                                <li>
                                                                    <input type='radio' id='feature1' name='feature11' checked/>
                                                                    <label htmlFor='feature1' style={{marginLeft:'5px'}}>Chronic Pain Management</label>
                                                                </li>
                                                                <li>
                                                                    <input type='radio' id='feature2' name='feature10' checked/>
                                                                    <label htmlFor='feature2' style={{marginLeft:'5px'}}>Injury Recovery</label>
                                                                </li>
                                                                <li>
                                                                    <input type='radio' id='feature3' name='feature9' checked/>
                                                                    <label htmlFor='feature3' style={{marginLeft:'5px'}}>Experienced Team</label>
                                                                </li>
                                                                </ul>
                                                            </div>   
                                                            <div className='feature_points'>
                                                                <h3>Benefits</h3>
                                                                <ul>
                                                                <li>
                                                                    <input type='radio' id='feature3' name='feature18' checked/>
                                                                    <label htmlFor='feature3' style={{marginLeft:'5px'}}>Improved Mobility</label>
                                                                </li>
                                                                <li>
                                                                    <input type='radio' id='feature1' name='feature71' checked/>
                                                                    <label htmlFor='feature1' style={{marginLeft:'5px'}}>Customized Treatment Plans</label>
                                                                </li>
                                                                <li>
                                                                    <input type='radio' id='feature2' name='feature16' checked/>
                                                                    <label htmlFor='feature2' style={{marginLeft:'5px'}}>Compassionate Care</label>
                                                                </li>
                                                                <li>
                                                                    <input type='radio' id='feature3' name='featur51' checked/>
                                                                    <label htmlFor='feature3' style={{marginLeft:'5px'}}>Expert Knowledge</label>
                                                                </li>
                                                                </ul>
                                                            </div>  
                                                            <div className='feature_points'>
                                                               <img src={physio1} style={{width:'100%'}}/>
                                                            </div> 
                                               </div>
                                        </div>
                     </div>
                     <div className='landingPage_5'>
                                        <div className='testmonial'>
                                                            <div className='testmonial_head'>
                                                                        <h1 style={{fontSize:'50px',fontWeight:'800'}}>What Our Client Say?</h1>
                                                                        <h3 style={{marginLeft:'10px'}}>Hear What Our Clients Have Say ABout Us</h3>
                                                            </div>
                                                            <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={1}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
        noSwiping={true}
        noSwipingclassName="swiper-no-swiping"
      >
        <SwiperSlide style={{borderRadius:'2rem',width:'100%',background:'white'}}>
         
                    <div className="testimonial-container">
                                <div className="btn" id="btn-prev"><i className="fa-solid fa-chevron-left"></i></div>
                                        <div className="btn" id="btn-next"><i className="fa-solid fa-chevron-right"></i></div>
                                                    <div className="stars">
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                       
                                                    </div>
                                                    <p className="testimonial">
                                                    I can't express my gratitude enough to Ojas-Kri! The physiotherapy sessions have been a game-changer for my knee injury recovery. The personalized approach and encouragement from the dedicated team made all the difference. I feel stronger, more flexible, and ready to tackle any challenges ahead.
                                                    </p>
                                                     <p className='testimonial_1'>
                                                    Excellent Doctors with friendly nature which gave us freedom to share everything !!!
                                                   </p>
                                                <div className="user">
                                                    <img src="https://randomuser.me/api/portraits/women/46.jpg" alt="user" className="user-image" />
                                                    <div className="user-details">
                                                    <h4 className="username">Vikas Raju</h4>
                                                    <p className="role">Bussiness person</p>
                                            </div>
                                </div>
                    </div>
        </SwiperSlide>
        <SwiperSlide style={{borderRadius:'2rem',width:'100%',background:'white'}}>
        <div className="testimonial-container">
                                <div className="btn" id="btn-prev"><i className="fa-solid fa-chevron-left"></i></div>
                                        <div className="btn" id="btn-next"><i className="fa-solid fa-chevron-right"></i></div>
                                                    <div className="stars">
                                                    <i className="fa-solid fa-star" style={{color:'gold'}}></i>
                                                        <i className="fa-solid fa-star" style={{color:'gold'}}></i>
                                                        <i className="fa-solid fa-star" style={{color:'gold'}}></i>
                                                        <i className="fa-solid fa-star" style={{color:'gold'}}></i>
                                                       
                                                       
                                                    </div>
                                                    <p className="testimonial">
                                                    Ojas-Kri has been a beacon of hope for me. Suffering from chronic pain, the physiotherapists crafted a tailored plan that not only relieved my discomfort but also improved my overall mobility. The positivity and expertise of the team truly set Ojas-Kri apart.
                                                    </p>
                                                    <p className='testimonial_1'>
                                                    Excellent Doctors with friendly nature which gave us freedom to share everything !!!
                                                   </p>
                                                <div className="user">
                                                    <img src="https://randomuser.me/api/portraits/women/46.jpg" alt="user" className="user-image" />
                                                    <div className="user-details">
                                                    <h4 className="username">Manish</h4>
                                                    <p className="role">Software Employee</p>
                                            </div>
                                </div>
                    </div>
        </SwiperSlide>
       
        <SwiperSlide style={{borderRadius:'2rem',width:'100%',background:'white'}}>
        <div className="testimonial-container">
                                <div className="btn" id="btn-prev"><i className="fa-solid fa-chevron-left"></i></div>
                                        <div className="btn" id="btn-next"><i className="fa-solid fa-chevron-right"></i></div>
                                                    <div className="stars">
                                                        <i className="fa-solid fa-star" style={{color:'gold'}}></i>
                                                        <i className="fa-solid fa-star" style={{color:'gold'}}></i>
                                                        <i className="fa-solid fa-star" style={{color:'gold'}}></i>
                                                        <i className="fa-solid fa-star" style={{color:'gold'}}></i>
                                                       
                                                    </div>
                                                    <p className="testimonial">
                                                    Choosing Ojas-Kri for my post-surgery rehabilitation was the best decision. The therapists are not only highly skilled but also genuinely caring. They guided me through each step of my recovery journey, and today, I am back on my feet, stronger and more resilient than ever.
                                                    </p>
                                                     <p className='testimonial_1'>
                                                    Excellent Doctors with friendly nature which gave us freedom to share everything !!!
                                                   </p>
                                                <div className="user">
                                                    <img src="https://randomuser.me/api/portraits/women/46.jpg" alt="user" className="user-image" />
                                                    <div className="user-details">
                                                    <h4 className="username">Aruna</h4>
                                                    <p className="role">Marketing</p>
                                            </div>
                                </div>
                    </div>
        </SwiperSlide>
      
       
      
       
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ArrowBackIosNewIcon className='arrow_icon' />
          </div>
          <div className="swiper-button-next slider-arrow">
            <ArrowForwardIosIcon className='arrow_icon' />
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
                                        </div>
                     </div>
                     <div>
      <div className='services_main_111_1' style={{height:'40vh !important'}}>
        <div className='services_submain_111_1 image_bg_111_1 image_bg1_111_1' style={{height:'40vh !important'}}>
            <div className='services_left_submain_111_1' style={{zIndex:'1'}}>
            <Link to="/book">   <p style={{fontSize:'42px',fontWeight:'bold',color:'#ffffff'}}>Heal Your Body</p></Link> 
                <p style={{fontSize:'22px',color:'#ffffff'}}>Get expert physiotherapy treatments to relieve pain and improve mobility.</p>
                <button className='services_left_submain_btn_111_1' style={{backgroundColor:'#71eee8',color:'#001615'}}>Book Now</button>
            </div>
        </div>
      </div>
    </div>
                     
                     <div className='landingPage_2' >
                                            <div className='landingPage_background'>
                                                        <div className='clinic_1'>
                                                                <img src={physio6} style={{height:'300px',width:'80%',marginLeft:'120px',marginTop:'60px'}}/>
                                                        </div>
                                                    <div className='clinic_2'>
                                                        <div className='clinic_3'>
                                                                        <div className='clinic_4'>
                                                                                        <h1 style={{color:'#f83292'}}>About us</h1>
                                                                                        <p>
                                                                                        "OjasKri Physical Clinic is a dedicated wellness center, providing comprehensive healthcare services to promote physical well-being. Our expert team of healthcare professionals offers personalized treatments, rehabilitation, and therapeutic solutions, ensuring a holistic approach to health. With state-of-the-art facilities and a patient-centric ethos, OjasKri Physical Clinic is committed to fostering vitality and enhancing the overall quality of life for our patients."
                                                                                        </p>
                                                                        </div>
                                                        </div>
                                                    </div></div>
                                          
                     </div>    
                   <Footer/>
        </div></>
    );
}

export default LandingPage;
