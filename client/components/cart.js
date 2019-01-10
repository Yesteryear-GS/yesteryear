import React, {Component} from 'react'
import store from '../store/index'
import axios from 'axios'
import Thumbnail from './thumbnail'

class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cart: []
    }
  }

  async componentDidMount() {
    const userId = store.getState().user.id
    const {data} = await axios.get('api/users/' + userId + '/orders')
    this.setState({cart: data})
  }

  render() {
    return (
      <>
        <h2>Cart</h2>
        {this.state.cart.map(item => {
          // for each item in the cart, render an item view
          // TODO: connect products to cart
        })}
      </>
    )
  }
}

export default Cart
