import React from 'react'

export function DetailsSimilarTemplate({ productionCompanies, getData }){
  return (
    <>
    <div className="row text-start mt-4 border-bottom">
            <div className='col-md-6 movieDetailsDetails'>
              <p>Production Companies</p>
              <p>{productionCompanies}</p>
            </div>
            <div className='col-md-6 text-center movieDetailsDetails'>
              <p>Average Vote</p>
              <p>{getData.vote_average}</p>
            </div>
          </div>
          <div className="row text-start mt-4 movieDetailsDetails">
            <div className='col-md-6'>
              <p>Budget</p>
              <p>${getData.budget}</p>
            </div>
            <div className='col-md-6 text-center movieDetailsDetails'>
              <p>Revenue</p>
              <p>${getData.revenue}</p>
            </div>
    </div>
    </>
  )
}