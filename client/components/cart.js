import React, {Component} from 'react'
import store from '../store/index'
import axios from 'axios'

class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cart: [],
      products: [],
      totalPrice: 0
    }
  }

  async componentDidMount() {
    const storeState = store.getState()
    const userId = storeState.user.id
    const {data} = await axios.get('api/users/' + userId + '/cart')
    this.setState({cart: data, products: storeState})
    this.generateTotalPrice()
  }

  formatPrice(priceInt) {
    return '$' + (priceInt / 100).toFixed(2)
  }

  generateTotalPrice() {
    const totalPrice = this.state.cart.content.reduce(
      (total, currentProduct) => {
        return total + currentProduct.price * currentProduct.itemQuantity
      },
      0
    )
    this.setState({totalPrice})
  }

  render() {
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
            {this.state.cart.content &&
              this.state.cart.content.map((item, idx) => {
                const cartItem = this.state.products.product.products[
                  item.id - 1
                ]

                const name = cartItem.name
                const imgUrl = cartItem.imageUrl
                const qty = this.state.cart.content[idx].itemQuantity
                const price = this.state.cart.content[idx].price
                const adjPrice = price * qty

                return (
                  <tr key={`cart-item-${item.id - 1}`}>
                    <td>{name}</td>
                    <td>
                      <img className="cart-thumbnail" src={imgUrl} />
                    </td>
                    <td>{qty}</td>
                    <td>{this.formatPrice(price)}</td>
                    <td>{this.formatPrice(adjPrice)}</td>
                  </tr>
                )
              })}
          </tbody>
        </table>
        <h4>Total: {this.formatPrice(this.state.totalPrice)}</h4>
      </>
    )
  }
}

export default Cart
