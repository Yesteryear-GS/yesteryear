const router = require('express').Router()
const session = require('express-session')
module.exports = router

router.use(
  session({
    secret: 'Something',
    resave: false,
    saveUninitialized: true
  })
)

router.use('/users', require('./users'))
router.use('/products', require('./products'))
router.use('/orders', require('./orders'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
