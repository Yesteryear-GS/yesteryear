import React from 'react'
import Button from '@material-ui/core/Button'

const Thumbnail = props => {
  return (
    <div className="product-thumb">
      <img src={props.product.imageUrl} className="images" />
      <p>{props.product.name}</p>
      <p>Price: ${(props.product.price / 100).toFixed(2)}</p>
      <Button>Add to cart</Button>
    </div>
  )
}

export default Thumbnail
