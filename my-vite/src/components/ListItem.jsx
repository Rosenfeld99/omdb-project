import React from 'react'
import { Link } from 'react-router-dom'

const ListItem = ({img,id}) => {

    // console.log(img);

  return (
    <div className='col-sm-3 col-lg-2 col-6 p-2'>
        <Link to={`/info/${id}`}>
            <img className='w-100 rounded'src={img} alt="" />
        </Link>
    </div>
  )
}

export default ListItem