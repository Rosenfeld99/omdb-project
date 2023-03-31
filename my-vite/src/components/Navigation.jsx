import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import {MdManageAccounts} from 'react-icons/md'
import Theme from './Theme';

const Navigation = () => {

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
    <div className='navigation p-2 d-flex justify-content-between'>
        <div className="d-flex col-md-4">
            <input type="search" placeholder='Search movie, tv...' onKeyDown={(e)=> onKeyEnter(e)} ref={searchRef} className='form-control' />
            <button onClick={getSearch} className='btn btn-warning ms-2'>search...</button>
        </div>
        <div className="right-nav">
          <div className="dropdown">
            <button className="d-flex justify-contect-center align-center p-2 fs-4 text-white bg-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <MdManageAccounts/>
            </button>
            <ul className="dropdown-menu">
                <li><div className="dropdown-item" type="button"> <Theme/></div></li>
                <li><button className="dropdown-item" type="button">My list</button></li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Navigation