import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button'
import AllProducts from './all-products'
import {Link} from 'react-router-dom'
import OrderHistory from './orderHistory'

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
            <Button className="buttons">Show All</Button>
            <Button className="buttons">Snacks</Button>
            <Button className="buttons">Technology</Button>
            <Button className="buttons">Pop Culture</Button>
            <Button className="buttons">Toys/Games</Button>
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
