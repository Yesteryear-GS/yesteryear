import React from 'react'

export const SubmitPayment = props => {
  return (
    <form action="/charge" method="post" id="payment-form">
      <div className="form-row">
        <label htmlFor="card-element">Credit or debit card</label>
        <div id="card-element">A Stripe Element will be inserted here</div>
        <div id="card-errors" role="alert" />
      </div>
      <button type="submit">Submit Payment</button>
    </form>
  )
}

export default SubmitPayment
