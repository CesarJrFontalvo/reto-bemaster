import React, { useEffect, useRef, useState } from 'react'
import GetApi from '../../services/GetApi';
import { MovieCard } from './MovieCard';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const MovieList = ({ genreId, i }) => {
    const [movieList, setMovieList] = useState([]);
    const elementRef = useRef(null);

    const getMovieByGenreId = () => {
        GetApi.getMovieByGenreId(genreId).then(resp => {
            // console.log(resp.data.results)
            setMovieList(resp.data.results)
        })
    }
    useEffect(() => {
        getMovieByGenreId();
    }, [])

    const slideRight = (element) => {
        element.scrollLeft += 500;
    }
    const slideLeft = (element) => {
        element.scrollLeft -= 500;
    }
    return (
        <div className='flex overflow-x-auto gap-8 scrollbar-none scroll-smooth  px-3 '>
            <ArrowBackIosNewIcon
                onClick={() => slideLeft(elementRef.current)}
                fontSize="large"
                className={`text-[50px] text-white p-2 z-10 cursor-pointer `}
            />

            <div  ref={elementRef} className='flex overflow-x-auto gap-8 scrollbar-none scroll-smooth pt-4 px-3 pb-4'>
                {movieList.map((item, index) => (
                    <MovieCard index={index} movie={item} />
                ))}
            </div>

            <ArrowForwardIosIcon
                onClick={() => slideRight(elementRef.current)}
                fontSize="large"
                className={`text-[50px] text-white p-2 cursor-pointer z-10 `}
            />

        </div >
    )
}
