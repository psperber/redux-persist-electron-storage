const Store = require('electron-store')

const createElectronStorage = ({electronStoreOpts} = {}) => {
  const store = new Store(electronStoreOpts || {})

  return {
    getItem: (key) => {
      return new Promise((resolve) => {
        resolve(store.get(key))
      })
    },
    setItem: (key, item) => {
      return new Promise((resolve) => {
        resolve(store.set(key, item))
      })
    },
    removeItem: (key) => {
      return new Promise((resolve) => {
        resolve(store.delete(key))
      })
    }
  }
}

export default createElectronStorage
