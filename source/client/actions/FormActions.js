import alt from '../alt'

class FormActions {
  constructor () {
    this.generateActions(
      'handleInputChange',
      'handleCommentChange',
      'handleScoreChange',
      'usernameValidationFail',
      'passwordValidationFail',
      'genderValidationFail',
      'firstNameValidationFail',
      'lastNameValidationFail',
      'ageValidationFail',
      'unauthorizedAccessAttempt',
      'commentValidationFail',
      'scoreValidationFail'
    )
  }
}

export default alt.createActions(FormActions)
