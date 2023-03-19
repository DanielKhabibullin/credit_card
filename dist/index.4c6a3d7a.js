function e(e,t){var i=function(e){for(var t=e.split(/([.#])/),i="",n="",r=1;r<t.length;r+=2)switch(t[r]){case".":i+=" "+t[r+1];break;case"#":n=t[r+1]}return{className:i.trim(),tag:t[0]||"div",id:n}}(e),n=i.tag,r=i.id,o=i.className,l=t?document.createElementNS(t,n):document.createElement(n);return r&&(l.id=r),o&&(t?l.setAttribute("class",o):l.className=o),l}function t(e,t){var n=p(e),r=p(t);return t===r&&r.__redom_view&&(t=r.__redom_view),r.parentNode&&(i(t,r,n),n.removeChild(r)),t}function i(e,t,i){var r=t.__redom_lifecycle;if(n(r))t.__redom_lifecycle={};else{var o=i;for(t.__redom_mounted&&a(t,"onunmount");o;){var l=o.__redom_lifecycle||{};for(var u in r)l[u]&&(l[u]-=r[u]);n(l)&&(o.__redom_lifecycle=null),o=o.parentNode}}}function n(e){if(null==e)return!0;for(var t in e)if(e[t])return!1;return!0}var r=["onmount","onremount","onunmount"],o="undefined"!=typeof window&&"ShadowRoot"in window;function l(e,t,n,l){var u=p(e),s=p(t);t===s&&s.__redom_view&&(t=s.__redom_view),t!==s&&(s.__redom_view=t);var _=s.__redom_mounted,f=s.parentNode;if(_&&f!==u&&i(0,s,f),null!=n)if(l){var d=p(n);d.__redom_mounted&&a(d,"onunmount"),u.replaceChild(s,d)}else u.insertBefore(s,p(n));else u.appendChild(s);return function(e,t,i,n){for(var l=t.__redom_lifecycle||(t.__redom_lifecycle={}),u=i===n,s=!1,_=0,f=r;_<f.length;_+=1){var d=f[_];u||e!==t&&d in e&&(l[d]=(l[d]||0)+1),l[d]&&(s=!0)}if(!s)return void(t.__redom_lifecycle={});var v=i,c=!1;(u||v&&v.__redom_mounted)&&(a(t,u?"onremount":"onmount"),c=!0);for(;v;){var h=v.parentNode,p=v.__redom_lifecycle||(v.__redom_lifecycle={});for(var m in l)p[m]=(p[m]||0)+l[m];if(c)break;(v.nodeType===Node.DOCUMENT_NODE||o&&v instanceof ShadowRoot||h&&h.__redom_mounted)&&(a(v,u?"onremount":"onmount"),c=!0),v=h}}(t,s,u,f),t}function a(e,t){"onmount"===t||"onremount"===t?e.__redom_mounted=!0:"onunmount"===t&&(e.__redom_mounted=!1);var i=e.__redom_lifecycle;if(i){var n=e.__redom_view,r=0;for(var o in n&&n[t]&&n[t](),i)o&&r++;if(r)for(var l=e.firstChild;l;){var u=l.nextSibling;a(l,t),l=u}}}function u(e,t,i){e.style[t]=null==i?"":i}var s="http://www.w3.org/1999/xlink";function _(e,t,i,n){var r=p(e);if("object"==typeof t)for(var o in t)_(r,o,t[o],n);else{var l=r instanceof SVGElement,a="function"==typeof i;if("style"===t&&"object"==typeof i)!function(e,t,i){var n=p(e);if("object"==typeof t)for(var r in t)u(n,r,t[r]);else u(n,t,i)}(r,i);else if(l&&a)r[t]=i;else if("dataset"===t)d(r,i);else if(l||!(t in r)&&!a||"list"===t){if(l&&"xlink"===t)return void f(r,i);n&&"class"===t&&(i=r.className+" "+i),null==i?r.removeAttribute(t):r.setAttribute(t,i)}else r[t]=i}}function f(e,t,i){if("object"==typeof t)for(var n in t)f(e,n,t[n]);else null!=i?e.setAttributeNS(s,t,i):e.removeAttributeNS(s,t,i)}function d(e,t,i){if("object"==typeof t)for(var n in t)d(e,n,t[n]);else null!=i?e.dataset[t]=i:delete e.dataset[t]}function v(e){return document.createTextNode(null!=e?e:"")}function c(e,t,i){for(var n=0,r=t;n<r.length;n+=1){var o=r[n];if(0===o||o){var a=typeof o;"function"===a?o(e):"string"===a||"number"===a?e.appendChild(v(o)):m(p(o))?l(e,o):o.length?c(e,o,i):"object"===a&&_(e,o,null,i)}}}function h(e){return"string"==typeof e?w(e):p(e)}function p(e){return e.nodeType&&e||!e.el&&e||p(e.el)}function m(e){return e&&e.nodeType}function w(t){for(var i,n=[],r=arguments.length-1;r-- >0;)n[r]=arguments[r+1];var o=typeof t;if("string"===o)i=e(t);else{if("function"!==o)throw new Error("At least one argument required");var l=t;i=new(Function.prototype.bind.apply(l,[null].concat(n)))}return c(p(i),n,!0),i}var b=w;function y(e){for(var i=[],n=arguments.length-1;n-- >0;)i[n]=arguments[n+1];for(var r=g(e,i,p(e).firstChild);r;){var o=r.nextSibling;t(e,r),r=o}}function g(e,t,i){for(var n=i,r=Array(t.length),o=0;o<t.length;o++)r[o]=t[o]&&p(t[o]);for(var a=0;a<t.length;a++){var u=t[a];if(u){var s=r[a];if(s!==n)if(m(s)){var _=n&&n.nextSibling,f=null!=u.__redom_index&&_===r[a+1];l(e,u,n,f),f&&(n=_)}else null!=u.length&&(n=g(e,u,n));else n=n.nextSibling}}return n}w.extend=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return w.bind.apply(w,[this].concat(e))};var x=function(e,t,i){this.View=e,this.initData=i,this.oldLookup={},this.lookup={},this.oldViews=[],this.views=[],null!=t&&(this.key="function"==typeof t?t:function(e){return function(t){return t[e]}}(t))};x.prototype.update=function(e,t){for(var i=this,n=i.View,r=i.key,o=i.initData,l=null!=r,a=this.lookup,u={},s=Array(e.length),_=this.views,f=0;f<e.length;f++){var d=e[f],v=void 0;if(l){var c=r(d);v=a[c]||new n(o,d,f,e),u[c]=v,v.__redom_id=c}else v=_[f]||new n(o,d,f,e);v.update&&v.update(d,f,e,t),p(v.el).__redom_view=v,s[f]=v}this.oldViews=_,this.views=s,this.oldLookup=a,this.lookup=u};var N=function(e,t,i,n){this.View=t,this.initData=n,this.views=[],this.pool=new x(t,i,n),this.el=h(e),this.keySet=null!=i};N.prototype.update=function(e,i){void 0===e&&(e=[]);var n=this.keySet,r=this.views;this.pool.update(e,i);var o=this.pool,l=o.views,a=o.lookup;if(n)for(var u=0;u<r.length;u++){var s=r[u];null==a[s.__redom_id]&&(s.__redom_index=null,t(this,s))}for(var _=0;_<l.length;_++){l[_].__redom_index=_}y(this,l),n&&(this.lookup=a),this.views=l},N.extend=function(e,t,i,n){return N.bind(N,e,t,i,n)},N.extend;var C=function(e,t){this.el=v(""),this.visible=!1,this.view=null,this._placeholder=this.el,e instanceof Node?this._el=e:e.el instanceof Node?(this._el=e,this.view=e):this._View=e,this._initData=t};C.prototype.update=function(e,i){var n=this._placeholder,r=this.el.parentNode;if(e){if(!this.visible)if(this._el)l(r,this._el,n),t(r,n),this.el=p(this._el),this.visible=e;else{var o=new(0,this._View)(this._initData);this.el=p(o),this.view=o,l(r,o,n),t(r,n)}this.view&&this.view.update&&this.view.update(i)}else if(this.visible){if(this._el)return l(r,n,this._el),t(r,this._el),this.el=n,void(this.visible=e);l(r,n,this.view),t(r,this.view),this.el=n,this.view=null}this.visible=e};var k=function(e,t,i){this.el=h(e),this.Views=t,this.initData=i};k.prototype.update=function(e,t){if(e!==this.route){var i=this.Views[e];this.route=e,i&&(i instanceof Node||i.el instanceof Node)?this.view=i:this.view=i&&new i(this.initData,t),y(this.el,[this.view])}this.view&&this.view.update&&this.view.update(t,e)};var S="http://www.w3.org/2000/svg";function D(t){for(var i,n=[],r=arguments.length-1;r-- >0;)n[r]=arguments[r+1];var o=typeof t;if("string"===o)i=e(t,S);else{if("function"!==o)throw new Error("At least one argument required");var l=t;i=new(Function.prototype.bind.apply(l,[null].concat(n)))}return c(p(i),n,!0),i}D.extend=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return D.bind.apply(D,[this].concat(e))},D.ns=S;y(document.body,(()=>{const e=b("input.input input__holder",{type:"text"}),t=b("input.input input__number",{maxlength:"19"}),i=b("input.input input__date",{type:"text",maxlength:"5"}),n=b("input.input input__cvv",{type:"text"}),r=b("div.form__input-wrap form__input-wrap_holder",b("label.form__label form__holder-label","Card Holder"),e),o=b("div.form__input-wrap form__input-wrap_holder",b("label.form__label form__number-label","Card Number"),t),l=b("div.form__input-wrap form__input-wrap_holder",b("label.form__label form__date-label","Card Expiry"),i),a=b("div.form__input-wrap form__input-wrap_cvv",b("label.form__label form__cvv-label","CVV"),n),u=b("button.form__button","CHECK OUT"),s=b("form.form#form",{action:"#"},r,o,l,a,u),_=b("span.card__name","John Doe"),f=b("span.card__date","MM/YY"),d=b("span.card__number","xxxx xxxx xxxx xxxx"),v=b("div.credit-card",d,b("div.card__personal",_,f)),c=b("div.card",b("p.secure","Secure Checkout"),v,s);return e.addEventListener("input",(e=>{_.textContent=e.target.value})),t.addEventListener("input",(e=>{const t=e.target.value;e.target.value=t.replace(/\D/g,"").replace(/(.{4})/g,"$1 ").trim(),d.textContent=e.target.value})),i.addEventListener("input",(e=>{const t=e.target.value;e.target.value=t.replace(/\D/g,"").replace(/^(\d{2})(\d)/g,"$1/$2").trim(),f.textContent=e.target.value})),b("div.wrapper",c)})());
//# sourceMappingURL=index.4c6a3d7a.js.map
