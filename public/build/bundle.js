var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(t,n){t.appendChild(n)}function l(t,n,e){t.insertBefore(n,e||null)}function u(t){t.parentNode.removeChild(t)}function s(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function f(){return a(" ")}function d(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function h(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function p(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function m(t,n,e,o){null===e?t.style.removeProperty(n):t.style.setProperty(n,e,o?"important":"")}let g;function $(t){g=t}function b(t){(function(){if(!g)throw new Error("Function called outside component initialization");return g})().$$.on_mount.push(t)}function y(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach((t=>t.call(this,n)))}const v=[],w=[],_=[],x=[],k=Promise.resolve();let E=!1;function A(t){_.push(t)}const j=new Set;let S=0;function z(){const t=g;do{for(;S<v.length;){const t=v[S];S++,$(t),C(t.$$)}for($(null),v.length=0,S=0;w.length;)w.pop()();for(let t=0;t<_.length;t+=1){const n=_[t];j.has(n)||(j.add(n),n())}_.length=0}while(v.length);for(;x.length;)x.pop()();E=!1,j.clear(),$(t)}function C(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(A)}}const M=new Set;let N;function O(t,n){t&&t.i&&(M.delete(t),t.i(n))}function P(t,n,e,o){if(t&&t.o){if(M.has(t))return;M.add(t),N.c.push((()=>{M.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function T(t,e,i,c){const{fragment:l,on_mount:u,on_destroy:s,after_update:a}=t.$$;l&&l.m(e,i),c||A((()=>{const e=u.map(n).filter(r);s?s.push(...e):o(e),t.$$.on_mount=[]})),a.forEach(A)}function B(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function L(t,n){-1===t.$$.dirty[0]&&(v.push(t),E||(E=!0,k.then(z)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Y(n,r,i,c,l,s,a,f=[-1]){const d=g;$(n);const h=n.$$={fragment:null,ctx:null,props:s,update:t,not_equal:l,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(d?d.$$.context:[])),callbacks:e(),dirty:f,skip_bound:!1,root:r.target||d.$$.root};a&&a(h.root);let p=!1;if(h.ctx=i?i(n,r.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return h.ctx&&l(h.ctx[t],h.ctx[t]=r)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](r),p&&L(n,t)),e})):[],h.update(),p=!0,o(h.before_update),h.fragment=!!c&&c(h.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);h.fragment&&h.fragment.l(t),t.forEach(u)}else h.fragment&&h.fragment.c();r.intro&&O(n.$$.fragment),T(n,r.target,r.anchor,r.customElement),z()}$(d)}class q{$destroy(){B(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function F(n){let e,o,r,i,f;return{c(){e=s("button"),o=a(n[1]),e.disabled=r=!n[0],h(e,"class","svelte-l76gf1"),m(e,"background-color",n[2]?"cyan":"",!1)},m(t,r){l(t,e,r),c(e,o),i||(f=d(e,"click",n[3]),i=!0)},p(t,[n]){2&n&&p(o,t[1]),1&n&&r!==(r=!t[0])&&(e.disabled=r),4&n&&m(e,"background-color",t[2]?"cyan":"",!1)},i:t,o:t,d(t){t&&u(e),i=!1,f()}}}function D(t,n,e){let{pristine:o}=n,{value:r}=n,{selected:i}=n;return t.$$set=t=>{"pristine"in t&&e(0,o=t.pristine),"value"in t&&e(1,r=t.value),"selected"in t&&e(2,i=t.selected)},[o,r,i,function(n){y.call(this,t,n)}]}class G extends q{constructor(t){super(),Y(this,t,D,F,i,{pristine:0,value:1,selected:2})}}function H(t,n,e){const o=t.slice();return o[9]=n[e],o[11]=e,o}function I(t){let n,e,o,r;return e=new G({props:{pristine:t[9].pristine,value:t[9].value,selected:t[3]==t[11]}}),e.$on("click",(function(){return t[6](t[9],t[11])})),{c(){var t;n=s("div"),(t=e.$$.fragment)&&t.c(),o=f()},m(t,i){l(t,n,i),T(e,n,null),c(n,o),r=!0},p(n,o){t=n;const r={};4&o&&(r.pristine=t[9].pristine),4&o&&(r.value=t[9].value),8&o&&(r.selected=t[3]==t[11]),e.$set(r)},i(t){r||(O(e.$$.fragment,t),r=!0)},o(t){P(e.$$.fragment,t),r=!1},d(t){t&&u(n),B(e)}}}function J(t){let n,e,r,i,g,$,b,y,v,w,_,x,k,E,A,j,S,z,C,M,T,B,L,Y,q,F,D=t[2],G=[];for(let n=0;n<D.length;n+=1)G[n]=I(H(t,D,n));const J=t=>P(G[t],1,1,(()=>{G[t]=null}));return{c(){n=s("main"),e=s("p"),r=a("Score: "),i=a(t[0]),g=a(" - Sum to match: "),$=a(Q),b=a(" - Times added: "),y=a(t[1]),v=f(),w=s("p"),_=a("You can match pairs, and addition (2 numbers) that gives "),x=a(Q),k=a(".\n    "),E=s("br"),A=a("\n    You can pair two number for matchchecking if they are next to each other on the\n    line (grayed out numbers don't count)\n    "),j=s("br"),S=a("\n    or if they wrap around the edge (e.g: last of first line and first of second\n    line) or around the start (first number and last number of the grid can match).\n    "),z=s("br"),C=a("\n    Also vertically, with column wrapping (first of the column can match last of\n    the column)."),M=f(),T=s("div");for(let t=0;t<G.length;t+=1)G[t].c();B=f(),L=s("button"),L.textContent="+",h(T,"class","cell-grid svelte-1ow9rkz"),m(T,"grid-template-columns",[...Array(K)].map(R).join(" "),!1),h(n,"class","svelte-1ow9rkz")},m(o,u){l(o,n,u),c(n,e),c(e,r),c(e,i),c(e,g),c(e,$),c(e,b),c(e,y),c(n,v),c(n,w),c(w,_),c(w,x),c(w,k),c(w,E),c(w,A),c(w,j),c(w,S),c(w,z),c(w,C),c(n,M),c(n,T);for(let t=0;t<G.length;t+=1)G[t].m(T,null);c(n,B),c(n,L),Y=!0,q||(F=d(L,"click",t[5]),q=!0)},p(t,[n]){if((!Y||1&n)&&p(i,t[0]),(!Y||2&n)&&p(y,t[1]),28&n){let e;for(D=t[2],e=0;e<D.length;e+=1){const o=H(t,D,e);G[e]?(G[e].p(o,n),O(G[e],1)):(G[e]=I(o),G[e].c(),O(G[e],1),G[e].m(T,null))}for(N={r:0,c:[],p:N},e=D.length;e<G.length;e+=1)J(e);N.r||o(N.c),N=N.p}},i(t){if(!Y){for(let t=0;t<D.length;t+=1)O(G[t]);Y=!0}},o(t){G=G.filter(Boolean);for(let t=0;t<G.length;t+=1)P(G[t]);Y=!1},d(t){t&&u(n),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(G,t),q=!1,F()}}}const K=6,Q=10,R=()=>"1fr";function U(t,n,e){let o=0,r=0,i=[],c=-1;function l(t){c<0?e(3,c=t):function(t,n,e,o){return function(t,n,e){let o=n;do{o++,o===t.length&&(o=0)}while(!t[o].pristine);return o!==n&&o===e}(t,n,e)||function(t,n,e){let o=n;do{o--,o<0&&(o=t.length-1)}while(!t[o].pristine);return o!==n&&o===e}(t,n,e)||function(t,n,e,o){let r=n;do{r-=o,r<0&&(r=t.length+r)}while(!t[r].pristine);return r!==n&&r===e}(t,n,e,o)||function(t,n,e,o){let r=n;do{r+=o,r>=t.length&&(r-=t.length)}while(!t[r].pristine);return r!==n&&r===e}(t,n,e,o)}(i,c,t,K)&&function(t){const n=i[c].value,e=i[t].value;return n==e||n+e===Q}(t)?(e(2,i[c].pristine=!1,i),e(2,i[t].pristine=!1,i),e(2,i),e(0,o+=5),e(3,c=-1)):e(3,c=t)}function u(){for(let t=0;t<4*K;t++)i.push({pristine:!0,value:Math.floor(9*Math.random()+1)});e(2,i),e(1,r++,r)}b((()=>{u()}));return[o,r,i,c,l,u,(t,n)=>t.pristine&&l(n)]}return new class extends q{constructor(t){super(),Y(this,t,U,J,i,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
