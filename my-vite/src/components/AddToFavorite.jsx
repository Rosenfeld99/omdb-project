import React, { useState , useEffect, useCallback } from 'react'
import {BiPlusCircle} from 'react-icons/bi'


const AddToFavorite = ({paramsId}) => {
      
  const [selectedIds, setSelectedIds] = useState([]);

  const handleAddId = useCallback((id) => {
    const updatedSelectedIds = [...selectedIds, id];
    setSelectedIds(updatedSelectedIds);
    localStorage.setItem('favotiteMovies', JSON.stringify(updatedSelectedIds));
  }, [selectedIds]);

  useEffect(() => {
    const selectedIdsFromLocalStorage = JSON.parse(localStorage.getItem('favotiteMovies')) || [];
    setSelectedIds(selectedIdsFromLocalStorage);
  }, []);

  return (
    <div>
        <button className='btn btn-secondary mt-1 ms-2' onClick={()=> handleAddId(paramsId)}>Add to list <BiPlusCircle/></button>
          <p>Selected IDs: {selectedIds.join(', ')}</p>
    </div>
  )
}

export default AddToFavorite