const router = require('express').Router()
const {Products} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const products = await Products.findAll()
    res.json(products)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const productId = req.params.id
    const data = await Products.findById(productId)
    res.json(data)
  } catch (error) {
    next(error)
  }
})
