import React from 'react'
import {BsStarFill,BsStarHalf} from 'react-icons/bs'

const Raiting = ({API}) => {

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
    <div>
        {stars}
    </div>
  )
}

export default Raiting