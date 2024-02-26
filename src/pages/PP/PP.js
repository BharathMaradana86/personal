import React from 'react'
import './PP.css';
import icon from '../../images/icon.jpeg'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export default function PP() {
  return (
    <>
    <Navbar />
    <div className='pp_parent'>
      <div className='pp_bg_image' >
        <p className='pp_head'>PRIVACY POLICY</p>
        <img src={icon} alt='ojaskri-icon' style={{height:'100%',objectFit:'cover'}} />
      </div>
      <div className='pp_content' style={{boxShadow:'0px 4px 4px 0px #00000040',marginLeft:'20px',marginRight:'20px',marginTop:'20px',justifyContent:'center',alignItems:'center'}}>
        <p style={{fontSize:'22px',fontWeight:'bold',letterSpacing:'1px',color:'#f83292'}}>PRIVACY POLICY</p>
        <p style={{fontSize:'18px',fontWeight:'500'}}>We value the trust you place in <b style={{fontWeight:'bold'}}>OJAS-KRI Physio and Rehab Center.com.</b> That’s why we insist upon the highest standards for customer information privacy and transactions.</p>
      </div>
      <div className='pp_content'>
        <p style={{fontSize:'20px',fontWeight:'bold',textDecoration:'underline'}}>Privacy Policy Details</p>
        {/* <p style={{fontSize:'18px',fontWeight:'400'}}>We value the trust you place in OJAS-KRI Physio and Rehab Center.com. That’s why we insist upon the highest standards for customer information privacy and transactions.</p> */}
        <p style={{fontSize:'20px',fontWeight:'bold',marginTop:'15px'}}>1. Introduction</p>
        <div className='pp_content_text'>
          <p>We at Healthvista India Private Limited (hereinafter mentioned as “OJAS-KRI Physio and Rehab Center”) are committed to protecting our customer’s personal information and/or sensitive 
            personal data and strive to maintain the privacy of your personal information.</p>
          <p>For your information, “Personal information” is any information that can be used by itself to uniquely identify, 
            contact, or locate a person, or can be used with information available from other sources to uniquely identify an 
            individual. For this policy, sensitive personal data or information, such as medical history have been considered as
            a part of personal information.</p>
          <p>OJAS-KRI Physio and Rehab Center does collect your personal information for a variety of regulatory and business purposes. 
             These include, but are not limited to:</p>
          <p>OJAS-KRI Physio and Rehab Center’s Privacy Policy is designed and developed to address the privacy and security of your personal information provided to us.
             This Privacy Policy describes the personal information which we may collect and provides our approach towards handling or dealing with the same.</p>
          <p><b style={{fontWeight:'bold',textDecoration:'underline'}}>Note:</b> Our privacy policy is subject to change at any time without notice.</p>
          <p>By using our services and portal, you agree to all terms & conditions as mentioned in the below document.</p>
        </div>
      </div>
      <div className='pp_content'>
        <p style={{fontSize:'20px',fontWeight:'bold'}}>2. Collection of Personally Identifiable Information</p>
        <div className='pp_content_text'>
          <p>OJAS-KRI Physio and Rehab Center and its authorized third parties will collect information about your identity, demographics, medical history and related evidentiary documentation. For this document, a ‘Third Party’ is a service provider who associates with OJAS-KRI Physio and Rehab Center and is involved 
            in handling, managing, storing, processing, protecting and transmitting information about OJAS-KRI Physio and Rehab Center.</p>
          <p>This definition also includes all sub-contractors, consultants and/or representatives of the Third party. We may also collect your personal information when you use our services or websites or otherwise interact with us
             during our relationship. Personal information collected and held by us may include your name, father’s name, mother’s name, spouse’s name, date of birth, current and previous addresses, telephone number, mobile phone number, email address, occupation and information contained in the documents used as proof of identity and proof of address. Medical history is collected to help us serve you better in terms of medical recommendations. OJAS-KRI Physio and Rehab Center and its authorized third parties collect, store, and process following types of Sensitive Personal Information such as passwords, financial information (details of Bank account, credit card, debit card, or other payment instrument details), physiological information for providing our products, services and for use of our website. We may also hold information related to your utilization of our services which may include your call details while interacting with us, 
            your browsing history on our website, location details and additional information provided by you while using our services.</p>
          <p>We may keep a log of the activities performed by you on our websites and portal by using various internet techniques such as web cookies, web beacons, server log files, etc. for analytical purposes and for analysis of the amiability of various features on our site. This information may be used to provide you with a better experience at our portal along with evidentiary purposes. At any time while you are surfing our site, if you do not wish to share surfing information, you may opt out of receiving the cookies from our site by making appropriate changes to your browser privacy settings. In case you do not provide your information or consent for usage of personal information or later on withdraw your consent for usage of the personal information so collected, OJAS-KRI Physio and Rehab Center
             reserves the right to not provide the services or to withdraw the services for which the said information was sought.</p>
        </div>
      </div>
      <div className='pp_content'>
        <p style={{fontSize:'20px',fontWeight:'bold'}}>3. Disclosure and Transfer of Personal Information</p>
        <div className='pp_content_text'>
          <p><b style={{fontWeight:'bold'}}>Internal Use:</b> As explained in the section “Collection of Personal Information” OJAS-KRI Physio and Rehab Center and its employees may utilize 
          some or all available personal information for internal assessments, measures, operations and related activities.</p>
          <p><b style={{fontWeight:'bold'}}>(a)</b> Collection of personal information external to itself for strategic, tactical and operational purposes. Such agencies though external to OJAS-KRI Physio and Rehab Center, will always be entities which are covered by contractual agreements. These agreements in
             turn include OJAS-KRI Physio and Rehab Center’s guidelines for the management, treatment and secrecy of personal information.</p>
          <p>We may transfer your personal information or other information collected, stored, or processed by us to any other entity or organization located in India or outside India only in case it is necessary for providing services to you or if you have consented (at the time of collection of information) to the same. This may also include sharing of aggregated information with them in order for them to understand our environment and consequently, provide you with better services. While sharing your personal information with third parties,
             adequate measures shall be taken to ensure that reasonable security practices are followed at the third party.</p>
          <p>You are providing your consent to contact you either via calls, sms or emails, and for sharing your personal information in several ways, such as in writing, online, through “click-through” agreements; orally, including through interactive voice response; or when your consent is part of the terms and conditions pursuant to which we provide you service; or when you provide us a missed call for our marketing SMS campaigns. Please note, this will override DND signups. We, however assure you that OJAS-KRI Physio and Rehab Center does not disclose your personal information to unaffiliated third parties (parties outside OJAS-KRI Physio
             and Rehab Center corporate network and its Strategic and Business Partners) which could lead to invasion of your privacy.</p>
          <p><b style={{fontWeight:'bold'}}>Government Agencies:</b> We may also share your personal information with Government agencies or other authorized law enforcement agencies (LEAs) mandated under law to obtain such information for the purpose of verification of identity or for 
            prevention, detection, investigation including but not limited to cyber incidents, prosecution, and punishment of offences.</p>
        </div>
      </div>
      <div className='pp_content'>
        <p style={{fontSize:'20px',fontWeight:'bold'}}>4. Security Practices and Procedures</p>
        <div className='pp_content_text'>
          <p>We adopt reasonable security practices and procedures, to include, technical, operational, managerial and physical security controls in order to
             protect your personal information from unauthorized access, or disclosure while it is under our control.</p>
          <p><b style={{fontWeight:'bold'}}>Internet Use –</b> We maintain the security of our internet connections, however for reasons outside of our control, security risks may still arise. Any personal information transmitted to us or from our online products or services will therefore be your own risk. However, we will strive to ensure the security of your information.
             We observe reasonable security measures to protect your personal information against hacking and virus dissemination.</p>
          <p>A <b style={{fontWeight:'bold'}}>“Cookie”</b> is a small piece of information stored by a Web server on a Web browser so it can be later read back from that browser. Cookies are useful for enabling the browser to remember information specific to a given user. OJAS-KRI Physio and Rehab Center.com may place both permanent and temporary cookies in your computer’s hard drive. 
            OJAS-KRI Physio and Rehab Center.com’s cookies do not contain any of your personally identifiable information.</p>
        </div>
      </div>
      <div className='pp_content'>
        <p style={{fontSize:'20px',fontWeight:'bold'}}>5. Update of Personal Information.</p>
        <div className='pp_content_text'>
          <p>We strive to keep our records updated with your latest information. To this end, if you see any discrepancy in your personal information or
           if a part of your personal information changes, we request to update the same on to ojaskriphysio@gmail.com.</p>
          <p>In case of non-compliance with the terms and conditions and privacy policy, OJAS-KRI Physio and Rehab Center reserves the right to remove your non-compliant information from its systems. Further, depending
             on the seriousness of the non-compliance, we may choose to discontinue some or all of the services being provided to you by us.</p>
          <p>A <b style={{fontWeight:'bold'}}>“Cookie”</b> is a small piece of information stored by a Web server on a Web browser so it can be later read back from that browser. Cookies are useful for enabling the browser to remember information specific to a given user. OJAS-KRI Physio and Rehab Center.com may place both permanent and temporary cookies on your computer’s hard drive.
          <b style={{fontWeight:'bold'}}> https://ojaskri.onrender.com/</b> cookies do not contain any of your personally identifiable information.</p>
        </div>
      </div>
      <div className='pp_content'>
        <p style={{fontSize:'20px',fontWeight:'bold'}}>6. Communications</p>
        <div className='pp_content_text'>
          <p><b style={{fontWeight:'bold'}}>(a)</b> OJAS-KRI Physio and Rehab Center will communicate with you through the email and mobile number you have specified. Your email address is never shared with anybody within or outside OJAS-KRI Physio and Rehab Center.
           OJAS-KRI Physio and Rehab Center uses your email address and phone number to send you the following types of communications:</p>
          <p><b style={{fontWeight:'bold'}}>(b)</b> Transactional information about the services that you have taken including but not limited to payment information, appointment times, clinician information etc.</p>
          <p><b style={{fontWeight:'bold'}}>(c)</b> Promotional information to inform you about additional services or related services that we believe may be of interest to you.</p>
        </div>
      </div>
      <div className='pp_content'>
        <p style={{fontSize:'20px',fontWeight:'bold'}}>7. Feedback and Concerns</p>
        <div className='pp_content_text'>
          <p>We are committed to safeguarding your personal information collected and handled by us and look forward to your continued support for the same. In case of any feedback or concern regarding the protection of your personal information,
           delivery of products/ services and payment issues, you can <b style={{fontWeight:'bold'}}>Contact Us at 8886614949 or ojaskriphysio@gmail.com.</b></p>
          <p><b style={{fontWeight:'bold'}}>(a)</b> Collection of personal information external to itself for strategic, tactical and operational purposes. Such agencies though external to OJAS-KRI Physio and Rehab Center, will always be entities which are covered by contractual agreements. These agreements in
             turn include OJAS-KRI Physio and Rehab Center’s guidelines for the management, treatment and secrecy of personal information.</p>
          <p>OJAS-KRI Physio and Rehab Center reserves the right to amend or modify this Privacy Policy at any time, as and when the need arises.
             We request you to visit our website <b style={{fontWeight:'bold'}}>https://ojaskri.onrender.com/</b> periodically for contemporary information and changes.</p>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}
