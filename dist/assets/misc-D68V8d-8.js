import{a as _,R as T}from"./react-core-Bge6N3u6.js";import{c as P}from"./ui-libs-CrLb6UIN.js";function lt(t={}){const{nonce:e,locale:o,onScriptLoadSuccess:r,onScriptLoadError:s}=t,[i,a]=_.useState(!1),d=_.useRef(r);d.current=r;const f=_.useRef(s);return f.current=s,_.useEffect(()=>{const c=document.createElement("script");return c.src="https://accounts.google.com/gsi/client",o&&(c.src+=`?hl=${o}`),c.async=!0,c.defer=!0,c.nonce=e,c.onload=()=>{var y;a(!0),(y=d.current)===null||y===void 0||y.call(d)},c.onerror=()=>{var y;a(!1),(y=f.current)===null||y===void 0||y.call(f)},document.body.appendChild(c),()=>{document.body.removeChild(c)}},[e]),i}const Z=_.createContext(null);function Vt({clientId:t,nonce:e,locale:o,onScriptLoadSuccess:r,onScriptLoadError:s,children:i}){const a=lt({nonce:e,onScriptLoadSuccess:r,onScriptLoadError:s,locale:o}),d=_.useMemo(()=>({locale:o,clientId:t,scriptLoadedSuccessfully:a}),[t,a]);return T.createElement(Z.Provider,{value:d},i)}function ct(){const t=_.useContext(Z);if(!t)throw new Error("Google OAuth components must be used within GoogleOAuthProvider");return t}function Yt({flow:t="implicit",scope:e="",onSuccess:o,onError:r,onNonOAuthError:s,overrideScope:i,state:a,...d}){const{clientId:f,scriptLoadedSuccessfully:c}=ct(),y=_.useRef(),k=_.useRef(o);k.current=o;const w=_.useRef(r);w.current=r;const E=_.useRef(s);E.current=s,_.useEffect(()=>{var m,p;if(!c)return;const n=t==="implicit"?"initTokenClient":"initCodeClient",l=(p=(m=window?.google)===null||m===void 0?void 0:m.accounts)===null||p===void 0?void 0:p.oauth2[n]({client_id:f,scope:i?e:`openid profile email ${e}`,callback:u=>{var b,I;if(u.error)return(b=w.current)===null||b===void 0?void 0:b.call(w,u);(I=k.current)===null||I===void 0||I.call(k,u)},error_callback:u=>{var b;(b=E.current)===null||b===void 0||b.call(E,u)},state:a,...d});y.current=l},[f,c,t,e,a]);const C=_.useCallback(m=>{var p;return(p=y.current)===null||p===void 0?void 0:p.requestAccessToken(m)},[]),v=_.useCallback(()=>{var m;return(m=y.current)===null||m===void 0?void 0:m.requestCode()},[]);return t==="implicit"?C:v}var N=t=>typeof t=="number"&&!isNaN(t),S=t=>typeof t=="string",A=t=>typeof t=="function",ft=t=>S(t)||N(t),q=t=>S(t)||A(t)?t:null,dt=(t,e)=>t===!1||N(t)&&t>0?t:e,K=t=>_.isValidElement(t)||S(t)||A(t)||N(t);function ut(t,e,o=300){let{scrollHeight:r,style:s}=t;requestAnimationFrame(()=>{s.minHeight="initial",s.height=r+"px",s.transition=`all ${o}ms`,requestAnimationFrame(()=>{s.height="0",s.padding="0",s.margin="0",setTimeout(e,o)})})}function yt({enter:t,exit:e,appendPosition:o=!1,collapse:r=!0,collapseDuration:s=300}){return function({children:i,position:a,preventExitTransition:d,done:f,nodeRef:c,isIn:y,playToast:k}){let w=o?`${t}--${a}`:t,E=o?`${e}--${a}`:e,C=_.useRef(0);return _.useLayoutEffect(()=>{let v=c.current,m=w.split(" "),p=n=>{n.target===c.current&&(k(),v.removeEventListener("animationend",p),v.removeEventListener("animationcancel",p),C.current===0&&n.type!=="animationcancel"&&v.classList.remove(...m))};v.classList.add(...m),v.addEventListener("animationend",p),v.addEventListener("animationcancel",p)},[]),_.useEffect(()=>{let v=c.current,m=()=>{v.removeEventListener("animationend",m),r?ut(v,f,s):f()};y||(d?m():(C.current=1,v.className+=` ${E}`,v.addEventListener("animationend",m)))},[y]),T.createElement(T.Fragment,null,i)}}function j(t,e){return{content:tt(t.content,t.props),containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,reason:t.removalReason,status:e}}function tt(t,e,o=!1){return _.isValidElement(t)&&!S(t.type)?_.cloneElement(t,{closeToast:e.closeToast,toastProps:e,data:e.data,isPaused:o}):A(t)?t({closeToast:e.closeToast,toastProps:e,data:e.data,isPaused:o}):t}function mt({closeToast:t,theme:e,ariaLabel:o="close"}){return T.createElement("button",{className:`Toastify__close-button Toastify__close-button--${e}`,type:"button",onClick:r=>{r.stopPropagation(),t(!0)},"aria-label":o},T.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},T.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function pt({delay:t,isRunning:e,closeToast:o,type:r="default",hide:s,className:i,controlledProgress:a,progress:d,rtl:f,isIn:c,theme:y}){let k=s||a&&d===0,w={animationDuration:`${t}ms`,animationPlayState:e?"running":"paused"};a&&(w.transform=`scaleX(${d})`);let E=P("Toastify__progress-bar",a?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${y}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":f}),C=A(i)?i({rtl:f,type:r,defaultClassName:E}):P(E,i),v={[a&&d>=1?"onTransitionEnd":"onAnimationEnd"]:a&&d<1?null:()=>{c&&o()}};return T.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":k},T.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${y} Toastify__progress-bar--${r}`}),T.createElement("div",{role:"progressbar","aria-hidden":k?"true":"false","aria-label":"notification timer","aria-valuenow":a?Math.round(d*100):void 0,"aria-valuemin":0,"aria-valuemax":100,className:C,style:w,...v}))}var _t=1,et=()=>`${_t++}`;function gt(t,e,o){let r=1,s=0,i=[],a=[],d=e,f=new Map,c=new Set,y=n=>(c.add(n),()=>c.delete(n)),k=()=>{a=Array.from(f.values()),c.forEach(n=>n())},w=({containerId:n,toastId:l,updateId:u})=>{let b=n?n!==t:t!==1,I=f.has(l)&&u==null;return b||I},E=(n,l)=>{f.forEach(u=>{var b;(l==null||l===u.props.toastId)&&((b=u.toggle)==null||b.call(u,n))})},C=n=>{var l,u;n.isActive&&((u=(l=n.props)==null?void 0:l.onClose)==null||u.call(l,n.removalReason),n.isActive=!1,o(j(n,"removed")))},v=n=>{if(n==null)f.forEach(C);else{let l=f.get(n);l&&C(l)}k()},m=()=>{s-=i.length,i=[]},p=n=>{var l,u;let{toastId:b,updateId:I}=n.props,g=I==null;n.staleId&&f.delete(n.staleId),n.isActive=!0,f.set(b,n),k(),o(j(n,g?"added":"updated")),g&&((u=(l=n.props).onOpen)==null||u.call(l))};return{id:t,props:d,observe:y,toggle:E,removeToast:v,toasts:f,clearQueue:m,buildToast:(n,l)=>{if(w(l))return;let{toastId:u,updateId:b,data:I,staleId:g,delay:x}=l,R=b==null;R&&s++;let O={...d,style:d.toastStyle,key:r++,...Object.fromEntries(Object.entries(l).filter(([B,$])=>$!=null)),toastId:u,updateId:b,data:I,isIn:!1,className:q(l.className||d.toastClassName),progressClassName:q(l.progressClassName||d.progressClassName),autoClose:l.isLoading?!1:dt(l.autoClose,d.autoClose),closeToast(B){let $=f.get(u);$&&($.removalReason=B,v(u))},deleteToast(){if(f.get(u)!=null){if(f.delete(u),s--,s<0&&(s=0),i.length>0){p(i.shift());return}k()}}};O.closeButton=d.closeButton,l.closeButton===!1||K(l.closeButton)?O.closeButton=l.closeButton:l.closeButton===!0&&(O.closeButton=K(d.closeButton)?d.closeButton:!0);let z={content:n,props:O,staleId:g};d.limit&&d.limit>0&&s>d.limit&&R?i.push(z):N(x)?setTimeout(()=>{p(z)},x):p(z)},setProps(n){d=n},setToggle:(n,l)=>{let u=f.get(n);u&&(u.toggle=l)},isToastActive:n=>{var l;return(l=f.get(n))==null?void 0:l.isActive},getSnapshot:()=>a}}var L=new Map,D=[],V=new Set,vt=t=>V.forEach(e=>e(t)),ot=()=>L.size>0;function bt(){D.forEach(t=>rt(t.content,t.options)),D=[]}var ht=(t,{containerId:e})=>{var o;return(o=L.get(e||1))==null?void 0:o.toasts.get(t)};function at(t,e){var o;if(e)return!!((o=L.get(e))!=null&&o.isToastActive(t));let r=!1;return L.forEach(s=>{s.isToastActive(t)&&(r=!0)}),r}function Tt(t){if(!ot()){D=D.filter(e=>t!=null&&e.options.toastId!==t);return}if(t==null||ft(t))L.forEach(e=>{e.removeToast(t)});else if(t&&("containerId"in t||"id"in t)){let e=L.get(t.containerId);e?e.removeToast(t.id):L.forEach(o=>{o.removeToast(t.id)})}}var xt=(t={})=>{L.forEach(e=>{e.props.limit&&(!t.containerId||e.id===t.containerId)&&e.clearQueue()})};function rt(t,e){K(t)&&(ot()||D.push({content:t,options:e}),L.forEach(o=>{o.buildToast(t,e)}))}function kt(t){var e;(e=L.get(t.containerId||1))==null||e.setToggle(t.id,t.fn)}function st(t,e){L.forEach(o=>{(e==null||!(e!=null&&e.containerId)||e?.containerId===o.id)&&o.toggle(t,e?.id)})}function Et(t){let e=t.containerId||1;return{subscribe(o){let r=gt(e,t,vt);L.set(e,r);let s=r.observe(o);return bt(),()=>{s(),L.delete(e)}},setProps(o){var r;(r=L.get(e))==null||r.setProps(o)},getSnapshot(){var o;return(o=L.get(e))==null?void 0:o.getSnapshot()}}}function wt(t){return V.add(t),()=>{V.delete(t)}}function It(t){return t&&(S(t.toastId)||N(t.toastId))?t.toastId:et()}function M(t,e){return rt(t,e),e.toastId}function U(t,e){return{...e,type:e&&e.type||t,toastId:It(e)}}function F(t){return(e,o)=>M(e,U(t,o))}function h(t,e){return M(t,U("default",e))}h.loading=(t,e)=>M(t,U("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e}));function Ct(t,{pending:e,error:o,success:r},s){let i;e&&(i=S(e)?h.loading(e,s):h.loading(e.render,{...s,...e}));let a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},d=(c,y,k)=>{if(y==null){h.dismiss(i);return}let w={type:c,...a,...s,data:k},E=S(y)?{render:y}:y;return i?h.update(i,{...w,...E}):h(E.render,{...w,...E}),k},f=A(t)?t():t;return f.then(c=>d("success",r,c)).catch(c=>d("error",o,c)),f}h.promise=Ct;h.success=F("success");h.info=F("info");h.error=F("error");h.warning=F("warning");h.warn=h.warning;h.dark=(t,e)=>M(t,U("default",{theme:"dark",...e}));function Lt(t){Tt(t)}h.dismiss=Lt;h.clearWaitingQueue=xt;h.isActive=at;h.update=(t,e={})=>{let o=ht(t,e);if(o){let{props:r,content:s}=o,i={delay:100,...r,...e,toastId:e.toastId||t,updateId:et()};i.toastId!==t&&(i.staleId=t);let a=i.render||s;delete i.render,M(a,i)}};h.done=t=>{h.update(t,{progress:1})};h.onChange=wt;h.play=t=>st(!0,t);h.pause=t=>st(!1,t);function Rt(t){var e;let{subscribe:o,getSnapshot:r,setProps:s}=_.useRef(Et(t)).current;s(t);let i=(e=_.useSyncExternalStore(o,r,r))==null?void 0:e.slice();function a(d){if(!i)return[];let f=new Map;return t.newestOnTop&&i.reverse(),i.forEach(c=>{let{position:y}=c.props;f.has(y)||f.set(y,[]),f.get(y).push(c)}),Array.from(f,c=>d(c[0],c[1]))}return{getToastToRender:a,isToastActive:at,count:i?.length}}function Ot(t){let[e,o]=_.useState(!1),[r,s]=_.useState(!1),i=_.useRef(null),a=_.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:d,pauseOnHover:f,closeToast:c,onClick:y,closeOnClick:k}=t;kt({id:t.toastId,containerId:t.containerId,fn:o}),_.useEffect(()=>{if(t.pauseOnFocusLoss)return w(),()=>{E()}},[t.pauseOnFocusLoss]);function w(){document.hasFocus()||p(),window.addEventListener("focus",m),window.addEventListener("blur",p)}function E(){window.removeEventListener("focus",m),window.removeEventListener("blur",p)}function C(g){if(t.draggable===!0||t.draggable===g.pointerType){n();let x=i.current;a.canCloseOnClick=!0,a.canDrag=!0,x.style.transition="none",t.draggableDirection==="x"?(a.start=g.clientX,a.removalDistance=x.offsetWidth*(t.draggablePercent/100)):(a.start=g.clientY,a.removalDistance=x.offsetHeight*(t.draggablePercent===80?t.draggablePercent*1.5:t.draggablePercent)/100)}}function v(g){let{top:x,bottom:R,left:O,right:z}=i.current.getBoundingClientRect();g.pointerType==="mouse"&&t.pauseOnHover&&g.clientX>=O&&g.clientX<=z&&g.clientY>=x&&g.clientY<=R?p():m()}function m(){o(!0)}function p(){o(!1)}function n(){a.didMove=!1,document.addEventListener("pointermove",u),document.addEventListener("pointerup",b)}function l(){document.removeEventListener("pointermove",u),document.removeEventListener("pointerup",b)}function u(g){let x=i.current;if(a.canDrag&&x){a.didMove=!0,e&&p(),t.draggableDirection==="x"?a.delta=g.clientX-a.start:a.delta=g.clientY-a.start,a.start!==g.clientX&&(a.canCloseOnClick=!1);let R=t.draggableDirection==="x"?`${a.delta}px, var(--y)`:`0, calc(${a.delta}px + var(--y))`;x.style.transform=`translate3d(${R},0)`,x.style.opacity=`${1-Math.abs(a.delta/a.removalDistance)}`}}function b(){l();let g=i.current;if(a.canDrag&&a.didMove&&g){if(a.canDrag=!1,Math.abs(a.delta)>a.removalDistance){s(!0),t.closeToast(!0),t.collapseAll();return}g.style.transition="transform 0.2s, opacity 0.2s",g.style.removeProperty("transform"),g.style.removeProperty("opacity")}}let I={onPointerDown:C,onPointerUp:v};return d&&f&&(I.onMouseEnter=p,t.stacked||(I.onMouseLeave=m)),k&&(I.onClick=g=>{y&&y(g),a.canCloseOnClick&&c(!0)}),{playToast:m,pauseToast:p,isRunning:e,preventExitTransition:r,toastRef:i,eventHandlers:I}}var nt=typeof window<"u"?_.useLayoutEffect:_.useEffect,G=({theme:t,type:e,isLoading:o,...r})=>T.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${e})`,...r});function zt(t){return T.createElement(G,{...t},T.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function At(t){return T.createElement(G,{...t},T.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function $t(t){return T.createElement(G,{...t},T.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function Pt(t){return T.createElement(G,{...t},T.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function St(){return T.createElement("div",{className:"Toastify__spinner"})}var Y={info:At,warning:zt,success:$t,error:Pt,spinner:St},Dt=t=>t in Y;function Nt({theme:t,type:e,isLoading:o,icon:r}){let s=null,i={theme:t,type:e};return r===!1||(A(r)?s=r({...i,isLoading:o}):_.isValidElement(r)?s=_.cloneElement(r,i):o?s=Y.spinner():Dt(e)&&(s=Y[e](i))),s}var Mt=t=>{let{isRunning:e,preventExitTransition:o,toastRef:r,eventHandlers:s,playToast:i}=Ot(t),{closeButton:a,children:d,autoClose:f,onClick:c,type:y,hideProgressBar:k,closeToast:w,transition:E,position:C,className:v,style:m,progressClassName:p,updateId:n,role:l,progress:u,rtl:b,toastId:I,deleteToast:g,isIn:x,isLoading:R,closeOnClick:O,theme:z,ariaLabel:B}=t,$=P("Toastify__toast",`Toastify__toast-theme--${z}`,`Toastify__toast--${y}`,{"Toastify__toast--rtl":b},{"Toastify__toast--close-on-click":O}),it=A(v)?v({rtl:b,position:C,type:y,defaultClassName:$}):P($,v),Q=Nt(t),W=!!u||!f,H={closeToast:w,type:y,theme:z},X=null;return a===!1||(A(a)?X=a(H):_.isValidElement(a)?X=_.cloneElement(a,H):X=mt(H)),T.createElement(E,{isIn:x,done:g,position:C,preventExitTransition:o,nodeRef:r,playToast:i},T.createElement("div",{id:I,tabIndex:0,onClick:c,"data-in":x,className:it,...s,style:m,ref:r,...x&&{role:l,"aria-label":B}},Q!=null&&T.createElement("div",{className:P("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!R})},Q),tt(d,t,!e),X,!t.customProgressBar&&T.createElement(pt,{...n&&!W?{key:`p-${n}`}:{},rtl:b,theme:z,delay:f,isRunning:e,isIn:x,closeToast:w,hide:k,type:y,className:p,controlledProgress:W,progress:u||0})))},Bt=(t,e=!1)=>({enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}),Xt=yt(Bt("bounce",!0)),Ut={position:"top-right",transition:Xt,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:t=>t.altKey&&t.code==="KeyT"};function Ft(t){let e={...Ut,...t},o=t.stacked,[r,s]=_.useState(!0),i=_.useRef(null),{getToastToRender:a,isToastActive:d,count:f}=Rt(e),{className:c,style:y,rtl:k,containerId:w,hotKeys:E}=e;function C(m){let p=P("Toastify__toast-container",`Toastify__toast-container--${m}`,{"Toastify__toast-container--rtl":k});return A(c)?c({position:m,rtl:k,defaultClassName:p}):P(p,q(c))}function v(){o&&(s(!0),h.play())}return nt(()=>{var m;if(o){let p=i.current.querySelectorAll('[data-in="true"]'),n=12,l=(m=e.position)==null?void 0:m.includes("top"),u=0,b=0;Array.from(p).reverse().forEach((I,g)=>{let x=I;x.classList.add("Toastify__toast--stacked"),g>0&&(x.dataset.collapsed=`${r}`),x.dataset.pos||(x.dataset.pos=l?"top":"bot");let R=u*(r?.2:1)+(r?0:n*g),O=Math.max(.5,1-(r?b:0));x.style.setProperty("--y",`${l?R:R*-1}px`),x.style.setProperty("--g",`${n}`),x.style.setProperty("--s",`${O}`),u+=x.offsetHeight,b+=.025})}},[r,f,o]),_.useEffect(()=>{function m(p){var n;let l=i.current;E(p)&&((n=l?.querySelector('[tabIndex="0"]'))==null||n.focus(),s(!1),h.pause()),p.key==="Escape"&&(document.activeElement===l||l!=null&&l.contains(document.activeElement))&&(s(!0),h.play())}return document.addEventListener("keydown",m),()=>{document.removeEventListener("keydown",m)}},[E]),T.createElement("section",{ref:i,className:"Toastify",id:w,onMouseEnter:()=>{o&&(s(!1),h.pause())},onMouseLeave:v,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":e["aria-label"]},a((m,p)=>{let n=p.length?{...y}:{...y,pointerEvents:"none"};return T.createElement("div",{tabIndex:-1,className:C(m),"data-stacked":o,style:n,key:`c-${m}`},p.map(({content:l,props:u})=>T.createElement(Mt,{...u,stacked:o,collapseAll:v,isIn:d(u.toastId,u.containerId),key:`t-${u.key}`},l)))}))}var Gt=`:root {
  --toastify-color-light: #fff;
  --toastify-color-dark: #121212;
  --toastify-color-info: #3498db;
  --toastify-color-success: #07bc0c;
  --toastify-color-warning: #f1c40f;
  --toastify-color-error: hsl(6, 78%, 57%);
  --toastify-color-transparent: rgba(255, 255, 255, 0.7);

  --toastify-icon-color-info: var(--toastify-color-info);
  --toastify-icon-color-success: var(--toastify-color-success);
  --toastify-icon-color-warning: var(--toastify-color-warning);
  --toastify-icon-color-error: var(--toastify-color-error);

  --toastify-container-width: fit-content;
  --toastify-toast-width: 320px;
  --toastify-toast-offset: 16px;
  --toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));
  --toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));
  --toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));
  --toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));
  --toastify-toast-background: #fff;
  --toastify-toast-padding: 14px;
  --toastify-toast-min-height: 64px;
  --toastify-toast-max-height: 800px;
  --toastify-toast-bd-radius: 6px;
  --toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  --toastify-font-family: sans-serif;
  --toastify-z-index: 9999;
  --toastify-text-color-light: #757575;
  --toastify-text-color-dark: #fff;

  /* Used only for colored theme */
  --toastify-text-color-info: #fff;
  --toastify-text-color-success: #fff;
  --toastify-text-color-warning: #fff;
  --toastify-text-color-error: #fff;

  --toastify-spinner-color: #616161;
  --toastify-spinner-color-empty-area: #e0e0e0;
  --toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);
  --toastify-color-progress-dark: #bb86fc;
  --toastify-color-progress-info: var(--toastify-color-info);
  --toastify-color-progress-success: var(--toastify-color-success);
  --toastify-color-progress-warning: var(--toastify-color-warning);
  --toastify-color-progress-error: var(--toastify-color-error);
  /* used to control the opacity of the progress trail */
  --toastify-color-progress-bgo: 0.2;
}

.Toastify__toast-container {
  z-index: var(--toastify-z-index);
  -webkit-transform: translate3d(0, 0, var(--toastify-z-index));
  position: fixed;
  width: var(--toastify-container-width);
  box-sizing: border-box;
  color: #fff;
  display: flex;
  flex-direction: column;
}

.Toastify__toast-container--top-left {
  top: var(--toastify-toast-top);
  left: var(--toastify-toast-left);
}
.Toastify__toast-container--top-center {
  top: var(--toastify-toast-top);
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
}
.Toastify__toast-container--top-right {
  top: var(--toastify-toast-top);
  right: var(--toastify-toast-right);
  align-items: end;
}
.Toastify__toast-container--bottom-left {
  bottom: var(--toastify-toast-bottom);
  left: var(--toastify-toast-left);
}
.Toastify__toast-container--bottom-center {
  bottom: var(--toastify-toast-bottom);
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
}
.Toastify__toast-container--bottom-right {
  bottom: var(--toastify-toast-bottom);
  right: var(--toastify-toast-right);
  align-items: end;
}

.Toastify__toast {
  --y: 0px;
  position: relative;
  touch-action: none;
  width: var(--toastify-toast-width);
  min-height: var(--toastify-toast-min-height);
  box-sizing: border-box;
  margin-bottom: 1rem;
  padding: var(--toastify-toast-padding);
  border-radius: var(--toastify-toast-bd-radius);
  box-shadow: var(--toastify-toast-shadow);
  max-height: var(--toastify-toast-max-height);
  font-family: var(--toastify-font-family);
  /* webkit only issue #791 */
  z-index: 0;
  /* inner swag */
  display: flex;
  flex: 1 auto;
  align-items: center;
  word-break: break-word;
}

@media only screen and (max-width: 480px) {
  .Toastify__toast-container {
    width: 100vw;
    left: env(safe-area-inset-left);
    margin: 0;
  }
  .Toastify__toast-container--top-left,
  .Toastify__toast-container--top-center,
  .Toastify__toast-container--top-right {
    top: env(safe-area-inset-top);
    transform: translateX(0);
  }
  .Toastify__toast-container--bottom-left,
  .Toastify__toast-container--bottom-center,
  .Toastify__toast-container--bottom-right {
    bottom: env(safe-area-inset-bottom);
    transform: translateX(0);
  }
  .Toastify__toast-container--rtl {
    right: env(safe-area-inset-right);
    left: initial;
  }
  .Toastify__toast {
    --toastify-toast-width: 100%;
    margin-bottom: 0;
    border-radius: 0;
  }
}

.Toastify__toast-container[data-stacked='true'] {
  width: var(--toastify-toast-width);
}

@media only screen and (max-width: 480px) {
  .Toastify__toast-container[data-stacked='true'] {
    width: 100vw;
  }
}

.Toastify__toast--stacked {
  position: absolute;
  width: 100%;
  transform: translate3d(0, var(--y), 0) scale(var(--s));
  transition: transform 0.3s;
}

.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,
.Toastify__toast--stacked[data-collapsed] .Toastify__close-button {
  transition: opacity 0.1s;
}

.Toastify__toast--stacked[data-collapsed='false'] {
  overflow: visible;
}

.Toastify__toast--stacked[data-collapsed='true']:not(:last-child) > * {
  opacity: 0;
}

.Toastify__toast--stacked:after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: calc(var(--g) * 1px);
  bottom: 100%;
}

.Toastify__toast--stacked[data-pos='top'] {
  top: 0;
}

.Toastify__toast--stacked[data-pos='bot'] {
  bottom: 0;
}

.Toastify__toast--stacked[data-pos='bot'].Toastify__toast--stacked:before {
  transform-origin: top;
}

.Toastify__toast--stacked[data-pos='top'].Toastify__toast--stacked:before {
  transform-origin: bottom;
}

.Toastify__toast--stacked:before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  transform: scaleY(3);
  z-index: -1;
}

.Toastify__toast--rtl {
  direction: rtl;
}

.Toastify__toast--close-on-click {
  cursor: pointer;
}

.Toastify__toast-icon {
  margin-inline-end: 10px;
  width: 22px;
  flex-shrink: 0;
  display: flex;
}

.Toastify--animate {
  animation-fill-mode: both;
  animation-duration: 0.5s;
}

.Toastify--animate-icon {
  animation-fill-mode: both;
  animation-duration: 0.3s;
}

.Toastify__toast-theme--dark {
  background: var(--toastify-color-dark);
  color: var(--toastify-text-color-dark);
}

.Toastify__toast-theme--light {
  background: var(--toastify-color-light);
  color: var(--toastify-text-color-light);
}

.Toastify__toast-theme--colored.Toastify__toast--default {
  background: var(--toastify-color-light);
  color: var(--toastify-text-color-light);
}

.Toastify__toast-theme--colored.Toastify__toast--info {
  color: var(--toastify-text-color-info);
  background: var(--toastify-color-info);
}

.Toastify__toast-theme--colored.Toastify__toast--success {
  color: var(--toastify-text-color-success);
  background: var(--toastify-color-success);
}

.Toastify__toast-theme--colored.Toastify__toast--warning {
  color: var(--toastify-text-color-warning);
  background: var(--toastify-color-warning);
}

.Toastify__toast-theme--colored.Toastify__toast--error {
  color: var(--toastify-text-color-error);
  background: var(--toastify-color-error);
}

.Toastify__progress-bar-theme--light {
  background: var(--toastify-color-progress-light);
}

.Toastify__progress-bar-theme--dark {
  background: var(--toastify-color-progress-dark);
}

.Toastify__progress-bar--info {
  background: var(--toastify-color-progress-info);
}

.Toastify__progress-bar--success {
  background: var(--toastify-color-progress-success);
}

.Toastify__progress-bar--warning {
  background: var(--toastify-color-progress-warning);
}

.Toastify__progress-bar--error {
  background: var(--toastify-color-progress-error);
}

.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error {
  background: var(--toastify-color-transparent);
}

.Toastify__close-button {
  color: #fff;
  position: absolute;
  top: 6px;
  right: 6px;
  background: transparent;
  outline: none;
  border: none;
  padding: 0;
  cursor: pointer;
  opacity: 0.7;
  transition: 0.3s ease;
  z-index: 1;
}

.Toastify__toast--rtl .Toastify__close-button {
  left: 6px;
  right: unset;
}

.Toastify__close-button--light {
  color: #000;
  opacity: 0.3;
}

.Toastify__close-button > svg {
  fill: currentColor;
  height: 16px;
  width: 14px;
}

.Toastify__close-button:hover,
.Toastify__close-button:focus {
  opacity: 1;
}

@keyframes Toastify__trackProgress {
  0% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0);
  }
}

.Toastify__progress-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.7;
  transform-origin: left;
}

.Toastify__progress-bar--animated {
  animation: Toastify__trackProgress linear 1 forwards;
}

.Toastify__progress-bar--controlled {
  transition: transform 0.2s;
}

.Toastify__progress-bar--rtl {
  right: 0;
  left: initial;
  transform-origin: right;
  border-bottom-left-radius: initial;
}

.Toastify__progress-bar--wrp {
  position: absolute;
  overflow: hidden;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  border-bottom-left-radius: var(--toastify-toast-bd-radius);
  border-bottom-right-radius: var(--toastify-toast-bd-radius);
}

.Toastify__progress-bar--wrp[data-hidden='true'] {
  opacity: 0;
}

.Toastify__progress-bar--bg {
  opacity: var(--toastify-color-progress-bgo);
  width: 100%;
  height: 100%;
}

.Toastify__spinner {
  width: 20px;
  height: 20px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: var(--toastify-spinner-color-empty-area);
  border-right-color: var(--toastify-spinner-color);
  animation: Toastify__spin 0.65s linear infinite;
}

@keyframes Toastify__bounceInRight {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0);
  }
  75% {
    transform: translate3d(10px, 0, 0);
  }
  90% {
    transform: translate3d(-5px, 0, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutRight {
  20% {
    opacity: 1;
    transform: translate3d(-20px, var(--y), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(2000px, var(--y), 0);
  }
}

@keyframes Toastify__bounceInLeft {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0);
  }
  75% {
    transform: translate3d(-10px, 0, 0);
  }
  90% {
    transform: translate3d(5px, 0, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutLeft {
  20% {
    opacity: 1;
    transform: translate3d(20px, var(--y), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(-2000px, var(--y), 0);
  }
}

@keyframes Toastify__bounceInUp {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0);
  }
  75% {
    transform: translate3d(0, 10px, 0);
  }
  90% {
    transform: translate3d(0, -5px, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes Toastify__bounceOutUp {
  20% {
    transform: translate3d(0, calc(var(--y) - 10px), 0);
  }
  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, calc(var(--y) + 20px), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
}

@keyframes Toastify__bounceInDown {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0);
  }
  75% {
    transform: translate3d(0, -10px, 0);
  }
  90% {
    transform: translate3d(0, 5px, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutDown {
  20% {
    transform: translate3d(0, calc(var(--y) - 10px), 0);
  }
  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, calc(var(--y) + 20px), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
}

.Toastify__bounce-enter--top-left,
.Toastify__bounce-enter--bottom-left {
  animation-name: Toastify__bounceInLeft;
}

.Toastify__bounce-enter--top-right,
.Toastify__bounce-enter--bottom-right {
  animation-name: Toastify__bounceInRight;
}

.Toastify__bounce-enter--top-center {
  animation-name: Toastify__bounceInDown;
}

.Toastify__bounce-enter--bottom-center {
  animation-name: Toastify__bounceInUp;
}

.Toastify__bounce-exit--top-left,
.Toastify__bounce-exit--bottom-left {
  animation-name: Toastify__bounceOutLeft;
}

.Toastify__bounce-exit--top-right,
.Toastify__bounce-exit--bottom-right {
  animation-name: Toastify__bounceOutRight;
}

.Toastify__bounce-exit--top-center {
  animation-name: Toastify__bounceOutUp;
}

.Toastify__bounce-exit--bottom-center {
  animation-name: Toastify__bounceOutDown;
}

@keyframes Toastify__zoomIn {
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
  }
}

@keyframes Toastify__zoomOut {
  from {
    opacity: 1;
  }
  50% {
    opacity: 0;
    transform: translate3d(0, var(--y), 0) scale3d(0.3, 0.3, 0.3);
  }
  to {
    opacity: 0;
  }
}

.Toastify__zoom-enter {
  animation-name: Toastify__zoomIn;
}

.Toastify__zoom-exit {
  animation-name: Toastify__zoomOut;
}

@keyframes Toastify__flipIn {
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }
  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }
  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }
  to {
    transform: perspective(400px);
  }
}

@keyframes Toastify__flipOut {
  from {
    transform: translate3d(0, var(--y), 0) perspective(400px);
  }
  30% {
    transform: translate3d(0, var(--y), 0) perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }
  to {
    transform: translate3d(0, var(--y), 0) perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
}

.Toastify__flip-enter {
  animation-name: Toastify__flipIn;
}

.Toastify__flip-exit {
  animation-name: Toastify__flipOut;
}

@keyframes Toastify__slideInRight {
  from {
    transform: translate3d(110%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInLeft {
  from {
    transform: translate3d(-110%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInUp {
  from {
    transform: translate3d(0, 110%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInDown {
  from {
    transform: translate3d(0, -110%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideOutRight {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(110%, var(--y), 0);
  }
}

@keyframes Toastify__slideOutLeft {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(-110%, var(--y), 0);
  }
}

@keyframes Toastify__slideOutDown {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(0, 500px, 0);
  }
}

@keyframes Toastify__slideOutUp {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(0, -500px, 0);
  }
}

.Toastify__slide-enter--top-left,
.Toastify__slide-enter--bottom-left {
  animation-name: Toastify__slideInLeft;
}

.Toastify__slide-enter--top-right,
.Toastify__slide-enter--bottom-right {
  animation-name: Toastify__slideInRight;
}

.Toastify__slide-enter--top-center {
  animation-name: Toastify__slideInDown;
}

.Toastify__slide-enter--bottom-center {
  animation-name: Toastify__slideInUp;
}

.Toastify__slide-exit--top-left,
.Toastify__slide-exit--bottom-left {
  animation-name: Toastify__slideOutLeft;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--top-right,
.Toastify__slide-exit--bottom-right {
  animation-name: Toastify__slideOutRight;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--top-center {
  animation-name: Toastify__slideOutUp;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--bottom-center {
  animation-name: Toastify__slideOutDown;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

@keyframes Toastify__spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`,J=new Map,Ht=(t,e)=>{nt(()=>{if(typeof document>"u")return;let o=document,r=J.get(o);if(r){e&&r.setAttribute("nonce",e);return}let s=o.createElement("style");s.textContent=t,e&&s.setAttribute("nonce",e),o.head.appendChild(s),J.set(o,s)},[e])};function Qt(t){return Ht(Gt,t.nonce),T.createElement(Ft,{...t})}export{Vt as G,Yt as u,Qt as x,h as y};
