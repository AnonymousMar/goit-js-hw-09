function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o);var l=o("7Y9D8");function a(e,t){Math.random()>.3?resolve(data):reject(data)}document.querySelector("form").addEventListener("submit",(function(t){t.preventDefault();const n=t.currentTarget.elements;let r=parseInt(n.delay.value);const o=parseInt(n.step.value),i=parseInt(n.amount.value);for(let t=1;t<=i;t+=1)a(t,r).then((({position:t,delay:n})=>{e(l).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(l).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)})),r+=o})),delay;
//# sourceMappingURL=03-promises.2f8481b6.js.map
