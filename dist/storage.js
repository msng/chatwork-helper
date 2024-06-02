"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const storage = {
    key: 'cf-memo',
    getKey: () => {
        return `${storage.key}:${location.pathname}`;
    },
    read: () => {
        return window.localStorage.getItem(storage.getKey());
    },
    write: (value) => {
        window.localStorage.setItem(storage.getKey(), value);
    }
};
exports.default = storage;
