import React from 'react'
import { useState, useEffect   } from 'react'
import{Box ,Button, Typography, Stack, TextField} from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
const [search, setSearch] = useState('')

const [bodyParts, setBodyParts] = useState([])

useEffect(() => {
  const fetchExercisesData = async () => {
    const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
    // console.log(bodyPartsData);
    setBodyParts(['all', ...bodyPartsData])

  }

  fetchExercisesData();
},[])
const handleSearch = async  () =>{
 
if (search){
  const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
  const searchedExersices = exerciseData.filter((exercise) => 
       exercise.name.toLowerCase().includes(search)
    || exercise.bodyPart.toLowerCase().includes(search)
    || exercise.equipment.toLowerCase().includes(search)
    || exercise.target.toLowerCase().includes(search)


  ); 

  

  
  setSearch(''); 
  setExercises(searchedExersices)
}
}

  return (
    <Stack  mt="40px" justifyContent="center" alignItems="center">
      <Typography mb="40px" textAlign="center" fontWeight = "600" sx = {{fontSize:{lg:'44px', xs:'30px'}}}>
        Awsome Exercises You <br /> Should Know
      </Typography>
      <Box mb="70px" position="relative">
        <TextField sx={{
          input:{
          fontWeight:"700",
          border:"none",
          borderRadius:"4px"

        },
        width:{lg: "800px",xs:"350px"},
        backgroundColor : "#fff",
        borderRadius : "40px"
      }}
         height="75px"
          value={search}
        onChange={e => setSearch(e.target.value.toLowerCase())}
        placeholder="Search Exercises"
        type="text" />
      
        <Button className="search-btn"
        sx={{bgcolor : "#FF2625",
        color: "#fff",
        textTransform:"none",height : "56px",
        width:{lg :"170px", xs : "80px"},
        fontSize:{lg : "20px", xs : "14px"},
        position : "absolute",
        right : "0"
        }} 
        onClick={handleSearch}>
          Search
        </Button>
      </Box> 
      <Box sx={{position: 'relative', width:'100%', p:'20px' }}>
        <HorizontalScrollbar data={bodyParts} bodyPart = {bodyPart} setBodyPart = {setBodyPart}/>
      </Box>

    </Stack>
  ) 
}
 
export default SearchExercises