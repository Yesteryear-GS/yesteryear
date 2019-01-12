import React from 'react'

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
    </tr>
  )
}

export default CartTable
