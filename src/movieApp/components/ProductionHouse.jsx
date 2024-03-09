import React from 'react'
import disneyV from '/public/eFootball™ 2024 2023-09-15 11-44-03.mp4'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
export const ProductionHouse = () => {
    // let disneyV ={};
    let pixarV = 'https://www.youtube.com/watch?v=gX0CmJa5Gdk&ab_channel=marvelgames';

    let pixar = 'https://th.bing.com/th/id/OIP.TSmFkbwkWWYC8nt_dVv6WwHaEo?rs=1&pid=ImgDetMain';
    let disneyI = '/public/disney.png';
    let accion = '/public/card-accion.png';
    let aventura = '/public/card-aventura.png';
    let animacion = '/public/card-animacion.png';
    let crimen = '/public/card-crimen.png';
    let comedia = '/public/card-comedia.png';
    const productionHouseList = [
        {
            id: 1,
            image: accion,
            video: disneyV
        },
        {
            id: 2,
            image: aventura,
            video: disneyV
        },
        {
            id: 3,
            image: animacion,
            video: disneyV
        },
        {
            id: 4,
            image: comedia,
            video: disneyV
        },
        {
            id: 5,
            image: crimen,
            video: disneyV
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
                    <video autoPlay loop playsInline muted
                        className='   videoCard '>
                        <source src={item.video} type="video/mp4" />

                    </video>

                    {/* <Card sx={{ maxWidth: 345 }}> */}
                    <CardMedia
                        className=' imgCard'
                        component="img"
                        // height="100"
                        image={item.image}
                        alt="imagen"
                    />
                    {/* <CardActionArea> */}
                    {/* <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent> */}
                    {/* </CardActionArea> */}
                    {/* </Card> */}
                    {/* <img src={item.image} className='w-full z-[1]  imgCard' /> */}


                </div>
            ))}

        </div>
    )
}
