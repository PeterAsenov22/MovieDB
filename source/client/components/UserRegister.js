import React, {Component} from 'react'
import FormStore from '../stores/FormStore'
import FormActions from '../actions/FormActions'
import UserActions from '../actions/UserActions'
import Form from '../components/form/Form'
import TextGroup from '../components/form/TextGroup'
import RadioGroup from '../components/form/RadioGroup'
import RadioElement from '../components/form/RadioElement'
import Submit from '../components/form/Submit'

class UserRegister extends Component {
  constructor (props) {
    super(props)

    this.state = FormStore.getState()
    this.onChange = this.onChange.bind(this)
  }

  onChange (state) {
    this.setState(state)
  }

  componentDidMount () {
    FormStore.listen(this.onChange)
  }

  componentWillUnmount () {
    FormStore.unlisten(this.onChange)
  }

  handleSubmit (event) {
    event.preventDefault()

    let data = {
      username: this.state.user.username,
      password: this.state.user.password,
      confirmedPassword: this.state.user.confirmedPassword,
      firstName: this.state.user.firstName,
      lastName: this.state.user.lastName,
      age: this.state.user.age,
      gender: this.state.user.gender
    }

    if (!data.username) {
      return FormActions.usernameValidationFail()
    }

    if (!data.password ||
       !data.confirmedPassword ||
        data.password !== data.confirmedPassword) {
      return FormActions.passwordValidationFail()
    }

    if (!data.firstName || data.firstName.length < 2) {
      return FormActions.firstNameValidationFail()
    }

    if (!data.lastName || data.lastName.length < 2) {
      return FormActions.lastNameValidationFail()
    }

    if (!data.age || parseInt(data.age) < 0 || parseInt(data.age) > 120) {
      return FormActions.ageValidationFail()
    }

    if (data.gender !== 'Male' && data.gender !== 'Female') {
      return FormActions.genderValidationFail()
    }

    UserActions.registerUser(data)
  }

  render () {
    return (
      <Form
        title='Register'
        handleSubmit={this.handleSubmit.bind(this)}
        submitState={this.state.formSubmitState}
        message={this.state.message}>
        <TextGroup
          type='text'
          name='username'
          label='Username'
          value={this.state.user.username}
          autoFocus
          onChange={FormActions.handleInputChange}
          validationState={this.state.usernameValidationState}
          message={this.state.message} />

        <TextGroup
          type='password'
          name='password'
          label='Password'
          value={this.state.user.password}
          onChange={FormActions.handleInputChange}
          validationState={this.state.passwordValidationState}
          message={this.state.message} />

        <TextGroup
          type='password'
          name='confirmedPassword'
          label='Confirm Password'
          value={this.state.user.confirmedPassword}
          onChange={FormActions.handleInputChange}
          validationState={this.state.passwordValidationState}
          message={this.state.message} />

        <TextGroup
          type='text'
          name='firstName'
          label='First Name'
          onChange={FormActions.handleInputChange}
          value={this.state.user.firstName}
          validationState={this.state.firstNameValidationState}
          message={this.state.message} />

        <TextGroup
          type='text'
          name='lastName'
          label='Last Name'
          onChange={FormActions.handleInputChange}
          value={this.state.user.lastName}
          validationState={this.state.lastNameValidationState}
          message={this.state.message} />

        <TextGroup
          type='number'
          name='age'
          label='Age'
          onChange={FormActions.handleInputChange}
          value={this.state.user.age}
          validationState={this.state.ageValidationState}
          message={this.state.message} />

        <RadioGroup
          validationState={this.state.genderValidationState}
          message={this.state.message}>
          <RadioElement
            groupName='gender'
            value='Male'
            selectedValue={this.state.user.gender}
            onChange={FormActions.handleInputChange} />

          <RadioElement
            groupName='gender'
            value='Female'
            selectedValue={this.state.user.gender}
            onChange={FormActions.handleInputChange} />
        </RadioGroup>

        <Submit
          type='btn-primary'
          value='Register' />
      </Form>
    )
  }
}

export default UserRegister
