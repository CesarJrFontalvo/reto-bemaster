import React from 'react'
import { Link } from 'react-router-dom'

export const NavbarItem = ({ name, icono }) => {
  return (
    <Link to={'/'}>
      <div className='text-white flex items-center 
    text-[13px] font-semibold cursor-pointer hover:underline
    underline-offset-8 mb-1'>
        {icono}
        <h2 className=''>{name}</h2>
      </div>
    </Link>
  )
}
