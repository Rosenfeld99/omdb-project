import React from 'react'

const Footer = () => {

    let today = new Date();

    let year = today.getFullYear();

  return (
    <div className='footer p-1 text-center text-md-start'>
        <p className='container pt-3'>eliyahu-rosenfeld©{year}</p>
    </div>
  )
}

export default Footer