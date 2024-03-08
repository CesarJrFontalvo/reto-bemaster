import React, { useEffect, useRef, useState } from 'react'
import GetApi from '../../services/GetApi';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;

export const Carousel = () => {
    const [movieList, setMovieList] = useState([]);
    const elementRef = useRef();

    const getTrendingMovies = () => {
        GetApi.getTrendingVideos.then(resp => {
            console.log(resp.data.results);
            setMovieList(resp.data.results)
        })
    }

    const sliderRight = (element) => {
        element.scrollLeft += screenWidth - 110
    }
    const sliderLeft = (element) => {
        element.scrollLeft -= screenWidth - 110
    }

    useEffect(() => {
        getTrendingMovies();
    }, [])

    return (

        <div>
            <ArrowBackIosNewIcon
                className="hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer "
                onClick={() => sliderLeft(elementRef.current)}
            />

            <ArrowForwardIosIcon
                className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0'
                onClick={() => sliderRight(elementRef.current)}
            />


            <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth' ref={elementRef}>
                {movieList.map((item, index) => (
                    <img key={index} src={IMAGE_BASE_URL + item.backdrop_path}
                        className='min-w-full  md:h-[310px] object-cover object-left-top mr-5 rounded-md img-carousel'
                    />
                ))}
            </div>
        </div>
    )
}
