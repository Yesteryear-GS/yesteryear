import React from 'react'
import Button from '@material-ui/core/Button'
import store from '../store/index'
import axios from 'axios'

class Thumbnail extends React.Component {
  constructor(props) {
    super(props)
    this.clickHandler = this.clickHandler.bind(this)
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
          item.itemQuantity += 1
        }
      })
      if (!itemFound) {
        cart.push({
          id: this.props.product.id,
          itemQuantity: 1,
          price: this.props.product.price
        })
      }

      axios.put('/api/users/' + userId + '/cart', {content: cart})
    } else {
      // 1. create an object representing the item added to cart
      const {product} = this.props

      const itemToAdd = {
        id: product.id,
        itemQuantity: 1,
        price: product.price
      }

      // 2. see if current cart
      if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify(itemToAdd))
      } else {
        let currentCart = JSON.parse(localStorage.getItem('cart'))

        if (!Array.isArray(currentCart)) {
          currentCart = [currentCart]
        }

        let itemFound = false
        currentCart.forEach(item => {
          if (!itemFound && item.id === itemToAdd.id) {
            item.itemQuantity++
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
        <p>{this.props.product.name}</p>
        <p>Price: ${(this.props.product.price / 100).toFixed(2)}</p>
        <Button onClick={this.clickHandler}>
          Add to cart{' '}
          <i className="material-icons button-icon">add_shopping_cart</i>
        </Button>
      </div>
    )
  }
}

export default Thumbnail
