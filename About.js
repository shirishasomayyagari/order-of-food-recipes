import React from 'react'
import './Recipe.css';
import { useNavigate } from 'react-router-dom';
const About = () => {
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
            <div>
            <h1>About us</h1>
        <img style={{height:'85vh',width: '600px'}}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQecJB92Uk6oxyTC9UvJwjXVA2lkNYlLV5ig&usqp=CAU"></img>
        <p  className='mul'>
        <h2>Mayura Restaurant Kadapa:</h2>
        
        Mayura Restaurant in kadapa provides best services with aesthetic seat arrangement.Many Restaurants are aware of their customer preferences,you can find variety of vegetarian,non-vegetarian
        If we are looking for a perfect place to have family dinner we highly suggest Mayura Restaurant kadapa and provides peaceful environment and greenarya
        environment and the restaurant atlocated nearest to town and easy transportation facilities and you can expect any Recipe from our Restaurant
        and online facilites also available and you can order any item at any time and any place

        <h2>Location and overview:</h2>
        Established in the year 2019,Mayura Restaurant in kadapa is a top player in the category of Restaurants.This well known establishment acts as one step
        a one stepdestination servicing  customers.The belief that customer satisfaction   is as important as their product and services.This business employs
        individuals that are dedicated towards their respective roles and put in a lot of effort to achieve the common vision and larger goals of the company.
        In the near future,this business aims to expand its line of products and services and cater to a larger client base.
        <h2>Timings:</h2>
        <h3>opening Time:6:00AM</h3>
        <h3>Closing Time:9:00PM</h3>
        <h2>Address:</h2>
        <h4>23/6,opp KFC RTC,Main,New Bus Stand Rd,Kadapa,Andhra Pradesh 516001</h4>

        </p>

        </div>
        </div>
    )
}
export default About;
