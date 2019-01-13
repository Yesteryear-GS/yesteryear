import React from 'react'
import Button from '@material-ui/core/Button'

const CartTable = props => {
  const {name, imgUrl, qty, price, adjPrice, formatPrice} = props

  return (
    <tr>
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
}

export default CartTable
