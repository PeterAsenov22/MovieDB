import alt from '../alt'

class UserActions {
  constructor () {
    this.generateActions(
      'loginUserSuccess',
      'loginUserFail',
      'logoutUserSuccess'
    )
  }

  loginUser () {
    let request = {
      url: '/user/login',
      method: 'post',
      data: JSON.stringify({username: 'admin', password: 'admin'}),
      contentType: 'application/json'
    }

    $.ajax(request)
      .done(user => {
        this.loginUserSuccess(user)
      })
      .fail(err => {
        this.loginUserFail(err)
      })

    return true
  }

  logoutUser () {
    let request = {
      url: '/user/logout',
      method: 'post'
    }

    $.ajax(request)
      .done(() => {
        this.logoutUserSuccess()
      })

    return true
  }
}

export default alt.createActions(UserActions)
