import {React,useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Recipe.css';

export default function Pay() {
    let navi=useNavigate();
    const goHome=()=>{
        navi('/Home')
    }
    const [name, setname] = useState("");
    const [Recipe, setRecipe] = useState("");
    const [Address, setAddress] = useState("");
    const save = async(e) => {
        e.preventDefault()
        if (name === "") {
          alert("Please enter your name");
        } else if (Recipe === "") {
          alert("Please enter Recipe");
        } else if(Address === "") {
            alert("please enter your address")
          }
          else{
            alert("Order placed")
          }
           
        }
      return (
        <div className='get'style={{paddingTop:"200px",paddingLeft:"40%",textAlign:"center"}}>
            <Box
          sx={{
            width: 300,
            height: 300,
          }}
        >
            <Stack spacing={2}>
                <h1>Welcome!    back</h1>
          <TextField id="outlined-basic" label="name" variant="outlined" value={name} onChange={(e)=>setname(e.target.value)} />
          <TextField id="outlined-basic" label="Recipe" variant="outlined" value={Recipe} onChange={(e)=>setRecipe(e.target.value)}/>
          <TextField id="outlined-basic" label="Address" variant="outlined" value={Address} onChange={(e)=>setAddress(e.target.value)}/>
          <Button variant="contained" onClick={save}>Placeorder</Button>
          <p>Order placed go<Link style={{cursor:"pointer"}} onClick={goHome}>Home</Link></p>
          </Stack>
          </Box>
        </div>
      )
        }
