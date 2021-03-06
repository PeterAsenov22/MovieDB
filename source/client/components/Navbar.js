import React, { Component } from 'react'
import { Link } from 'react-router'
import NavbarActions from '../actions/NavbarActions'
import NavbarStore from '../stores/NavbarStore'
import NavbarUserMenu from './sub-components/NavbarUserMenu'

class Navbar extends Component {
  constructor (props) {
    super(props)
    this.state = NavbarStore.getState()
    this.onChange = this.onChange.bind(this)
  }

  onChange (state) {
    this.setState(state)
  }

  componentDidMount () {
    NavbarStore.listen(this.onChange)

    $(document).ajaxStart(() => NavbarActions.updateAjaxAnimation('fadeIn'))
    $(document).ajaxComplete(() => NavbarActions.updateAjaxAnimation('fadeOut'))
  }

  componentWillUnmount () {
    NavbarStore.unlisten(this.onChange)
  }

  render () {
    return (
      <nav className='navbar navbar-default navbar-static-top'>
        <div className='navbar-header'>
          <button type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#navbar'>
            <span className='sr-only'>Toggle navigation</span>
            <span className='icon-bar' />
            <span className='icon-bar' />
            <span className='icon-bar' />
          </button>
          <Link to='/' className='navbar-brand'>
            <span ref='triangles' className={'triangles animated' + this.state.ajaxAnimationClass}>
              <div className='tri invert' />
              <div className='tri invert' />
              <div className='tri' />
              <div className='tri invert' />
              <div className='tri invert' />
              <div className='tri' />
              <div className='tri invert' />
              <div className='tri' />
              <div className='tri invert' />
            </span>
            MDB
          </Link>
        </div>
        <div id='navbar' className='navbar-collapse collapse'>
          <ul className='nav navbar-nav'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/movie/add'>Add Movie</Link>
            </li>
          </ul>
          <NavbarUserMenu />
        </div>
      </nav>
    )
  }
}

export default Navbar
