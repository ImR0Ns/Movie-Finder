import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useGetData } from "../../utils/hooks/getData";
import "./MovieDetails.css";
import { LoadingAnimation } from '../LoadingAnimation/LoadingAnimation';

import { DetailsSimilarTemplate } from './DetailsTemplate';
import { SimilarTemplate } from './SimilarTemplate';

export function MovieDetails() {

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const movie_id = params.get('movie_id');

  let { data, loading } = useGetData(`https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`);
  
  let [getData, setGetData] = useState(null);
  let [onDetails, setOnDetails] = useState(true);

  useEffect(() => {
    if (!loading && data) {
      setGetData(data);
    }
  }, [data, loading]);

  if (loading) return <LoadingAnimation />;
  if (!getData) return <div>Error loading movie data.</div>;

  const genreNames = getData.genres?.map(genre => genre.name).join(", ") || "N/A";
  const productionCompanies = getData.production_companies?.map(production => production.name).join(", ") || "N/A";

  return (
    <div className='container'>
      <img className='imageOfMovie mt-4' src={`https://image.tmdb.org/t/p/w300${getData.backdrop_path}`} alt={getData.backdrop_path} />
      <div className='theContainerWithDetails'>
        <div className="row">
          <div className="col-md-6 movieDetailTitle">
            <p>{getData.title}</p>
            <p>{getData.runtime} minutes</p>
          </div>
          <div className="col-md-6 text-end movieDetailDate">
            <p>{getData.release_date.substring(0, 4)}</p>
          </div>
        </div>
        <p className='movieDetailsDescription'>{getData.overview}</p>
        <p className='movieDetailsGenres'>● {genreNames}</p>
        <div className='movieDetailsDetailsOrExtra'>
          <a className='me-5' onClick={()=>{
            setOnDetails(true)
            if(onDetails) {

            }
          }} style={{ 
            textDecoration: onDetails ? 'underline' : 'none' ,
            fontWeight: onDetails ? '700' : '500'
          }}>Details</a>
          <a  onClick={()=>{
            setOnDetails(false)
          }} style={{ 
            textDecoration: !onDetails ? 'underline' : 'none',
            fontWeight: !onDetails ? '700' : '500'
            }}>Similar Movies</a>
        </div>
        {onDetails ? 
          <DetailsSimilarTemplate productionCompanies={productionCompanies} getData={getData}/> :
          <SimilarTemplate id={getData.id}/> 
        }
      </div>
      
    </div>
  );
}
