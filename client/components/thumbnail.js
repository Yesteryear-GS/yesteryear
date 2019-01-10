import React from 'react'

const Thumbnail = props => {
  return (
    <div className="product">
      <img src={props.product.imageUrl} className="images" />
      <p>{props.product.name}</p>
      <p>Price: ${(props.product.price / 100).toFixed(2)}</p>
    </div>
  )
}

export default Thumbnail
