import React from 'react'
import Button from '@material-ui/core/Button'
import store from '../store/index'
import axios from 'axios'

class Thumbnail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {itemAmount: 1}
    this.clickHandler = this.clickHandler.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(evt) {
    this.setState({itemAmount: evt.target.value})
  }

  async clickHandler() {
    const storeState = store.getState()
    const userId = storeState.user.id

    if (userId) {
      const {data} = await axios.get('/api/users/' + userId + '/cart')
      let cart = data[0].content
      let itemFound = false
      if (!cart) cart = []
      cart.forEach(item => {
        if (item.id === this.props.product.id) {
          itemFound = true
          item.itemQuantity += Number(this.state.itemAmount)
        }
      })
      if (!itemFound) {
        cart.push({
          id: this.props.product.id,
          itemQuantity: Number(this.state.itemAmount),
          price: this.props.product.price
        })
      }

      axios.put('/api/users/' + userId + '/cart', {content: cart})
    } else {
      // 1. create an object representing the item added to cart
      const {product} = this.props

      const itemToAdd = {
        id: product.id,
        itemQuantity: Number(this.state.itemAmount),
        price: product.price
      }

      // 2. see if current cart
      if (!localStorage.getItem('cart')) {
        let currentCart = [itemToAdd]
        localStorage.setItem('cart', JSON.stringify(currentCart))
      } else {
        let currentCart = JSON.parse(localStorage.getItem('cart'))

        if (!Array.isArray(currentCart)) {
          currentCart = [currentCart]
        }

        let itemFound = false
        currentCart.forEach(item => {
          if (!itemFound && item.id === itemToAdd.id) {
            if (this.handleChange) {
              item.itemQuantity += Number(this.state.itemAmount)
            } else {
              item.itemQuantity = 1
            }
            itemFound = true
          }
        })

        if (!itemFound) {
          currentCart.push(itemToAdd)
        }

        localStorage.setItem('cart', JSON.stringify(currentCart))
      }
    }
  }

  render() {
    return (
      <div className="product-thumb">
        <img src={this.props.product.imageUrl} className="images" />
        <p>
          <strong>{this.props.product.name}</strong>
        </p>
        <p>Price: ${(this.props.product.price / 100).toFixed(2)}</p>
        <select
          onChange={this.handleChange}
          name="quantity-dropdown"
          id="quantity-dropdown"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <Button onClick={this.clickHandler}>
          Add to cart{' '}
          <i className="material-icons button-icon">add_shopping_cart</i>
        </Button>
      </div>
    )
  }
}

export default Thumbnail
