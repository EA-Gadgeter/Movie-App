import React from 'react';
import { Navbar } from '../components/Navbar';
import { Routes, Route } from "react-router-dom";
import { Home, Trending, Top10, Login, Movie } from '../pages';

export const MovieRoutes = () => {

  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/top10" element={<Top10 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:media_type/:movieId" element={<Movie />} />
      </Routes>
    </React.Fragment>
  )
}
