import React, { useEffect, useState } from 'react';
import "./DisplaySection.css";
import { useGetData } from "../../utils/hooks/getData";
import { DisplayTemplate } from './DisplayTemplate';

export function DisplaySection({ url, searchTitle, genre }) {

  //state with url based on what user choose in SearchMovie
  let [getUrl, setGetUrl] = useState("");
  //avoid to many re-renders error
  useEffect(()=>{
    setGetUrl(url);
  }, [url]) //every time url changes we set again the url

  //get the data and the loading 
  const { data, loading } = useGetData(getUrl);
  //state for saving the movies
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    if (!loading && data.results) {
      // check genre starts with all the results
      let checkGenre = data.results;
      if(genre != 0) {
        //we filter genre based on what the user choose
        checkGenre = data.results.filter((v)=>{
          return v.genre_ids.includes(genre)
        })
      }
      //seting genre
      setMovies(checkGenre);
    }
    //this can be a loading problem or a data change like another fetch or genre change
  }, [loading, data, genre]);

  return (
    <div className='container mt-5 mb-5'>
        <p className='topRatedMovies'>{searchTitle ? searchTitle : "Top rated movies"}</p>
        {!loading ? <DisplayTemplate movies={movies}/> : "Loading ..."}
    </div>
  );
}
