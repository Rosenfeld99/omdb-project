import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import {GiSandsOfTime} from 'react-icons/gi'
import Raiting from '../components/Raiting';
import Loading from '../components/Loading';

const MovieDetailes = () => {

  const params = useParams();
  const [isLoading,setIsLoading] = useState(false);
  const nav = useNavigate()
  const [API,setAPI] = useState({});

  useEffect(()=>{
    getData()
  },[])

  const getData = async () =>{
    setAPI(false)
    setIsLoading(true);
    let url = `https://www.omdbapi.com/?i=${params['id']}&apikey=f3141dc2`
    const resp = await fetch(url);
    const data = await resp.json();
    setAPI(data)
    setIsLoading(false);
  }
  
  const goBack = ()=>{
    nav(-1);
  }
  
  return (
    <div className='movie-detailes'>
          {isLoading && <Loading/>}

      {API && <div className='d-md-flex p-5 text-center text-md-start'>
        <div className="left-containet">
          <img src={API.Poster} alt="" />
        </div>
        <div className="right-containet ps-md-4 ps-0 pt-4">
          <h4><b>Movie name :</b> {API.Title}</h4>
          <h3><b>Year : </b>{API.Year}</h3>
          <p><b>Description :</b> {API.Plot}</p>
          <p><b>Ganer :</b> {API.Genre}</p>
          <p><b>Actors :</b> {API.Actors}</p>
          <p><b>Runtime :</b> {API.Runtime} <GiSandsOfTime/></p>
          <div>
            <span className='pe-3'>
              <b>Raiting :</b> <span className='border border-4 border-dark rounded-5 p-2'>{API.imdbRating}</span>
            </span>
            <span className='fs-4 me-3 text-warning'>
                <Raiting API={API}/>
            </span>
          </div>
          <button className='btn btn-warning mt-3' onClick={goBack}>Go back</button>
        </div>
      </div>}
    </div>
  )
}

export default MovieDetailes