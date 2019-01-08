const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  price: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false
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
    allowNull: false
  },
  manufacturer: {
    type: Sequelize.STRING
  }
})

module.exports = Product