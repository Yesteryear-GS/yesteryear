const router = require('express').Router()
const {User, Order} = require('../db/models')
module.exports = router

/*
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
*/

const isAuthenticated = (req, res, next) => {
  if (req.user.dataValues.id === Number(req.params.id)) {
    return next()
  }
  res.redirect('/')
}

router.get('/:id', isAuthenticated, async (req, res, next) => {
  try {
    const userId = req.params.id
    const data = await User.findById(userId)
    res.json(data)
  } catch (error) {
    next(error)
  }
})

router.get('/:id/orders', isAuthenticated, async (req, res, next) => {
  try {
    const userId = req.params.id
    const userOrders = await Order.findAll({where: {userId: userId}})
    res.json(userOrders)
  } catch (error) {
    next(error)
  }
})

router.get('/:id/cart', isAuthenticated, async (req, res, next) => {
  try {
    const userId = req.session.passport.user
    const userCart = await Order.findOrCreate({
      where: {
        userId,
        isCart: true
      },
      defaults: {
        content: []
      }
    })
    res.json(userCart)
  } catch (error) {
    next(error)
  }
})

router.get('/:id/order-history', isAuthenticated, async (req, res, next) => {
  try {
    const userId = req.session.passport.user
    const orderHistory = await Order.findAll({
      where: {
        userId,
        isCart: false
      }
    })
    res.send(orderHistory)
  } catch (error) {
    next(error)
  }
})

router.put('/:id/cart', isAuthenticated, async (req, res, next) => {
  try {
    const userId = req.session.passport.user
    const currentCart = await Order.update(
      {content: req.body.content},
      {
        where: {
          userId,
          isCart: true
        }
      }
    )
    res.send(currentCart)
  } catch (error) {
    next(error)
  }
})
