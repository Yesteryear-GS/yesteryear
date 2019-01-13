import React, {Component} from 'react'
import store from '../store/index'
import axios from 'axios'
import CartTable from './cartTable'
import {connect} from 'react-redux'
import {getCart} from '../store/cart'

class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cart: [],
      products: [],
      totalPrice: 0
    }
    this.formatPrice = this.formatPrice.bind(this)
    this.generateTotalPrice = this.generateTotalPrice.bind(this)
  }

  async componentDidMount() {
    this.props.getCurrentCart()
    // const storeState = store.getState()
    // const userId = storeState.user.id
    // const {data} = await axios.get('api/users/' + userId + '/cart')
    this.setState({cart: [], products: this.props.products})
    this.generateTotalPrice()
  }

  formatPrice(priceInt) {
    return '$' + (priceInt / 100).toFixed(2)
  }

  generateTotalPrice() {
    const totalPrice =
      this.props.cart &&
      this.props.cart.content.reduce((total, currentProduct) => {
        return total + currentProduct.price * currentProduct.itemQuantity
      }, 0)
    this.setState({totalPrice})
  }

  render() {
    // TODO: create ternary that points to either user (DB) or guest (lS) cart
    const cart = this.props.cart

    return (
      <>
        <h2>Cart</h2>
        <table>
          <thead>
            <tr>
              <td>Item</td>
              <td>Image</td>
              <td>Quantity</td>
              <td>Price (ea.)</td>
              <td>Price</td>
            </tr>
          </thead>
          <tbody>
            {cart && cart.cart && cart.cart[0] ? (
              cart.cart[0].content.map((item, idx) => {
                const cartItem = this.state.products[item.id - 1]

                const name = cartItem.name
                const imgUrl = cartItem.imageUrl
                const qty = this.state.cart.content[idx].itemQuantity
                const price = this.state.cart.content[idx].price
                const adjPrice = price * qty

                return (
                  <CartTable
                    key={`cart-item-${item.id - 1}`}
                    name={name}
                    imgUrl={imgUrl}
                    qty={qty}
                    price={price}
                    adjPrice={adjPrice}
                    formatPrice={this.formatPrice}
                  />
                )
              })
            ) : (
              <tr>
                <td />
                <td />
                <td>
                  <div id="empty-cart">
                    <h3>Your cart is empty!</h3>
                    <p>Head over to the products page to change that!</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <h4>
          Total:{' '}
          {this.state.totalPrice && this.formatPrice(this.state.totalPrice)}
        </h4>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart.cart[0],
    products: state.product
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
