import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getCart} from '../store/cart'
import CartTable from './cartTable'
import SubmitPayment from './submitPayment'

class Checkout extends Component {
  componentDidMount() {
    this.props.getCurrentCart()
  }

  render() {
    return (
      <>
        <h2>Checkout</h2>
        <CartTable
          cart={this.props.currentCart}
          products={this.props.products}
        />
        <button type="submit">Checkout</button>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentCart: state.cart.cart[0],
    products: state.product.products
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
