import React from 'react'
import ReactDOM from 'react-dom'
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
    console.log(userId)
    if (userId) {
      const {data} = await axios.get('api/users/' + userId + '/cart')
      console.log('look here', data)
      data.content.forEach(item => {
        if (item.id === this.props.product.id) {
          item.itemQuantity++
        } else {
          data.content.push('hi')
        }
      })
      console.log('new', data)
      // if (data.id === this.props.product.id)
      // const newCart = data.content.push(
      //   {
      //     id: this.props.product.id,
      //     itemQuantity: 1
      //   }
      // )
    }
  }

  render() {
    return (
      <div className="product">
        <img src={this.props.product.imageUrl} className="images" />
        <p>{this.props.product.name}</p>
        <p>Price: ${(this.props.product.price / 100).toFixed(2)}</p>
        <Button onClick={this.clickHandler}>Add to cart</Button>
      </div>
    )
  }
}

export default Thumbnail
