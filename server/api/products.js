const router = require('express').Router()
const {Product} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll()
    res.json(products)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const productId = req.params.id
    const data = await Product.findById(productId)
    res.json(data)
  } catch (error) {
    next(error)
  }
})
