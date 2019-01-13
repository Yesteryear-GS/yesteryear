import axios from 'axios'
import store from '../store/index'

const initialState = {
  cart: []
}

const GOT_CART = 'GOT_CART'
const REMOVE_CART = 'REMOVE_CART'

const gotCart = cart => {
  return {
    type: GOT_CART,
    cart
  }
}

export const removeCart = () => {
  return {
    type: REMOVE_CART,
    cart: []
  }
}

export const getCart = () => {
  return async dispatch => {
    try {
      const userId = store.getState().user.id
      const {data} = await axios.get('/api/users/' + userId + '/cart')
      dispatch(gotCart(data))
    } catch (error) {
      console.error(error)
    }
  }
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_CART:
      return {...state, cart: action.cart}
    case REMOVE_CART:
      return {...state, cart: action.cart}
    default:
      return state
  }
}

export default cartReducer
