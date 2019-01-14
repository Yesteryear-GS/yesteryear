/* eslint-disable complexity */
import React, {Component} from 'react'
import CartTable from './cartTable'
import {connect} from 'react-redux'
import {getCart} from '../store/cart'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'

class Cart extends Component {
  constructor(props) {
    super(props)
    this.formatPrice = this.formatPrice.bind(this)
  }

  componentDidMount() {
    this.props.getCurrentCart()
  }

  formatPrice(priceInt) {
    return '$' + (priceInt / 100).toFixed(2)
  }

  render() {
    // TODO: create ternary that points to either user (DB) or guest (lS) cart
    const cart = this.props.userId
      ? this.props.cart.content[0]
      : this.props.cart
    return (
      <>
        <h2>Cart</h2>
        {cart && cart.content ? (
          <CartTable
            cart={cart}
            products={this.props.products}
            isUser={!!this.props.userId}
          />
        ) : (
          <div id="empty-cart">
            <h3>Your cart is empty!</h3>
            <p>Head over to the products page to change that!</p>
          </div>
        )}

        <h4>
          Total:{' '}
          {cart && cart.content ? (
            this.formatPrice(
              cart.content.reduce((total, currentProduct) => {
                return (
                  total + currentProduct.price * currentProduct.itemQuantity
                )
              }, 0)
            )
          ) : (
            <span>$0.00</span>
          )}
        </h4>
        {cart &&
          cart.content &&
          cart.content[0] && (
            <Button component={Link} to="/checkout">
              Go to Checkout
              <i className="material-icons button-icon">shopping_cart</i>
            </Button>
          )}
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

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
