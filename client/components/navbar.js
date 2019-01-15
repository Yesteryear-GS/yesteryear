import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {removeCart, updateCartCount} from '../store/cart'

const Navbar = ({handleClick, isLoggedIn, cart}) => (
  <div id="fixNav">
    <div id="navbar">
      <Link to="/">
        <img id="logo" src="./images/yesteryear.png" />
      </Link>
      <nav>
        {isLoggedIn ? (
          <>
            {/* The navbar will show these links after you log in */}
            <Link to="/home">Home</Link>
            <a href="#" onClick={handleClick}>
              Logout
            </a>
            <Link to="/cart">
              <span id="cartTotal">
                {cart && cart.content && cart.content[0]
                  ? cart.content[0].content.reduce((accum, val) => {
                      let count = (accum += val.itemQuantity)
                      return count
                    }, 0)
                  : ''}{' '}
              </span>
              Cart
            </Link>
          </>
        ) : (
          <>
            {/* The navbar will show these links before you log in */}
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/cart">
              <span id="cartTotal">
                {cart && cart.content
                  ? cart.content.reduce((accum, val) => {
                      let count = (accum += val.itemQuantity)
                      return count
                    }, 0)
                  : ''}{' '}
              </span>
              Cart
            </Link>
          </>
        )}
      </nav>
    </div>
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    cart: state.cart
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
      dispatch(removeCart())
    },
    updateCartCount() {
      dispatch(updateCartCount())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
