import React, {Component} from 'react'
import UserStore from '../stores/UserStore'
import UserInfo from '../components/sub-components/UserInfo'
import UserRatedMovies from '../components/sub-components/UserRatedMovies'
import UserReviews from '../components/sub-components/UserReviews'

class UserProfile extends Component {
  constructor (props) {
    super(props)
    this.state = UserStore.getState()

    this.onChange = this.onChange.bind(this)
  }

  onChange (state) {
    this.setState(state)
  }

  componentDidMount () {
    UserStore.listen(this.onChange)
  }

  componentWillUnmount () {
    UserStore.unlisten(this.onChange)
  }

  render () {
    return (
      <div>
        <UserInfo username={this.state.name} roles={this.state.roles} />
        <UserRatedMovies votes={this.state.votes} />
        <UserReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default UserProfile
