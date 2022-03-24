import React from "react";
import { actors } from "../data";

function Movies({actor}){
  const movieList = actor.movies.map(movie => {
    return (
      <li key = {movie}>{movie}</li>
    )
    })
  return movieList
}
function Actors() {
  const actorList = actors.map(actor=>{
    return (
      <div key = {actor.name}>
        <header>{actor.name}</header>
        <ul><Movies actor={actor}/></ul>
      </div>
    )
  })
  return (
  <div>
    <h1>Actors Page</h1>
    {actorList}
  </div>);
}

export default Actors;
