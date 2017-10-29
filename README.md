# redux-persist-electron-storage

[![npm version](https://img.shields.io/npm/v/redux-persist-electron-storage.svg?style=flat-square)](https://www.npmjs.com/package/redux-persist-electron-storage)
[![npm downloads](https://img.shields.io/npm/dt/redux-persist-electron-storage.svg?style=flat-square)](https://www.npmjs.com/package/redux-persist-electron-storage)

Storage adaptor to use [electron-store](https://github.com/sindresorhus/electron-store) with [redux-persist](https://github.com/rt2zz/redux-persist)

## Installation
```bash
yarn add redux-persist-electron-storage
```

## Usage

To use redux-persist-electron-storage, configure redux-persist according to [its documentation](https://github.com/rt2zz/redux-persist#redux-persist).

Modify the `persistStore` call as follows:

```js
import createElectronStorage from "redux-persist-electron-storage";

// ...

persistStore(store, { storage: createElectronStorage(options) });
```

`options` is optional and can be used to pass `electron-store` options like below:

```js
createElectronStorage({
        electronStoreOpts: {
          encryptionKey: 'MY_ENCRYPTION_KEY'
        }
      })
```