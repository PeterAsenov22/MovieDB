import React from 'react'
import { Route } from 'react-router'

import App from './components/App'
import Home from './components/Home'
import MovieAdd from './components/MovieAdd'
import UserProfile from './components/UserProfile'
import UserRegister from './components/UserRegister'

export default (
  <Route component={App}>
    <Route path='/' component={Home} />
    <Route path='/movie/add' component={MovieAdd} />
    <Route path='/user/profile/:userId' component={UserProfile} />
    <Route path='/user/register' component={UserRegister} />
  </Route>
)
