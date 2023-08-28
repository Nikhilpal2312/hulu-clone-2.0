import React,{useState} from 'react'
import GlobalApi from '../services/GlobalApi'
import {useEffect } from 'react'
import MovieCard from './MovieCard'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { useRef } from 'react'

const MoviesList = ({genereId}) => {

const [movies, setMovies]=useState([]) 
const elementRef= useRef(null)
useEffect(()=>{
    getMoviesList();
},[])

    const getMoviesList = ()=>{
        GlobalApi.getMovieByGenreId(genereId).then((resp)=>{
            const Result= resp.data.results;
            console.log(Result)
            setMovies(Result)
        })
    }

const sliderRight = (element)=>{
    element.scrollLeft+=500;
}

const sliderLeft = (element)=>{
    element.scrollLeft-=500;
}

  return (
    <div className=' flex items-center'>
        <MdOutlineKeyboardArrowLeft onClick={()=>sliderLeft(elementRef.current)} className='text-[40px] z-10 text-white p-3 bg-black cursor-pointer rounded-full mb-[120px]'/>
        <div ref={elementRef} className='w-full whitespace-nowrap scroll-smooth overflow-scroll overflow-x-auto scrollbar-hide mb-16 ml-[-20px] '>
      {
        movies.map((item, index)=>index<10&&(
            
                <MovieCard movie={item}/>
           
        ))}
    </div>
    <MdOutlineKeyboardArrowRight onClick={()=>sliderRight(elementRef.current)} className='z-10 text-[40px] text-white p-3 bg-black cursor-pointer rounded-full mb-[120px]  ml-[-20px]'/>
    </div>
  )
}

export default MoviesList
