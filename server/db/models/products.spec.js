/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const Product = db.model('product')

describe('Product model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('instanceMethods', () => {
    let product

    beforeEach(async () => {
      product = await Product.create({
        name: 'Dunk-a-Roos',
        price: 450,
        imageUrl: 'https://i.redd.it/3phyzhloyxbz.jpg',
        year: '1990',
        description:
          'Dunk-a-Roos are a snack food from Betty Crocker, first launched in 1990. It consists of a snack-sized package containing cookies and icing; the cookies are meant to be dunked into the icing before eating.',
        manufacturer: 'Betty Crocker',
        itemQuantity: 50
      })
    })

    it('requires an name', async () => {
      try {
        await product.validate()
      } catch (error) {
        expect(error.message).to.contain('name')
      }
    })

    it('requires an price', async () => {
      try {
        await product.validate()
      } catch (error) {
        expect(error.message).to.contain('price')
      }
    })

    it('expects price to be an integer', () => {
      expect(typeof product.itemQuantity).to.equal('number')
    })

    it('requires an quantity', async () => {
      try {
        await product.validate()
      } catch (error) {
        expect(error.message).to.contain('itemQuantity')
      }
    })

    it('expects quantity to be an integer', () => {
      expect(typeof product.itemQuantity).to.equal('number')
    })
  }) // end describe('instanceMethods')
}) // end describe('Product model')
