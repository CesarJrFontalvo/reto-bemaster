import React, { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import StarIcon from '@mui/icons-material/Star';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import TvIcon from '@mui/icons-material/Tv';
import { NavbarItem } from './NavbarItem';
import { IconButton } from '@mui/material';
import { LogoutOutlined } from '@mui/icons-material';
import DialpadIcon from '@mui/icons-material/Dialpad';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../store/auth/thunk';
import { Link } from 'react-router-dom';


export const NavbarApp = ({ displayName }) => {
    const dispatch = useDispatch();
    const onLogout = () => {
        dispatch(startLogout())
    }

    const [toggle, setToggle] = useState(false);

    const menu = [
        {
            name: 'HOME',
            icono: <HomeIcon />
        },
        {
            name: 'SEARCH',
            icono: <SearchIcon />
        },
        {
            name: 'WATCH LIST',
            icono: <AddIcon />
        },
        {
            name: 'ORIGINALS',
            icono: <StarIcon />
        },
        {
            name: 'MOVIES',
            icono: <PlayCircleIcon />
        },
        {
            name: 'SERIES',
            icono: <TvIcon />
        }
    ]
    return (
        <div className='flex items-center justify-between pt-1 px-5 navbar-app'>
            <a href='/'> <img src='/bemaster-7234577.png' className='w-[70px] md:w-[115px] object-cover cursor-pointer NameDisplay' /></a>
            <div className='flex  gap-8 items-center'>

                <div className='hidden md:flex gap-8'>
                    {menu.map((item, index) => (
                        <NavbarItem key={index} name={item.name} icono={item.icono} />
                    ))}
                </div>
                <div className='flex md:hidden gap-5'>
                    {menu.map((item, index) => index < 3 && (
                        <NavbarItem key={index} name={''} icono={item.icono} />
                    ))}
                    <div className='md:hidden' onClick={() => setToggle(!toggle)}>
                        <NavbarItem name={''} icono={<DialpadIcon />} />
                        {toggle ? <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4'>
                            {menu.map((item, index) => index > 2 && (
                                <NavbarItem key={index} name={item.name} icono={item.icono} />
                            ))}
                        </div> : null}
                    </div>
                </div>
                <Link to={'/'}>
                    <div className='flex items-center  '>
                        <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                            className='w-[30px] rounded-full ' />
                        <h1 className='NameDisplay p-1 m-2 text-white  text-[17px] font-semibold cursor-pointer'>  {displayName}</h1>
                    </div>
                </Link>


                <IconButton color="error" sx={{ fontSize: 15 }}
                    onClick={onLogout}
                    className='w-[15px] p-1'>
                    <LogoutOutlined />
                    Logout
                </IconButton>
            </div>
        </div>
    )
}
