import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import GetApi from '../../services/GetApi';
import { MovieCard } from '../components/MovieCard';
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

export const ContentCategory = () => {

  const { id } = useParams();
  const [category, setCategory] = useState([]);
  const [loadind, setLoadind] = useState(false)

  const navigate = useNavigate();
  const onNavigateBack = () => {
    navigate(-1)
  }

  const selectId = (id) => {
    navigate(`detail/${id}`, { replace: true })
    // console.log(id)
  }
  const getCategoryBiId = async () => {
    let movie = await GetApi.getMovieByGenreId(id)
    console.log(movie.data.results)
    if (movie.status === 200) {
      setLoadind(true)
      setCategory(movie.data.results)
    }
  }
  useEffect(() => {
    getCategoryBiId()
  }, [])
  return (
    <div style={{ backgroundColor: '#1A1D29', maxHeight: '100%' }} className=' overflow gap-8 scrollbar-none row rows-cols-2 row-cols-md-5 g-3 scroll-smooth pt-4 px-5 pb-4'>
      {category?.map((item, index) => (

        < img key={index} src={IMAGE_BASE_URL + item.poster_path}
          onClick={() => {
            selectId(item.id)
          }}
          className='w-[110px] md:w-[150px] rounded-lg
      hover:border-[3px] border-gray-400 cursor-pointer
      hover:scale-110 transition-all duration-150 ease-in'
        />
      ))}
    </div>
  )
}
