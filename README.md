# redux-persist-electron-storage

[![npm version](https://img.shields.io/npm/v/redux-persist-electron-storage.svg?style=flat-square)](https://www.npmjs.com/package/redux-persist-electron-storage)
[![npm downloads](https://img.shields.io/npm/dt/redux-persist-electron-storage.svg?style=flat-square)](https://www.npmjs.com/package/redux-persist-electron-storage)
[![Build Status](https://travis-ci.org/psperber/redux-persist-electron-storage.svg?branch=master)](https://travis-ci.org/psperber/redux-persist-electron-storage)

Storage adaptor to use [electron-store](https://github.com/sindresorhus/electron-store) with [redux-persist](https://github.com/rt2zz/redux-persist)

## Installation
```bash
yarn add redux-persist-electron-storage
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

You can pass options to `electron-store` like below:

```js
createElectronStorage({
  electronStoreOpts: {
    encryptionKey: 'MY_ENCRYPTION_KEY'
  }
})
```
