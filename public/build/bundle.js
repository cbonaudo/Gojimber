var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(t,n){t.appendChild(n)}function l(t,n,e){t.insertBefore(n,e||null)}function u(t){t.parentNode.removeChild(t)}function s(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function f(){return a(" ")}function d(t,n,e,r){return t.addEventListener(n,e,r),()=>t.removeEventListener(n,e,r)}function h(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function p(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function m(t,n,e,r){null===e?t.style.removeProperty(n):t.style.setProperty(n,e,r?"important":"")}let g;function $(t){g=t}function b(t){(function(){if(!g)throw new Error("Function called outside component initialization");return g})().$$.on_mount.push(t)}function y(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach((t=>t.call(this,n)))}const v=[],w=[],k=[],_=[],x=Promise.resolve();let E=!1;function A(t){k.push(t)}const P=new Set;let T=0;function j(){const t=g;do{for(;T<v.length;){const t=v[T];T++,$(t),S(t.$$)}for($(null),v.length=0,T=0;w.length;)w.pop()();for(let t=0;t<k.length;t+=1){const n=k[t];P.has(n)||(P.add(n),n())}k.length=0}while(v.length);for(;_.length;)_.pop()();E=!1,P.clear(),$(t)}function S(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(A)}}const C=new Set;let M;function N(t,n){t&&t.i&&(C.delete(t),t.i(n))}function O(t,n,e,r){if(t&&t.o){if(C.has(t))return;C.add(t),M.c.push((()=>{C.delete(t),r&&(e&&t.d(1),r())})),t.o(n)}}function Y(t,e,i,c){const{fragment:l,on_mount:u,on_destroy:s,after_update:a}=t.$$;l&&l.m(e,i),c||A((()=>{const e=u.map(n).filter(o);s?s.push(...e):r(e),t.$$.on_mount=[]})),a.forEach(A)}function z(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function B(t,n){-1===t.$$.dirty[0]&&(v.push(t),E||(E=!0,x.then(j)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function L(n,o,i,c,l,s,a,f=[-1]){const d=g;$(n);const h=n.$$={fragment:null,ctx:null,props:s,update:t,not_equal:l,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(d?d.$$.context:[])),callbacks:e(),dirty:f,skip_bound:!1,root:o.target||d.$$.root};a&&a(h.root);let p=!1;if(h.ctx=i?i(n,o.props||{},((t,e,...r)=>{const o=r.length?r[0]:e;return h.ctx&&l(h.ctx[t],h.ctx[t]=o)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](o),p&&B(n,t)),e})):[],h.update(),p=!0,r(h.before_update),h.fragment=!!c&&c(h.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);h.fragment&&h.fragment.l(t),t.forEach(u)}else h.fragment&&h.fragment.c();o.intro&&N(n.$$.fragment),Y(n,o.target,o.anchor,o.customElement),j()}$(d)}class q{$destroy(){z(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function F(n){let e,r,o,i,f;return{c(){e=s("button"),r=a(n[1]),e.disabled=o=!n[0],h(e,"class","svelte-1gwztir"),m(e,"background-color",n[2]?"darkseagreen":n[0]?"darkslategrey":"grey",!1)},m(t,o){l(t,e,o),c(e,r),i||(f=d(e,"click",n[3]),i=!0)},p(t,[n]){2&n&&p(r,t[1]),1&n&&o!==(o=!t[0])&&(e.disabled=o),5&n&&m(e,"background-color",t[2]?"darkseagreen":t[0]?"darkslategrey":"grey",!1)},i:t,o:t,d(t){t&&u(e),i=!1,f()}}}function D(t,n,e){let{pristine:r}=n,{value:o}=n,{selected:i}=n;return t.$$set=t=>{"pristine"in t&&e(0,r=t.pristine),"value"in t&&e(1,o=t.value),"selected"in t&&e(2,i=t.selected)},[r,o,i,function(n){y.call(this,t,n)}]}class G extends q{constructor(t){super(),L(this,t,D,F,i,{pristine:0,value:1,selected:2})}}function H(t,n,e){const r=t.slice();return r[10]=n[e],r[12]=e,r}function I(t){let n,e,r,o;return e=new G({props:{pristine:t[10].pristine,value:t[10].value,selected:t[3]==t[12]}}),e.$on("click",(function(){return t[6](t[10],t[12])})),{c(){var t;n=s("div"),(t=e.$$.fragment)&&t.c(),r=f()},m(t,i){l(t,n,i),Y(e,n,null),c(n,r),o=!0},p(n,r){t=n;const o={};4&r&&(o.pristine=t[10].pristine),4&r&&(o.value=t[10].value),8&r&&(o.selected=t[3]==t[12]),e.$set(o)},i(t){o||(N(e.$$.fragment,t),o=!0)},o(t){O(e.$$.fragment,t),o=!1},d(t){t&&u(n),z(e)}}}function J(t){let n,e,o,i,g,$,b,y,v,w,k,_,x,E,A,P,T,j,S,C,Y,z,B,L,q,F,D,G,J=t[2],U=[];for(let n=0;n<J.length;n+=1)U[n]=I(H(t,J,n));const V=t=>O(U[t],1,1,(()=>{U[t]=null}));return{c(){n=s("main"),e=s("p"),o=a("Score: "),i=a(t[0]),g=a(" - Sum to match: "),$=a(Q),b=a(" - Times added: "),y=a(t[1]),v=f(),w=s("p"),k=a("You can match pairs, and addition (2 numbers) that gives "),_=a(Q),x=a(".\n    "),E=s("br"),A=a("\n    You can pair two number for matchchecking if they are next to each other on the\n    line (grayed out numbers don't count)\n    "),P=s("br"),T=a("\n    or if they wrap around the edge (e.g: last of first line and first of second\n    line) or around the start (first number and last number of the grid can match).\n    "),j=s("br"),S=a("\n    Also vertically, with column wrapping (first of the column can match last of\n    the column).\n    "),C=s("br"),Y=a('\n    You can add more rows if you are stuck with the "+" button.'),z=f(),B=s("div");for(let t=0;t<U.length;t+=1)U[t].c();L=f(),q=s("button"),q.textContent="+",h(B,"class","cell-grid svelte-mavrnn"),m(B,"grid-template-columns",[...Array(K)].map(R).join(" "),!1),h(n,"class","svelte-mavrnn")},m(r,u){l(r,n,u),c(n,e),c(e,o),c(e,i),c(e,g),c(e,$),c(e,b),c(e,y),c(n,v),c(n,w),c(w,k),c(w,_),c(w,x),c(w,E),c(w,A),c(w,P),c(w,T),c(w,j),c(w,S),c(w,C),c(w,Y),c(n,z),c(n,B);for(let t=0;t<U.length;t+=1)U[t].m(B,null);c(n,L),c(n,q),F=!0,D||(G=d(q,"click",t[5]),D=!0)},p(t,[n]){if((!F||1&n)&&p(i,t[0]),(!F||2&n)&&p(y,t[1]),28&n){let e;for(J=t[2],e=0;e<J.length;e+=1){const r=H(t,J,e);U[e]?(U[e].p(r,n),N(U[e],1)):(U[e]=I(r),U[e].c(),N(U[e],1),U[e].m(B,null))}for(M={r:0,c:[],p:M},e=J.length;e<U.length;e+=1)V(e);M.r||r(M.c),M=M.p}},i(t){if(!F){for(let t=0;t<J.length;t+=1)N(U[t]);F=!0}},o(t){U=U.filter(Boolean);for(let t=0;t<U.length;t+=1)O(U[t]);F=!1},d(t){t&&u(n),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(U,t),D=!1,G()}}}const K=8,Q=10,R=()=>"1fr";function U(t,n,e){let r=0,o=0,i=[],c=-1;function l(t){c<0?e(3,c=t):function(t,n,e,r){return function(t,n,e){let r=n;do{r++,r===t.length&&(r=0)}while(!t[r].pristine);return r!==n&&r===e}(t,n,e)||function(t,n,e){let r=n;do{r--,r<0&&(r=t.length-1)}while(!t[r].pristine);return r!==n&&r===e}(t,n,e)||function(t,n,e,r){let o=n;do{o-=r,o<0&&(o=t.length+o)}while(!t[o].pristine);return o!==n&&o===e}(t,n,e,r)||function(t,n,e,r){let o=n;do{o+=r,o>=t.length&&(o-=t.length)}while(!t[o].pristine);return o!==n&&o===e}(t,n,e,r)}(i,c,t,K)&&function(t){const n=i[c].value,e=i[t].value;return n==e||n+e===Q}(t)?(e(2,i[c].pristine=!1,i),e(2,i[t].pristine=!1,i),e(2,i),e(0,r+=5),e(3,c=-1),function(){const t=i.length/K;let n=[];for(let e=0;e<t;e++)for(let t=0;t<K&&!i[e*K+t].pristine;t++)t===K-1&&n.unshift(e);for(let t of n)new Promise((t=>setTimeout(t,600))).then((()=>{i.splice(t*K,K),e(2,i)})),e(0,r+=10)}()):e(3,c=t)}async function u(){for(let t=0;t<4*K;t++)new Promise((n=>setTimeout(n,30*t))).then((()=>{i.push({pristine:!0,value:Math.floor(9*Math.random()+1)}),e(2,i)}));e(1,o++,o)}b((()=>{u()}));return[r,o,i,c,l,u,(t,n)=>t.pristine&&l(n)]}return new class extends q{constructor(t){super(),L(this,t,U,J,i,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
