import React from 'react'
import ListItem from './ListItem'

const ListMovies = ({API}) => {
  return (
    <div className='list-movise d-flex flex-wrap py-5 p-3'>
        {API.map((item,i)=>(
            <ListItem img={item.Poster} id={item.imdbID} key={item.imdbID}/>
        ))}
    </div>
  )
}

export default ListMovies