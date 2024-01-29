import React,{useState} from "react";
import './Navbar.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'

const Navbar=()=>{

    const [menuOpen,setMenuOpen]=useState(false);

    return (
        <div>
            <div className="Navbar_main_div">
                    <div style={{marginLeft:'100px'}}><img src="/logoCrop.jpeg" width="120px" height="90px"/></div>

                    <div className="menu-main">
                        <Button variant="outlined" className="menu-items" style={{marginRight:'20px',height:'40px',width:'100px'}}><b>HOME</b></Button>
                        <Button variant="outlined" className="menu-items" style={{marginRight:'20px',height:'40px',width:'100px'}}><b>SERVICES</b></Button>
                        <Button variant="outlined" className="menu-items" style={{marginRight:'20px',height:'40px',width:'130px'}}><b>ABOUT US</b></Button>
                        <Button variant="outlined" className="menu-items" style={{marginRight:'20px',height:'40px',width:'130px'}}><b>CONTACT US</b></Button>
                    </div>

                    <div style={{flexWrap:'wrap',right:'0px',padding:'30px 20px'}}>                 
                        <p style={{color:'#1976D2'}}><b>Call us at: <a href="tel:+918886614949" style={{color:'#1976D2'}}>(+91)- 8886614949</a></b></p>
                        <p><b><a href="" style={{color:'#1976D2'}}>Click here to (Book an Appointment)</a></b> </p>
                    </div>
            </div>
            <div className="Navbar_main_div_phone">
                <div className="top-heading">
                    <p style={{color:'white',marginRight:'10px'}}><b>Call : <a href="tel:+918886614949" style={{color:'white'}}>(+91)- 8886614949</a></b></p><p><b><a href="" style={{color:'white'}}>Click here to (Book an Appointment)</a></b> </p>
                </div>
                <div className="bottom-heading" style={{marginLeft:'10px',display:'flex',justifyContent:'space-between'}}>
                    <img className="bottom-heading-logo" src="/logoCrop.jpeg" width="100px" height="60px"/>
                    <div className="bottom-heading-menu" style={{margin:'15px 20px'}}><img className="bottom-heading-menu-img" onClick={()=>setMenuOpen(true)} src="/menu-button.png" width="15px" height="15px" style={{padding:'7px 7px',border:'2px solid #1976D2',borderRadius:'5px',display:menuOpen?'none':'block'}}/><img className="bottom-heading-menu-img" onClick={()=>setMenuOpen(false)} src="/close.png" width="15px" height="15px" style={{padding:'7px 7px',border:'2px solid #1976D2',borderRadius:'5px',display:menuOpen?'block':'none'}}/> </div>
                </div>
                <div className={`dropDown ${menuOpen ? 'show' : ''}`} onClick={()=>setMenuOpen(false)} >
                    <p>HOME</p>
                    <p>SERVICES</p>
                    <p>ABOUT US</p>
                    <p>CONTACT US</p>
                </div>
            </div>

        </div>
    );
}

export default Navbar;