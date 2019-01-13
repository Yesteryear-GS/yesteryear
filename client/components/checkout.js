import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'

class Checkout extends Component {
  async componentDidMount() {
    const data = await axios.get(
      '/api/users/' + this.props.currentUser + '/cart'
    )
  }

  render() {
    return (
      <>
        <h2>Checkout</h2>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.user.id
  }
}

export default connect(mapStateToProps)(Checkout)
