import React from 'react'
import { Link } from 'react-router-dom'
import { Stack,Typography } from '@mui/material'
import Logo2 from '../assets/images/Logo2.png'
import { borderBottom } from '@mui/system'

const Navbar = () => {
  return (
   <Stack direction="row" justifyContent="none" sx={{gap :{sm:"122px",xs : "40px"}, mt: {sm : "32px" ,xs : "20px"}}} px="20px">
    <Stack direction='row' > 
    <Link to='/'>
    <img src={Logo2} alt="logo" style={{width: '58px', height:'58px', margin:'0 20px' }} />
    </Link >  
      
         <Typography sx={{fontSize : '55px',  color : 'black', fontWeight : '600' }}>
          S
         </Typography>
         <Typography sx={{fontSize : '35px',  color : 'red', fontWeight : '600' }}>
          hred
         </Typography>
         
         
    </Stack>
    <Stack direction= "row"gap="40px" fontSize="24px" alignItems="center" >
      <Link to="/" style={{textDecoration : 'none', color :'#3A1212', borderBottom: '3px solid #FF2625'}}>
        Home
      </Link>
      <a href="#exercises" style={{textDecoration : 'none', color :'#3A1212'}}>Exercises</a>
    </Stack>
   </Stack>
  )
}

export default Navbar