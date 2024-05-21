import React from 'react'
import './Recipe.css';
import { useNavigate } from 'react-router-dom';
const Contact = () => {
    let navi=useNavigate()
    const goHome = () =>{
        navi("/Home")
    }
    const goAbout= () =>{
        navi("/About")
    }
    const goMenu= () =>{
        navi("/Menu")
    }
    const goContact= () =>{
        navi("/Contact")
    }
    return(
        <div>
            <ul className='ad'>
                <li onClick={goHome}>Home</li>
                <li onClick={goAbout}>About</li>
                <li onClick={goMenu}>Menu</li>
                <li onClick={goContact}>Contact</li>
            </ul>
            <div className='hey'>
            <h1>CONTACT</h1>
                <h3>Email:mayura@gmail.com</h3>
                <h3>Phone no:1-800-227-1031</h3>
                <h3>Fax:1-850-201-6911</h3>
                <h3>Address:23/6,opp KFC RTC,Main,New Bus<br></br> Stand Rd,Kadapa,Andhra Pradesh 516001</h3>
            </div>
        </div>
    )
}
export default Contact;
