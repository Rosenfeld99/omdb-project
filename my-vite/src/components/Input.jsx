import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

const Input = () => {

    const searchRef = useRef();
    const navigate = useNavigate();

    const onKeyEnter = (e)=>{
        if (e.key == 'Enter') {
            getSearch()
        }
    }

    const getSearch = ()=>{
        navigate(`/?s=${searchRef.current.value}`)
    }


  return (
    <div className='bg-dark p-2'>
        <div className="d-flex col-md-4">
            <input type="search" onKeyDown={(e)=> onKeyEnter(e)} ref={searchRef} className='form-control' />
            <button onClick={getSearch} className='btn btn-warning ms-2'>search...</button>
        </div>
    </div>
  )
}

export default Input