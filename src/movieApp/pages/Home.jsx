import React from 'react'
import { LogoutOutlined, MenuBookOutlined } from "@mui/icons-material";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { startLogout } from "../../store/auth/thunk";


const Home = () => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(startLogout())
  }
  return (
    <>
      <h1>Home</h1>
      <IconButton color="error"
            onClick={onLogout} >
            <LogoutOutlined />
            Logout
          </IconButton>
    </>
  )
}

export default Home