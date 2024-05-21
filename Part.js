import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Technology from './Technology';
import
const path = () =>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Technology/>}></Route>
            
            
        </Routes>
        </BrowserRouter>
        
    )
}






export default Path;
