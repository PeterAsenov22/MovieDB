import alt from '../alt'
import MovieActions from '../actions/MovieActions'

class MovieStore {
  constructor () {
    this.bindActions(MovieActions)
    this.topTenMovies = []
    this.mostRecentMovies = []
  }

  onAddMovieToTopTen (movie) {
    this.topTenMovies.push(movie)
  }

  onEmptyTopTenMovies () {
    this.topTenMovies = []
  }

  onGetTopTenMoviesSuccess (movies) {
    this.topTenMovies = movies
  }

  onGetTopTenMoviesFail (err) {
    console.log('Could not connect to DB', err)
  }

  onGetFiveRecentMoviesSuccess (movies) {
    this.mostRecentMovies = movies
  }

  onGetFiveRecentMoviesFail () {
    console.log('Could not connect to DB')
  }

  onAddCommentSuccess (movieId, data) {
    let comment = data.content
    let movie = this.topTenMovies.find(m => m._id === movieId)
    movie.comments.unshift(comment)
  }
}

export default alt.createStore(MovieStore)
