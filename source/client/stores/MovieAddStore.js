import alt from '../alt'
import HomeActions from '../actions/HomeActions'
import Helpers from '../utilities/Helpers'

class MovieAddStore {
  constructor () {
    this.bindActions(HomeActions)

    this.name = ''
    this.description = ''
    this.genres = []
    this.genresValidationState = ''
    this.nameValidationState = ''
    this.moviePosterUrl = ''
    this.helpBlock = ''
  }

  onAddMovieSuccess () {
    console.log('Added movie!')
  }

  onAddMovieFail (err) {
    console.log('Failed to add movie', err)
  }

  onHandleNameChange (e) {
    this.name = e.target.value
    this.nameValidationState = ''
    this.helpBlock = ''
  }

  onHandleDescriptionChange (e) {
    this.description = e.target.value
    this.genresValidationState = ''
    this.helpBlock = ''
  }

  onHandleGenresChange (e) {
    let genreValue = e.target.value
    if (this.genres.indexOf(genreValue) === -1) {
      this.genres = Helpers.appendToArray(genreValue, this.genres)
    } else {
      this.genres = Helpers.removeFromArray(genreValue, this.genres)
    }
    this.genresValidationState = ''
    this.helpBlock = ''
  }

  onNameValidationFail () {
    this.nameValidationState = 'has-error'
    this.helpBlock = 'Enter movie name'
  }

  onGenresValidationFail () {
    this.genresValidationState = 'has-error'
    this.helpBlock = 'Select at least one movie genre'
  }
}

export default alt.createStore(MovieAddStore)
