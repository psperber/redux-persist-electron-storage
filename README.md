# redux-persist-electron-storage

[![npm version](https://img.shields.io/npm/v/redux-persist-electron-storage.svg?style=flat-square)](https://www.npmjs.com/package/redux-persist-electron-storage)
[![npm downloads](https://img.shields.io/npm/dt/redux-persist-electron-storage.svg?style=flat-square)](https://www.npmjs.com/package/redux-persist-electron-storage)
[![Build Status](https://travis-ci.org/psperber/redux-persist-electron-storage.svg?branch=master)](https://travis-ci.org/psperber/redux-persist-electron-storage)

Storage adaptor to use [electron-store](https://github.com/sindresorhus/electron-store) with [redux-persist](https://github.com/rt2zz/redux-persist)

## Installation
### npm
```bash
npm i -S electron-store redux-persist-electron-storage
```
### yarn
```bash
yarn add electron-store redux-persist-electron-storage
```

## Usage

To use redux-persist-electron-storage, configure redux-persist according to [its documentation](https://github.com/rt2zz/redux-persist#redux-persist).

Modify the classic redux-persist configuration as follows:

- Do **not** import `redux-persist/lib/storage` anymore, as we use an alternative storage.
- Import `redux-persist-electron-storage`:

```js
import createElectronStorage from "redux-persist-electron-storage";
```

- Modify the options for `persistReducer` in order to use the storage dedicated to Electron:

```js
const persistConfig = {
  key: 'root',
  storage: createElectronStorage()
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
```

You can either pass an instance of `electron-store` or pass options like below:

```js
const electronStore = new ElectronStore()
createElectronStorage({
  electronStore
})
```

```js
createElectronStorage({
  electronStoreOpts: {
    encryptionKey: 'MY_ENCRYPTION_KEY'
  }
})
```

**Hint**: The passed instance is preferred over passed options
