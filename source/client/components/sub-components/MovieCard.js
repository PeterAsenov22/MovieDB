import React, { Component } from 'react'
import { Link } from 'react-router'
import MovieCardInfo from './MovieCardInfo'
import MovieCardPoster from './MovieCardPoster'
import MovieCommentsPanel from './MovieCommentsPanel'
import MovieVotePanel from './MovieVotePanel'

class MovieCard extends Component {
  constructor (props) {
    super(props)

    this.state = {
      showVotePanel: false,
      showCommentsPanel: false
    }
  }

  toggleCommentsPanel () {
    this.setState(prevState => ({
      showCommentsPanel: !prevState.showCommentsPanel,
      showVotePanel: false
    }))
  }

  toggleVotePanel () {
    this.setState(prevState => ({
      showVotePanel: !prevState.showVotePanel,
      showCommentsPanel: false
    }))
  }

  render () {
    return (
      <div className='animated fade-in'>
        <div className='media movie'>
          <span className='position pull-left'>{this.props.index + 1}</span>
          <MovieCardPoster moviePosterUrl={this.props.movie.moviePosterUrl} />
          <MovieCardInfo movie={this.props.movie} />
          <div className='pull-right btn-group'>
            <a className='btn btn-primary'
              onClick={this.toggleCommentsPanel.bind(this)}>
              {this.state.showCommentsPanel ? 'Hide' : 'Comments'}
            </a>
            <a className='btn btn-primary'
              onClick={this.toggleVotePanel.bind(this)}>
              {this.state.showVotePanel ? 'Hide' : 'Vote'}
            </a>
            <Link to={`/movie/${this.props.movie._id}/review/add`} className='btn btn-warning'>
              Write review
            </Link>
          </div>
        </div>
        { this.state.showVotePanel ? <MovieVotePanel movieId={this.props.movie._id} /> : null }
        { this.state.showCommentsPanel ? <MovieCommentsPanel movieId={this.props.movie._id} /> : null }
        <div id='clear' />
      </div>
    )
  }
}

export default MovieCard
