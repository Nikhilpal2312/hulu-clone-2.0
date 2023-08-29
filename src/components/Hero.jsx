import React from 'react'
import GlobalApi from '../services/GlobalApi'
import { useEffect } from 'react'
import { useState } from 'react'

const IMAGE_BASE_URL ="https://image.tmdb.org/t/p/original";

const Hero = () => {
const[movieList, setMovieList]= useState([])

useEffect(()=>{
    getFectMovies()
},[])

const getFectMovies = () =>{
    GlobalApi.getPopularMovies.then(resp=>{
        const results = resp.data.results;
        const randamNum= Math.floor(Math.random()*10)
        console.log(results)
        setMovieList(results[randamNum])

    })
}



  return (
    <div>
        <div className='absolute h-[80vh] bg-gradient-to-t from-[#1e2126] via-transparent to transparent w-full'></div>
        <div className='absolute  mt-[200px]  md:mt-[250px] px-10 md:px-24'>
            <h2 className='text-white text-[16px] lg:text-[20px] '>New on Hulu</h2>
            <h2 className='text-white text-3xl lg:text-5xl font-extrabold md:text-[24px]'>{movieList.original_title}</h2>
           <div className='flex gap-5 mt-10'>
           <button className='bg-[#66aa33] px-6 py-2 rounded-md text-white font-medium text-[16px]'>Play</button>
            <button className='bg-transprant border-2 border-white px-6 py-2 rounded-md curser-pointer hover:border-[#66aa33] text-white'>Details</button>
           </div>
        </div>
      <img src={IMAGE_BASE_URL+movieList.backdrop_path} width={1920} height={1080} className='object-cover h-[80vh]' alt="" />
    </div>
  )
}

export default Hero
