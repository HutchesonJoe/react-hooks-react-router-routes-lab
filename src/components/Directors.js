import React from "react";
import { directors } from "../data";

function Movies({director}){
  const movieList = director.movies.map(movie => {
    return (
      <li key={movie}>{movie}</li>
    )
    })
  return movieList
}

function Directors() {
  const dirList = directors.map(director => {
    return (
      <div key = {director.name}>
        <header>{director.name}</header>
        <ul><Movies director = {director}/></ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Directors Page</h1>
      {dirList}
    </div>
  )
    ;
}

export default Directors;
