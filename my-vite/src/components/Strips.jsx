import React from 'react'
import { Link } from 'react-router-dom';
import { BiInfoCircle } from 'react-icons/bi'

const Strips = ({API}) => {

    console.log(API);

  return (
    <div className='strips'>
        <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
            <ol className="carousel-indicators">
                <li data-bs-target="#carouselId" data-bs-slide-to="0" className="active" aria-current="true" aria-label="First slide"></li>
                <li data-bs-target="#carouselId" data-bs-slide-to="1" aria-label="Second slide"></li>
                <li data-bs-target="#carouselId" data-bs-slide-to="2" aria-label="Third slide"></li>
            </ol>
            <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                    <img src="https://www.framerated.co.uk/frwpcontent/uploads/2017/04/fast8a.jpg" className="w-100 d-block" alt="First slide"/>
                    <div className="carousel-caption">
                        <Link to={'/info/tt6806448'}>
                            <button className='btn btn-warning text-white'>More info <BiInfoCircle/></button>
                        </Link>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://cdn.vox-cdn.com/thumbor/Dc8bBshDmxtKUCeTFovjt_pz_bM=/0x0:1777x999/1200x800/filters:focal(708x235:992x519)/cdn.vox-cdn.com/uploads/chorus_image/image/63756879/parabellumcover.0.jpg" className="w-100 d-block" alt="Second slide"/>
                    <div className="carousel-caption">
                    <Link to={'/info/tt6146586'}>
                        <button className='btn btn-warning text-white'>More info <BiInfoCircle/></button>
                    </Link>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://film-authority.com/wp-content/uploads/2021/12/16-9.jpg" className="w-100 d-block" alt="Third slide"/>
                    <div className="carousel-caption">
                    <Link to={'/info/tt1502397'}>
                        <button className='btn btn-warning text-white'>More info <BiInfoCircle/></button>
                    </Link>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  )
}

export default Strips