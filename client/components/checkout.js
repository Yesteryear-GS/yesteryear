import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'

class Checkout extends Component {
  render() {
    console.log(this.props.currentCart)
    return (
      <>
        <h2>Checkout</h2>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentCart: state.cart
  }
}

export default connect(mapStateToProps)(Checkout)
