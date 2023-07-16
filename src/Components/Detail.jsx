import React from 'react'
import {Box,Stack, Typography,Button} from '@mui/material'

import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'

const Detail = ({exerciseDetail}) => {

  const {name,gifUrl,bodyPart,target,equipment} = exerciseDetail

  const extraDetail = [
    {icon : BodyPartImage,
     name : bodyPart },
     {icon : TargetImage,
      name :   target},
    {icon : EquipmentImage,
     name : equipment}
    
]

  return (

    
      <Stack gap = '60px' sx = {{flexDirection : { lg : 'row'}, p:'20px', alignItems : 'center'}}>
        <img src={gifUrl} alt={name} loading='lazy' className='detail-image'/>

        <Stack sx={{gap: {lg:'35px',xs:'20px'}}} alignItems='center'>
          <Typography variant='h3' sx={{fontSize : {lg: '70px' , xs: '40px'}, fontWeight : '700'}}>
            {name}
          </Typography>
          
          <Typography variant='h5' sx= {{fontSize : {lg :'30px', xs : '20px'}, color : '#4F4C51'}}>
          Exercises keep you strong. {name} bup is one of the best
          exercises to target your {target}. It will help you improve your
          mood and gain energy
          </Typography>

         {extraDetail.map((item) => (

          <Stack key = {item.name} direction = 'row' alignItems = "center" justifyContent='center' gap ="20px" >

               <Button sx={{backgroundColor :'#fff2db', borderRadius : '50%' , width : '100px', height : '100px'}}>
                 <img src={item.icon} alt={bodyPart} style={{width : '60px'}}  />
              </Button>
          
              <Typography textTransform="capitalize" variant='h5' fontSize='35px'>
                  {item.name}
              </Typography>

          </Stack>
           ))}
        </Stack>
 

        
      </Stack>

    
  )
}

export default Detail