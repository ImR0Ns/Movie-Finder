import React from 'react'
import "./SearchMovie.css"
import { useState } from 'react';
import { DisplaySection } from '../DisplaySection/DisplaySection';

const SearchMovie = () => {

    //All genres we use
    let [allGenres, setAllGenres] = useState([
        {
            id: 28,
            name: "Action",
        },
        {
            id: 35,
            name: "Comedy",
        },
        {
            id: 18,
            name: "Drama",
        },
        {
            id: 12,
            name: "Adventure",
        },
        {
            id: 10749,
            name: "Romance",
        },
        {
            id: 14,
            name: "Fantasy",
        },
    ])

    //every time a state changes, it will unmount and mount 
    let [searchMovie, setSearchMovie] = useState("");
    let [urlRequest, setUrlRequest] = useState("");
    let [searchTitle, setSearchTitle] = useState("");
    let [genre, setGenre] = useState(0);


  return (
    <div className="container text-start">
        <h1 className='mt-5 searchForMovie'>Search for a movie</h1>
        <p className='filtersText mt-4'>Filters</p>
        <form action="" onSubmit={(e)=>{
            e.preventDefault() //prevent refresh
            let valueFromInput = searchMovie;
            let createUrl = `https://api.themoviedb.org/3/search/movie?query=${valueFromInput}&include_adult=false&language=en-US&page=1`;
            setUrlRequest(createUrl)
            setSearchTitle(valueFromInput)
            setGenre(0) //set to default only keep it when we use buttons for genre
        }}>
            <input className='inputMovie' type="text" name="" id="" placeholder='Search for a movie' value={searchMovie} onChange={(e)=>{
                setSearchMovie(e.target.value);
            }}/>
            <br />
            <button className='buttonSearch mt-4 shadow '>Search</button>
        </form>
        <div className="row mt-4">
            {allGenres.map((v)=>{
                return <div className="col-md-2 test" key={v.id}>
                <button className='typesMovies mt-2 shadow ' onClick={()=>{
                    let createUrl = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`
                    setUrlRequest(createUrl)
                    setSearchTitle(v.name)
                    setGenre(v.id)
                }}>{v.name}</button>
                </div>
            })}
        </div>
        <DisplaySection url={urlRequest} searchTitle={searchTitle} genre={genre}/>
    </div>
  )
}

export default SearchMovie