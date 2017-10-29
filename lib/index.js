'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Store = require('electron-store');

var createElectronStorage = function createElectronStorage() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      electronStoreOpts = _ref.electronStoreOpts;

  var store = new Store(electronStoreOpts || {});

  return {
    getItem: function getItem(key) {
      return new Promise(function (resolve) {
        resolve(store.get(key));
      });
    },
    setItem: function setItem(key, item) {
      return new Promise(function (resolve) {
        resolve(store.set(key, item));
      });
    },
    removeItem: function removeItem(key) {
      return new Promise(function (resolve) {
        resolve(store.delete(key));
      });
    }
  };
};

exports.default = createElectronStorage;