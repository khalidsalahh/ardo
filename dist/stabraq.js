/* @khalidvsalah | Stabraq | v1.0.0 | MIT License | https://github.com/khalidvsalah/stabraq | https://www.khalidsalah.com */var N=Object.defineProperty;var Dt=Object.getOwnPropertyDescriptor;var Lt=Object.getOwnPropertyNames;var Ht=Object.prototype.hasOwnProperty;var Nt=(t,e)=>{for(var s in e)N(t,s,{get:e[s],enumerable:!0})},Ot=(t,e,s,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of Lt(e))!Ht.call(t,r)&&r!==s&&N(t,r,{get:()=>e[r],enumerable:!(i=Dt(e,r))||i.enumerable});return t};var It=t=>Ot(N({},"__esModule",{value:!0}),t);var Ye={};Nt(Ye,{bounds:()=>$,choke:()=>x,clamp:()=>u,computed:()=>V,css:()=>w,damp:()=>_,dist:()=>it,ease:()=>h,isHas:()=>rt,late:()=>v,lerp:()=>y,line:()=>Ft,map:()=>S,observer:()=>f,offset:()=>P,props:()=>k,query:()=>m,raf:()=>b,remap:()=>st,round:()=>F,scroll:()=>Pt,scrub:()=>R,toString:()=>q,tween:()=>D,win:()=>E});module.exports=It(Ye);var M=t=>3*t,Z=(t,e)=>1-M(e)+M(t),tt=(t,e)=>M(e)-6*t,Y=(t,e,s)=>((Z(e,s)*t+tt(e,s))*t+M(e))*t;function et(t,e,s){return M(Z(e,s))*Math.pow(t,2)+2*tt(e,s)*t+M(e)}var Wt=(t,e,s,i,r)=>{let o=0,l=0,n=0;do l=e+(s-e)/2,o=Y(l,i,r)-t,o>0?s=l:e=l;while(Math.abs(o)>1e-7&&++n<10);return l},At=(t,e,s,i)=>{for(let r=0;r<4;++r){let o=et(e,s,i);if(o===0)return e;e-=(Y(e,s,i)-t)/o}return e},jt=t=>{let e=t[0],s=t[1],i=t[2],r=t[3];if(e===s&&i===r)return O.l;let o=new Float32Array(11);for(let n=0;n<11;++n)o[n]=Y(n*.1,e,i);function l(n){let a=0,p=1;for(;p!==10&&o[p]<=n;++p)a+=.1;--p;let d=(n-o[p])/(o[p+1]-o[p]),g=a+d*.1,c=et(g,e,i);return c>=.001?At(n,g,e,i):c===0?g:Wt(n,a,a+.1,e,i)}return n=>n===0||n===1?n:Y(l(n),s,r)},O={custom:jt,l:t=>t,i1:t=>1-Math.cos(t*Math.PI/2),o1:t=>Math.sin(t*Math.PI/2),io1:t=>-(Math.cos(Math.PI*t)-1)/2,i2:t=>Math.pow(t,2),o2:t=>1-(1-t)*(1-t),io2:t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2,i3:t=>Math.pow(t,3),o3:t=>1-Math.pow(1-t,3),io3:t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,i4:t=>Math.pow(t,4),o4:t=>1-Math.pow(1-t,4),io4:t=>t<.5?8*t*t*t*t:1-Math.pow(-2*t+2,4)/2,i5:t=>Math.pow(t,5),o5:t=>1-Math.pow(1-t,5),io5:t=>t<.5?16*Math.pow(t,5):1-Math.pow(-2*t+2,5)/2,i6:t=>t===0?0:Math.pow(2,10*t-10),o6:t=>t===1?1:1-Math.pow(2,-10*t),io6:t=>t===0?0:t===1?1:t<.5?Math.pow(2,20*t-10)/2:(2-Math.pow(2,-20*t+10))/2,i7:t=>1-Math.sqrt(1-Math.pow(t,2)),o7:t=>sqrt(1-Math.pow(t-1,2)),io7:t=>t<.5?(1-Math.sqrt(1-Math.pow(2*t,2)))/2:(Math.sqrt(1-Math.pow(-2*t+2,2))+1)/2},h=t=>typeof t=="object"?O.custom(t):O[t];var u=(t,e,s)=>Math.min(Math.max(t,s),e),y=(t,e,s)=>(1-s)*t+s*e,S=(t,e,s)=>u(0,1,(s-t)/(e-t)),st=(t,e,s,i,r)=>S(t,e,r)*(i-s)+s,F=(t,e)=>{let s=e?Math.pow(10,e):100;return Math.round(t*s)/s},it=(t,e)=>Math.sqrt(t**2+e**2),_=(t,e,s,i=.50399)=>y(t,e,1-Math.exp(-s*i));var rt=(t,e)=>window.hasOwnProperty.call(t,e),q=t=>JSON.stringify(t);var $=t=>{let e=t.getBoundingClientRect();return{w:e.width,h:e.height,x:e.x,y:e.y,xE:e.right,yE:e.bottom}},P=t=>{var e=t.offsetWidth,s=t.offsetHeight,i=t.offsetLeft,r=t.offsetTop;return{w:e,h:s,x:i,xE:i+e,y:r,yE:r+s}},V=t=>window.getComputedStyle(t);var Bt={get screen(){return{w:window.innerWidth,h:window.innerHeight}},html:document.html,body:document.body},E=Bt;var Xt={alpha:(t,e)=>t.style.opacity=e,display:(t,e)=>t.style.display=e,pointer:(t,e)=>t.style.pointerEvents=e,position:(t,e)=>t.style.position=e,visible:(t,e)=>t.style.visibility=e,form:(t,e,s,i)=>t.style.transform=`translate3d(${s+e},${i+e},0)`},w=Xt;var Rt={id:t=>document.getElementById(t),el:t=>document.querySelector(t),els:t=>[...document.querySelectorAll(t)],sEl:(t,e)=>t.querySelector(e),sEls:(t,e)=>[...t.querySelectorAll(e)],node:t=>document.createElement(t),text:t=>document.createTextNode(t)},m=Rt;var x=class{#t=0;constructor({d:e,cb:s}){this.d=e*1e3,this.cb=s}run(){clearTimeout(this.#t),this.#t=setTimeout(this.cb,this.d)}};var Jt=(t,{opacity:e,easing:s})=>{let i={s:+e,e:t[0],ease:t[1]?h(t[1]):s};return i.lerp=i.e-i.s,r=>`${i.s+i.lerp*i.ease(r)}`},Gt=(t,e)=>t.style.opacity=e,ot={cb:Jt,setValue:Gt};var Kt=(t,{filter:e,easing:s})=>{let i;return e==="none"?i={s:0,e:t[0]}:i={s:+e.match(/(\d.*)px/)[1],e:t[0]},i.lerp=i.e-i.s,i.ease=t[1]?h(t[1]):s,r=>i.s+i.lerp*i.ease(r)},Qt=(t,e)=>t.style.filter=`blur(${e}px)`,nt={cb:Kt,setValue:Qt};var I={a:7,c:6,h:1,l:2,m:2,q:4,s:4,t:2,v:1,z:0},Ut=/([astvzqmhlc])([^astvzqmhlc]*)/gi,Zt=/-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi;function te(t){let e=t.match(Zt);return e?e.map(Number):[]}function lt(t){let e=[];return t.replace(Ut,function(s,i,r){let o=i.toLowerCase();for(r=te(r),o==="m"&&r.length>2&&(e.push([i].concat(r.splice(0,2))),o="l",i=i==="m"?"l":"L");;){if(r.length===I[o])return r.unshift(i),e.push(r);if(r.length<I[o])throw new Error("malformed path data");e.push([i].concat(r.splice(0,I[o])))}}),e}var ee=(t,{el:e,easing:s})=>{let i=lt(e.getAttribute("d")),r=lt(t[0]),o=t[1]?h(t[1]):s;return l=>{let n="",a="";for(let p=0;p<i.length;p++){let d=i[p],g=r[p];for(let c=0;c<d.length;c++)n+=(isNaN(d[c])?d[c]:y(d[c],g[c],o(l)))+" ";a=n.trim()}return a}},se=(t,e)=>t.setAttribute("d",e),ht={cb:ee,setValue:se};var ie=(t,{el:e,easing:s})=>{let i=e.getTotalLength(),r={s:t[0]*i,e:t[1]*i,ease:t[2]?h(t[2]):s};return r.lerp=r.e-r.s,o=>`${r.s+r.lerp*r.ease(o)}`},re=(t,e)=>t.style.strokeDasharray=e,at={cb:ie,setValue:re};var oe=(t,{el:e,easing:s})=>{let i=e.getTotalLength();e.style.strokeDasharray=i;let r={s:t[1]*i,e:t[0]*i,ease:t[2]?h(t[2]):s};return r.lerp=r.e-r.s,o=>`${r.s+r.lerp*r.ease(o)}`},ne=(t,e)=>t.style.strokeDashoffset=e,pt={cb:oe,setValue:ne};var ct=t=>{let e=[],s=t.split(" "),i=s.length;for(let r=0;r<i;r++){let o=s[r].split(","),l=o.length;for(let n=0;n<l;n++){let a=o[n];e.push(isNaN(a)?a:+a)}}return e},le=(t,{el:e,easing:s})=>{let i=ct(e.getAttribute("points")),r=ct(t[0]),o=t[1]?ease(t[1]):s;return l=>{let n="",a="";for(let p=0;p<i.length;p++)n+=y(i[p],r[p],o(l))+" ",a=n.trim();return a}},he=(t,e)=>t.setAttribute("points",e),ft={cb:le,setValue:he};var ut=(t,e,s,i)=>{let r={s:t?t[1]=="px"?e:e/parseFloat(s)*100:e,e:t?t[0]:e,unit:t&&t[1]?t[1]:"px"};return r.lerp=r.e-r.s,t?r.ease=t[2]?h(t[2]):i:r.ease=h("l"),o=>`${r.s+r.lerp*r.ease(o)}${r.unit}`},dt=(t,e,s)=>{let i={s:e,e:t?t[0]:e};return i.lerp=i.e-i.s,t?i.ease=t[1]?h(t[1]):s:i.ease=h("l"),r=>`${i.s+i.lerp*i.ease(r)}`},mt=(t,e)=>{let s={s:t?t[0]:0,e:t?t[1]:0};return s.lerp=s.e-s.s,t?s.ease=t[1]?h(t[1]):e:s.ease=h("l"),i=>`${s.s+s.lerp*s.ease(i)}deg`},ae=t=>{let e=t.match(/^matrix3d\((.+)\)$/),s=t.match(/\((.+)\)$/);return e?(s=e[1].split(", "),s=[s[0],s[1],s[4],s[5],s[12],s[13]]):s&&(s=s[1].split(", ")),s},pe=(t,{transform:e,width:s,height:i,easing:r})=>{let o=ae(e),l=ut(t.x,o?+o[4]:0,s,r),n=ut(t.y,o?+o[5]:0,i,r),a=dt(t.sx,o?+o[0]:1,r),p=dt(t.sy,o?+o[3]:1,r),d=mt(t.rx,r),g=mt(t.ry,r);return c=>`translate3d(${l(c)}, ${n(c)}, 0) scale(${a(c)}, ${p(c)}) rotateX(${d(c)}) rotateY(${g(c)})`},ce=(t,e)=>t.style.transform=e,gt={cb:pe,setValue:ce};var fe=(t,{parent:e,top:s,easing:i})=>{let r;if(s==="auto")r={s:0,e:t[0],unit:t[1]||"px"};else{let o=parseFloat(s);r={s:t[1]==="px"?o:o/$(e).h*100,e:t[0],unit:t[1]||"px"}}return r.lerp=r.e-r.s,r.ease=t[2]?h(t[2]):i,o=>`${r.s+r.lerp*r.ease(o)}${r.unit}`},ue=(t,e)=>t.style.top=e,yt={cb:fe,setValue:ue};var de=(t,{parent:e,width:s,easing:i})=>{let r=parseFloat(s),o={s:t[1]==="px"?r:r/e.clientWidth*100,e:t[0],unit:t[1]==="px"?"px":"%",ease:t[2]?h(t[2]):i};return o.lerp=o.e-o.s,l=>`${o.s+o.lerp*o.ease(l)}${o.unit}`},me=(t,e)=>t.style.width=e,bt={cb:de,setValue:me};var ge=(t,{parent:e,height:s,easing:i})=>{let r=parseFloat(s),o={s:t[1]==="px"?r:r/e.clientHeight*100,e:t[0],unit:t[1]==="px"?"px":"%",ease:t[2]?h(t[2]):i};return o.lerp=o.e-o.s,l=>`${o.s+o.lerp*o.ease(l)}${o.unit}`},ye=(t,e)=>t.style.height=e,wt={cb:ge,setValue:ye};var be=(t,{clipPath:e,easing:s})=>{let i=e.match(/circle\((.*?) at/),r=e.match(/at (.*?)\)/),o=parseFloat(i[1]),l=r[1].split(" ").map(parseFloat),n={s:[o,l],e:[parseFloat(t[0]),t[1]],ease:t[2]?h(t[2]):s},a=n.e[0]-n.s[0],p=n.e[1][0]-n.s[1][0],d=n.e[1][1]-n.s[1][1];return g=>{let c=n.ease(g);return`circle(${n.s[0]+a*c}% at ${n.s[1][0]+p*c}% ${n.s[1][1]+d*c}%)`}},we=(t,e)=>t.style.clipPath=e,vt={cb:be,setValue:we};var xt=t=>t.replace(/^polygon\(|\)$/g,"").split(",").map(e=>e.trim().split(" ").map(parseFloat)),ve=(t,{clipPath:e,easing:s})=>{let i={s:xt(e),e:xt(t[0]),ease:t[1]?h(t[1]):s};return i.lerp=i.e.map((r,o)=>[r[0]-i.s[o][0],r[1]-i.s[o][1]]),r=>{let o=i.ease(r);return`${i.s.map((l,n)=>`${l[0]+i.lerp[n][0]*o}% ${l[1]+i.lerp[n][1]*o}%`).join(", ")}`}},xe=(t,e)=>t.style.clipPath=`polygon(${e})`,Mt={cb:ve,setValue:xe};var Me=[[/^(move)$/,gt],[/^(a)$/,ot],[/^(width)$/,bt],[/^(height)$/,wt],[/^(top)$/,yt],[/^(blur)$/,nt],[/^(draw)$/,pt],[/^(dash)$/,at],[/^(points)$/,ft],[/^(d)$/,ht],[/^(circle)$/,vt],[/^(polygon)$/,Mt]],W=Me;function A(t){let e=W.length;for(let s=0;s<e;s++){let i=W[s];if(t.match(i[0]))return i[1]}}function $e(t,e,s,i){let r=V(t);r.el=t,r.parent=t.parentNode,r.easing=i;for(let o of Object.entries(e)){let l=A(o[0]),n=l.cb(o[1],r);s.push({setV:l.setValue,cb:n})}}function Ve(t,e,s,i){for(let r in e){let o={s:t[r],e:e[r][0],ease:e[r][1]?h(e[r][1]):i};o.lerp=o.e-o.s,s.push({setV:(l,n)=>l[r]=n,cb:l=>o.s+o.lerp*o.ease(l)})}}function Ee(t,e,s,i){let r=[];return e?Ve(t,s,r,i):$e(t,s,r,i),r}var k=Ee;var j=class{#t={};create(e){this.#t[e]={items:[],id:0};function s(){let r=this[e],o=Array.prototype.slice.call(arguments);for(let l=0;l<r.items.length;l++)r.items[l].cb(...o)}let i=r=>this.#t[r].items=[];return{cb:s.bind(this.#t),name:e,r:i.bind(this,e)}}subscribe(e,s){this.#t[e]||console.error(e);let i=this.#t[e].items,r=++this.#t[e].id,o={cb:s,id:r,subscribed:!0};i.push(o);let l=n=>{for(let a=0;a<i.length;a++)i[a].id===n.id&&(i[a].subscribed=!1,i.splice(a,1))};return{onChange:n=>(o.cb=n,{r:()=>l(o),item:o})}}check(e){return!!this.#t[e]}},f=new j;var B=class{constructor(){}init(e){this.raf||(f.subscribe("visibilitychange").onChange(this.#t.bind(this)),this.raf=e)}#t(){let e=performance.now();document.hidden?this.hide=e:this.raf.items.map(s=>s.st+=e-this.hide)}},$t=new B;var X=class{constructor(){this.items=[],this.id=-1}push(e){return e.id=++this.id,this.items.push(e),this.on||(this.loop(),$t.init(this)),e.id}update(e){for(let s=0;s<this.items.length;s++){let i=this.items[s];if(i.d){i.st||(i.st=e);let r=(e-i.st)/(i.d*1e3),o=u(0,1,r);i.cb(o),o===1&&this.kill(i.id)}else i.cb(e)}this.loop()}kill(e){this.items.map((s,i)=>{s.id===e&&(s.id=null,s.st=null,this.items.splice(i,1))})}loop(){this.items.length===0?(this.on=!1,window.cancelAnimationFrame(this.raf)):(this.on=!0,this.raf=window.requestAnimationFrame(this.update.bind(this)))}},ke=new X,b=ke;function R(t){let e=document.createElement("section"),s={start:0,end:0,lerp:.75};e.style.cssText=` position: fixed; height: 32px; width: 32px; display: flex; align-items: center; justify-content: center; font-size: 12px; background: #333; color: #fff; border-radius: 50%; pointer-events: none; `,f.add("pointermove").onChange(i=>{let r=F(i.pageX/E.screen.w);e.style.top=i.pageY+-30+"px",e.style.left=i.pageX+-30*r+"px",e.textContent=r,s.start=u(0,.99999,r)}),f.add("raf",()=>{s.end=y(s.start,s.end,s.lerp),t(s.end)}),document.body.appendChild(e)}var v=class{constructor({d:e,o:s,cb:i}){this.d=e||0,this.o=s,this.cb=i,this.on=!1}play(){this.on=!0,this.d===0?this.Elp():this.id=b.push({cb:this.loop.bind(this),d:this.d})}destroy(){b.kill(this.id),this.on=!1}loop(e){e===1&&this.Elp()}Elp(){this.on=!1,this.o&&b.push(this.o),this.cb&&this.cb()}};function J(t){this.isObj=!1,t instanceof Node?this.target=t:typeof t=="string"?this.target=m.el(t):(this.isObj=!0,this.target=t)}var Vt=new Map;function G(t,e){let s=Vt.get(t);return s||(Vt.set(t,e),e.init(t),e)}var ze=(t,e)=>q(t)===q(e),Et=ze;var K=class{constructor(e){return G(e,this)}init(e){J.call(this,e),this.call=-1,this.props=[],this.queue=[],this.prog=0,this.elapsed=0}run(e){this.on=!0,this.elapsed=u(0,1,this.prog+e);let s=Math.abs(this.dir-this.elapsed),i=Math.abs(s-this.from);this.props.map(({setV:r,cb:o})=>r(this.target,o(i))),this.raf&&this.raf(s,this.target),this.elapsed===1&&this.finished()}push(e){this.destroy(),this.dir=e.dir,this.mode=e.mode,this.from=e.from?1:0,this.started&&(this.started(this.target),this.started=null),e.oProps?(this.oProps=e.oProps,this.props=k(this.target,this.isObj,e.oProps,h(e.ease)),this.prog=0):this.prog=1-this.elapsed,this.rafObj={cb:this.run.bind(this),d:e.d},this.id=b.push(this.rafObj)}control(){let e=this.queue[this.call];Et(this.oProps,e.oProps)?e.oProps=void 0:(this.late=new v({cb:this.push.bind(this,e),d:e.late}),this.late.play()),this.mode!==e.mode&&(this.late.on&&this.late.destroy(),this.late=new v({cb:this.push.bind(this,e),d:e.late}),this.late.play())}play(e,s){this.call++,this.started=e.started,this.completed=e.completed,this.raf=e.raf,this.queue.push({d:e.d,late:e.late,ease:e.ease,oProps:e.p,mode:s,from:e.from,dir:s==="r"?1:0}),this.control()}destroy(){this.on=!1,b.kill(this.id)}finished(){this.destroy(),this.completed&&(this.completed(this.target),this.completed=null,this.raf=null)}},kt=K;var zt=(t,e,s)=>{let i={...t};return e!==0&&(i.started=null,i.raf=null),e!==s&&(i.completed=null),i.late=t.late+t.space*e,i},St=(t,e)=>{e.d=typeof t.d=="number"?t.d:e.d||.5,e.late=typeof t.late=="number"?t.late:e.late||0,e.space=typeof t.space=="number"?t.space:e.space||0,e.ease=t.ease?t.ease:e.ease||"l",e.p=t.p};function Se(t,e){let s;Array.isArray(t)&&typeof t[0]!="number"?s=t:s=[t];let i=s.map(l=>new kt(l)),r=i.length-1,o={reverse:(l={})=>{St(l,e);for(let n=0;n<=r;n++){let a=r-n;i[n].play(zt(e,a,r),"r")}},play:(l={})=>{St(l,e),i.map((n,a)=>n.play(zt(e,a,r),"p"))},destroy:()=>i.map(l=>l.late.destroy()),tweens:i};return o.play(e),o}var D=Se;var z=(t="+0",e)=>{let s;if(Array.isArray(t))return s=P(t[0]).y+t[1],s;if(s=t.toString().match(/(\+|\-)(.*)/),s[1]==="+")return e+ +s[2];if(s[1]==="-")return e-+s[2]},Q=class{constructor(e,s){this.el=e,this.target=s.target,this.o=s,this.pin=s.pin,this.scroll=s.scroll,this.from=s.from?1:0,this.dir=s.dir,this.dirE=s.dir==="y"?"yE":"xE",this.Init(s)}Init(e){e.target||(this.target=this.el),e.scroll&&(this.ps=k(this.target,!1,e.p)),e.pin&&(this.pin.target=e.pin.target||this.target),this.iraf=f.subscribe(e.obsname).onChange(this.raf.bind(this)),this.iresize=f.subscribe("resize").onChange(this.resize.bind(this)),this.resize()}resize(){let e=this.el.length?this.el[0]:this.el,s=P(e);this.scroll?(this.startpint=z(this.scroll.start,s[this.dir]),this.endpoint=z(this.scroll.end,s[this.dirE])):(this.startpint=z(this.o.start,s[this.dir]),this.endpoint=z(this.o.end,s[this.dirE])),this.pin&&(this.pin.start=z(this.pin.a,s[this.dir]),this.pin.end=z(this.pin.z,s[this.dirE]))}raf(e){if(this.coord=e.lerp,this.o.scroll){let s=S(this.startpint,this.endpoint,this.coord);this.onScroll(s),this.o.pin&&this.piner(),this.o.raf&&this.o.raf(s,this.target,this.coord)}else this.startpint<=this.coord&&this.fire()}onScroll(e){let s=Math.abs(e-this.from);this.ps.map(i=>{this.target.length?this.target.forEach(r=>i.setV(r,i.cb(s))):i.setV(this.target,i.cb(s))})}fire(){this.o.tween&&D(this.target,this.o.tween),this.o.completed&&this.o.completed(this.target),this.destroy()}piner(){if(this.pined&&!(this.coord>=this.pin.end)){let e=Math.max(0,this.coord-this.pin.pxS);this.pin.target.style.transform=`translate3d(${this.dir?"0px,"+e+"px":e+"px,0px"},0px)`}this.coord<this.pin.start?this.pined=!1:this.coord>=this.pin.start&&!this.pined&&(this.pin.pxS=this.coord,this.pined=!0)}destroy(){this.iraf.r(),this.iresize.r()}},_t=Q;var C=class{constructor(e,s){this.options=s,this.attacher=e,this.target=s.target,this.observer=f.create(s.obs||Symbol("foo")),this.dir=s.dir?s.dir:"y",this.isY=this.dir==="y",this.pageDir=this.isY?"pageY":"pageX",this._events(s),this.chokeEl=m.id("overlay"),this.choke=new x({d:.3,cb:()=>w.pointer(this.chokeEl,"none")}),this.dist=0,this.scroll={value:0,lerp:0,dir:1}}_events(e){Object.is(this.attacher,window)?(e.drag!==!1&&(this.ipointerdown=f.subscribe("pointerdown").onChange(this._down.bind(this)),this.ipointermove=f.subscribe("pointermove").onChange(this._move.bind(this))),e.key!==!1&&(this.ikey=f.subscribe("keydown").onChange(this._onkey.bind(this))),e.wheel!==!1&&(this.iwheel=f.subscribe("wheel").onChange(this._wheel.bind(this))),this.global=!0):(e.wheel!==!1&&(this.attacher.onwheel=this._wheel.bind(this)),e.drag!==!1&&(this.attacher.onpointerdown=this._down.bind(this),this.attacher.onpointermove=this._move.bind(this))),this.ipointerup=f.subscribe("pointerup").onChange(this._up.bind(this)),this.iresize=f.subscribe("resize").onChange(this._resize.bind(this))}_wheel(e){let s=e.deltaMode===1?.83:.55,i=e.wheelDeltaY*s;this.scroll.value-=i,this.scroll.dir=Math.sign(i)}_onkey(e){if(e.key==="Tab")e.preventDefault();else if(e.keyCode===40||e.keyCode===38){let s=0;e.keyCode===40?s=-66.6:e.keyCode===38&&(s=66.6),this.scroll.value-=s}}_down(e){this.mousedown=!0,this.dist=e[this.pageDir]}_move(e){if(this.mousedown){let s=e[this.pageDir]-this.dist;this.scroll.value-=s,this.dist=e[this.pageDir],this.scroll.dir=Math.sign(s),this.global&&w.pointer(this.chokeEl,"all")}}_up(){this.mousedown=!1,this.choke.run()}_destroy(){this.iraf.r(),this.iresize.r(),this.global?(this.ipointerdown&&(this.ipointerdown.r(),this.ipointermove.r()),this.ikey&&this.ikey.r(),this.iwheel&&this.iwheel.r()):(this.options.wheel!==!1&&(this.attacher.onwheel=null),this.options.drag!==!1&&(this.attacher.onpointerdown=null,this.attacher.onpointermove=null)),this.ipointerup.r(),this.observer.r()}};var L=(t,e,s)=>{s?w.form(t,"px",0,e):w.form(t,"px",e,0)},qt=(t,e,s,i,r,o)=>{t<=s.z&&e>=s.a?(L(i,-o,r),s.out=!1):s.out||(L(i,-o,r),s.out=!0)},U=class extends C{constructor(e,s){super(e,s),this.infinite=s.infinite,this.ease=s.ease||.09,this.speed={time:performance.now(),offset:0,value:0,ease:s.speed||.3},this._resize(),this.iraf=f.subscribe("raf").onChange(this._raf.bind(this))}add(e,s){return s.obsname=this.observer.name,s.dir=this.dir,new _t(e,s)}_raf(e){this.infinite||(this.scroll.value=u(0,this.dim,this.scroll.value)),this.scroll.lerp=_(this.scroll.lerp,this.scroll.value,this.ease),this.speed.time=e-this.speed.time,this.speed.offset=this.scroll.lerp-this.speed.offset,this.speed.value=_(this.speed.value,this.speed.offset/this.speed.time,this.speed.ease),this.infinite?(this.scroll.lerp>this.dim?(this.scroll.value=this.scroll.value-this.dim,this.scroll.lerp=this.scroll.lerp-this.dim):this.scroll.lerp<0&&(this.scroll.value=this.dim+this.scroll.value,this.scroll.lerp=this.dim+this.scroll.lerp),this.infinite.map(([s,i])=>{let r=this.scroll.lerp,o=r+this.screen;if(this.scroll.lerp>this.dim-this.screen){let l=this.scroll.lerp-(this.dim-this.screen)-this.screen,n=l+this.screen;l<=i.z&&n>=i.a?L(s,this.screen-n,this.isY):qt(r,o,i,s,this.isY,this.scroll.lerp)}else qt(r,o,i,s,this.isY,this.scroll.lerp)})):L(this.target,-this.scroll.lerp,this.isY),this.speed.time=e,this.speed.offset=this.scroll.lerp,this.observer.cb(this.scroll)}_resize(){if(this.bs=$(this.target),this.infinite){let s=[...this.target.children];this.infinite=s.map(i=>{let r=this.isY?i.offsetTop:i.offsetLeft,o=this.isY?i.offsetHeight:i.offsetWidth;return[i,{a:r,z:r+o}]})}let e=this.isY?"h":"w";this.screen=E.screen[e],this.dim=this.bs[e]-(this.infinite?0:this.screen)}},Pt=U;var H=" ";function _e(t,e){document.body.append(t),t.style.visibility="hidden",t.style.position="absolute",t.style.whiteSpace="nowrap",t.style.fontFamily=e.getPropertyValue("font-family"),t.style.fontSize=e.getPropertyValue("font-size"),t.style.fontWeight=e.getPropertyValue("font-weight"),t.style.textTransform=e.getPropertyValue("text-transform"),t.style.letterSpacing=e.getPropertyValue("letter-spacing"),t.style.lineHeight=e.getPropertyValue("line-height")}function Ct(t){let e=t.childNodes,s=[];for(let i=0;i<e.length;i++)s.push(qe(e[i]));return s}function qe(t){let e;return t.nodeType===3?e={value:t.nodeValue.split(" "),type:3}:e={value:Ct(t),type:1,node:t},e}function Tt(t){for(let e=0;e<t.length;e++){let s=t[e];if(s.type===3){let i=[];for(let r=0;r<s.value.length;r++)s.value[r]=s.value[r].replace(/\n/g,""),s.value[r]!==""&&i.push(s.value[r]);s.value=i}else Tt(s.value)}}function Yt(t,e,s){if(s.words){let i=t.words.length,r;s.ltrs?r=t.words.reduce((o,l,n)=>{let a="";for(let p=0;p<l.length;p++)a+=T(l[p],3);return o+T(a+(n==i-1?"":H),2)},""):r=t.words.reduce((o,l,n)=>o+T(l+(n==i-1?"":H),2),""),e.push({line:T(r,1)})}else e.push({line:T(t.value,1)})}function T(t,e){if(e===1)return`<div class="tfx"><span>${t}</span></div>`;if(e===2)return`<span class="word">${t}</span>`;if(e===3)return`<span class="ltr">${t}</span>`}function Pe(t,e,s,i,r,o){for(let l=0;l<t.length;l++){let n=t[l];e.value+=n,s.innerHTML=e.value,e.words.push(n),s.offsetWidth>i&&(e.words.pop(),Yt(e,r,o),e.value=n,e.words=[n+H]),e.value+=H}}function Ce(t,e,s,i){let r={value:"",words:[]},o=[];for(let l=0;l<t.length;l++){let n=t[l];n.type===3&&Pe(n.value,r,e,s,o,i)}return Yt(r,o,i),o}function Te(t,e){let s=V(t),i=document.createElement("div");e.ltrs&&(e.words=!0),_e(i,s);let r=t.offsetWidth,o=Ct(t);Tt(o);let l=Ce(o,i,r,e);return t.innerHTML="",document.body.removeChild(i),l.map(({line:n})=>t.innerHTML+=n),{lines:m.sEls(t,".tfx"),words:m.sEls(t,".word"),ltrs:m.sEls(t,".ltr")}}var Ft=Te;
