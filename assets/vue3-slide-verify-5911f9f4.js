import{J as K,r as h,$ as A,d as Q,D as Z,o as V,c as P,a as g,L as N,U as _,M as X,W as x,ay as ee,az as te}from"./@vue-cb7885ae.js";const b=Math.PI;function z(e,t){return e+t}function ne(e){return e*e}function O(e,t,n,s,l,u){e.beginPath(),e.moveTo(t,n),e.arc(t+s/2,n-l+2,l,.72*b,2.26*b),e.lineTo(t+s,n),e.arc(t+s+l-2,n+s/2,l,1.21*b,2.78*b),e.lineTo(t+s,n+s),e.lineTo(t,n+s),e.arc(t+l-2,n+s/2,l+.4,2.76*b,1.24*b,!0),e.lineTo(t,n),e.lineWidth=2,e.fillStyle="rgba(255, 255, 255, 0.7)",e.strokeStyle="rgba(255, 255, 255, 0.7)",e.stroke(),e[u](),e.globalCompositeOperation="destination-over"}function se(e,t){const n=document.createElement("img");return n.crossOrigin="Anonymous",n.onload=t,n.onerror=()=>{n.src=Y(e)},n.src=Y(e),n}function L(e,t){return Math.round(Math.random()*(t-e)+e)}function Y(e){const t=e.length;return t>0?e[L(0,t-1)]:"https://source.unsplash.com/300x150/?book,library"}function oe(e,t,n={leading:!0,trailing:!0}){const{leading:s,trailing:l,resultCallback:u}=n;let a=0,m=null;const C=function(...r){return new Promise((c,v)=>{const o=new Date().getTime();!a&&!s&&(a=o);const i=t-(o-a);if(i<=0){m&&(clearTimeout(m),m=null);const f=e.apply(this,r);u&&u(f),c(f),a=o;return}l&&!m&&(m=setTimeout(()=>{m=null,a=s?new Date().getTime():0;const f=e.apply(this,r);u&&u(f),c(f)},i))})};return C.cancel=function(){m&&clearTimeout(m),m=null,a=0},C}function ae(){const e=A({x:0,y:0}),t=h(!1),n=h(!1),s=h(0),l=h([]);return{origin:e,success:t,isMouseDown:n,timestamp:s,trail:l,start:r=>{t.value||(r instanceof MouseEvent?(e.x=r.clientX,e.y=r.clientY):(e.x=r.changedTouches[0].pageX,e.y=r.changedTouches[0].pageY),n.value=!0,s.value=Date.now())},move:(r,c,v)=>{if(!n.value)return!1;let o=0,i=0;if(c instanceof MouseEvent?(o=c.clientX-e.x,i=c.clientY-e.y):(o=c.changedTouches[0].pageX-e.x,i=c.changedTouches[0].pageY-e.y),o<0||o+38>=r)return!1;v(o),l.value.push(i)},end:(r,c)=>{if(!n.value||(n.value=!1,(r instanceof MouseEvent?r.clientX:r.changedTouches[0].pageX)===e.x))return!1;s.value=Date.now()-s.value,c(s.value)},verify:(r,c,v)=>{const o=l.value,i=o.reduce(z)/o.length,f=o.map(S=>S-i),k=Math.sqrt(f.map(ne).reduce(z)/o.length),E=parseInt(r);return v=v<=1?1:v>10?10:v,{spliced:Math.abs(E-c)<=v,TuringTest:i!==k}}}}var le=(e,t)=>{const n=e.__vccOpts||e;for(const[s,l]of t)n[s]=l;return n};const ie=K({name:"SlideVerify",props:{l:{type:Number,default:42},r:{type:Number,default:10},w:{type:Number,default:310},h:{type:Number,default:155},sliderText:{type:String,default:"Slide filled right"},accuracy:{type:Number,default:5},show:{type:Boolean,default:!0},imgs:{type:Array,default:()=>[]},interval:{type:Number,default:50}},emits:["success","again","fail","refresh"],setup(e,{emit:t}){const{imgs:n,l:s,r:l,w:u,h:a,accuracy:m,interval:C}=e,r=h(!0),c=h(0),v=h(0),o=A({containerActive:!1,containerSuccess:!1,containerFail:!1}),i=A({iconCls:"arrow-right",width:"0",left:"0"}),f=h(),k=h(),E=h(),S=h();let M;const{success:D,start:$,move:q,end:U,verify:W}=ae(),F=()=>{var d,p;D.value=!1,o.containerActive=!1,o.containerSuccess=!1,o.containerFail=!1,i.iconCls="arrow-right",i.left="0",i.width="0",f.value.style.left="0",(d=S.value)==null||d.clearRect(0,0,u,a),(p=k.value)==null||p.clearRect(0,0,u,a),f.value.width=u,M.src=Y(n)},j=()=>{F(),t("refresh")};function J(d){i.left=d+"px";let p=(u-40-20)/(u-40)*d;f.value.style.left=p+"px",o.containerActive=!0,i.width=d+"px"}function G(d){const{spliced:p,TuringTest:y}=W(f.value.style.left,c.value,m);if(p){if(m===-1){o.containerSuccess=!0,i.iconCls="success",D.value=!0,t("success",d);return}y?(o.containerSuccess=!0,i.iconCls="success",D.value=!0,t("success",d)):(o.containerFail=!0,i.iconCls="fail",t("again"))}else o.containerFail=!0,i.iconCls="fail",t("fail"),setTimeout(()=>{F()},1e3)}const I=oe(d=>{q(u,d,J)},C),B=d=>{U(d,G)};return Q(()=>{var d,p;const y=(d=E.value)==null?void 0:d.getContext("2d"),w=(p=f.value)==null?void 0:p.getContext("2d");S.value=y,k.value=w,M=se(n,()=>{r.value=!1;const T=s+l*2+3;if(c.value=L(T+10,u-(T+10)),v.value=L(10+l*2,a-(T+10)),y&&w){O(y,c.value,v.value,s,l,"fill"),O(w,c.value,v.value,s,l,"clip"),y.drawImage(M,0,0,u,a),w.drawImage(M,0,0,u,a);const R=v.value-l*2-1,H=w.getImageData(c.value,R,T,T);f.value.width=T,w.putImageData(H,0,R)}}),document.addEventListener("mousemove",I),document.addEventListener("mouseup",B)}),Z(()=>{document.removeEventListener("mousemove",I),document.removeEventListener("mouseup",B)}),{block:f,canvas:E,loadBlock:r,containerCls:o,sliderBox:i,refresh:j,sliderDown:$,touchStartEvent:$,touchMoveEvent:I,touchEndEvent:B}}}),re=e=>(ee("data-v-f61c42f2"),e=e(),te(),e),ue=["width","height"],ce=re(()=>g("i",{class:"iconfont icon-refresh"},null,-1)),de=[ce],fe=["width","height"],ve={class:"slide-verify-slider-text"};function me(e,t,n,s,l,u){return V(),P("div",{id:"slideVerify",class:"slide-verify",style:X({width:e.w+"px"}),onselectstart:"return false;"},[g("div",{class:N({"slider-verify-loading":e.loadBlock})},null,2),g("canvas",{ref:"canvas",width:e.w,height:e.h},null,8,ue),e.show?(V(),P("div",{key:0,class:"slide-verify-refresh-icon",onClick:t[0]||(t[0]=(...a)=>e.refresh&&e.refresh(...a))},de)):_("",!0),g("canvas",{ref:"block",width:e.w,height:e.h,class:"slide-verify-block"},null,8,fe),g("div",{class:N(["slide-verify-slider",{"container-active":e.containerCls.containerActive,"container-success":e.containerCls.containerSuccess,"container-fail":e.containerCls.containerFail}])},[g("div",{class:"slide-verify-slider-mask",style:X({width:e.sliderBox.width})},[g("div",{class:"slide-verify-slider-mask-item",style:X({left:e.sliderBox.left}),onMousedown:t[1]||(t[1]=(...a)=>e.sliderDown&&e.sliderDown(...a)),onTouchstart:t[2]||(t[2]=(...a)=>e.touchStartEvent&&e.touchStartEvent(...a)),onTouchmove:t[3]||(t[3]=(...a)=>e.touchMoveEvent&&e.touchMoveEvent(...a)),onTouchend:t[4]||(t[4]=(...a)=>e.touchEndEvent&&e.touchEndEvent(...a))},[g("i",{class:N(["slide-verify-slider-mask-item-icon","iconfont",`icon-${e.sliderBox.iconCls}`])},null,2)],36)],4),g("span",ve,x(e.sliderText),1)],2)],4)}var pe=le(ie,[["render",me],["__scopeId","data-v-f61c42f2"]]);export{pe as S};
