import React,{useState,useEffect,useRef} from 'react'
import './Book.css'
// import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import Navbar from '../Navbar/Navbar'
import emailjs from '@emailjs/browser';

export default function Book() {
   const form = useRef();
    const width = window.innerWidth <1000

    const [formData, setFormData] = useState({
        name: "",
        phoneno: "",
        date:""
      });

      const [nameField,setNameField] = useState('')
      const handleNameField = (event) =>{
        setNameField(event.target.value)
      }

      const [phoneNo,setPhoneNo] = useState('')
      const handlePhoneNo = (event) =>{
        setPhoneNo(event.target.value)
      }

      const [type,setType] = useState('1')
      const handleType = (event) =>{
        setType(event.target.value)
      }

      const [date,setDate] = useState('')
      const handleDate = (event) =>{
        setDate(event.target.value)
      }

      const validateForm = () => {
        let isValid = true;
        const newFormData = {
          name: "",
          phoneno: "",
          date: "",
        };
    
        if (!nameField) {
          newFormData.name = "Please enter your name.";
  
          isValid = false;
        }

        if (!phoneNo) {
            newFormData.phoneno = "Please enter your book number.";
    
            isValid = false;
          }
    
        if (!date) {
            newFormData.date = "Please select your appointment date.";
    
            isValid = false;
          }
    
        setFormData(newFormData);
        return isValid;
      };
    

      const book_form_submit = (event) =>{
        event.preventDefault();
        let test = validateForm();
      
        const data= {
          name:nameField,
          phoneno:phoneNo,
          type:type,
          date:date,
        }
        console.log(data)
      console.log(form.current);  
      emailjs.sendForm('service_fkd4e9g', 'template_3pr635l',form.current , 'jveMW95uvC8XF28Ik')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }

    useEffect(() => {
        // Include the AddToAny script after the component mounts
        const script = document.createElement('script');
        script.src = 'https://static.addtoany.com/menu/page.js';
        script.async = true;
        document.body.appendChild(script);
    
        // Cleanup the script when the component unmounts
        return () => {
          document.body.removeChild(script);
        };
      }, []);

      // const scrollToTop = () => {
      //   window.scrollTo({
      //     top: 0,
      //     behavior: 'smooth', // You can change this to 'auto' for an instant scroll
      //   });
      // };

  return (
    <>
    <Navbar />
    <div className='book_main' style={{display:'grid',gridTemplateColumns:width ? '100%' : '60% 40%',position:'relative'}} >
        {width ? <></>: 
        <div className='book_submain'>
        </div> 
        }
        <div className='book_submain' style={{alignItems:width&&'center',}}>
            <div className='book_submain_paras' >
                <p className='book_submain_p1'>Book Your Visit At</p>
                <p className='book_submain_p2'>Ojaskri Physiotherapy Center</p>
            </div>
            <div style={{
                backgroundImage:  'linear-gradient(to right, rgba(52, 71, 103, 0), rgba(52, 71, 103, 0.4), rgba(52, 71, 103, 0))'  ,
                height: '2px',
                width: '80%',
                marginTop: '10px',
            }}></div>
            <form className='book_form' ref={form} onSubmit={book_form_submit}>
                <div className='book_form_fields_1'>
                    <div className='book_form_fields_namephnno'>
                        <p>Name <span style={{color:'red'}}>*</span></p>
                        <input type='text' className='book_form_input' value={nameField} onChange={handleNameField} placeholder='Enter your name'/>
                        {formData.name? <p style={{color:'red'}}>{formData.name}</p> : <></>}
                    </div>
                    <div className='book_form_fields_namephnno'>
                        <p>Phone Number <span style={{color:'red'}}>*</span></p>
                        <input type="tel" id="phone" name="phone" placeholder="XXX-XXX-XXXX" className='book_form_input' value={phoneNo} onChange={handlePhoneNo}/>
                        {formData.phoneno? <p style={{color:'red'}}>{formData.phoneno}</p> : <></>}
                    </div>
                </div>
                <div className='book_form_fields'>
                    <p>Select Service</p>
                    <select name="type" id="type"  className='book_form_input' value={type} onChange={handleType}>
                        <option value="1">Sports Injury Rehabilitaion</option>
                        <option value="2">Pain Management</option>
                        <option value="3">Post Operative Care</option>
                    </select>
                </div>
                <div className='book_form_fields'>
                    <p>Appointment Date <span style={{color:'red'}}>*</span></p>
                    <input type='date' className='book_form_input' value={date} onChange={handleDate} />
                    {formData.date? <p style={{color:'red'}}>{formData.date}</p> : <></>}
                </div>
                <button type='submit' className='book_btn'>BOOK APPOINTMENT NOW</button>
            </form>
        </div>
        <div className="a2a_kit a2a_kit_size_32 a2a_floating_style a2a_vertical_style a2a_follow" style={{ right: '0px', top: '310px', background: 'transparent' }}>
        <a className="a2a_button_instagram" href="https://www.instagram.com/supriya_pudipeddi/"></a>
        <a className="a2a_button_email" href="mailto:saisupriyapudipeddi@gmail.com"></a>
        <a className="a2a_button_linkedin" href="https://www.linkedin.com/in/supriya-pudipeddi-5068071ba/"></a>
        <a className="a2a_button_github" href="https://github.com/Supriya-1432"></a>
      </div>
      {/* <ArrowCircleUpIcon className='bottom_icon' style={{ position: 'fixed',
                                                          bottom: '0',
                                                          right: '0',
                                                          padding: '8px',
                                                          cursor: 'pointer',fontSize: '65px' }}  onClick={scrollToTop}
                                                          /> */}
    </div>
    </>

  )
}
