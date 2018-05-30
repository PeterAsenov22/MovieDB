import React from 'react'
import { Route } from 'react-router'

import App from './components/App'
import Home from './components/Home'
import MovieAdd from './components/MovieAdd'

export default (
  <Route component={App}>
    <Route path='/' component={Home} />
    <Route path='/movie/add' component={MovieAdd} />
  </Route>
)
