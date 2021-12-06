import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/About';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Catalog from './components/Catalog';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: 'black', 
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.main}>
        <CssBaseline/>
        <Nav/>
        <Routes>
          <Route path="/" element={<Header/>} />
          <Route path="/catalog" element={<Catalog/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}
