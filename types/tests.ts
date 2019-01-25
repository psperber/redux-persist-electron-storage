import createElectronStorage = require('..')
import ElectronStore = require('electron-store')

createElectronStorage({
  electronStore: new ElectronStore()
})

createElectronStorage({
  electronStoreOpts: {
    defaults: {},
    name: 'myConfiguration',
    cwd: 'unicorn'
  }
})

const storage = createElectronStorage()
storage.getItem('foo')
storage.setItem('foo', 'bar')
storage.removeItem('foo')

interface SampleStorage {
  enabled: boolean
  interval: number
}

const typedStorage = createElectronStorage<SampleStorage>()
const enabled: Promise<boolean> = typedStorage.getItem('enabled')
const interval: Promise<number> = typedStorage.getItem('interval')
