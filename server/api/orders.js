const router = require('express').Router()
const {Order} = require('../db/models')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
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
