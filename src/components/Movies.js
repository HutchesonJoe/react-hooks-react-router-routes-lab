import React from "react";
import { movies } from "../data";

function Genres({movie}){
  const genreList = movie.genres.map(genre => <li key={genre}>{genre}</li>)
  return (
    <ul>{genreList}</ul>
  )
}

function Movies() {
  
  const movieList = movies.map(movie=>{
    return (
      <div key = {movie.title}>
        <header>{movie.title}</header>
        <p>{movie.time}</p>
        <Genres movie={movie}/>
      </div>
    )
  })
  return (
  <div>
    <h1>Movies Page</h1>
    {movieList}
  </div>);
}

export default Movies;
