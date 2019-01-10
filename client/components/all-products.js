import React from 'react'
import Thumbnail from './thumbnail'
import {connect} from 'react-redux'
import {getProducts} from '../store/product'

class AllProducts extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.getProducts()
  }
  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.products.map(product => {
          return <Thumbnail product={product} key={product.id} />
        })}
      </div>
    )
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setupProducts: () => {
//       return dispatch(getProducts())
//     }
//   }
// }

const mapStateToProps = state => {
  return {products: state.product.products}
}

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(getProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
