import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

export const MovieCard = ({ movie }) => {
    const navigate = useNavigate();
    const selectId = (id) => {
        navigate(`detail/${id}`)
    }

    return (
        <>
            <img src={IMAGE_BASE_URL + movie.poster_path}
                onClick={() => selectId(movie.id)}
                className='w-[110px] md:w-[150px] rounded-lg
    hover:border-[3px] border-gray-400 cursor-pointer
    hover:scale-110 transition-all duration-150 ease-in'
            />
        </>
    )
}
