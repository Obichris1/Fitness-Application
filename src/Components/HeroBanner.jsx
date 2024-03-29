import React from 'react'
import { Box , Stack , Typography, Button} from '@mui/material';
import banner  from '../assets/images/banner.png'
import banner2 from  '../assets/images/banner2.JPG'
const HeroBanner = () => {
  return (

       <Box sx={{
       mt : {lg : "212px" , xs : "70px"},
       ml : { sm : "50px"},
       textAlign : {lg : 'left' , sm : 'center'} }}
       
       position="relative" p="20px">
        <Typography color="#FF2625" fontWeight="600" fontSize="26px">
          Fitness Club
        </Typography>

        <Typography sx={ {
            fontSize : {lg : "44px", xs : "40px"}
        }}
            fontWeight="600" mb="23px" mt="30px">
            Sweat, Smile <br /> And Repeat
        </Typography>
        <Typography fontSize = "22px" lineHeight = "35px" mb={6}>
            Check out the most effective exercises personalized to you
        </Typography>

        <Button variant="contained" color="error" size="large" href="#exercises" sx={{p:"15px", backgroundColor:"#ff2625"}}
        >Explore Exercises</Button>
        <Typography fontWeight="600" color="#ff2625" 
        sx={{ opacity:"0.1", display:{lg:'block', xs: "none"}}}
        fontSize="200px" >
          Exercise
        </Typography>


        <img src={banner2} alt="banner" className='hero-banner-img'/>
      </Box>

      
   
  )
}

export default HeroBanner