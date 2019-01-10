import React from 'react'
import store from '../store/index'
import axios from 'axios'

const Cart = async () => {
  try {
    const userId = store.getState().user.id
    const {data} = await axios.get('api/users/' + userId + '/orders')
    return (
      <>
        <h2>Cart</h2>
      </>
    )
  } catch (err) {
    console.error(err)
  }
}

export default Cart
