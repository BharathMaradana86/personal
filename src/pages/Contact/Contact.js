import React,{useState} from 'react'
import './Contact.css'
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer';


export default function Contact() {
    const width = window.innerWidth <1000

    const [formData, setFormData] = useState({
        name: "",
        email: "",
      });

      const [nameField,setNameField] = useState('')
      const handleNameField = (event) =>{
        setNameField(event.target.value)
      }

      const [email,setEmail] = useState('')
      const handleEmail = (event) =>{
        setEmail(event.target.value)
      }

      const [subject,setSubject] = useState('')
      const handleSubject = (event) =>{
        setSubject(event.target.value)
      }

      const [message,setMessage] = useState('')
      const handleMessage = (event) =>{
        setMessage(event.target.value)
      }

      const validateForm = () => {
        let isValid = true;
        const newFormData = {
            name: "",
            email: "",
        };
    
        if (!nameField) {
          newFormData.name = "Please enter your name.";
  
          isValid = false;
        }

        if (!email) {
            newFormData.email = "Please enter your mail id.";
    
            isValid = false;
          }
    
    
        setFormData(newFormData);
        return isValid;
      };

      const contact_form_submit = (event) =>{
        event.preventDefault();
        let test = validateForm();
        if(test){
        const data= {
          name:nameField,
          email:email,
        }
        console.log(data)
      }
    }


  return (
    <div>
      <Navbar/>
      <div className='contact_main'style={{display:'grid',gridTemplateColumns:width ? '100%' : '50% 50%',zIndex:'1'}}>
        <div className='contact_submain' style={{backgroundColor:'#50b1bb',alignItems:width&&'center',color:'#ffffff'}}>
            <div className='contact_submain_left'>
                <div className='contact_left_text'>
                    <p style={{fontSize:'32px',fontWeight:'bold'}}>Have Questions?</p>
                    <p style={{color:'#f5f5f5',fontSize:'17px',lineHeight:'25px'}}>Please feel free to call or email us, or use our contact form to get in touch with us. We look forward to hearing from you!</p>
                </div>
                <div className='contact_left_text'>
                    <div className='contact_icon_text' >
                        <CallIcon  />
                        <p style={{fontSize:'20px',fontWeight:'bold'}}>Emergency? Call Us</p>
                    </div>
                        <p style={{color:'#f5f5f5',fontSize:'17px'}}>XXX-XXX-XXXX</p>
                </div>
                <div className='contact_left_text'>
                    <div className='contact_icon_text'>
                        <MailIcon />
                        <p style={{fontSize:'20px',fontWeight:'bold'}}>Send Us Mail</p>
                    </div>
                        <p style={{color:'#f5f5f5',fontSize:'17px'}}>XXX@gmail.com</p>
                </div>
                <div className='contact_left_text'>
                    <div className='contact_icon_text'>
                        <LocationOnIcon />
                        <p style={{fontSize:'20px',fontWeight:'bold'}}>Address:</p>
                    </div>
                        <p style={{color:'#f5f5f5',fontSize:'17px',lineHeight:'25px'}}>Please feel free to call or email us, or use our contact form to get in touch with us. We look forward to hearing from you!</p>
                </div>
                <div className='contact_left_text'>
                    <p style={{fontSize:'20px',fontWeight:'bold'}}>Find the Center</p>
                    <div class="mapouter">
                        <div class="gmap_canvas">
                            <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                            </iframe>
                            <a href="https://123movies-to.org">123movies</a><br />
                            <a href="https://www.embedgooglemap.net">embed google maps</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='contact_submain' style={{backgroundColor:'#eff4f8',paddingTop:'50px'}}>
            <p className='contact_right_para'>GET IN TOUCH</p>
            <form className='contact_form' onSubmit={contact_form_submit}>
                <div className='contact_form_input'>
                    <p style={{fontSize:'18px'}}>Name <span style={{color:'red'}}>*</span></p>
                    <input type='text' className='contact_form_input_field' placeholder='Enter your Name' value={nameField} onChange={handleNameField}/>
                    {formData.name? <p style={{color:'red'}}>{formData.name}</p> : <></>}
                </div>
                <div className='contact_form_input'>
                    <p style={{fontSize:'18px'}}>Email <span style={{color:'red'}}>*</span></p>
                    <input type='email' className='contact_form_input_field' placeholder="What's your Email?" value={email} onChange={handleEmail}/>
                    {formData.email? <p style={{color:'red'}}>{formData.email}</p> : <></>}
                </div>
                <div className='contact_form_input'>
                    <p style={{fontSize:'18px'}}>Subject</p>
                    <input type='text' className='contact_form_input_field' placeholder='Enter the Subject...' value={subject} onChange={handleSubject}/>
                </div>
                <div className='contact_form_input'>
                    <p style={{fontSize:'18px'}}>Message</p>
                    <textarea id='message' name='message' className='contact_form_message' placeholder='Enter your message...' value={message} onChange={handleMessage}></textarea>
                </div>
                <button type='submit' className='contact_form_submit_btn'>SEND MESSAGE</button>
            </form>
        </div>
        
      </div>
      <Footer/>
    </div>
  )
}
