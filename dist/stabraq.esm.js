/* @khalidvsalah | Stabraq | v1.0.0 | MIT License | https://github.com/khalidvsalah/stabraq | https://www.khalidsalah.com */var ut={l:e=>e,i1:e=>1-Math.cos(e*Math.PI/2),o1:e=>Math.sin(e*Math.PI/2),io1:e=>-(Math.cos(Math.PI*e)-1)/2,i2:e=>Math.pow(e,2),o2:e=>1-(1-e)*(1-e),io2:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,i3:e=>Math.pow(e,3),o3:e=>1-Math.pow(1-e,3),io3:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,i4:e=>Math.pow(e,4),o4:e=>1-Math.pow(1-e,4),io4:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,i5:e=>Math.pow(e,5),o5:e=>1-Math.pow(1-e,5),io5:e=>e<.5?16*Math.pow(e,5):1-Math.pow(-2*e+2,5)/2,i6:e=>e===0?0:Math.pow(2,10*e-10),o6:e=>e===1?1:1-Math.pow(2,-10*e),io6:e=>e===0?0:e===1?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,i7:e=>1-Math.sqrt(1-Math.pow(e,2)),o7:e=>sqrt(1-Math.pow(e-1,2)),io7:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2},p=ut;var O=(e,t)=>Math.max(e,t),u=(e,t,s)=>Math.min(Math.max(e,s),t),m=(e,t,s)=>(1-s)*e+s*t,S=(e,t,s)=>u(0,1,(s-e)/(t-e)),mt=(e,t,s,i,r)=>S(e,t,r)*(i-s)+s,x=(e,t)=>{let s=t?Math.pow(10,t):100;return Math.round(e*s)/s};var gt=(e,t)=>window.hasOwnProperty.call(e,t),V=e=>{let t=e.getBoundingClientRect();return{w:t.width,h:t.height,x:t.x,y:t.y,xE:t.right,yE:t.bottom}},$=e=>window.getComputedStyle(e),b={alpha:(e,t)=>e.style.opacity=t,display:(e,t)=>e.style.display=t,pointer:(e,t)=>e.style.pointerEvents=t,position:(e,t)=>e.style.position=t,visible:(e,t)=>e.style.visibility=t,form:(e,t,s,i)=>e.style.transform=`translate3d(${s+t},${i+t},0)`},c={id:e=>document.getElementById(e),el:e=>document.querySelector(e),els:e=>[...document.querySelectorAll(e)],sEl:(e,t)=>e.querySelector(t),sEls:(e,t)=>[...e.querySelectorAll(t)],node:e=>document.createElement(e),text:e=>document.createTextNode(e)},g={get size(){return{w:window.innerWidth,h:window.innerHeight}},string:e=>JSON.stringify(e)},M=class{constructor({d:t,cb:s}){this.d=t*1e3,this.cb=s,this.time=0}run(){clearTimeout(this.time),this.time=setTimeout(this.cb,this.d)}};var bt=(e,{opacity:t})=>{let s={s:+t,e:e[0],ease:p[e[1]]};return s.lerp=s.e-s.s,i=>`${s.s+s.lerp*s.ease(i)}`},wt=(e,t)=>e.style.opacity=t,X={cb:bt,setValue:wt};var T={a:7,c:6,h:1,l:2,m:2,q:4,s:4,t:2,v:1,z:0},yt=/([astvzqmhlc])([^astvzqmhlc]*)/gi,vt=/-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi;function xt(e){let t=e.match(vt);return t?t.map(Number):[]}function B(e){let t=[];return e.replace(yt,function(s,i,r){let o=i.toLowerCase();for(r=xt(r),o==="m"&&r.length>2&&(t.push([i].concat(r.splice(0,2))),o="l",i=i==="m"?"l":"L");;){if(r.length===T[o])return r.unshift(i),t.push(r);if(r.length<T[o])throw new Error("malformed path data");t.push([i].concat(r.splice(0,T[o])))}}),t}var Mt=(e,{el:t})=>{let s=B(t.getAttribute("d")),i=B(e[0]),r=p[e[1]];return o=>{let n="",l="";for(let h=0;h<s.length;h++){let d=s[h],_=i[h];for(let f=0;f<d.length;f++)n+=(isNaN(d[f])?d[f]:m(d[f],_[f],r(o)))+" ";l=n.trim()}return l}},Vt=(e,t)=>e.setAttribute("d",t),G={cb:Mt,setValue:Vt};var $t=(e,{el:t})=>{let s=t.getTotalLength();t.style.strokeDasharray=s;let i={s:e[0]*s,e:e[1]*s,ease:p[e[2]]};return i.lerp=i.e-i.s,r=>`${i.s+i.lerp*i.ease(r)}`},kt=(e,t)=>e.style.strokeDashoffset=t,R={cb:$t,setValue:kt};var J=e=>{let t=[],s=e.split(" "),i=s.length;for(let r=0;r<i;r++){let o=s[r].split(","),n=o.length;for(let l=0;l<n;l++){let h=o[l];t.push(isNaN(h)?h:+h)}}return t},zt=(e,{el:t})=>{let s=J(t.getAttribute("points")),i=J(e[0]),r=ease[e[1]];return o=>{let n="",l="";for(let h=0;h<s.length;h++)n+=m(s[h],i[h],r(o))+" ",l=n.trim();return l}},Et=(e,t)=>e.setAttribute("points",t),K={cb:zt,setValue:Et};var St=(e,{pa:t,top:s})=>{let i;if(s==="auto")i={s:0,e:e[0],unit:e[1]||"px"};else{let r=parseFloat(s);i={s:e[1]==="px"?r:r/V(t).h*100,e:e[0],unit:e[1]||"px"}}return i.lerp=i.e-i.s,i.ease=ease[e[2]],r=>`${i.s+i.lerp*i.ease(r)}${i.unit}`},qt=(e,t)=>e.style.top=t,Q={cb:St,setValue:qt};var U=(e,t,s)=>{let i={s:e?e[1]=="px"?t:t/parseFloat(s)*100:t,e:e?e[0]:t,unit:e&&e[1]?e[1]:"px"};return i.lerp=i.e-i.s,i.ease=p[e?e[2]:"l"],r=>`${i.s+i.lerp*i.ease(r)}${i.unit}`},Z=(e,t)=>{let s={s:t,e:e?e[0]:t};return s.lerp=s.e-s.s,s.ease=p[e?e[1]:"l"],i=>`${s.s+s.lerp*s.ease(i)}`},tt=e=>{let t={s:e?e[0]:0,e:e?e[1]:0};return t.lerp=t.e-t.s,t.ease=p[e?e[2]:"l"],s=>`${t.s+t.lerp*t.ease(s)}deg`},Pt=e=>{let t=e.match(/^matrix3d\((.+)\)$/),s=e.match(/\((.+)\)$/);return t?(s=t[1].split(", "),s=[s[0],s[1],s[4],s[5],s[12],s[13]]):s&&(s=s[1].split(", ")),s},_t=(e,{transform:t,width:s,height:i})=>{let r=Pt(t),o=U(e.x,r?+r[4]:0,s),n=U(e.y,r?+r[5]:0,i),l=Z(e.sx,r?+r[0]:1),h=Z(e.sy,r?+r[3]:1),d=tt(e.rx),_=tt(e.ry);return f=>`translate3d(${o(f)}, ${n(f)}, 0) scale(${l(f)}, ${h(f)}) rotateX(${d(f)}) rotateY(${_(f)})`},Ot=(e,t)=>e.style.transform=t,et={cb:_t,setValue:Ot};var Tt=(e,{filter:t})=>{let s;return t==="none"?s={s:0,e:e[0]}:s={s:+t.match(/(\d.*)px/)[1],e:e[0]},s.lerp=s.e-s.s,s.ease=p[e[1]],i=>s.s+s.lerp*s.ease(i)},At=(e,t)=>e.style.filter=`blur(${t}px)`,st={cb:Tt,setValue:At};var Ct=(e,{pa:t,width:s})=>{let i=parseFloat(s),r={s:e[1]==="px"?i:i/t.clientWidth*100,e:e[0],unit:e[1]==="px"?"px":"%",ease:p[e[2]]};return r.lerp=r.e-r.s,o=>`${r.s+r.lerp*r.ease(o)}${r.unit}`},Yt=(e,t)=>e.style.width=t,it={cb:Ct,setValue:Yt};var Nt=(e,{pa:t,height:s})=>{let i=parseFloat(s),r={s:e[1]==="px"?i:i/t.clientHeight*100,e:e[0],unit:e[1]==="px"?"px":"%",ease:p[e[2]]};return r.lerp=r.e-r.s,o=>`${r.s+r.lerp*r.ease(o)}${r.unit}`},Lt=(e,t)=>e.style.height=t,rt={cb:Nt,setValue:Lt};var jt=[[/^(form)$/,et],[/^(a)$/,X],[/^(dash)$/,R],[/^(points)$/,K],[/^(d)$/,G],[/^(top)$/,Q],[/^(blur)$/,st],[/^(width)$/,it],[/^(height)$/,rt]],A=jt;function C(e){let t=A.length;for(let s=0;s<t;s++){let i=A[s];if(e.match(i[0]))return i[1]}}function Ht(e,t,s){let i=$(e);i.el=e,i.pa=e.parentNode;for(let r of Object.entries(t)){let o=C(r[0]),n=o.cb(r[1],i);s.push({setV:o.setValue,cb:n})}}function It(e,t,s){for(let i in t){let r={s:e[i],e:t[i][0],ease:p[t[i][1]]};r.lerp=r.e-r.s,s.push({setV:(o,n)=>o[i]=n,cb:o=>r.s+r.lerp*r.ease(o)})}}function Ft(e,t,s){let i=[];return t?It(e,s,i):Ht(e,s,i),i}var w=Ft;var Y=class{constructor(){this.items=[],this.id=-1}push(t){return t.id=++this.id,this.items.push(t),this.on||this.loop(),t.id}update(t){for(let s=0;s<this.items.length;s++){let i=this.items[s];if(i.d){i.st||(i.st=t);let r=(t-i.st)/(i.d*1e3),o=u(0,1,r);(i.cb(o)||o===1)&&this.kill(i.id)}else i.cb(t)}this.loop()}kill(t){this.items.map((s,i)=>{s.id===t&&(s.id=null,s.st=null,this.items.splice(i,1))})}loop(){this.items.length===0?(this.on=!1,window.cancelAnimationFrame(this.raf)):(this.on=!0,this.raf=window.requestAnimationFrame(this.update.bind(this)))}},k=new Y;var N=class{constructor(){this.observers={}}obs(t){this.observers[t]={items:[],id:0};function s(){let r=this[t],o=Array.prototype.slice.call(arguments);for(let n=0;n<r.items.length;n++)r.items[n].cb(...o)}let i=r=>{this.observers[r].items=[]};return{cb:s.bind(this.observers),name:t,r:i.bind(this,t)}}add(t,s){this.observers[t]||console.error(t);let i=this.observers[t].items,r=this.observers[t].id++,o={cb:s,id:r,on:!0};return i.push(o),{item:o,r:(l=>{for(let h=0;h<i.length;h++)i[h].id==l.id&&(i[h].on=!1,i.splice(h,1))}).bind({},o)}}check(t){return!!this.observers[t]}},a=new N;function ot(e){let t=document.createElement("section"),s={start:0,end:0,lerp:.75};t.style.cssText=` position: fixed; height: 32px; width: 32px; display: flex; align-items: center; justify-content: center; font-size: 12px; background: #333; color: #fff; border-radius: 50%; pointer-events: none; `,a.add("pointermove",i=>{let r=x(i.pageX/g.size.w);t.style.top=i.pageY+-30+"px",t.style.left=i.pageX+-30*r+"px",t.textContent=r,s.start=u(0,.99999,r)}),a.add("raf",()=>{s.end=m(s.start,s.end,s.lerp),e(s.end)}),document.body.appendChild(t)}var y=class{constructor({d:t,o:s,cb:i}){this.d=t||0,this.o=s,this.cb=i,this.on=!1,this.stop=!1}play(){this.on=!0,this.stop=!1,this.d==0?this.Elp():(this.id=k.push({cb:this.loop.bind(this)}),this.f=performance.now()+this.d*1e3)}destroy(){this.stop=!0,this.on=!1}loop(t){t>this.f&&(k.kill(this.id),this.Elp())}Elp(){this.stop||(this.on=!1,k.push(this.o),this.cb&&this.cb())}};function L(e){this.isObj=!1,e instanceof Node?this.target=e:typeof e=="string"?this.target=c.el(e):(this.isObj=!0,this.target=e)}var nt=new Map;function j(e){let t=nt.get(e);return t||(nt.set(e,this),!1)}var H=class{constructor(t,s){let i=j.call(this,t);if(!i)L.call(this,t),this.init(s);else return i}init(t){this.o=t,this.mode,this.prog=0,this.elapsed=0,this.dir=0,this.d=t.d,this.late=t.late,this.from=t.from,this.oProps=t.p,this.lateO={cb:this.run.bind(this),d:this.d},this.late=new y({d:this.late,o:this.lateO}),this.props=w(this.target,this.isObj,t.p),t.from&&this.props.map(({setV:s,cb:i})=>s(this.target,i(0)))}run(t){this.on=!0,this.elapsed=u(0,1,this.prog+t);let s=Math.abs(this.dir-this.elapsed);if(this.props.map(({setV:i,cb:r})=>{let o=this.from?1-s:s;i(this.target,r(o))}),this.raf&&this.raf(s,this.target),this.elapsed==1)return this.destroy()}control(t,s){this.late.on&&this.mode!==t&&(this.mode=t,this.late.destroy()),this.mode!==t&&(this.mode=t,t==="r"?this.dir=1:this.dir=0,this.late.cb=()=>this.start&&this.start(this.target),!this.late.on&&(this.on?(this.lateO.st=null,s?this.prog=0:this.prog=1-this.elapsed):this.late.play()))}reverse(t){this.late.d=t.late||this.late.d,this.index===0&&(this.start=t.start,this.completed=t.completed,this.raf=t.raf),this.control("r")}play(t,s){this.index=s,this.index===0&&(this.start=t.start,this.completed=t.completed,this.raf=t.raf),g.string(this.oProps)!=g.string(t.p)?(this.late.d=t.late||0,this.lateO.d=t.d,this.oProps=t.p,this.props=w(this.target,this.obj,t.p),this.mode="r",this.control("p",!0)):this.control("p")}destroy(){return this.on=!1,this.prog=0,this.completed&&this.completed(this.target),!0}},lt=H;function Wt(e,t){let s;e instanceof NodeList||Array.isArray(e)?s=[...e]:s=[e];let i=s.map((o,n)=>{let l=(t.late||0)+(t.space*n||0);return new lt(o,{...t,late:l})});i.map((o,n)=>o.play(t,n));let r=i.map(o=>o.late.d);return{reverse:(o={})=>{let n=(t.late||0)-o.late;i.map((l,h)=>{o.late=r[h]-n,l.reverse(o)})},play:()=>i.map((o,n)=>o.play(t,n))}}var I=Wt;var v=(e,t)=>{let s=e.match(/(\+|\-)(.*)/);if(s){if(s[1]=="+")return t+ +s[2];if(s[1]=="-")return t-+s[2]}else return+e},F=class{constructor(t,s,i){this.el=t,this.target=s.target,this.o=s,this.dir=i,this.dirE=i=="y"?"yE":"xE",this.Init(s)}Init(t){t.target||(this.target=this.el),t.scroll&&(this.ps=t.p?w(this.target,!1,t.p):[]),t.pin&&(this.pin=t.pin,this.pin.target=t.pin.target||this.target),this.iresize=a.add("resize",this.resize.bind(this)),this.resize(),this.iraf=a.add(t.obsname,this.raf.bind(this))}resize(){let t=this.el.length?this.el[0]:this.el,s={y:t.offsetTop,yE:t.offsetTop+t.offsetHeight,x:t.offsetLeft,xE:t.offsetLeft+t.offsetWidth};this.o.scroll?(this.startpint=v(this.o.scroll.start||"+0",s[this.dir]),this.endpoint=v(this.o.scroll.end||"+0",s[this.dirE])):(this.startpint=v(this.o.start||"+0",s[this.dir]),this.endpoint=v(this.o.end||"+0",s[this.dirE])),this.o.pin&&(this.pin.start=v(this.pin.a||"+0",s[this.dir]),this.pin.end=v(this.pin.z||"+0",s[this.dirE]))}raf(t){this.coord=t;let s=this.startpint,i=this.endpoint;this.o.scroll?(this.scroll(S(s,i,this.coord)),this.o.pin&&this.piner(),this.o.raf&&this.o.raf(this.target,this.coord)):s<=this.coord&&this.fire()}scroll(t){this.ps.map(s=>{this.target.length?this.target.forEach(i=>s.setV(i,s.cb(t))):s.setV(this.target,s.cb(t))})}fire(){this.o.tween&&I(this.target,this.o.tween),this.o.completed&&this.o.completed(this.target),this.destroy()}piner(){if(this.pined&&!(this.coord>=this.pin.end)){let t=O(0,this.coord-this.pin.pxS);this.pin.target.style.transform=`translate3d(${this.dir?"0px,"+t+"px":t+"px,0px"},0px)`}this.coord<this.pin.start?this.pined=!1:this.coord>=this.pin.start&&!this.pined&&(this.pin.pxS=this.coord,this.pined=!0)}destroy(){this.iraf.r(),this.iresize.r()}},ht=F;var at=!1;function W(){if(!at){history.scrollRestoration="manual",window.onpointerdown=a.obs("pointerdown").cb,window.onpointermove=a.obs("pointermove").cb,window.onpointerup=a.obs("pointerup").cb,window.onkeydown=a.obs("keydown").cb,window.onwheel=a.obs("wheel").cb,at=!0;let e=c.node("div");e.setAttribute("data-overlay",""),e.style.cssText=` height: 100%; width: 100%; position: fixed; top: 0; left: 0; z-index: 999; pointer-events: none; `,document.body.appendChild(e)}}var z=class{constructor(t,s){this.options=s,this.attacher=t,this.target=s.target,this.dir=s.dir?s.dir:"y",this.isY=this.dir=="y",this.ePage=s.dir=="y"?"pageY":"pageX",this._init(s),this.chokeEl=c.el("[data-overlay]"),this.choke=new M({d:.3,cb:()=>b.pointer(this.chokeEl,"none")})}_init(t){W(),Object.is(this.attacher,window)?(t.drag!==!1&&(this.ipointerdown=a.add("pointerdown",this._down.bind(this)),this.ipointermove=a.add("pointermove",this._move.bind(this))),t.key!==!1&&(this.ikey=a.add("keydown",this._onkey.bind(this))),t.wheel!==!1&&(this.iwheel=a.add("wheel",this._wheel.bind(this))),this.globalevents=a.obs("globalevents").cb):(t.wheel!==!1&&(this.attacher.onwheel=this._wheel.bind(this)),t.drag!==!1&&(this.attacher.onpointerdown=this._down.bind(this),this.attacher.onpointermove=this._move.bind(this))),this.ipointerup=a.add("pointerup",this._up.bind(this)),this.dist=0,this.scroll={value:0,lerp:0,dir:1},this.speed={value:0,lerp:0}}_wheel(t){this.loop();let s=t.deltaMode==1?.83:.55,i=t.wheelDeltaY*s;this.scroll.value-=i,this.scroll.dir=Math.sign(i),this.globalevents&&this.globalevents(t,i)}_onkey(t){if(t.keyCode==40||t.keyCode==38){this.loop();let s=0;t.keyCode==40?s=-66.6:t.keyCode==38&&(s=66.6),this.scroll.value-=s,this.globalevents&&this.globalevents(t,s)}}_down(t){this.mousedown=!0,this.dist=t[this.ePage]}_move(t){if(this.mousedown){this.loop();let s=t[this.ePage]-this.dist;this.scroll.value-=s,this.dist=t[this.ePage],this.scroll.dir=Math.sign(s),this.globalevents&&(b.pointer(this.chokeEl,"all"),this.globalevents(t,s))}}_up(){this.mousedown=!1,this.choke.run()}_destroy(){this.iraf.r(),this.sub.r(),this.iresize.r(),Object.is(this.attacher,window)?(this.ipointerdown&&(this.ipointerdown.r(),this.ipointermove.r()),this.ikey&&this.ikey.r(),this.iwheel&&this.iwheel.r()):this.options!==!1&&(this.attacher.onpointerdown=null,this.attacher.onpointermove=null),this.ipointerup.r()}};var q=(e,t,s)=>{s?b.form(e,"px",0,t):b.form(e,"px",t,0)},pt=(e,t,s,i,r,o)=>{e<=s.z&&t>=s.a?(q(i,-o,r),s.out=!1):s.out||(q(i,-o,r),s.out=!0)},D=class extends z{constructor(t,s){super(t,s),this.ease=s.ease||.09,this.infinite=s.infinite,this.sub=a.obs(s.obs||Symbol("foo")),this.speed={time:performance.now(),offset:0,value:0,ease:s.speed||.3},this.iresize=a.add("resize",this.resize.bind(this)),this.iraf=a.add("raf",this.raf.bind(this)),this.resize()}loop(){this.iraf.item.on||(this.iraf=a.add("raf",this.raf.bind(this)))}add(t,s){s.obsname=this.sub.name;let i=new ht(t,s,this.dir);return this.loop(),i}raf(t){this.kids||(this.scroll.value=u(0,this.dim,this.scroll.value)),this.scroll.lerp=m(this.scroll.lerp,this.scroll.value,this.ease);let s=x(this.scroll.lerp);this.speed.time=t-this.speed.time,this.speed.offset=s-this.speed.offset,this.speed.value=m(this.speed.value,this.speed.offset/this.speed.time,this.speed.ease),this.kids?(s>this.dim?(this.scroll.value=this.scroll.value-this.dim,this.scroll.lerp=s-this.dim):s<0&&(this.scroll.value=this.dim+this.scroll.value,this.scroll.lerp=this.dim+s),this.kids.map(([i,r])=>{let o=s,n=o+this.s;if(s>this.dim-this.s){let l=s-(this.dim-this.s)-this.s,h=l+this.s;l<=r.z&&h>=r.a?q(i,this.s-h,this.isY):pt(o,n,r,i,this.isY,s)}else pt(o,n,r,i,this.isY,s)})):q(this.target,-s,this.isY),this.speed.time=t,this.speed.offset=s,this.sub&&this.sub.cb(s),s==this.scroll.value&&this.iraf.r()}resize(){if(this.bs=V(this.target),this.infinite){let s=[...this.target.children];this.kids=s.map(i=>{let r=this.isY?i.offsetTop:i.offsetLeft,o=this.isY?i.offsetHeight:i.offsetWidth;return[i,{a:r,z:r+o}]})}let t=this.isY?"h":"w";this.s=g.size[t],this.dim=this.bs[t]-(this.kids?0:this.s),this.loop()}},Dt=D;var P=" ";function Xt(e,t){document.body.append(e),e.style.visibility="hidden",e.style.position="absolute",e.style.whiteSpace="nowrap",e.style.fontFamily=t.getPropertyValue("font-family"),e.style.fontSize=t.getPropertyValue("font-size"),e.style.fontWeight=t.getPropertyValue("font-weight"),e.style.textTransform=t.getPropertyValue("text-transform"),e.style.letterSpacing=t.getPropertyValue("letter-spacing"),e.style.lineHeight=t.getPropertyValue("line-height")}function ft(e){let t=e.childNodes,s=[];for(let i=0;i<t.length;i++)s.push(Bt(t[i]));return s}function Bt(e){let t;return e.nodeType===3?t={value:e.nodeValue.split(" "),type:3}:t={value:ft(e),type:1,node:e},t}function ct(e){for(let t=0;t<e.length;t++){let s=e[t];if(s.type===3){let i=[];for(let r=0;r<s.value.length;r++)s.value[r]=s.value[r].replace(/\n/g,""),s.value[r]!==""&&i.push(s.value[r]);s.value=i}else ct(s.value)}}function dt(e,t,s){if(s.words){let i=e.words.length,r;s.ltrs?r=e.words.reduce((o,n,l)=>{let h="";for(let d=0;d<n.length;d++)h+=E(n[d],3);return o+E(h+(l==i-1?"":P),2)},""):r=e.words.reduce((o,n,l)=>o+E(n+(l==i-1?"":P),2),""),t.push({line:E(r,1)})}else t.push({line:E(e.value,1)})}function E(e,t){if(t===1)return`<div class="tfx"><span>${e}</span></div>`;if(t===2)return`<span class="word">${e}</span>`;if(t===3)return`<span class="ltr">${e}</span>`}function Gt(e,t,s,i,r,o){for(let n=0;n<e.length;n++){let l=e[n];t.value+=l,s.innerHTML=t.value,t.words.push(l),s.offsetWidth>i&&(t.words.pop(),dt(t,r,o),t.value=l,t.words=[l+P]),t.value+=P}}function Rt(e,t,s,i){let r={value:"",words:[]},o=[];for(let n=0;n<e.length;n++){let l=e[n];l.type===3&&Gt(l.value,r,t,s,o,i)}return dt(r,o,i),o}function Jt(e,t){let s=$(e),i=document.createElement("div");t.ltrs&&(t.words=!0),Xt(i,s);let r=e.offsetWidth,o=ft(e);ct(o);let n=Rt(o,i,r,t);return e.innerHTML="",document.body.removeChild(i),n.map(({line:l})=>e.innerHTML+=l),{lines:c.sEls(e,".tfx"),words:c.sEls(e,".word"),ltrs:c.sEls(e,".ltr")}}var Kt=Jt;export{V as bounds,M as choke,u as clamp,$ as computed,b as cssSet,p as ease,gt as has,g as iSet,y as late,m as lerp,Kt as line,S as map,w as props,c as query,k as raf,mt as remap,x as round,Dt as scroll,ot as scrub,a as sub,I as tween,O as zero};
