import alt from '../alt'

class FormActions {
  constructor () {
    this.generateActions(
      'handleInputChange',
      'usernameValidationFail',
      'passwordValidationFail',
      'genderValidationFail',
      'firstNameValidationFail',
      'lastNameValidationFail',
      'ageValidationFail',
      'unauthorizedAccessAttempt'
    )
  }
}

export default alt.createActions(FormActions)
