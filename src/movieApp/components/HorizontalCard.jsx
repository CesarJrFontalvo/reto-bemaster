import React from 'react'
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";


export const HorizontalCard = ({ movie }) => {
    return (
        <section className='hover:scale-110 transition-all duration-150 ease-in'>
            <img src={IMAGE_BASE_URL + movie.backdrop_path}
                className=' rounded-lg
    hover:border-[3px] border-gray-400 cursor-pointer
    '/>

        </section>
    )
}
