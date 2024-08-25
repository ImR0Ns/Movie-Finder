import React, { useEffect, useState } from 'react'
import { getSimilarMovies } from "../../utils/hooks/getSimilarMovies";
import { DisplayTemplate } from "../DisplaySection/DisplayTemplate"


export function SimilarTemplate({ id }){
    let { data, loading } = getSimilarMovies(id)
    let [saveData, setSaveData] = useState([])
    useEffect(()=>{
        if(!loading && data) {
            setSaveData(data.results.splice(0, 10))
        }
    }, [data, loading])

  return (
    <>
        <DisplayTemplate movies={saveData}/>
    </>
  )
}