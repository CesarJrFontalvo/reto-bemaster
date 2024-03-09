import React from 'react'
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom'
import { NavbarApp } from '../components/NavbarApp';

export const MovieRouter = () => {
  const { displayName, photoURL } = useSelector(state => state.auth);

    return (
        <>
         <NavbarApp  displayName={displayName} />
            <Outlet />
        </>
    )
}
