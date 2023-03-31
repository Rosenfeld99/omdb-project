import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import Home from '../pages/Home'
import MovieDetailes from '../pages/MovieDetailes'

const AppRouts = () => {
  return (
    <div>
      <Router>
        <Navigation/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/info/:id' element={<MovieDetailes/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default AppRouts