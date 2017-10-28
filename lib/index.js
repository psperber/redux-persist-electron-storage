'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Store = require('electron-store');
var store = new Store({});

exports.default = {
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