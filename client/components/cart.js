import React, {Component} from 'react'
import store from '../store/index'
import axios from 'axios'

class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cart: [],
      products: []
    }
  }

  async componentDidMount() {
    const storeState = store.getState()
    const userId = storeState.user.id
    const {data} = await axios.get('api/users/' + userId + '/cart')
    this.setState({cart: data, products: storeState})
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
            </tr>
          </thead>
          <tbody>
            {this.state.cart.content &&
              this.state.cart.content.map((item, idx) => {
                const cartItem = this.state.products.product.products[
                  item.id - 1
                ]

                return (
                  <tr key={`cart-item-${item.id - 1}`}>
                    <td>{cartItem.name}</td>
                    <td>
                      <img className="images" src={cartItem.imageUrl} />
                    </td>
                    <td>{this.state.cart.content[idx].itemQuantity}</td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </>
    )
  }
}

export default Cart
