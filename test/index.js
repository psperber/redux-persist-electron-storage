'use strict'

const createElectronStorage = require('../lib/index')
const assert = require('chai').assert

describe('Initialisation', function () {
  it('no args', function () {
    const storage = createElectronStorage()
    assert.isObject(storage, 'created storage is not an object')
  })

  describe('args', function () {
    it('encryptionKey', function () {
      const storage = createElectronStorage({
        electronStoreOpts: {
          encryptionKey: 'a'
        }
      })
      assert.isObject(storage, 'created storage is not an object')
    })

    it('electronStore', function () {
      const ElectronStore = require('electron-store')
      const electronStore = new ElectronStore()
      const storage = createElectronStorage({ electronStore })
      assert.isObject(storage, 'created storage is not an object')
    })
  })
})

describe('Functions', function () {
  const storage = createElectronStorage()

  it('setItem', function () {
    return storage.setItem('key', 'value')
  })

  it('getItem', function (done) {
    storage.getItem('key')
      .then(function (value) {
        assert.equal(value, 'value')
        done()
      })
  })

  it('removeItem', function (done) {
    storage.removeItem('key')
      .then(storage.getItem('key'))
      .then(function (value) {
        assert.isUndefined(value)
        done()
      })
  })
})
