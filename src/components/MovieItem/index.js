import ReactPlayer from 'react-player'

const MovieItem = props => {
  const {videoUrl} = props
  console.log(videoUrl)
  return (
    <div>
      <ReactPlayer url={videoUrl} />
    </div>
  )
}

export default MovieItem
