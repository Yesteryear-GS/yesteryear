import React, {Component} from 'react'
import store from '../store/index'
import axios from 'axios'

class Cart extends Component {
  async componentDidMount() {
    const userId = store.getState().user.id
    const {data} = await axios.get('api/users/' + userId + '/orders')
  }

  render() {
    return (
      <>
        <h2>Cart</h2>
      </>
    )
  }
}

export default Cart
