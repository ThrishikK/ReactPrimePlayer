import Slider from 'react-slick'
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import MovieItem from '../MovieItem'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'

const MoviesSlider = props => {
  const {movies} = props
  //   console.log(movies)
  const settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {movies.map(eachMovie => {
          console.log(eachMovie.thumbnailUrl)
          return (
            <Popup
              modal
              trigger={
                <div key={eachMovie.id}>
                  <img
                    className="movie-thumbnail"
                    alt="thumbnail"
                    src={eachMovie.thumbnailUrl}
                  />
                </div>
              }
            >
              {close => (
                <div className="video-youtube">
                  <button
                    className="close-button"
                    type="button"
                    data-testid="closeButton"
                    onClick={() => close()}
                  >
                    <IoMdClose />
                  </button>
                  <MovieItem videoUrl={eachMovie.videoUrl} />
                </div>
              )}
            </Popup>
          )
        })}
      </Slider>
    </div>
  )
}

export default MoviesSlider
