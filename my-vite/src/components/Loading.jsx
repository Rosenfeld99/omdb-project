import React from 'react'
import { RotatingLines } from 'react-loader-spinner'

const Loading = () => {
  return (
    <div>
        <div className='loading py-4 text-center'>
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="50"
              visible={true}
            />  
            <h5>Loading...</h5>
          </div>
    </div>
  )
}

export default Loading