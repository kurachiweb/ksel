/*!
    ksel.js v0.1
    (c) 2020 Kurachi Shunsuke
    https://twitter.com/KurachiWeb
*/

import Ksel from './methods';

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(function () {
            return factory(root);
        });
    } else if (typeof exports === 'object') {
        module.exports = factory;
    } else {
        root.ksel = factory(root);
    }
})(typeof window !== 'undefined' ? window : this, function (root) {
    'use strict';
    return new Ksel();
});