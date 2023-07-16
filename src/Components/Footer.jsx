import React from 'react'
import { Box, Stack, Typography, Link} from '@mui/material'
import Logo2 from '../assets/images/Logo2.png'

const Footer = () => {
  return (
    
    <Box mt='80px' bgcolor='#fff3f4'>

     <Stack gap='40px' alignItems='center' px='40px' pt='24px'>
    
      <Stack direction='row'>
      <Link to='/'>
    <img src={Logo2} alt="logo" style={{width: '58px', height:'58px', margin:'0 20px' }} />
    </Link>  
      <Typography sx={{fontSize : '55px',  color : 'black', fontWeight : '600' }}>
          S
         </Typography>
         <Typography sx={{fontSize : '35px',  color : 'red', fontWeight : '600' }}>
          hred
         </Typography>
     </Stack>
     <Typography variant='h5' pb='40px' mt='20px' color='grey'>
           Copyright &copy; Chukwunenye Obinna
      </Typography>
      

     </Stack>

    </Box>
  )
}

export default Footer