import React from 'react'
import { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const Movie = ({item}) => {
    const id= item;

    const [like, setLike] = useState(false);

  return (
    <div
    key={id}
    className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'
  >
    <img
      className='w-full h-auto block'
      src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
      alt={item.name}
    />

    <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 hover:opacity-100 duration-500 opacity-0 text-white flex items-center justify-center'>
      <p className='white-space-normal text-xs md:text-sm font-bold text-center'>
        {item?.title}
      </p>
      <p className='absolute top-4 text-gray-300 left-8'>
        {like ? <FaHeart /> : <FaRegHeart />}
      </p>
    </div>
  </div>
  )
}

export default Movie