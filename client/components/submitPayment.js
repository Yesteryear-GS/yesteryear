import React from 'react'
import axios from 'axios'
import store from '../store'
import removeCart from '../store/cart'

class SubmitPayment extends React.Component {
  constructor(props) {
    super(props)
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler = async cart => {
    try {
      cart.preventDefault()
      const {data} = await axios.post('/api/orders', this.props.cart)
      store.dispatch(removeCart())
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    return (
      <form action="/charge" method="post" id="payment-form">
        <div className="form-row">
          <div>
            <label htmlFor="card-number">Credit or debit card number</label>
            <input name="card-number" />
          </div>

          <div id="card-element">
            <label htmlFor="card-name">Name on card</label>
            <input name="card-name" />
          </div>
          <div id="card-element">
            <label htmlFor="card-exp-month">Expiration Month</label>
            <input name="card-exp-month" />
          </div>
          <div id="card-element">
            <label htmlFor="card-exp-year">Expiration Year</label>
            <input name="card-exp-year" />
          </div>
          <div id="card-element">
            <label htmlFor="card-cvv">CVV</label>
            <input name="card-cvv" />
          </div>

          <div id="card-errors" role="alert" />
        </div>
        <button type="submit" onClick={this.clickHandler}>
          Submit Payment
        </button>
      </form>
    )
  }
}

export default SubmitPayment
