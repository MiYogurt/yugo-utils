"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ready() {
    let go, error;
    const shouldWait = new Promise((res, rej) => {
        ;
        [go, error] = [res, rej];
    });
    return {
        go,
        error,
        shouldWait
    };
}
exports.ready = ready;
function install() {
    if (typeof Promise !== 'undefined') {
        Promise.ready = ready;
    }
}
exports.default = install;
