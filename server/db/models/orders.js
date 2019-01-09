const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  isCart: {
    type: Sequelize.BOOLEAN
  },
  content: {
    type: Sequelize.ARRAY(Sequelize.JSON)
  }
})

module.exports = Order
