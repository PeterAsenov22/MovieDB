import React, { Component } from 'react'
import MovieCardInfo from './MovieCardInfo'
import MovieCardPoster from './MovieCardPoster'
import MovieCommentsPanel from './MovieCommentsPanel'
import MovieVotePanel from './MovieVotePanel'
import MoviePanelToggles from './MoviePanelToggles'

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
          <MoviePanelToggles
            toggleCommentsPanel={this.toggleCommentsPanel.bind(this)}
            toggleVotePanel={this.toggleVotePanel.bind(this)}
            showCommentsPanel={this.state.showCommentsPanel}
            showVotePanel={this.state.showVotePanel}
            movieId={this.props.movie._id} />
        </div>
        { this.state.showVotePanel ? <MovieVotePanel movieId={this.props.movie._id} /> : null }
        { this.state.showCommentsPanel ? <MovieCommentsPanel movieId={this.props.movie._id} /> : null }
        <div id='clear' />
      </div>
    )
  }
}

export default MovieCard
