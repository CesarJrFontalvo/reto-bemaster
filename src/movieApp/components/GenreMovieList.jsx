import React from 'react'
import { useSelector } from 'react-redux';
import { MovieList } from './MovieList';

export const GenreMovieList = () => {
    const { genresMovies, genresSeries } = useSelector(state => state.movieApp);
    //   console.log('peliculas' ,genresMovies)
    //   console.log('series', genresSeries)

    return (
        <>
            {genresMovies?.map((item, i) => i <= 4 && (
                <div key={i} className='p-8 px-8 md:px-16'>
                    <h2 className='text-[20px] text-white 
            font-bold'>{item.name}</h2>
                    {<MovieList genreId={item.id} i={i} />}
                </div>
            ))}


        </>
    )
}
