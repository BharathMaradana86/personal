import React from "react";
import './Footer.css'
import { Link } from "react-router-dom";

const Footer=()=>{
    return (
        <div>
            <div className="footer-main">
                <div className="footer-logo-div">
                    <img src="/logoCrop-removebg.png" width="120px" style={{height:'100px',borderRadius:'10px'}}/>
                </div>
                <div className="footer-about-div">
                    <b>ABOUT US</b>

                    <p>Welcome to OJAS-KRI Physio and Rehab Center, where evidence-based expertise fuels your journey to wellness.Our clinic blends advanced research with personalized care, ensuring your rehabilitation is rooted in proven methodologies <Link to='/About' style={{color:'#50B1BB',display:'inline'}}>Read more....</Link></p>
                </div>
                <div className="footer-follow-div">
                    <b>FOLLOW US</b><br/><br/>
                    <img src="/facebook-logo.png" style={{borderRadius:'5px'}}/>
                    <img src="/instagram.png" style={{borderRadius:'5px'}}/>
                    <img src="/linkedin.png" style={{borderRadius:'5px'}}/>
                    <img src="/youtube-logo.png" style={{borderRadius:'5px'}}/>
                </div>
            </div>

            <div className="footer-bottom-div">
                <div>
                    <p >Copyright © 2024 OJAS-KRI PHYSIO CENTRE All Rights Reserved</p>
                </div>
                <div>
                  <Link to="/About"><p style={{marginRight:'15px'}}>About Us</p></Link>
                  <Link to="/tc" ><p style={{marginRight:'15px'}}>Terms & Conditions</p></Link>
                  <Link to="/pp" ><p style={{marginRight:'15px'}}>Privacy Policy</p></Link>
                  <Link to="/contact" ><p style={{marginRight:'15px'}}>Contact Us</p></Link>
                  <Link to="/book"><p>Book An Appointment</p></Link>
                </div>
                <div><p>Developed By @YSB-SOLUTIONS</p></div>
            </div>
        </div>
            
    )
}

export default Footer;