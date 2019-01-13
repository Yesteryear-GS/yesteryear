import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import {getCart} from '../store/cart'

class Checkout extends Component {
  componentDidMount() {
    this.props.getCurrentCart()
  }

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

const mapDispatchToProps = dispatch => {
  return {
    getCurrentCart: () => {
      dispatch(getCart())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
