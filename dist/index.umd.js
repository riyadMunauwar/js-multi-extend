!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).jsMultiExtend={})}(this,(function(e){"use strict";function t(...e){!function(e){if(!Array.isArray(e)||0===e.length)throw new Error("At least one base class must be provided");e.forEach(((e,t)=>{if("function"!=typeof e||!e.prototype)throw new Error(`Invalid base class at index ${t}`)}))}(e);class t{constructor(...t){e.forEach((e=>{const o=new e(...t);Object.getOwnPropertyNames(o).forEach((e=>{"constructor"!==e&&(this[e]=o[e])}))}))}}return e.forEach((e=>{const o=e.prototype;Object.getOwnPropertyNames(o).forEach((e=>{"constructor"!==e&&(t.prototype[e]=o[e])})),Object.getOwnPropertyNames(e).forEach((o=>{"prototype"!==o&&"name"!==o&&"length"!==o&&(t[o]=e[o])}))})),t}e.Extender=t,e.default=t,Object.defineProperty(e,"__esModule",{value:!0})}));
