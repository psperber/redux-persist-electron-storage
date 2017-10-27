const Store = require('electron-store');
const store = new Store({});

export default {
    getItem: (key) => {
        return new Promise((resolve) => {
            resolve(store.get(key));
        });
    },
    setItem: (key, item) => {
        return new Promise((resolve) => {
            resolve(store.set(key, item));
        });
    },
    removeItem: (key) => {
        return new Promise((resolve) => {
            resolve(store.delete(key));
        });
    },
};
