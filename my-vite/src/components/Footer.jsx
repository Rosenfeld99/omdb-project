import React from 'react'

const Footer = () => {

    let today = new Date();

    let year = today.getFullYear();

  return (
    <div className='bg-dark text-white p-1 mt-4 text-center text-md-start'>
        <p className='container mt-3'>eliyahu-rosenfeld©{year}</p>
    </div>
  )
}

export default Footer