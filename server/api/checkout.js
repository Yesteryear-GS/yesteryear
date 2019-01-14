const router = require('express').Router()

router.get('/', (req, res) => res.render('index.pug', {keyPublishable}))

router.post('/charge', (req, res) => {
  let amount = 500

  stripe.customers
    .create({
      email: req.body.stripeEmail,
      source: req.body.stripeToken
    })
    .then(customer =>
      stripe.charges.create({
        amount,
        description: 'Sample Charge',
        currency: 'usd',
        customer: customer.id
      })
    )
    .then(charge => res.render('charge.pug'))
})

module.exports = router
