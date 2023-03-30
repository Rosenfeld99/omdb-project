import React from 'react'
import ListItem from './ListItem'

const ListMovies = ({API}) => {
  return (
    <div className='d-flex flex-wrap'>
        {API.map((item,i)=>(
            <ListItem img={item.Poster} id={item.imdbID} key={item.imdbID}/>
        ))}
    </div>
  )
}

export default ListMovies