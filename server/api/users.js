const router = require('express').Router()
const {User, Order} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const userId = req.params.id
    const data = await User.findById(userId)
    res.json(data)
  } catch (error) {
    next(error)
  }
})

router.get('/:id/orders', async (req, res, next) => {
  try {
    const userId = req.params.id
    const userOrders = await Order.findAll({where: {userId: userId}})
    res.json(userOrders)
  } catch (error) {
    next(error)
  }
})

router.get('/:id/cart', async (req, res, next) => {
  try {
    const userId = req.params.id
    const userCart = await Order.findAll({
      where: {
        userId,
        isCart: true
      }
    })
    res.json(userCart)
  } catch (error) {
    next(error)
  }
})
