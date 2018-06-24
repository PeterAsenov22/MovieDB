class Helpers {
  static appendToArray (value, array) {
    array.push(value)
    return array
  }

  static prependToArray (value, array) {
    array.unshift(value)
    return array
  }

  static removeFromArray (value, array) {
    let index = array.indexOf(value)
    if (index !== -1) {
      array.splice(index, 1)
    }

    return array
  }

  static formatMovieRating (score, votes) {
    let rating = score / votes

    if (isNaN(rating)) {
      rating = 0
    }

    if (rating % 1 !== 0) {
      rating = rating.toFixed(1)
    }

    return rating
  }
}

export default Helpers
