import{i as Z}from"./vue-demi-71ba0ef2.js";import{ap as B,r as D,ao as I,ae as J,i as R,ax as O,t as $,g as G,w as A,$ as T,E as tt,e as et,f as st,n as nt,a0 as ot,k as ct}from"./@vue-cb7885ae.js";/*!
  * pinia v2.0.34
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let N;const L=t=>N=t,W=Symbol();function x(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var k;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(k||(k={}));function ht(){const t=B(!0),n=t.run(()=>D({}));let s=[],e=[];const r=I({install(u){L(r),r._a=u,u.provide(W,r),u.config.globalProperties.$pinia=r,e.forEach(f=>s.push(f)),e=[]},use(u){return!this._a&&!Z?e.push(u):s.push(u),this},_p:s,_a:null,_e:t,_s:new Map,state:n});return r}const q=()=>{};function H(t,n,s,e=q){t.push(n);const r=()=>{const u=t.indexOf(n);u>-1&&(t.splice(u,1),e())};return!s&&et()&&st(r),r}function g(t,...n){t.slice().forEach(s=>{s(...n)})}function C(t,n){t instanceof Map&&n instanceof Map&&n.forEach((s,e)=>t.set(e,s)),t instanceof Set&&n instanceof Set&&n.forEach(t.add,t);for(const s in n){if(!n.hasOwnProperty(s))continue;const e=n[s],r=t[s];x(r)&&x(e)&&t.hasOwnProperty(s)&&!R(e)&&!O(e)?t[s]=C(r,e):t[s]=e}return t}const rt=Symbol();function ut(t){return!x(t)||!t.hasOwnProperty(rt)}const{assign:y}=Object;function at(t){return!!(R(t)&&t.effect)}function ft(t,n,s,e){const{state:r,actions:u,getters:f}=n,a=s.state.value[t];let j;function b(){a||(s.state.value[t]=r?r():{});const v=ot(s.state.value[t]);return y(v,u,Object.keys(f||{}).reduce((d,m)=>(d[m]=I(ct(()=>{L(s);const p=s._s.get(t);return f[m].call(p,p)})),d),{}))}return j=z(t,b,n,s,e,!0),j}function z(t,n,s={},e,r,u){let f;const a=y({actions:{}},s),j={deep:!0};let b,v,d=I([]),m=I([]),p;const _=e.state.value[t];!u&&!_&&(e.state.value[t]={}),D({});let F;function V(c){let o;b=v=!1,typeof c=="function"?(c(e.state.value[t]),o={type:k.patchFunction,storeId:t,events:p}):(C(e.state.value[t],c),o={type:k.patchObject,payload:c,storeId:t,events:p});const h=F=Symbol();nt().then(()=>{F===h&&(b=!0)}),v=!0,g(d,o,e.state.value[t])}const K=u?function(){const{state:o}=s,h=o?o():{};this.$patch(S=>{y(S,h)})}:q;function M(){f.stop(),d=[],m=[],e._s.delete(t)}function Q(c,o){return function(){L(e);const h=Array.from(arguments),S=[],w=[];function X(i){S.push(i)}function Y(i){w.push(i)}g(m,{args:h,name:c,store:l,after:X,onError:Y});let E;try{E=o.apply(this&&this.$id===t?this:l,h)}catch(i){throw g(w,i),i}return E instanceof Promise?E.then(i=>(g(S,i),i)).catch(i=>(g(w,i),Promise.reject(i))):(g(S,E),E)}}const U={_p:e,$id:t,$onAction:H.bind(null,m),$patch:V,$reset:K,$subscribe(c,o={}){const h=H(d,c,o.detached,()=>S()),S=f.run(()=>A(()=>e.state.value[t],w=>{(o.flush==="sync"?v:b)&&c({storeId:t,type:k.direct,events:p},w)},y({},j,o)));return h},$dispose:M},l=T(U);e._s.set(t,l);const P=e._e.run(()=>(f=B(),f.run(()=>n())));for(const c in P){const o=P[c];if(R(o)&&!at(o)||O(o))u||(_&&ut(o)&&(R(o)?o.value=_[c]:C(o,_[c])),e.state.value[t][c]=o);else if(typeof o=="function"){const h=Q(c,o);P[c]=h,a.actions[c]=o}}return y(l,P),y(J(l),P),Object.defineProperty(l,"$state",{get:()=>e.state.value[t],set:c=>{V(o=>{y(o,c)})}}),e._p.forEach(c=>{y(l,f.run(()=>c({store:l,app:e._a,pinia:e,options:a})))}),_&&u&&s.hydrate&&s.hydrate(l.$state,_),b=!0,v=!0,l}function bt(t,n,s){let e,r;const u=typeof n=="function";typeof t=="string"?(e=t,r=u?s:n):(r=t,e=t.id);function f(a,j){const b=G();return a=a||b&&tt(W,null),a&&L(a),a=N,a._s.has(e)||(u?z(e,n,r,a):ft(e,r,a)),a._s.get(e)}return f.$id=e,f}function yt(t){{t=J(t);const n={};for(const s in t){const e=t[s];(R(e)||O(e))&&(n[s]=$(t,s))}return n}}export{ht as c,bt as d,yt as s};
