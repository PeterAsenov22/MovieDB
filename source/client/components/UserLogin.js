import React, {Component} from 'react'
import FormStore from '../stores/FormStore'
import FormActions from '../actions/FormActions'
import UserActions from '../actions/UserActions'
import Form from './form/Form'
import TextGroup from './form/TextGroup'
import Submit from './form/Submit'

class UserLogin extends Component {
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

    let username = this.state.user.username
    let password = this.state.user.password

    if (!username) {
      return FormActions.usernameValidationFail()
    }

    if (!password) {
      return FormActions.passwordValidationFail('Enter password')
    }

    UserActions.loginUser({username, password})
  }

  render () {
    return (
      <Form
        title='Login'
        handleSubmit={this.handleSubmit.bind(this)}
        submitState={this.state.formSubmitState}
        message={this.state.message}>

        <TextGroup
          type='text'
          name='username'
          label='Username'
          value={this.state.user.username}
          onChange={FormActions.handleInputChange}
          validationState={this.state.usernameValidationState} />

        <TextGroup
          type='password'
          name='password'
          value={this.state.user.password}
          label='Password'
          onChange={FormActions.handleInputChange}
          validationState={this.state.passwordValidationState}
          message={this.state.message} />

        <Submit type='btn-primary' value='Login' />
      </Form>
    )
  }
}

export default UserLogin
