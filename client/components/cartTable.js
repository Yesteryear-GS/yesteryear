import React, {Component} from 'react'
import Button from '@material-ui/core/Button'
import {deleteItem} from '../store/cart'
import {connect} from 'react-redux'

function formatPrice(priceInt) {
  return '$' + (priceInt / 100).toFixed(2)
}

// const CartTable = props => {
//   console.log('PROPS IN TABLE', props, 'cartcontent', props.cart.content)
//   const {cart, products} = props

//   return (
//     <table>
//       <thead>
//         <tr>
//           <td className="underlined">Item</td>
//           <td className="underlined">Image</td>
//           <td className="underlined">Quantity</td>
//           <td className="underlined">Price (ea.)</td>
//           <td className="underlined">Price</td>
//           <td className="underlined">Put back</td>
//         </tr>
//       </thead>
//       <tbody>
//         {cart &&
//           cart.content &&
//           cart.content.map((item, idx) => {
//             const cartItem = products[item.id - 1]
//             const id = cartItem.id
//             const name = cartItem.name
//             const imgUrl = cartItem.imageUrl
//             const qty = cart.content[idx].itemQuantity
//             const price = cart.content[idx].price
//             const adjPrice = price * qty

//             return (
//               <tr key={'cart-item-' + item.id}>
//                 <td>{name}</td>
//                 <td>
//                   <img className="cart-thumbnail" src={imgUrl} />
//                 </td>

//                 <td>{qty}</td>

//                 <td>{formatPrice(price)}</td>
//                 <td>{formatPrice(adjPrice)}</td>
//                 <td>
//                   <Button
//                     onClick={() => {
//                       props.deleteThisItem(id)
//                       console.log('deleted')
//                     }}
//                   >
//                     <i className="material-icons">remove_shopping_cart</i>
//                   </Button>
//                 </td>
//               </tr>
//             )
//           })}
//       </tbody>
//     </table>
//   )
// }

class CartTable extends Component {
  constructor(props) {
    super()
    console.log('PPPPROPS', props)
  }

  render() {
    let cart = this.props.cart.content
    console.log('cart in TABLE', cart)
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
              const id = cartItem.id
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
