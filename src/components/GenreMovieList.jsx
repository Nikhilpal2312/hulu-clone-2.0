import React from 'react'
import GenresList from '../constant/GenresList';
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';
import MoviesList from './MoviesList';

const GenreMovieList = () => {
  return (
    <div className='mt-5 p-5 px-10 md:px-20'>
      {
        GenresList.genere.map((items,index)=>index<10&&(
            <div>
                <h2 className='text-white text-xl font-bold'>{items.name}
                <span className='float-right text-[14px] font-normal cursor-pointer text-gray-400 items-center  hover:text-white'>View All</span>
                </h2>
                <MoviesList genereId={items.id}/>
            </div>

        ))
        }
    </div>
  )
}

export default GenreMovieList;
