import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ListMovies from '../components/ListMovies'
import Strips from '../components/Strips'
import { RotatingLines } from 'react-loader-spinner'

const Home = () => {

  const [querys] = useSearchParams();
  const [API,setAPI] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  
  useEffect(()=>{
      let searchQ = querys.get('s') || "bank"
      getData(searchQ)
  },[querys])

  const getData = async (searchQ) =>{
    setIsLoading(true);
      let url = `https://www.omdbapi.com/?s=${searchQ}&apikey=f3141dc2`;
      const resp = await fetch(url);
      const data = await resp.json();
      setAPI(data.Search);
    setIsLoading(false);
  }  

  console.log(API);

  return (
    <div>
        <Strips API={API}/>
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
        <ListMovies API={API}/>
    </div>
  )
}

export default Home