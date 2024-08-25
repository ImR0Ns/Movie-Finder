import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


export function DisplayTemplate({ movies }){

  let navigate = useNavigate();

  return (
    <div className="row ">
          {movies.map((v) => (
            <div className="col-md-4 mt-5" key={v.id}>
              <div className="col-md-12 toMovieContainer" onClick={(e)=>{
                  //window.location.href = `/movie?movie_id=${v.id}`; 
                  navigate(`/movie?movie_id=${v.id}`);
                }}>
                <div className='text-center'>
                  <img className='imageMovie' src={`https://image.tmdb.org/t/p/w300${v.poster_path}`} alt={v.title} />
                </div>
                <h1 className='titleOfMovie text-center pt-3'>{v.title}</h1>
                <div className='releaseAndRating'>
                  <p>{v.release_date.substring(0, 4)}</p>
                </div>
              </div>
            </div>
          ))}
    </div>
  )
}
