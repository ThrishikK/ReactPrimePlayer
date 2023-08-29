import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovies = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'ACTION',
  )
  const comedyMovies = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'COMEDY',
  )
  return (
    <div className="main-container">
      <div>
        <img
          alt="prime video"
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        />
      </div>
      <div className="main-sub-container">
        <div className="slider-in-main">
          <h1>Action Movies</h1>
          <MoviesSlider movies={actionMovies} />
        </div>
        <div className="slider-in-main">
          <h1>Comedy Movies</h1>
          <MoviesSlider movies={comedyMovies} />
        </div>
      </div>
    </div>
  )
}

export default PrimeVideo
