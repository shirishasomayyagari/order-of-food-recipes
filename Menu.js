import React from 'react'
import './Recipe.css';
import { useNavigate } from 'react-router-dom';
const Menu = () => {
    const items=[
        {m1:"1", m2:"Dosa", m3:"25/-"},
        {m1:"2", m2:"Idly", m3:"20/-"},
        {m1:"3", m2:"Puri", m3:"15/-"},
        {m1:"4", m2:"Chapathi", m3:"20/-"},
        {m1:"5", m2:"Vada", m3:"10/-"},
        {m1:"6", m2:"Pancakes", m3:"25/-"},
        {m1:"7", m2:"Aloo paratha", m3:"40/-"},
        {m1:"8", m2:"Bread upma", m3:"25/-"},
        {m1:"9", m2:"Pongal", m3:"40/-"},
        {m1:"10", m2:"Medu vada", m3:"35/-"}
    ]
    const menu=[
        {m1:"1", m2:"Veg Briyani", m3:"40/-"},
        {m1:"2", m2:"Pulihora", m3:"30/-"},
        {m1:"3", m2:"Tomato Rice", m3:"35/-"},
        {m1:"4", m2:"Mango Rice", m3:"50/-"},
        {m1:"5", m2:"Curd Rice", m3:"20/-"},
        {m1:"6", m2:"Jeera Rice", m3:"60/-"},
        {m1:"7", m2:"Ragi Ball", m3:"30/-"},
        {m1:"8", m2:"Chicken Briyani", m3:"150/-"},
        {m1:"9", m2:"Fried Rice", m3:"70/-"},
        {m1:"10", m2:"Mushroom Briyani", m3:"120/-"}
    ]
    const food=[
        {m1:"1", m2:"Parota", m3:"50/-"},
        {m1:"2", m2:"Chapathi", m3:"40/-"},
        {m1:"3", m2:"Uttapam", m3:"20/-"},
        {m1:"4", m2:"Idly", m3:"30/-"},
        {m1:"5", m2:"Rice", m3:"60/-"},
        {m1:"6", m2:"Roti", m3:"50/-"},
        {m1:"7", m2:"Aloo gobi", m3:"35/-"},
        {m1:"8", m2:"Pav bhaji", m3:"40/-"},
        {m1:"9", m2:"Pasta", m3:"25/-"},
        {m1:"10", m2:"Sweet Potatoes", m3:"20/-"}
    ]
    const snack=[
        {m1:"1", m2:"Samosa", m3:"10/-"},
        {m1:"2", m2:"Bhel Puri", m3:"20/-"},
        {m1:"3", m2:"Popcorn", m3:"10/-"},
        {m1:"4", m2:"Potato chips", m3:"20/-"},
        {m1:"5", m2:"Panipuri", m3:"30/-"},
        {m1:"6", m2:"Gobi", m3:"40/-"},
        {m1:"7", m2:"Alu chat", m3:"35/-"},
        {m1:"8", m2:"Vada pav", m3:"15/-"},
        {m1:"9", m2:"Murukku", m3:"25/-"},
        {m1:"10", m2:"Bhaji", m3:"15/-"}
    ]
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
    const goPay=()=>{
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
            <div className='id' style={{background:'pink',height:"640px",paddingLeft:"120px"}}>
                <table border={1}>
                    <h4>BreakFast Menu</h4>
                    <tr>
                        <th>Sl.No</th>
                        <th>Recipe</th>
                        <th>Price</th>
                        </tr>
                        {items.map((s, key)=>{
                            return(
                                <tr key={key}>
                                    <td>{s.m1}</td>
                                    <td>{s.m2}</td>
                                    <td>{s.m3}</td>
                                </tr>
                            )
                        }
                        )}
                </table>
                <div  style={{width:"70px"}}> </div>
                <table border={1}>
                <h4>Lunch Menu</h4>
                    <tr>
                        <th>Sl.No</th>
                        <th>Recipe</th>
                        <th>Price</th>
                        </tr>
                        {menu.map((j, key)=>{
                            return(
                                <tr key={key}>
                                    <td>{j.m1}</td>
                                    <td>{j.m2}</td>
                                    <td>{j.m3}</td>
                                </tr>
                            )
                        }
                        )}
                </table>
                <div  style={{width:"70px"}}> </div>
                <table border={1}>
                    <h4>Snacks Menu</h4>
                    <tr>
                        <th>Sl.No</th>
                        <th>Recipe</th>
                        <th>Price</th>
                        </tr>
                        {snack.map((s, key)=>{
                            return(
                                <tr key={key}>
                                    <td>{s.m1}</td>
                                    <td>{s.m2}</td>
                                    <td>{s.m3}</td>
                                </tr>
                            )
                        }
                        )}
                        </table>
                <div  style={{width:"70px"}}> </div>
                <table border={1}>
                <h4>Dinner Menu</h4>
                    <tr>
                        <th>Sl.No</th>
                        <th>Recipe</th>
                        <th>Price</th>
                        </tr>
                        {food.map((p, key)=>{
                            return(
                                <tr key={key}>
                                    <td>{p.m1}</td>
                                    <td>{p.m2}</td>
                                    <td>{p.m3}</td>
                                </tr>
                            )
                        }
                        )}
                </table>        
            </div>
            <div style={{paddingBottom:"10px",background:'pink'}}></div>
            <div className='it' style={{background:'pink',height:'30px'}}>
            <button onClick={goPay}>Order now</button>
            </div>
        </div>
    )
}
export default Menu;
