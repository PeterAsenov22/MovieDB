import React, {Component} from 'react'
import UserStore from '../stores/UserStore'
import FormActions from '../actions/FormActions'

export default function authorize (ChildComponent) {
  return class Authorization extends Component {
    constructor (props) {
      super(props)

      this.state = UserStore.getState()
      this.onChange = this.onChange.bind(this)
    }

    onChange (state) {
      this.setState(state)
    }

    componentWillMount () {
      if (this.state.loggedInUserId === '') {
        this.props.history.pushState(null, '/user/login')
        FormActions.unauthorizedAccessAttempt()
      }
    }

    componentDidMount () {
      UserStore.listen(this.onChange)
    }

    componentWillUnmount () {
      UserStore.unlisten(this.onChange)
    }

    render () {
      return <ChildComponent {...this.props} />
    }
  }
}
