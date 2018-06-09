import React, {Component} from 'react'

class MovieCardPoster extends Component {
  render () {
    let poster
    if (this.props.moviePosterUrl) {
      poster = (
        <img className='media-object' src={this.props.moviePosterUrl} />
      )
    }

    return (
      <div className='pull-left thumb-lg'>
        {poster}
      </div>
    )
  }
}

export default MovieCardPoster
