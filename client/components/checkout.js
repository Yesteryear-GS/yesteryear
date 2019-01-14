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
    const cart = this.props.userId
      ? this.props.cart.content[0]
      : this.props.cart

    return (
      <>
        <h2>Checkout</h2>
        {cart &&
          cart.content && (
            <CartTable cart={cart} products={this.props.products} />
          )}
        <SubmitPayment cart={cart} />
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
    products: state.product.products,
    userId: state.user.id
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
