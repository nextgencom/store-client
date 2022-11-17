import React from 'react';
import { Typography, Link } from '@mui/material';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Chat, Login, Home } from "./component";


const Copyright = (props: any) => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://medloc.life/">
        medloc.life
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='login' element={<Login />} />
        <Route path='chat' element={<Chat />} />
        <Route path='home' element={<Home />} />
      </Routes>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </BrowserRouter>
  );
}

export default App;
