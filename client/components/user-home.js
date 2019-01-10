import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button'
import AllProducts from './all-products'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props
  return (
    <div>
      <h3>Welcome, {email}</h3>
      <div id="home">
        <section id="carousel">
          <img src="./images/temp_img.jpg" />
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
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
