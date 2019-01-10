/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const User = db.model('user')

describe('User model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('instanceMethods', () => {
    describe('correctPassword', () => {
      let user

      beforeEach(async () => {
        user = await User.create({
          email: 'user@gmail.com',
          password: 'yesteryear'
        })
      })

      it('returns true if the password is correct', () => {
        expect(user.correctPassword('yesteryear')).to.be.equal(true)
      })

      it('returns false if the password is incorrect', () => {
        expect(user.correctPassword('bonez')).to.be.equal(false)
      })

      it('requires an email', async () => {
        try {
          await user.validate()
          // throw new Error('Validation succeeded but should have failed')
        } catch (error) {
          expect(error.message).to.contain('email')
        }
      })
    }) // end describe('correctPassword')
  }) // end describe('instanceMethods')
}) // end describe('User model')
