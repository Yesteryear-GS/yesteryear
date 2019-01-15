import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import {getProducts} from '../store/product'

class OrderHistory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      orderHistory: []
    }
  }

  async componentDidMount() {
    const {data} = await axios.get(
      '/api/users/' + this.props.userId + '/order-history'
    )
    this.setState({orderHistory: data})
    this.props.getProductList()
  }

  formatPrice(price) {
    return `$${(price / 100).toFixed(2)}`
  }

  render() {
    return (
      <>
        <h2>Your Completed Orders:</h2>
        {this.state.orderHistory.map(order => {
          const orderInfo = order.content
          const {products} = this.props
          console.log(orderInfo)
          return (
            <div key={'order-' + order.id}>
              <h3 className="underlined">
                {new Date(order.updatedAt).toLocaleString()}
              </h3>
              <table>
                <thead>
                  <tr className="underlined">
                    <td>Name</td>
                    <td>Qty</td>
                    <td>Price (ea.)</td>
                    <td>Price</td>
                  </tr>
                </thead>
                <tbody>
                  {orderInfo.map(item => {
                    const qty = item.itemQuantity

                    return (
                      <tr key={'order-' + order.id + '-item-' + item.id}>
                        <td>{products[0] && products[item.id - 1].name}</td>
                        <td>{qty}</td>
                        <td>{this.formatPrice(item.price)}</td>
                        <td>{this.formatPrice(item.price * qty)}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
              <p>
                Total price:{' '}
                {this.formatPrice(
                  orderInfo.reduce((accum, currentItem) => {
                    return accum + currentItem.price * currentItem.itemQuantity
                  }, 0)
                )}
              </p>
            </div>
          )
        })}
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    userId: state.user.id,
    products: state.product.products
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProductList() {
      dispatch(getProducts())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistory)
