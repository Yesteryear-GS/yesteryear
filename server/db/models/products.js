const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      isNumeric: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING
  },
  year: {
    type: Sequelize.STRING
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  itemQuantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      isNumeric: true
    }
  },
  manufacturer: {
    type: Sequelize.STRING
  },
  categories: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  }
})

module.exports = Product
