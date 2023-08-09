(()=>{"use strict";const e="CAKE_SOLD",t="CAKE_RESTOCK",n="ICECREAM_SOLD",r="ICECREAM_RESTOCK",o={money:50},i={cakes:0},c={iceCreams:0};function u(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var a="function"==typeof Symbol&&Symbol.observable||"@@observable",f=function(){return Math.random().toString(36).substring(7).split("").join(".")},s={INIT:"@@redux/INIT"+f(),REPLACE:"@@redux/REPLACE"+f(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+f()}};const y=function e(t,n,r){var o;if("function"==typeof n&&"function"==typeof r||"function"==typeof r&&"function"==typeof arguments[3])throw new Error(u(0));if("function"==typeof n&&void 0===r&&(r=n,n=void 0),void 0!==r){if("function"!=typeof r)throw new Error(u(1));return r(e)(t,n)}if("function"!=typeof t)throw new Error(u(2));var i=t,c=n,f=[],y=f,l=!1;function d(){y===f&&(y=f.slice())}function m(){if(l)throw new Error(u(3));return c}function E(e){if("function"!=typeof e)throw new Error(u(4));if(l)throw new Error(u(5));var t=!0;return d(),y.push(e),function(){if(t){if(l)throw new Error(u(6));t=!1,d();var n=y.indexOf(e);y.splice(n,1),f=null}}}function p(e){if(!function(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}(e))throw new Error(u(7));if(void 0===e.type)throw new Error(u(8));if(l)throw new Error(u(9));try{l=!0,c=i(c,e)}finally{l=!1}for(var t=f=y,n=0;n<t.length;n++)(0,t[n])();return e}return p({type:s.INIT}),(o={dispatch:p,subscribe:E,getState:m,replaceReducer:function(e){if("function"!=typeof e)throw new Error(u(10));i=e,p({type:s.REPLACE})}})[a]=function(){var e,t=E;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new Error(u(11));function n(){e.next&&e.next(m())}return n(),{unsubscribe:t(n)}}})[a]=function(){return this},e},o}(function(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];"function"==typeof e[o]&&(n[o]=e[o])}var i,c=Object.keys(n);try{!function(e){Object.keys(e).forEach((function(t){var n=e[t];if(void 0===n(void 0,{type:s.INIT}))throw new Error(u(12));if(void 0===n(void 0,{type:s.PROBE_UNKNOWN_ACTION()}))throw new Error(u(13))}))}(n)}catch(e){i=e}return function(e,t){if(void 0===e&&(e={}),i)throw i;for(var r=!1,o={},a=0;a<c.length;a++){var f=c[a],s=n[f],y=e[f],l=s(y,t);if(void 0===l)throw t&&t.type,new Error(u(14));o[f]=l,r=r||l!==y}return(r=r||c.length!==Object.keys(e).length)?o:e}}({money:function(i=o,c){switch(c.type){case e:case n:return{...i,money:i.money+c.quantity*(c.type===e?5:3)};case t:case r:return{...i,money:i.money-3*c.quantity};default:return i}},cake:function(n=i,r){switch(r.type){case e:return{...n,cakes:n.cakes-r.quantity};case t:return{...n,cakes:n.cakes+r.quantity};default:return n}},iceCream:function(e=c,t){switch(t.type){case n:return{...e,iceCreams:e.iceCreams-t.quantity};case r:return{...e,iceCreams:e.iceCreams+t.quantity};default:return e}}}));function l(){const e=y.getState();document.getElementById("money").textContent=e.money.money,document.getElementById("cakes").textContent=e.cake.cakes,document.getElementById("iceCreams").textContent=e.iceCream.iceCreams}document.getElementById("sellCakeBtn").addEventListener("click",(function(){y.getState().cake.cakes>0?y.dispatch({type:e,quantity:1}):alert("No more cakes available!")})),document.getElementById("restockCakeBtn").addEventListener("click",(function(){y.getState().money.money>=15?y.dispatch({type:t,quantity:5}):alert("Not enough money available!")})),document.getElementById("sellIceCreamBtn").addEventListener("click",(function(){y.getState().iceCream.iceCreams>0?y.dispatch({type:n,quantity:1}):alert("No more iceCreams available!")})),document.getElementById("restockIceCreamBtn").addEventListener("click",(function(){y.getState().money.money>=15?y.dispatch({type:r,quantity:5}):alert("Not enough money available!")})),y.subscribe(l),l()})();