import React, { useEffect, useState } from "react";
import { movies } from "../data";

function Movies(){
  const [moviesData, setmoviesData]= useState([]);
  useEffect(()=>{
    setmoviesData(movies);
  }, []);

  return (
    <div>
      <h1>Movies Page</h1>
      {moviesData.map((movie, index) => (
        <div key={index}>
          <h2>Name: {movie.title}</h2>
          <p>Time: {movie.time} minutes</p>
          <p>Genres: </p>
          <ul>
          {movie.genres.map((genre, genreIndex) => (
              <li key={genreIndex}>{genre}</li>)
            )}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Movies;
