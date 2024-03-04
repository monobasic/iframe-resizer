/**
 *  iframe-resizer (parent) v5.0.0-alpha.1 - 2024-03-04
 *
 *  License:    GPL-3.0
 *  Copyright:  (c) 2013 - 2024, David J. Bradshaw. All rights reserved.
 * 
 *  Desciption: Keep same and cross domain iFrames sized to their content with
 *              support for window/content resizing, and multiple iFrames.
 *
 *  @preserve
 *  @module @iframe-resizer/parent
 *  @version 5.0.0-alpha.1
 *  @license GPL-3.0
 *  @author David J. Bradshaw <dave@bradshaw.net>
 *  @fileoverview Parent window script for iframe-resizer.
 *  @copyright (c) 2013 - 2024, David J. Bradshaw. All rights reserved.
 *  @see {@link https://github.com/davidjbradshaw/iframe-resizer}
 */


!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).iframeResize=n()}(this,(function(){"use strict";const e="[iframeResizer]";let n={},i=!1;const t=n=>`${e}[${function(e){return window.top===window.self?`Host page: ${e}`:window?.parentIFrame?.getId?`${window.parentIFrame.getId()}: ${e}`:`Nested host page: ${e}`}(n)}]`,o=(e,n,...i)=>window?.console[e](t(n),...i),r=(e,...t)=>!0===(e=>n[e]?n[e].log:i)(e)?o("log",e,...t):null,s=(e,...n)=>o("info",e,...n),a=(e,...n)=>o("warn",e,...n),d=(n,i)=>window?.console.warn(((n,...i)=>[`${e}[${n}]`,...i].join(" "))(n,window.chrome?i:i.replaceAll(/\u001B\[[\d;]*m/gi,""))),c="5.0.0-alpha.1",l=7,f="[iFrameSizer]",m=f.length,u=Object.freeze({max:1,scroll:1,bodyScroll:1,documentElementScroll:1}),g=(e,n,i,t)=>e.addEventListener(n,i,t||!1),h=(e,n,i)=>e.removeEventListener(n,i,!1);var p={};var w=Object.freeze({autoResize:!0,bodyBackground:null,bodyMargin:null,bodyPadding:null,checkOrigin:!0,direction:"vertical",inPageLinks:!1,enablePublicMethods:!0,heightCalculationMethod:"auto",id:"iFrameResizer",log:!0,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,mouseEvents:!0,offsetHeight:0,offsetWidth:0,postMessageTarget:null,sameDomain:!1,scrolling:!1,sizeHeight:!0,sizeWidth:!1,warningTimeout:5e3,tolerance:0,widthCalculationMethod:"auto",onClose:()=>!0,onClosed(){},onInit:!1,onMessage:null,onMouseEnter(){},onMouseLeave(){},onReady:e=>{"function"==typeof p[e.id].onInit&&(d(e.id,"\n[31;1mDeprecated Option[m\n\nThe [1monInit()[m function is deprecated and has been replaced with [1monReady()[m. It will be removed in a future version of iFrame Resizer.\n      "),p[e.id].onInit(e))},onResized(){},onScroll:()=>!0}),b={position:null,version:c};function y(e){function n(){o("Height"),o("Width"),k(B),x(A),L("onResized",B)}function i(e){if("border-box"!==e.boxSizing)return 0;return(e.paddingTop?parseInt(e.paddingTop,10):0)+(e.paddingBottom?parseInt(e.paddingBottom,10):0)}function t(e){if("border-box"!==e.boxSizing)return 0;return(e.borderTopWidth?parseInt(e.borderTopWidth,10):0)+(e.borderBottomWidth?parseInt(e.borderBottomWidth,10):0)}function o(e){const n=Number(p[A][`max${e}`]),i=Number(p[A][`min${e}`]),t=e.toLowerCase();let o=Number(B[t]);r(A,`Checking ${t} is in range ${i}-${n}`),o<i&&(o=i,r(A,`Set ${t} to min value`)),o>n&&(o=n,r(A,`Set ${t} to max value`)),B[t]=`${o}`}function d(e){return j.slice(j.indexOf(":")+l+e)}const c=(e,n)=>(i,t)=>{const o={};var r,s;r=function(){M(`Send ${e} (${i})`,`${e}:${n()}`,t)},o[s=t]||(r(),o[s]=requestAnimationFrame((()=>{o[s]=null})))},u=(e,n)=>()=>{const i=n=>()=>{p[s]?e(n,s):o()};function t(e,t){r(s,`${e} listeners for send${n}`),t(window,"scroll",i("scroll")),t(window,"resize",i("resize window"))}function o(){t("Remove ",h),a.disconnect()}const s=A,a=new ResizeObserver(i("iframe observed"));t("Add ",g),a.observe(document.body,{attributes:!0,childList:!0,subtree:!0}),p[s]&&(p[s][`stop${n}`]=o)},w=e=>()=>{e in p[A]&&(p[A][e](),delete p[A][e])},y=c("pageInfo",(function(){const e=document.body.getBoundingClientRect(),n=B.iframe.getBoundingClientRect(),{scrollY:i,scrollX:t,innerHeight:o,innerWidth:r}=window,{clientHeight:s,clientWidth:a}=document.documentElement;return JSON.stringify({iframeHeight:n.height,iframeWidth:n.width,clientHeight:Math.max(s,o||0),clientWidth:Math.max(a,r||0),offsetTop:parseInt(n.top-e.top,10),offsetLeft:parseInt(n.left-e.left,10),scrollTop:i,scrollLeft:t,documentHeight:s,documentWidth:a,windowHeight:o,windowWidth:r})})),v=c("parentInfo",(function(){const{iframe:e}=B,{scrollWidth:n,scrollHeight:i}=document.documentElement,{width:t,height:o,offsetLeft:r,offsetTop:s,pageLeft:a,pageTop:d,scale:c}=window.visualViewport;return JSON.stringify({iframe:e.getBoundingClientRect(),document:{scrollWidth:n,scrollHeight:i},viewport:{width:t,height:o,offsetLeft:r,offsetTop:s,pageLeft:a,pageTop:d,scale:c}})})),W=u(y,"PageInfo"),E=u(v,"ParentInfo"),N=w("stopPageInfo"),S=w("stopParentInfo");function H(e){const n=e.getBoundingClientRect();return I(A),{x:Math.floor(Number(n.left)+Number(b.position.x)),y:Math.floor(Number(n.top)+Number(b.position.y))}}function O(e){const n=e?H(B.iframe):{x:0,y:0};let i=((e,n)=>({x:Number(e.width)+n.x,y:Number(e.height)+n.y}))(B,n);r(A,`Reposition requested from iFrame (offset x:${n.x} y:${n.y})`),window.top===window.self?(b.position=i,C(),r(A,"--")):window.parentIFrame?window.parentIFrame["scrollTo"+(e?"Offset":"")](i.x,i.y):a(A,"Unable to scroll to requested position, window.parentIFrame not found")}function C(){!1!==L("onScroll",b.position)?x(A):T()}function D(e){let n={};if(0===Number(B.width)&&0===Number(B.height)){const e=d(9).split(":");n={x:e[1],y:e[0]}}else n={x:B.width,y:B.height};L(e,{iframe:B.iframe,screenX:Number(n.x),screenY:Number(n.y),type:B.type})}const L=(e,n)=>$(A,e,n);let j=e.data,B={},A=null;"[iFrameResizerChild]Ready"!==j?f===`${j}`.slice(0,m)&&j.slice(m).split(":")[0]in p?(B=function(){const e=j.slice(m).split(":"),n=e[1]?Number(e[1]):0,o=p[e[0]]?.iframe,r=getComputedStyle(o);return{iframe:o,id:e[0],height:n+i(r)+t(r),width:Number(e[2]),type:e[3]}}(),A=B.id,A?(function(e){if(!p[e])throw new Error(`${B.type} No settings for ${e}. Message was: ${j}`)}(A),function(){const e=B.type in{true:1,false:1,undefined:1};return e&&r(A,"Ignoring init message from meta parent page"),e}()||(r(A,`Received: ${j}`),p[A].loaded=!0,function(){let e=!0;return null===B.iframe&&(a(A,`The iframe (${B.id}) was not found.`),e=!1),e}()&&function(){const{origin:n,sameDomain:i}=e;if(i)return!0;let t=p[A]?.checkOrigin;if(t&&"null"!=`${n}`&&!(t.constructor===Array?function(){let e=0,i=!1;for(r(A,`Checking connection is from allowed list of origins: ${t}`);e<t.length;e++)if(t[e]===n){i=!0;break}return i}():function(){const e=p[A]?.remoteHost;return r(A,`Checking connection is from: ${e}`),n===e}()))throw new Error(`Unexpected message received from: ${n} for ${B.iframe.id}. Message was: ${e.data}. This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.`);return!0}()&&function(){switch(p[A]?.firstRun&&p[A]&&(p[A].firstRun=!1),B.type){case"close":z(B.iframe);break;case"message":e=d(6),r(A,`onMessage passed: {iframe: ${B.iframe.id}, message: ${e}}`),L("onMessage",{iframe:B.iframe,message:JSON.parse(e)}),r(A,"--");break;case"mouseenter":D("onMouseEnter");break;case"mouseleave":D("onMouseLeave");break;case"autoResize":p[A].autoResize=JSON.parse(d(9));break;case"scrollTo":O(!1);break;case"scrollToOffset":O(!0);break;case"pageInfo":y("start",A),W();break;case"parentInfo":v("start",A),E();break;case"pageInfoStop":N();break;case"parentInfoStop":S();break;case"inPageLink":!function(e){const n=e.split("#")[1]||"",i=decodeURIComponent(n);let t=document.getElementById(i)||document.getElementsByName(i)[0];t?function(){const e=H(t);r(A,`Moving to in page link (#${n}) at x: ${e.x} y: ${e.y}`),b.position={x:e.x,y:e.y},C(),r(A,"--")}():window.top!==window.self?window.parentIFrame?window.parentIFrame.moveToAnchor(n):r(A,`In page link #${n} not found and window.parentIFrame not found`):r(A,`In page link #${n} not found`)}(d(9));break;case"reset":R(B);break;case"init":n(),function(e){try{p[e].sameDomain=!!p[e]?.iframe?.contentWindow?.iFrameListener}catch(n){p[e].sameDomain=!1}r(e,`sameDomain: ${p[e].sameDomain}`)}(A),L("onReady",B.iframe);break;default:if(0===B.width&&0===B.height)return void a(`Unsupported message received (${B.type}), this is likely due to the iframe containing a later version of iframe-resizer than the parent page`);if(0===B.width||0===B.height)return void r(A,"Ignoring message with 0 height or width");if(document.hidden)return void r(A,"Page hidden - ignored resize request");n()}var e}())):a("iframeResizer received messageData without id, message was: ",j)):s(A,`Ignored: ${j}`):Object.keys(p).forEach((e=>M("iFrame requested init",F(e),e)))}function $(e,n,i){let t=null,o=null;if(p[e]){if(t=p[e][n],"function"!=typeof t)throw new TypeError(`${n} on iFrame[${e}] is not a function`);o=t(i)}return o}function v(e){const n=e.id;delete p[n]}function z(e){const n=e.id;if(!1!==$(n,"onClose",n)){r(n,`Removing iFrame: ${n}`);try{e.parentNode&&e.remove()}catch(e){a(e)}$(n,"onClosed",n),r(n,"--"),v(e)}else r(n,"Close iframe cancelled by onClose event")}function I(e){null===b.position&&(b.position={x:window.scrollX,y:window.scrollY},r(e,`Get page position: ${b.position.x}, ${b.position.y}`))}function T(){b.position=null}function x(e){null!==b.position&&(window.scrollTo(b.position.x,b.position.y),r(e,`Set page position: ${b.position.x}, ${b.position.y}`),T())}function R(e){r(e.id,"Size reset requested by "+("init"===e.type?"host page":"iFrame")),I(e.id),k(e),M("reset","reset",e.id)}function k(e){const n=e.id;function i(i){const t=`${e[i]}px`;e.iframe.style[i]=t,r(n,`IFrame (${n}) ${i} set to ${t}`)}p[n].sizeHeight&&i("height"),p[n].sizeWidth&&i("width")}function M(e,n,i,t){p[i]&&(p[i]?.postMessageTarget?function(){const{postMessageTarget:t,targetOrigin:o}=p[i];if(p[i].sameDomain)try{return p[i].iframe.contentWindow.iFrameListener(f+n),void r(i,`[${e}] Sending message to iframe[${i}] (${n}) via sameDomain`)}catch(e){a(i,"Same domain connection failed. Trying cross domain"),p[i].sameDomain=!1}r(i,`[${e}] Sending message to iframe[${i}] (${n}) targetOrigin: ${o}`),t.postMessage(f+n,o)}():a(i,`[${e}] IFrame(${i}) not found`),t&&p[i]?.warningTimeout&&(p[i].msgTimeout=setTimeout((function(){void 0!==p[i]&&(p[i].loaded||p[i].loadErrorShown||(p[i].loadErrorShown=!0,d(i,`\n[31;1mNo response from iFrame[m\n            \nThe iframe ([3m${i}[m) has not responded within ${p[i].warningTimeout/1e3} seconds. Check [1miFrameResizer.contentWindow.js[m has been loaded in the iframe.\n\nThis message can be ignored if everything is working, or you can set the [1mwarningTimeout[m option to a higher value or zero to suppress this warning.\n`)))}),p[i].warningTimeout)))}function F(e){const n=p[e];return[e,"8",n.sizeWidth,n.log,"32",n.enablePublicMethods,n.autoResize,n.bodyMargin,n.heightCalculationMethod,n.bodyBackground,n.bodyPadding,n.tolerance,n.inPageLinks,"child",n.widthCalculationMethod,n.mouseEvents,n.offsetHeight,n.offsetWidth,n.sizeHeight,b.version].join(":")}n=p;let W=0;const E=e=>!Number.isNaN(e);function N(e,n){function t(e){if(!e)return{};if("object"!=typeof e)throw new TypeError("Options is not an object");return("sizeWidth"in e||"sizeHeight"in e||"autoResize"in e)&&d(o,'\n[31;1mDeprecated Optionm\n\nThe [1msizeWidth[m, [1msizeHeight[m and [1mautoResize[m options have been replaced with new [1mdirection[m option which expects values of [3m"vertical"[m, [3m"horizontal"[m or [3m"horizontal"[m.\n'),e}const o=function(t){if("string"!=typeof t)throw new TypeError("Invaild id for iFrame. Expected String");var o;return""===t&&(e.id=t=function(){let e=n?.id||w.id+W++;return null!==document.getElementById(e)&&(e+=W++),e}(),o=(n||{}).log,i=o,r(t,`Added missing iframe ID: ${t} (${e.src})`)),t}(e.id);o in p&&"iFrameResizer"in e?a(o,"Ignored iFrame, already setup."):(r("Version",c),function(n){var i;p[o]={iframe:e,firstRun:!0,remoteHost:e?.src.split("/").slice(0,3).join("/"),...w,...t(n)},function(){if("horizontal"===p[o].direction)return p[o].sizeWidth=!0,p[o].sizeHeight=!1,void r(o,'Direction set to "horizontal"');if("none"===p[o].direction)return p[o].sizeWidth=!1,p[o].sizeHeight=!1,p[o].autoResize=!1,void r(o,'Direction set to "none"');if("vertical"!==p[o].direction)throw new TypeError(o,`Direction value of "${p[o].direction}" is not valid`);r(o,'Direction set to "vertical"')}(),null===p[o].postMessageTarget&&(p[o].postMessageTarget=e.contentWindow),p[o].targetOrigin=!0===p[o].checkOrigin?""===(i=p[o].remoteHost)||null!==i.match(/^(about:blank|javascript:|file:\/\/)/)?"*":i:"*"}(n),function(){switch(r(o,`IFrame scrolling ${p[o]?.scrolling?"enabled":"disabled"} for ${o}`),e.style.overflow=!1===p[o]?.scrolling?"hidden":"auto",p[o]?.scrolling){case"omit":break;case!0:e.scrolling="yes";break;case!1:e.scrolling="no";break;default:e.scrolling=p[o]?p[o].scrolling:"no"}}(),function(){function n(n){const i=p[o][n];1/0!==i&&0!==i&&(e.style[n]=E(i)?`${i}px`:i,r(o,`Set ${n} = ${e.style[n]}`))}function i(e){if(E(`min${e}`)&&E(`max${e}`)&&p[o][`min${e}`]>p[o][`max${e}`])throw new Error(`Value for min${e} can not be greater than max${e}`)}i("Height"),i("Width"),n("maxHeight"),n("minHeight"),n("maxWidth"),n("minWidth")}(),function(){const{bodyMargin:e}=p[o];"number"!=typeof e&&"0"!==e||(p[o].bodyMargin=`${e}px`)}(),function(n){const{id:i}=e;g(e,"load",(function(){M("iFrame.onload",n,i,!0),function(){const n=p[o]?.firstRun,i=p[o]?.heightCalculationMethod in u;!n&&i&&R({iframe:e,height:0,width:0,type:"init"})}()})),M("init",n,i,!0)}(F(o)),p[o]&&(p[o].iframe.iFrameResizer={close:z.bind(null,p[o].iframe),removeListeners:v.bind(null,p[o].iframe),resize:M.bind(null,"Window resize","resize",o),moveToAnchor(e){M("Move to anchor",`moveToAnchor:${e}`,o)},sendMessage(e){M("Send Message",`message:${e=JSON.stringify(e)}`,o)}}))}function S(){!1===document.hidden&&(r("document","Trigger event: Visibility change"),function(e,n){const i=e=>p[e]?.autoResize&&!p[e]?.firstRun;Object.keys(p).forEach((function(t){i(t)&&M(e,n,t)}))}("Tab Visible","resize"))}let H=!1;const O=function(){function e(e,i){i&&(!function(){if(!i.tagName)throw new TypeError("Object is not a valid DOM element");if("IFRAME"!==i.tagName.toUpperCase())throw new TypeError(`Expected <IFRAME> tag, found <${i.tagName}>`)}(),N(i,e),n.push(i))}let n;return H||(g(window,"message",y),g(document,"visibilitychange",S),window.iFrameListener=e=>y({data:e,sameDomain:!0}),H=!0),function(i,t){if("undefined"==typeof window)return[];switch(n=[],typeof t){case"undefined":case"string":Array.prototype.forEach.call(document.querySelectorAll(t||"iframe"),e.bind(void 0,i));break;case"object":e(i,t);break;default:throw new TypeError(`Unexpected data type (${typeof t})`)}return n}}();return"undefined"!=typeof window&&(window.iFrameResize=function(...e){d("","Deprecated: iFrameResize(), please use iframeResize()"),O(...e)}),O}));
//# sourceMappingURL=iframeResizer.parent.js.map
