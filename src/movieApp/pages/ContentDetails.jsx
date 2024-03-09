import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import GetApi from '../../services/GetApi';
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

export const ContentDetails = () => {

    // https://api.themoviedb.org/3/tv/{series_id} detalles series+id
    // https://api.themoviedb.org/3/movie/{movie_id} detalles movies+id

    const { id } = useParams();
    const [movie, setMovie] = useState([]);
    const [loadind, setLoadind] = useState(false)

    const navigate = useNavigate();
    const onNavigateBack = () => {
        navigate(-1)
      }
    const getMovieBiId = async () => {
        let movie = await GetApi.getMovieId(id)
        // console.log(movie.data)
        if (movie.status === 200) {
            setLoadind(true)
            setMovie(movie.data)
        }
    }
    useEffect(() => {
        getMovieBiId()
    }, [])

    return (
        <div style={{backgroundColor: '#1A1D29', maxHeight: '100%'}}>
            {loadind ?
                <div className=' row pt-3 mb-2 text-white bg-dark'>
                    <div className="col-6 col-md-4 col-lg-4 cursor-pointer pb-5">
                        <img src={IMAGE_BASE_URL + movie.poster_path} alt={movie.title} className='img-detail  img-thumbnail animate__animated animate__fadeInLeft' />
                    </div>



                    <div className="col-6 col-md-8 col-lg-8">
                        <h1>{movie.title}</h1><br />
                        <ul className='list-groud lits-grout-flush  '>
                            {/* <li className='list-groud-item'><b>Alter ego:</b> {hero.alter_ego}</li> */}
                            <li className='list-groud-item'><b>Publisher:</b> {movie.release_date}</li>
                            {/* <li className='list-groud-item'><b>First appearance:</b> {hero.first_appearance}</li> */}
                        </ul>
                        <h1>Puntuación: {movie.vote_average} </h1>
                        <br />
                        {/* <h5 className='mt-4'>Characters</h5> */}
                        <h1>Descripción general: <br /></h1>
                        <p>{movie.overview}</p>

                        <button
            onClick={onNavigateBack}
            className='btn btn-primary  '>
            Regresar
        </button>
                    </div>
                </div>
                :
                <h1 className='m-5 text-center'>Loading...</h1>
            }




        </div>
    )
}
