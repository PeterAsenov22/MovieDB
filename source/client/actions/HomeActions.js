import alt from '../alt'
import TMDB from '../utilities/RequesterTMDB'

class HomeActions {
  constructor () {
    this.generateActions(
      'getTopTenMoviesSuccess',
      'getTopTenMoviesFail'
    )
  }

  getTopTenMovies () {
    let request = {
      url: '/api/movies/top-ten',
      method: 'get'
    }

    $.ajax(request)
      .done(data => {
        let tmdbPromises = []
        for (const movie of data) {
          tmdbPromises.push(TMDB.getMoviePoster(movie.name))
        }

        Promise.all(tmdbPromises)
          .then((promises) => {
            let movies = []
            for (let i = 0; i < data.length; i++) {
              let movie = data[i]
              let movieData = {
                _id: movie._id,
                name: movie.name,
                description: movie.description,
                genres: movie.genres,
                moviePosterUrl: promises[i].posterUrl
              }
              movies.push(movieData)
            }

            this.getTopTenMoviesSuccess(movies)
          })
      })
      .fail(error => this.getTopTenMoviesFail(error))

    return true
  }
}

export default alt.createActions(HomeActions)
