import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
let accionV = '/public/accionV.mp4';
import animacionV from '/public/animacionV.mp4'
import aventuraV from '/public/aventuraV.mp4'

let pixar = 'https://th.bing.com/th/id/OIP.TSmFkbwkWWYC8nt_dVv6WwHaEo?rs=1&pid=ImgDetMain';
let disneyI = '/public/disney.png';
let accion = 'https://res.cloudinary.com/difxvqjj3/image/upload/v1710775767/Proyecto2_bodegas/mok52uxxfqdu6ss5mviq.png';
let aventura = 'https://res.cloudinary.com/difxvqjj3/image/upload/v1710775768/Proyecto2_bodegas/ekycdmgjmehjyrsgg4ql.png';
let animacion = 'https://res.cloudinary.com/difxvqjj3/image/upload/v1710775770/Proyecto2_bodegas/kyvlbcxef47wy2yi6prw.png';
let crimen = 'https://res.cloudinary.com/difxvqjj3/image/upload/v1710775773/Proyecto2_bodegas/eoewriwxoxrmdbe2rc8k.png';
let comedia = 'https://res.cloudinary.com/difxvqjj3/image/upload/v1710775771/Proyecto2_bodegas/dkrh33eb95c5kojl5rjn.png';

export const ProductionHouse = () => {
    // let disneyV ={};
    const navigate = useNavigate();
    const selectId = (category) => {
        navigate(`categori/${category}`)
    }

    const productionHouseList = [
        {
            id: 1,
            category: 28,
            image: accion,
            video: accionV
        },
        {
            id: 2,
            category: 12,
            image: aventura,
            video: aventuraV
        },
        {
            id: 3,
            category: 16,
            image: animacion,
            video: animacionV
        },
        {
            id: 4,
            category: 35,
            image: comedia,
            video: animacionV
        },
        {
            id: 5,
            category: 80,
            image: crimen,
            video: animacionV
        },

    ]
    return (
        <div className='flex gap-4 md:gap-5   '>
            {productionHouseList.map((item, index) => (
                <div key={index} className='border-[2px] border-gray-600
            rounded-lg hover:scale-110 transition-all duration-300
            ease-in-out cursor-pointer relative shadow-xl 
            shadow-gray-800
            '>
                    <video 
                    onClick={() => selectId(item.category)}
                    autoPlay loop playsInline muted
                        className='   videoCard '>
                        <source src={item.video} type="video/mp4" />

                    </video>

                    <CardMedia
                        className=' imgCard'
                        component="img"
                        // height="100"
                        image={item.image}
                        alt="imagen"
                    />
                </div>
            ))}

        </div>
    )
}
