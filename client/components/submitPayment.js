import React from 'react'
import axios from 'axios'
import store from '../store'
import removeCart from '../store/cart'
import {connect} from 'react-redux'

class SubmitPayment extends React.Component {
  constructor(props) {
    super(props)
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler = async cart => {
    try {
      cart.preventDefault()
      if (this.props.user) {
        const {data} = await axios.post('/api/orders', this.props.cart)
        store.dispatch(removeCart())
      } else {
        localStorage.removeItem('cart')
      }
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    return (
      <form action="/charge" method="post" id="payment-form">
        <div className="form-row">
          <div className="left-half">
            <label htmlFor="card-number" className="form-label">
              Credit or debit card number:{' '}
            </label>
          </div>
          <div className="right-half">
            <input name="card-number" className="card-input" />
          </div>
        </div>

        <div className="form-row">
          <div className="left-half">
            <label htmlFor="card-name" className="form-label">
              Name on card:{' '}
            </label>
          </div>
          <div className="right-half">
            <input name="card-name" className="card-input" />
          </div>
        </div>

        <div className="form-row">
          <div className="left-half">
            <label htmlFor="card-exp-year" className="form-label">
              Expiration Date (MM/YY):{' '}
            </label>
          </div>
          <div className="right-half">
            <input name="card-exp-month" className="card-input-short" />

            <p id="slash-for-date">/</p>

            <input name="card-exp-year" className="card-input-short" />
          </div>
        </div>

        <div className="form-row">
          <div className="left-half">
            <label htmlFor="card-cvv" className="form-label">
              CVV:{' '}
            </label>
          </div>
          <div className="right-half">
            <input name="card-cvv" className="card-input-short" />
          </div>
        </div>

        <div className="form-row">

          <button type="submit" id="submit-payment" onClick={this.clickHandler}>

            Submit Payment
          </button>
        </div>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.id
  }
}

export default connect(mapStateToProps)(SubmitPayment)
