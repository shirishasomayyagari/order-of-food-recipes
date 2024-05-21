import React from 'react'
import './Recipe.css';
import { useNavigate } from 'react-router-dom';
const Home = () => {
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
    const goPay= () =>{
        navi("/Pay")
    }
    return(
        <div>
            <ul className='ad'>
                <li onClick={goHome}>Home</li>
                <li onClick={goAbout}>About</li>
                <li onClick={goMenu}>Menu</li>
                <li onClick={goContact}>Contact</li>
            </ul>
            <div className='section' style={{background:'skyblue'}}>
                <h1>Mayura Restaurant!</h1>
                <h1>We give you an eating experience that you'll never forget.</h1>
            </div>
                <div className='session'>
                <img style={{height:'40vh',width:'300px'}}src="https://i.makeagif.com/media/11-11-2016/LTHDIZ.gif"></img>
                <img style={{height:'40vh',width:'300px'}}src="https://cdn4.sharechat.com/3b818a06_1583484377156.gif"></img>
                <img style={{height:'40vh',width:'300px'}}src="https://pongalexpress.com/wp-content/uploads/2021/11/Banner-new.gif"></img>
                <img style={{height:'40vh',width:'300px'}}src="https://i.makeagif.com/media/8-30-2016/t--weK.gif"></img>
                <img style={{height:'40vh',width:'300px'}}src="https://www.expatchoice.asia/sites/default/files/u503/Awadh%20GIF%20%282%29.gif"></img>
                <img style={{height:'40vh',width:'300px'}}src="https://www.expatchoice.asia/sites/default/files/inline-images/Tuk%20Tuk%20Cha.gif"></img>
                <img style={{height:'40vh',width:'300px'}}src="https://www.sassymamasg.com/wp-content/uploads/2018/05/Best-Indian-Restaurants-in-Singapore-MTR.gif"></img>
                <img style={{height:'40vh',width:'300px'}}src="https://i.gifer.com/NyBZ.gif"></img>
                <img style={{height:'40vh',width:'300px'}}src="https://i.makeagif.com/media/12-19-2016/AgJoWD.gif"></img>
                <img style={{height:'40vh',width:'300px'}}src="https://i0.wp.com/www.megalaskitchen.net/wp-content/uploads/2018/03/veku.gif?fit=800%2C533&ssl=1"></img>
                </div>
            </div>
    
    )
}
export default Home;