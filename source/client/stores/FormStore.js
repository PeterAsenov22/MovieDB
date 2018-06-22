import alt from '../alt'
import FormActions from '../actions/FormActions'
import UserActions from '../actions/UserActions'

class FormStore {
  constructor () {
    this.bindActions(FormActions)
    this.bindListeners({
      onRegisterUserFail: UserActions.registerUserFail,
      onRegisterUserSuccess: UserActions.registerUserSuccess,
      onLoginUserSuccess: UserActions.loginUserSuccess,
      onLoginUserFail: UserActions.loginUserFail
    })

    this.user = {
      username: '',
      password: '',
      confirmedPassword: '',
      firstName: '',
      lastName: '',
      age: '',
      gender: ''
    }
    this.usernameValidationState = ''
    this.passwordValidationState = ''
    this.firstNameValidationState = ''
    this.lastNameValidationState = ''
    this.ageValidationState = ''
    this.genderValidationState = ''
    this.formSubmitState = ''
    this.message = ''
  }

  onRegisterUserSuccess () {
    this.formSubmitState = 'has-success'
    this.message = 'User register successful'
    this.usernameValidationState = ''
    this.passwordValidationState = ''
    this.firstNameValidationState = ''
    this.lastNameValidationState = ''
    this.ageValidationState = ''
    this.genderValidationState = ''
    this.user = {
      username: '',
      password: '',
      confirmedPassword: '',
      firstName: '',
      lastName: '',
      age: '',
      gender: ''
    }
  }

  onRegisterUserFail (err) {
    if (err.code === 11000) {
      this.usernameValidationState = 'has-error'
      this.message = 'Username already in use'
      this.passwordValidationState = ''
      this.firstNameValidationState = ''
      this.lastNameValidationState = ''
      this.ageValidationState = ''
      this.genderValidationState = ''
      return
    }

    this.formSubmitState = 'has-error'
    this.message = err.errmsg
  }

  onLoginUserSuccess () {
    this.formSubmitState = 'has-success'
    this.message = 'User login successful'
    this.usernameValidationState = ''
    this.passwordValidationState = ''
    this.user = {
      username: '',
      password: '',
      confirmedPassword: '',
      firstName: '',
      lastName: '',
      age: '',
      gender: ''
    }
  }

  onLoginUserFail (err) {
    this.formSubmitState = 'has-error'
    this.message = err.message
    this.usernameValidationState = 'has-error'
    this.passwordValidationState = 'has-error'
  }

  onUsernameValidationFail () {
    this.usernameValidationState = 'has-error'
    this.passwordValidationState = ''
    this.firstNameValidationState = ''
    this.lastNameValidationState = ''
    this.ageValidationState = ''
    this.genderValidationState = ''
    this.formSubmitState = ''
    this.message = 'Enter username'
  }

  onPasswordValidationFail (message) {
    this.usernameValidationState = ''
    this.passwordValidationState = 'has-error'
    this.firstNameValidationState = ''
    this.lastNameValidationState = ''
    this.ageValidationState = ''
    this.genderValidationState = ''
    this.formSubmitState = ''
    this.message = message
  }

  onFirstNameValidationFail () {
    this.usernameValidationState = ''
    this.passwordValidationState = ''
    this.genderValidationState = ''
    this.firstNameValidationState = 'has-error'
    this.lastNameValidationState = ''
    this.ageValidationState = ''
    this.formSubmitState = ''
    this.message = 'First Name should start with capital letter and should be at least 2 letters'
  }

  onLastNameValidationFail () {
    this.usernameValidationState = ''
    this.passwordValidationState = ''
    this.genderValidationState = ''
    this.firstNameValidationState = ''
    this.lastNameValidationState = 'has-error'
    this.ageValidationState = ''
    this.formSubmitState = ''
    this.message = 'Last Name should start with capital letter and should be at least 2 letters'
  }

  onAgeValidationFail () {
    this.usernameValidationState = ''
    this.passwordValidationState = ''
    this.genderValidationState = ''
    this.firstNameValidationState = ''
    this.lastNameValidationState = ''
    this.ageValidationState = 'has-error'
    this.formSubmitState = ''
    this.message = 'Age should be between 0 and 120'
  }

  onGenderValidationFail () {
    this.usernameValidationState = ''
    this.passwordValidationState = ''
    this.firstNameValidationState = ''
    this.lastNameValidationState = ''
    this.ageValidationState = ''
    this.genderValidationState = 'has-error'
    this.formSubmitState = ''
    this.message = 'Gender should be Male or Female. Select one'
  }

  onHandleInputChange (event) {
    this.user[event.target.name] = event.target.value
  }
}

export default alt.createStore(FormStore)
