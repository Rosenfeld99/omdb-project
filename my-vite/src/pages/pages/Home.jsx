import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ListMovies from '../components/ListMovies'
import Strips from '../components/Strips'
import Loading from '../components/Loading'
import { API_KEY } from '../../keys/key'

const Home = () => {

  const [querys] = useSearchParams();
  const [API,setAPI] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  
  useEffect(()=>{
      let searchQ = querys.get('s') || "bank"
      getData(searchQ)
  },[querys])

  const getData = async (searchQ) =>{
    if (!searchQ)return;
    setIsLoading(true);
      let url = `https://www.omdbapi.com/?s=${searchQ}&apikey=${API_KEY}`;
      const resp = await fetch(url);
      const data = await resp.json();
      setAPI(data.Search);
      setIsLoading(false);
  }  

  // console.log(API);
  return (
    <div className='home'>
        <Strips API={API}/>
        {isLoading && <Loading/>}
        {!API && <h2 className='p-3 '> Not results! <p className='fs-6 py-3'>Try agen...</p></h2>}
        {API && <ListMovies API={API}/>}
    </div>
  )
}

export default Home