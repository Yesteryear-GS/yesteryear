import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import AllProducts from './all-products'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email, isUser} = props
  return (
    <div>
      {isUser && (
        <>
          <h3>Welcome, {email}</h3>
          <Link to="/order-history">Order History</Link>
        </>
      )}
      <div id="home">
        <section id="carousel">
          <img src="./images/cover.png" />
        </section>
        <div id="container">
          <div id="menu">
            <h3 className="showProducts">All Products</h3>
          </div>
          <div id="products">
            <AllProducts />
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    isUser: !!state.user.id
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
