import React from 'react'
import './TC.css';
import icon from '../../images/icon.jpeg'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export default function TC() {
  return (
    <>
    <Navbar />
    <div className='tc_parent'>
      <div className='tc_bg_image'>
        <p className='tc_head'>TERMS & CONDITIONS</p>
        <img src={icon} alt='ojaskri-icon' style={{height:'100%',objectFit:'cover'}} />
      </div>
      <div className='tc_content'>
        <p style={{fontSize:'20px',fontWeight:'bold'}}>TERMS AND CONDITIONS AGREEMENT</p>
        <div className='tc_content_text'>
          <p style={{fontSize:'18px',fontWeight:'bold'}}>READ THIS</p>
          <p>Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by
           the following terms and conditions of use, which together with our privacy policy govern Health vista India Limited's
            relationship with you in relation to this website. If you disagree with any part of these terms and conditions,
             please do not use our website.</p>
          <p>The term Health vista India Limited or ‘us’ or ‘we’ refers to the owner of the website whose registered office is 
            No.69/B, 1st Cross, 1st Stage, Domlur Layout, Bangalore - 560071, Karnataka, India.</p>
          <p>The use of this website is subject to the following terms of use:</p>
          <p>1. The content of the pages of this website is for your general information and use only. It is subject to change without notice.</p>
          <p>2. This website is designed to store your medical and demographic data.</p>
          <p>3. Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance,
               completeness or suitability of the information and materials found or offered on this website for any particular
                purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly
                 exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</p>
          <p>4. Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. 
              It shall be your own responsibility 
              to ensure that any products, services or information available through this website meet your specific requirements.</p>
          <p>5. This website contains material which is owned by or licensed to us. This material includes, but is not limited to,
               the design, layout, look, appearance and graphics. Reproduction is 
              prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</p>
          <p>6. All trademarks reproduced in this website, which are not the property of,
               or licensed to the operator, are acknowledged on the website.</p>
          <p>7. Unauthorised use of this website may give rise to a claim for damages and/or be a criminal offence.</p>
          <p>8. From time to time, this website may also include links to other websites.
               These links are provided for your convenience to provide further information. 
               They do not signify that we endorse the website(s). We have no responsibility for the content of 
               the linked website(s).</p>
          <p>9. Your use of this website and any dispute arising out of such use of the website is subject to the laws of the Republic of India.</p>
        </div>
      </div>
      <div className='tc_content'>
        <p style={{fontSize:'20px',fontWeight:'bold'}}>REFUND POLICY</p>
        <div className='tc_content_text'>
          <p style={{fontSize:'18px',fontWeight:'bold'}}>READ THIS</p>
          <p>1. Refunds are issued through the payment method used at the time of purchase, except for cash payments.</p>
          <p>2. There won’t be refunds for any payments made using OJAS-KRI Physio and Rehab Center vouchers.</p>
          <p>3. Refunds are not done towards third-party accounts</p>
          <p>4. The time frame for different payment modes is usually between  10-15 business days after the cancellation 
            request has been received and verified by our customer support</p>
          <p>5. For NEFT transactions, we will need you to update the following information to enable us to process a
             refund to your account. Bank Account number, IFSC code, Account holder's name and Branch name. OJAS-KRI 
             Physio and Rehab Center will not be liable for any wrong inputs shared from your end.</p>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}
