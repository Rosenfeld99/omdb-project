import React, { useEffect, useState } from 'react'

const FavoriteMovies = () => {

    const [favorite,setFavorite] = useState(['tt7991608','tt6806448','tt2911666','tt1502397'])
    const [API,setAPI] = useState([]);

  useEffect(()=>{
    getData()
  },[])
  
  const getData = async () =>{
    let url = `https://www.omdbapi.com/?i=${favorite}&apikey=f3141dc2`
    const resp = await fetch(url);
    const data = await resp.json();
    setAPI(data)
  }

  console.log(API);
  return (
    <div>
        <h2>FavoriteMovies</h2>
        {/* {API.map((item,i) =>(
            <p>{item.Title}</p>
        ))} */}
    </div>
  )
}

export default FavoriteMovies