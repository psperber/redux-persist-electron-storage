// Type definitions for redux-persist-electron-storage 2.0.0
// Project: https://github.com/psperber/redux-persist-electron-storage
// Definitions by: Bob Matcuk <https://github.com/bmatcuk>
// TypeScript Version: 2.8

import ElectronStore = require("electron-store");

type GetConstructorArgument<C> = C extends { new(arg: infer A): any } ? A : never;

interface StorageOptions<T> {
  electronStore?: ElectronStore<T>;
  electronStoreOpts?: GetConstructorArgument<typeof ElectronStore>;
}

interface ElectronStorage<T> {
  getItem<K extends keyof T>(key: K): Promise<T[K]>;
  getItem(key: string): Promise<any>;

  setItem<K extends keyof T>(key: K, item: T[K]): Promise<void>;
  setItem(key: string, item: any): Promise<void>;

  removeItem<K extends keyof T>(key: K): Promise<void>;
  removeItem(key: string): Promise<void>;
}

declare function createElectronStorage<T = {}>(options?: StorageOptions<T>): ElectronStorage<T>;

export = createElectronStorage;
