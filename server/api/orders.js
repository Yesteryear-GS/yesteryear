const router = require('express').Router()
const {Order} = require('../db/models')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    console.log('look here', req.body)
    const orders = await Order.findAll()
    res.json(orders)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const product = await Order.findById(req.params.id)
    res.json(product)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    await Order.update(
      {isCart: false},
      {
        where: {
          userId: req.body.userId,
          isCart: true
        }
      }
    )
  } catch (error) {
    next(error)
  }
})
