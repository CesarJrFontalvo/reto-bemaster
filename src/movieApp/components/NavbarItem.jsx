import React from 'react'

export const NavbarItem = ({name,icono}) => {
  return (
    <div className='text-white flex items-center 
    text-[13px] font-semibold cursor-pointer hover:underline
    underline-offset-8 mb-1'>
        {icono}
        <h2 className=''>{name}</h2>
    </div>
  )
}
