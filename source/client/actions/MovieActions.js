import alt from '../alt'
import TMDB from '../utilities/RequesterTMDB'

class MovieActions {
  constructor () {
    this.generateActions(
      'getTopTenMoviesSuccess',
      'getTopTenMoviesFail',
      'getFiveRecentMoviesSuccess',
      'getFiveRecentMoviesFail',
      'emptyTopTenMovies',
      'addMovieToTopTen',
      'addCommentSuccess',
      'addCommentFail'
    )
  }

  getFiveRecentMovies () {
    let request = {
      method: 'get',
      url: '/api/movies/five-recent'
    }

    $.ajax(request)
      .done(data => this.getFiveRecentMoviesSuccess(data))

    return true
  }

  getTopTenMovies () {
    let request = {
      url: '/api/movies/top-ten',
      method: 'get'
    }

    $.ajax(request)
      .done(data => {
        this.emptyTopTenMovies()
        for (let movie of data) {
          let movieData = {
            _id: movie._id,
            name: movie.name,
            description: movie.description,
            genres: movie.genres
          }

          TMDB
            .getMoviePoster(movie.name)
            .then(tmdbResponse => {
              movieData.moviePosterUrl = tmdbResponse.posterUrl
              if (!movieData.description || movieData.description === '') {
                movieData.description = tmdbResponse.overview
              }

              getComments(movie._id)
                .then(comments => {
                  movieData.comments = comments

                  this.addMovieToTopTen(movieData)
                })
            })
        }
      })
      .fail(error => this.getTopTenMoviesFail(error))

    return true
  }

  addComment (movieId, comment) {
    let request = {
      url: `/api/movies/${movieId}/comments`,
      method: 'post',
      contentType: 'application/json',
      data: JSON.stringify({content: comment})
    }

    $.ajax(request)
      .done(data => this.addCommentSuccess(movieId, data))
      .fail(err => this.addCommentFail(err.responseJSON))

    return true
  }
}

export default alt.createActions(MovieActions)

function getComments (movieId) {
  return new Promise((resolve, reject) => {
    let request = {
      url: `/api/movies/${movieId}/comments`,
      method: 'get'
    }

    $.ajax(request)
      .done(data => resolve(data))
      .fail(err => reject(err))
  })
}
