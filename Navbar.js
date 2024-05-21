import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Menu from './Menu';
import Contact from './Contact';
import Login from './Login';
import Signup from './Signup';
import Pay from './Pay';
const Navbar = () => {
    return(
        <BrowserRouter>
           <Routes>
              <Route path="/Home" element={<Home/>}></Route>
              <Route path="/About" element={<About/>}></Route>
              <Route path="/Menu" element={<Menu/>}></Route>
              <Route path="/Contact" element={<Contact/>}></Route>
              <Route path="/Pay" element={<Pay/>}></Route>
              <Route path="/" element={<Login/>}></Route>
              <Route path="/signup" element={<Signup/>}></Route>
           </Routes>
        </BrowserRouter>
    )
}
export default Navbar;
