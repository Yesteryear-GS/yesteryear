import React from 'react'
import Button from '@material-ui/core/Button'

function formatPrice(priceInt) {
  return '$' + (priceInt / 100).toFixed(2)
}

const CartTable = props => {
  const {cart, products, isUser} = props

  if (!isUser) {
    cart.content = cart
  }
  console.log(cart.content)
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
        {cart.content.map((item, idx) => {
          const cartItem = products[item.id - 1]

          const name = cartItem.name
          const imgUrl = cartItem.imageUrl
          const qty = cart.content[idx].itemQuantity
          const price = cart.content[idx].price
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
                <Button>
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

export default CartTable
