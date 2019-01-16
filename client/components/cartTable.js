import React, {Component} from 'react'
import Button from '@material-ui/core/Button'
import {deleteItem} from '../store/cart'
import {connect} from 'react-redux'

function formatPrice(priceInt) {
  return '$' + (priceInt / 100).toFixed(2)
}

class CartTable extends Component {
  render() {
    let cart = this.props.cart.content
    return (
      <table>
        <thead>
          <tr>
            <td className="underlined">Item</td>
            <td className="underlined">Image</td>
            <td className="underlined">Quantity</td>
            <td className="underlined">Price (ea.)</td>
            <td className="underlined">Price</td>
            <td className="underlined">Put back</td>
          </tr>
        </thead>
        <tbody>
          {cart &&
            cart.map((item, idx) => {
              const cartItem = this.props.products[item.id - 1]
              const name = cartItem.name
              const imgUrl = cartItem.imageUrl
              const qty = this.props.cart.content[idx].itemQuantity
              const price = this.props.cart.content[idx].price
              const adjPrice = price * qty

              return (
                <tr key={'cart-item-' + item.id}>
                  <td>{name}</td>
                  <td>
                    <img className="cart-thumbnail" src={imgUrl} />
                  </td>

                  <td>{qty}</td>

                  <td>{formatPrice(price)}</td>
                  <td>{formatPrice(adjPrice)}</td>
                  <td>
                    <Button
                      onClick={() => {
                        this.props.deleteThisItem(cartItem)
                      }}
                    >
                      <i className="material-icons">remove_shopping_cart</i>
                    </Button>
                  </td>
                </tr>
              )
            })}
        </tbody>
      </table>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteThisItem: item => {
      dispatch(deleteItem(item))
    }
  }
}

export default connect(null, mapDispatchToProps)(CartTable)
