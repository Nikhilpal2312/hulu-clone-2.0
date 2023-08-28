import React from 'react';

const IMAGE_BASE_URL ="https://image.tmdb.org/t/p/original";
const MovieCard = ({movie}) => {
  return (
    <div className='inline-block m-2 md:m-3'>
      <img src={IMAGE_BASE_URL+movie.poster_path} className='w-[230px] md:w-[200px] object-cover rounded-2xl hover:border-2 border-white transition-all duration-300 ease-in-out'/>
      {/* <h2 className='text-gray-400 mt-2'>{movie.id%2==0?'WATCH AGAIN':'START WATCHING'}</h2> */}
      <h2 className='mt-3 text-white text-[16px] md:text-[18px] transition-all hover:font-bold'>{movie.original_title}</h2>
    </div>
  )
}

export default MovieCard
