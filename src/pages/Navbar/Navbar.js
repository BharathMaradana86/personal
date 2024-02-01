import React,{useState} from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'

const Navbar=()=>{

    const [menuOpen,setMenuOpen]=useState(false);

    return (
        <div>
            <div className="Navbar_main_div" >
                    <Link to='/'><div style={{marginLeft:'100px'}}><img src="/logoCrop.jpeg" width="120px" style={{height:'10vh'}}/></div></Link>

                    <div className="menu-main">
                        <Link to='/'><Button variant="outlined" className="menu-items" style={{marginRight:'20px',height:'40px',width:'100px',color:'#50B1BB',borderColor:'#50B1BB',fontSize:'larger'}}><b>HOME</b></Button></Link>
                        <Link to='/services'><Button variant="outlined" className="menu-items" style={{marginRight:'20px',height:'40px',width:'100px',color:'#50B1BB',borderColor:'#50B1BB',fontSize:'larger'}}><b>SERVICES</b></Button></Link>
                      <Link to='/About'> <Button variant="outlined" className="menu-items" style={{marginRight:'20px',height:'40px',width:'130px',color:'#50B1BB',borderColor:'#50B1BB',fontSize:'larger'}}><b>ABOUT US</b></Button></Link>
                        <Link to='/contact'><Button variant="outlined" className="menu-items" style={{marginRight:'20px',height:'40px',width:'130px',color:'#50B1BB',borderColor:'#50B1BB',fontSize:'larger'}}><b>CONTACT US</b></Button></Link>
                    </div>

                    <div style={{width:'250px',display:'flex',flexDirection:'column',flexWrap:'wrap',right:'0px',alignItems:'center',justifyContent:'center',gap:'3px'}}>                 
                        <p style={{color:'#50B1BB',fontSize:'larger',textDecoration:'underlined'}}><b>Call us at: <a href="tel:+918886614949" style={{color:'#50B1BB'}}>(+91)- 8886614949</a></b></p>
                        <p style={{fontSize:'larger'}}><b><Link to="/book" style={{color:'#50B1BB'}}>Click here to (Book an Appointment)</Link></b> </p>
                    </div>
            </div>
            <div className="Navbar_main_div_phone" >
                <div className="top-heading">
                    <p style={{color:'white',marginRight:'10px'}}><b>Call : <a href="tel:+918886614949" style={{color:'white'}}>(+91)- 8886614949</a></b></p><p><b><Link to="/book" style={{color:'white'}}>Click here to (Book an Appointment)</Link></b> </p>
                </div>
                <div className="bottom-heading" style={{marginLeft:'10px',display:'flex',justifyContent:'space-between'}}>
                    <img className="bottom-heading-logo" src="/logoCrop.png" width="100px" height="60px"/>
                    <div className="bottom-heading-menu" style={{margin:'15px 20px'}}><img className="bottom-heading-menu-img" onClick={()=>setMenuOpen(true)} src="/menu-button.png" width="30px" height="30px" style={{padding:'7px 7px',border:'2px solid #50B1BB',borderRadius:'5px',display:menuOpen?'none':'block'}}/><img className="bottom-heading-menu-img" onClick={()=>setMenuOpen(false)} src="/close.png" width="30px" height="30px" style={{padding:'7px 7px',border:'2px solid #50B1BB',borderRadius:'5px',display:menuOpen?'block':'none'}}/> </div>
                </div>
                <div className={`dropDown ${menuOpen ? 'show' : ''}`} onClick={()=>setMenuOpen(false)} >
                    <Link to='/'><p>HOME</p></Link>
                    <Link to='/services'><p>SERVICES</p></Link>
                    <Link to='/About'><p>ABOUT US</p></Link>
                    <Link to='/contact'><p>CONTACT US</p></Link>
                </div>
            </div>

        </div>
    );
}

export default Navbar;