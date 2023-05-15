


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from './Movie';
import {MdChevronLeft , MdChevronRight} from 'react-icons/md';

const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  console.log(movies);

  return (
    <>
      <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
      <div className='relative flex items-center'>
        <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
          {movies &&
            movies.map((item, id) => (
             <Movie key={id} item={item} />
            ))}
        </div>
        <MdChevronLeft className='bg-white rounded-full size={40} absolute opacity-50 hover:opacity-100 cursor-pointer z-10'/> 
      </div>
    </>
  );
};

export default Row;
