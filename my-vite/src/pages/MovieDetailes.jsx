import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { RotatingLines } from 'react-loader-spinner'
import {BsStarFill,BsStarHalf} from 'react-icons/bs'

const MovieDetailes = () => {

  const params = useParams();
  const [isLoading,setIsLoading] = useState(false);
  const nav = useNavigate()
  const [API,setAPI] = useState({});

  useEffect(()=>{
    getData()
  },[])

  const getData = async () =>{
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

  const stars = [];
  const wholeStars = Math.floor(API.imdbRating);
  const halfStar = API.imdbRating % 1;

  for (let i = 0; i < wholeStars; i++) {
    stars.push(<span key={i}><BsStarFill/></span>);
  }
  if (halfStar.toFixed(1) >= 0.5) {
    stars.push(<span key={wholeStars}><BsStarHalf/></span>);
  }


  console.log(wholeStars);
  console.log(halfStar);
  
  return (
    <div className='d-md-flex container pt-5 text-center text-md-start'>

        {isLoading && <div className='my-4 text-center'>
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="66"
            visible={true}
          />  
          <h5>Loading...</h5>
        </div>}

      <div className="left-containet">
        <img src={API.Poster} alt="" />
      </div>
      <div className="right-containet ps-md-4 ps-0 pt-4">
        <h4>Movie name : {API.Title}</h4>
        <h3>Year : {API.Year}</h3>
        <p>Description : {API.Plot}</p>
        <div>
          <span className='pe-3'>
            <b>Raiting :</b> <span className='border border-4 border-success rounded p-2'>{API.imdbRating}</span>
          </span>
          <span className='fs-4 me-3 text-warning'>
              {stars}
          </span>
        </div>
        <button className='btn btn-warning mt-3' onClick={goBack}>Go back</button>
      </div>
    </div>
  )
}

export default MovieDetailes