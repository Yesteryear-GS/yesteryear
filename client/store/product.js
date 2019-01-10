import axios from 'axios'
import history from '../history'
import {runInNewContext} from 'vm'

// initial state

const initialState = {
  products: []
}

// Action Types

const GOT_PRODUCTS = 'GOT_PRODUCTS'

// Action creator

const gotProducts = products => {
  return {
    type: GOT_PRODUCTS,
    products
  }
}

// Thunk creator

export const getProducts = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/products')
      dispatch(gotProducts(data))
    } catch (error) {
      console.error(error)
    }
  }
}

// reducer

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_PRODUCTS:
      return {...state, products: action.products}
    default:
      return state
  }
}

export default productReducer
