"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5048],{79249:function(e,t,n){let l;n.d(t,{I0:function(){return E},XB:function(){return f},fC:function(){return b}});var i=n(13428),o=n(2265),s=n(85744),a=n(9381),u=n(42210),d=n(16459);let c="dismissableLayer.update",v=(0,o.createContext)({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),f=(0,o.forwardRef)((e,t)=>{var n;let{disableOutsidePointerEvents:f=!1,onEscapeKeyDown:h,onPointerDownOutside:b,onFocusOutside:E,onInteractOutside:p,onDismiss:y,...m}=e,w=(0,o.useContext)(v),[D,g]=(0,o.useState)(null),C=null!==(n=null==D?void 0:D.ownerDocument)&&void 0!==n?n:null==globalThis?void 0:globalThis.document,[,P]=(0,o.useState)({}),O=(0,u.e)(t,e=>g(e)),$=Array.from(w.layers),[L]=[...w.layersWithOutsidePointerEventsDisabled].slice(-1),T=$.indexOf(L),W=D?$.indexOf(D):-1,k=w.layersWithOutsidePointerEventsDisabled.size>0,A=W>=T,x=function(e,t=null==globalThis?void 0:globalThis.document){let n=(0,d.W)(e),l=(0,o.useRef)(!1),i=(0,o.useRef)(()=>{});return(0,o.useEffect)(()=>{let handlePointerDown=e=>{if(e.target&&!l.current){let l={originalEvent:e};function handleAndDispatchPointerDownOutsideEvent(){$5cb92bef7577960e$var$handleAndDispatchCustomEvent("dismissableLayer.pointerDownOutside",n,l,{discrete:!0})}"touch"===e.pointerType?(t.removeEventListener("click",i.current),i.current=handleAndDispatchPointerDownOutsideEvent,t.addEventListener("click",i.current,{once:!0})):handleAndDispatchPointerDownOutsideEvent()}else t.removeEventListener("click",i.current);l.current=!1},e=window.setTimeout(()=>{t.addEventListener("pointerdown",handlePointerDown)},0);return()=>{window.clearTimeout(e),t.removeEventListener("pointerdown",handlePointerDown),t.removeEventListener("click",i.current)}},[t,n]),{onPointerDownCapture:()=>l.current=!0}}(e=>{let t=e.target,n=[...w.branches].some(e=>e.contains(t));!A||n||(null==b||b(e),null==p||p(e),e.defaultPrevented||null==y||y())},C),F=function(e,t=null==globalThis?void 0:globalThis.document){let n=(0,d.W)(e),l=(0,o.useRef)(!1);return(0,o.useEffect)(()=>{let handleFocus=e=>{e.target&&!l.current&&$5cb92bef7577960e$var$handleAndDispatchCustomEvent("dismissableLayer.focusOutside",n,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",handleFocus),()=>t.removeEventListener("focusin",handleFocus)},[t,n]),{onFocusCapture:()=>l.current=!0,onBlurCapture:()=>l.current=!1}}(e=>{let t=e.target,n=[...w.branches].some(e=>e.contains(t));n||(null==E||E(e),null==p||p(e),e.defaultPrevented||null==y||y())},C);return!function(e,t=null==globalThis?void 0:globalThis.document){let n=(0,d.W)(e);(0,o.useEffect)(()=>{let handleKeyDown=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",handleKeyDown),()=>t.removeEventListener("keydown",handleKeyDown)},[n,t])}(e=>{let t=W===w.layers.size-1;t&&(null==h||h(e),!e.defaultPrevented&&y&&(e.preventDefault(),y()))},C),(0,o.useEffect)(()=>{if(D)return f&&(0===w.layersWithOutsidePointerEventsDisabled.size&&(l=C.body.style.pointerEvents,C.body.style.pointerEvents="none"),w.layersWithOutsidePointerEventsDisabled.add(D)),w.layers.add(D),$5cb92bef7577960e$var$dispatchUpdate(),()=>{f&&1===w.layersWithOutsidePointerEventsDisabled.size&&(C.body.style.pointerEvents=l)}},[D,C,f,w]),(0,o.useEffect)(()=>()=>{D&&(w.layers.delete(D),w.layersWithOutsidePointerEventsDisabled.delete(D),$5cb92bef7577960e$var$dispatchUpdate())},[D,w]),(0,o.useEffect)(()=>{let handleUpdate=()=>P({});return document.addEventListener(c,handleUpdate),()=>document.removeEventListener(c,handleUpdate)},[]),(0,o.createElement)(a.WV.div,(0,i.Z)({},m,{ref:O,style:{pointerEvents:k?A?"auto":"none":void 0,...e.style},onFocusCapture:(0,s.M)(e.onFocusCapture,F.onFocusCapture),onBlurCapture:(0,s.M)(e.onBlurCapture,F.onBlurCapture),onPointerDownCapture:(0,s.M)(e.onPointerDownCapture,x.onPointerDownCapture)}))}),h=(0,o.forwardRef)((e,t)=>{let n=(0,o.useContext)(v),l=(0,o.useRef)(null),s=(0,u.e)(t,l);return(0,o.useEffect)(()=>{let e=l.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,o.createElement)(a.WV.div,(0,i.Z)({},e,{ref:s}))});function $5cb92bef7577960e$var$dispatchUpdate(){let e=new CustomEvent(c);document.dispatchEvent(e)}function $5cb92bef7577960e$var$handleAndDispatchCustomEvent(e,t,n,{discrete:l}){let i=n.originalEvent.target,o=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),l?(0,a.jH)(i,o):i.dispatchEvent(o)}let b=f,E=h},52730:function(e,t,n){n.d(t,{h:function(){return a}});var l=n(13428),i=n(2265),o=n(54887),s=n(9381);let a=(0,i.forwardRef)((e,t)=>{var n;let{container:a=null==globalThis?void 0:null===(n=globalThis.document)||void 0===n?void 0:n.body,...u}=e;return a?o.createPortal((0,i.createElement)(s.WV.div,(0,l.Z)({},u,{ref:t})),a):null})},39213:function(e,t,n){n.d(t,{j:function(){return cva}});let falsyToString=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,cx=function(){for(var e,t,n=0,l="";n<arguments.length;)(e=arguments[n++])&&(t=function r(e){var t,n,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e){if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(l&&(l+=" "),l+=n);else for(t in e)e[t]&&(l&&(l+=" "),l+=t)}return l}(e))&&(l&&(l+=" "),l+=t);return l},cva=(e,t)=>n=>{var l;if((null==t?void 0:t.variants)==null)return cx(e,null==n?void 0:n.class,null==n?void 0:n.className);let{variants:i,defaultVariants:o}=t,s=Object.keys(i).map(e=>{let t=null==n?void 0:n[e],l=null==o?void 0:o[e];if(null===t)return null;let s=falsyToString(t)||falsyToString(l);return i[e][s]}),a=n&&Object.entries(n).reduce((e,t)=>{let[n,l]=t;return void 0===l||(e[n]=l),e},{}),u=null==t?void 0:null===(l=t.compoundVariants)||void 0===l?void 0:l.reduce((e,t)=>{let{class:n,className:l,...i}=t;return Object.entries(i).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...o,...a}[t]):({...o,...a})[t]===n})?[...e,n,l]:e},[]);return cx(e,s,u,null==n?void 0:n.class,null==n?void 0:n.className)}}}]);