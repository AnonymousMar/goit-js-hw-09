var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var i=n("iQIUW");function r(e,t){const o=Math.random()>.3;return new Promise(((n,i)=>{o?n({position:e,delay:t}):i({position:e,delay:t})}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();let{elements:{delay:t,step:o,amount:n}}=e.currentTarget;t=Number(t.value),o=Number(o.value),n=Number(n.value);for(let e=1;e<=n;e+=1)r(e,t).then((({position:e,delay:t})=>{setTimeout((()=>{i.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`,{useIcon:!1})}),t)})).catch((({position:e,delay:t})=>{setTimeout((()=>{i.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`,{useIcon:!1})}),t)})),t+=o}));
//# sourceMappingURL=03-promises.054793be.js.map
