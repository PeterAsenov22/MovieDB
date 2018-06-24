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

  onAddCommentSuccess (data) {
    let comment = data.comment
    let movieId = data.comment.movie

    for (let i = 0; i < this.topTenMovies.length; i++) {
      if (this.topTenMovies[i]._id === movieId) {
        this.topTenMovies[i].comments.unshift(comment)
      }
    }

    console.log(this.topTenMovies)
  }
}

export default alt.createStore(MovieStore)
