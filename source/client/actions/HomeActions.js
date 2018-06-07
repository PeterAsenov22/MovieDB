import alt from '../alt'

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
        let movies = []
        for (const movie of data) {
          let movieData = {
            _id: movie._id,
            name: movie.name,
            description: movie.description,
            genres: movie.genres
          }

          movies.push(movieData)
        }

        this.getTopTenMoviesSuccess(movies)
      })
      .fail(error => this.getTopTenMoviesFail(error))

    return true
  }
}

export default alt.createActions(HomeActions)
