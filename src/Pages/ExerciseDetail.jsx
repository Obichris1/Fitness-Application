import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import {exerciseOptions, fetchData} from '../utils/fetchData' 
import Detail from '../Components/Detail'
import ExerciseVideos from '../Components/ExerciseVideos'
import SimilarExercises from '../Components/SimilarExercises'


const ExerciseDetail = () => {
const [exerciseDetail, setExerciseDetail] = useState({})
const { id } = useParams();


useEffect(() => {
  const fetchExerciseData = async () => {

    const exerciseDbUrl = `https://exercisedb.p.rapidapi.com`
    const youTubeSearchUrl =`https://youtube-search-and-download.p.rapidapi.com`

    const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)
    console.log(exerciseDetailData);
    setExerciseDetail(exerciseDetailData)
  

  }

  fetchExerciseData()

},[id])
return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      
    </Box>
  )
}

export default ExerciseDetail