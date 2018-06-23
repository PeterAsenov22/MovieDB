import alt from '../alt'

class FormActions {
  constructor () {
    this.generateActions(
      'handleInputChange',
      'handleCommentChange',
      'usernameValidationFail',
      'passwordValidationFail',
      'genderValidationFail',
      'firstNameValidationFail',
      'lastNameValidationFail',
      'ageValidationFail',
      'unauthorizedAccessAttempt',
      'commentValidationFail'
    )
  }
}

export default alt.createActions(FormActions)
