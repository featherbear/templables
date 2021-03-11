var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function l(t,n,e,o){return t[1]&&o?function(t,n){for(const e in n)t[e]=n[e];return t}(e.ctx.slice(),t[1](o(n))):e.ctx}function i(t,n,e,o,r,c,i){const u=function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(n,o,r,c);if(u){const r=l(n,e,o,i);t.p(r,u)}}function u(t,n){t.appendChild(n)}function s(t,n,e){t.insertBefore(n,e||null)}function a(t){t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function p(){return d(" ")}function h(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function $(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}let m;function g(t){m=t}function b(){if(!m)throw new Error("Function called outside component initialization");return m}const y=[],v=[],k=[],x=[],_=Promise.resolve();let w=!1;function E(t){k.push(t)}let j=!1;const C=new Set;function q(){if(!j){j=!0;do{for(let t=0;t<y.length;t+=1){const n=y[t];g(n),A(n.$$)}for(g(null),y.length=0;v.length;)v.pop()();for(let t=0;t<k.length;t+=1){const n=k[t];C.has(n)||(C.add(n),n())}k.length=0}while(y.length);for(;x.length;)x.pop()();w=!1,j=!1,C.clear()}}function A(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(E)}}const O=new Set;let T;function N(){T={r:0,c:[],p:T}}function M(){T.r||o(T.c),T=T.p}function B(t,n){t&&t.i&&(O.delete(t),t.i(n))}function D(t,n,e,o){if(t&&t.o){if(O.has(t))return;O.add(t),T.c.push((()=>{O.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function F(t,n){const e=n.token={};function o(t,o,r,c){if(n.token!==e)return;n.resolved=c;let l=n.ctx;void 0!==r&&(l=l.slice(),l[r]=c);const i=t&&(n.current=t)(l);let u=!1;n.block&&(n.blocks?n.blocks.forEach(((t,e)=>{e!==o&&t&&(N(),D(t,1,1,(()=>{n.blocks[e]===t&&(n.blocks[e]=null)})),M())})):n.block.d(1),i.c(),B(i,1),i.m(n.mount(),n.anchor),u=!0),n.block=i,n.blocks&&(n.blocks[o]=i),u&&q()}if((r=t)&&"object"==typeof r&&"function"==typeof r.then){const e=b();if(t.then((t=>{g(e),o(n.then,1,n.value,t),g(null)}),(t=>{if(g(e),o(n.catch,2,n.error,t),g(null),!n.hasCatch)throw t})),n.current!==n.pending)return o(n.pending,0),!0}else{if(n.current!==n.then)return o(n.then,1,n.value,t),!0;n.resolved=t}var r}function L(t){t&&t.c()}function P(t,e,c,l){const{fragment:i,on_mount:u,on_destroy:s,after_update:a}=t.$$;i&&i.m(e,c),l||E((()=>{const e=u.map(n).filter(r);s?s.push(...e):o(e),t.$$.on_mount=[]})),a.forEach(E)}function S(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function z(t,n){-1===t.$$.dirty[0]&&(y.push(t),w||(w=!0,_.then(q)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function H(n,r,c,l,i,u,s=[-1]){const f=m;g(n);const d=n.$$={fragment:null,ctx:null,props:u,update:t,not_equal:i,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:e(),dirty:s,skip_bound:!1};let p=!1;if(d.ctx=c?c(n,r.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return d.ctx&&i(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),p&&z(n,t)),e})):[],d.update(),p=!0,o(d.before_update),d.fragment=!!l&&l(d.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);d.fragment&&d.fragment.l(t),t.forEach(a)}else d.fragment&&d.fragment.c();r.intro&&B(n.$$.fragment),P(n,r.target,r.anchor,r.customElement),q()}g(f)}class V{$destroy(){S(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function G(n){let e,o,r,c,l,i,m=n[0].title+"",g=n[0].description+"";return{c(){e=f("card"),o=f("h2"),r=d(m),c=p(),l=f("p"),i=d(g),h(o,"class","svelte-6bv822"),h(l,"class","svelte-6bv822"),h(e,"class","svelte-6bv822")},m(t,n){s(t,e,n),u(e,o),u(o,r),u(e,c),u(e,l),u(l,i)},p(t,[n]){1&n&&m!==(m=t[0].title+"")&&$(r,m),1&n&&g!==(g=t[0].description+"")&&$(i,g)},i:t,o:t,d(t){t&&a(e)}}}function I(t,n,e){let{data:o={title:"",description:""}}=n;return t.$$set=t=>{"data"in t&&e(0,o=t.data)},[o]}class J extends V{constructor(t){super(),H(this,t,I,G,c,{data:0})}}function K(t){let n,e;const o=t[1].default,r=function(t,n,e,o){if(t){const r=l(t,n,e,o);return t[0](r)}}(o,t,t[0],null);return{c(){n=f("cardContainer"),r&&r.c(),h(n,"class","svelte-1mg3cqr")},m(t,o){s(t,n,o),r&&r.m(n,null),e=!0},p(t,[n]){r&&r.p&&1&n&&i(r,o,t,t[0],n,null,null)},i(t){e||(B(r,t),e=!0)},o(t){D(r,t),e=!1},d(t){t&&a(n),r&&r.d(t)}}}function Q(t,n,e){let{$$slots:o={},$$scope:r}=n;return t.$$set=t=>{"$$scope"in t&&e(0,r=t.$$scope)},[r,o]}class R extends V{constructor(t){super(),H(this,t,Q,K,c,{})}}function U(t,n,e){const o=t.slice();return o[4]=n[e],o}function W(n){return{c:t,m:t,p:t,i:t,o:t,d:t}}function X(t){let n,e;return n=new R({props:{$$slots:{default:[Z]},$$scope:{ctx:t}}}),{c(){L(n.$$.fragment)},m(t,o){P(n,t,o),e=!0},p(t,e){const o={};128&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){e||(B(n.$$.fragment,t),e=!0)},o(t){D(n.$$.fragment,t),e=!1},d(t){S(n,t)}}}function Y(n){let e,o;return e=new J({props:{data:n[4]}}),{c(){L(e.$$.fragment)},m(t,n){P(e,t,n),o=!0},p:t,i(t){o||(B(e.$$.fragment,t),o=!0)},o(t){D(e.$$.fragment,t),o=!1},d(t){S(e,t)}}}function Z(t){let n,e,o,r=t[3].templates,c=[];for(let n=0;n<r.length;n+=1)c[n]=Y(U(t,r,n));const l=t=>D(c[t],1,1,(()=>{c[t]=null}));return e=new J({props:{data:{title:"",description:"Create a new template"}}}),{c(){for(let t=0;t<c.length;t+=1)c[t].c();n=p(),L(e.$$.fragment)},m(t,r){for(let n=0;n<c.length;n+=1)c[n].m(t,r);s(t,n,r),P(e,t,r),o=!0},p(t,e){if(1&e){let o;for(r=t[3].templates,o=0;o<r.length;o+=1){const l=U(t,r,o);c[o]?(c[o].p(l,e),B(c[o],1)):(c[o]=Y(l),c[o].c(),B(c[o],1),c[o].m(n.parentNode,n))}for(N(),o=r.length;o<c.length;o+=1)l(o);M()}},i(t){if(!o){for(let t=0;t<r.length;t+=1)B(c[t]);B(e.$$.fragment,t),o=!0}},o(t){c=c.filter(Boolean);for(let t=0;t<c.length;t+=1)D(c[t]);D(e.$$.fragment,t),o=!1},d(t){!function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(c,t),t&&a(n),S(e,t)}}}function tt(n){let e;return{c(){e=d("TODO: Loading spinner")},m(t,n){s(t,e,n)},p:t,i:t,o:t,d(t){t&&a(e)}}}function nt(t){let n,e,o,r,c,l,i,d,$,m={ctx:t,current:null,token:null,hasCatch:!1,pending:tt,then:X,catch:W,value:3,blocks:[,,,]};return F(t[0](fetch("stubFormData.json")),m),{c(){n=f("div"),e=f("header"),e.innerHTML='<h1 class="svelte-yib8q7">Templables</h1>',o=p(),r=f("main"),m.block.c(),c=p(),l=f("p"),i=p(),d=f("footer"),d.textContent="App Version: 1.0.0",h(r,"class","svelte-yib8q7"),h(d,"class","svelte-yib8q7"),h(n,"class","container svelte-yib8q7")},m(t,a){s(t,n,a),u(n,e),u(n,o),u(n,r),m.block.m(r,m.anchor=null),m.mount=()=>r,m.anchor=c,u(r,c),u(r,l),u(n,i),u(n,d),$=!0},p(n,[e]){{const o=(t=n).slice();o[3]=m.resolved,m.block.p(o,e)}},i(t){$||(B(m.block),$=!0)},o(t){for(let t=0;t<3;t+=1){D(m.blocks[t])}$=!1},d(t){t&&a(n),m.block.d(),m.token=null,m=null}}}function et(t,n,e){var o=this&&this.__awaiter||function(t,n,e,o){return new(e||(e=Promise))((function(r,c){function l(t){try{u(o.next(t))}catch(t){c(t)}}function i(t){try{u(o.throw(t))}catch(t){c(t)}}function u(t){var n;t.done?r(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(l,i)}u((o=o.apply(t,n||[])).next())}))};let{name:r}=n;console.log("1.0.0");return t.$$set=t=>{"name"in t&&e(1,r=t.name)},[t=>o(void 0,void 0,void 0,(function*(){return t.then((t=>t.json()))})),r]}const ot=new class extends V{constructor(t){super(),H(this,t,et,nt,c,{name:1})}}({target:document.body});let rt=rt();return ot}();
//# sourceMappingURL=bundle.js.map
