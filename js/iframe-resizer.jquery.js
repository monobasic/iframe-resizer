/*!
 *  @preserve
 *  
 *  @module     iframe-resizer/jquery 5.0.0-alpha.7 (iife) 
 *
 *  @license    GPL-3.0 for non-commercial use only.
 *              For commercial use, you must purchase a license from
 *              http://iframe-resizer.com/pricing
 * 
 *  @desciption Keep same and cross domain iFrames sized to their content 
 *
 *  @author     David J. Bradshaw <dave@bradshaw.net>
 * 
 *  @see        {@link http://iframe-resizer.com}
 * 
 *  @copyright  (c) 2013 - 2024, David J. Bradshaw. All rights reserved.
 */


!function(){"use strict";const e="5.0.0-alpha.7",n="[iFrameSizer]",i=n.length,t=Object.freeze({max:1,scroll:1,bodyScroll:1,documentElementScroll:1}),o=(e,n,i,t)=>e.addEventListener(n,i,t||!1),r=(e,n,i)=>e.removeEventListener(n,i,!1),a="[iframeResizer]";const s=e=>`${a}[${function(e){return window.top===window.self?`Host page: ${e}`:window?.parentIFrame?.getId?`${window.parentIFrame.getId()}: ${e}`:`Nested host page: ${e}`}(e)}]`,c=(e,n,...i)=>window?.console[e](s(n),...i),d=(e,...n)=>c("info",e,...n),l=(e,...n)=>c("warn",e,...n),u=(e,n)=>window?.console.warn(((e,...n)=>[`${a}[${e}]`,...n].join(" "))(e,window.chrome?n:n.replaceAll(/\u001B\[[\d;]*m/gi,""))),f=e=>!Number.isNaN(e);var m=e=>{if(!e)return"";let n=-559038744,i=1103547984;for(let t,o=0;o<e.length;o++)t=e.codePointAt(o),n=Math.imul(n^t,2246822519),i=Math.imul(i^t,3266489917);return n^=Math.imul(n^i>>>15,1935289751),i^=Math.imul(i^n>>>15,3405138345),n^=i>>>16,i^=n>>>16,(2097152*(i>>>0)+(n>>>11)).toString(36)},h={};var g=Object.freeze({autoResize:!0,bodyBackground:null,bodyMargin:null,bodyPadding:null,checkOrigin:!0,direction:"vertical",inPageLinks:!1,enablePublicMethods:!0,heightCalculationMethod:"auto",id:"iFrameResizer",log:!0,license:void 0,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,mouseEvents:!0,offsetHeight:0,offsetWidth:0,postMessageTarget:null,sameDomain:!1,scrolling:!1,sizeHeight:!0,sizeWidth:!1,warningTimeout:5e3,tolerance:0,widthCalculationMethod:"auto",onClose:()=>!0,onClosed(){},onInit:!1,onMessage:null,onMouseEnter(){},onMouseLeave(){},onReady:e=>{"function"==typeof h[e.id].onInit&&(u(e.id,"\n[31;1mDeprecated Option[m\n\nThe [1monInit()[m function is deprecated and has been replaced with [1monReady()[m. It will be removed in a future version of iFrame Resizer.\n      "),h[e.id].onInit(e))},onResized(){},onScroll:()=>!0}),p={position:null,version:e};function w(e){function t(){c("Height"),c("Width"),I(B),R(),L("onResized",B)}function a(e){if("border-box"!==e.boxSizing)return 0;return(e.paddingTop?parseInt(e.paddingTop,10):0)+(e.paddingBottom?parseInt(e.paddingBottom,10):0)}function s(e){if("border-box"!==e.boxSizing)return 0;return(e.borderTopWidth?parseInt(e.borderTopWidth,10):0)+(e.borderBottomWidth?parseInt(e.borderBottomWidth,10):0)}function c(e){const n=Number(h[D][`max${e}`]),i=Number(h[D][`min${e}`]),t=e.toLowerCase();let o=Number(B[t]);o<i&&(o=i),o>n&&(o=n),B[t]=`${o}`}function u(e){return j.slice(j.indexOf(":")+7+e)}const f=(e,n)=>(i,t)=>{const o={};var r,a;r=function(){k(`Send ${e} (${i})`,`${e}:${n()}`,t)},o[a=t]||(r(),o[a]=requestAnimationFrame((()=>{o[a]=null})))},m=(e,n)=>()=>{const i=n=>()=>{h[s]?e(n,s):a()};function t(e,n){n(window,"scroll",i("scroll")),n(window,"resize",i("resize window"))}function a(){t(0,r),c.disconnect()}const s=D,c=new ResizeObserver(i("iframe observed"));t(0,o),c.observe(document.body,{attributes:!0,childList:!0,subtree:!0}),h[s]&&(h[s][`stop${n}`]=a)},g=e=>()=>{e in h[D]&&(h[D][e](),delete h[D][e])},w=f("pageInfo",(function(){const e=document.body.getBoundingClientRect(),n=B.iframe.getBoundingClientRect(),{scrollY:i,scrollX:t,innerHeight:o,innerWidth:r}=window,{clientHeight:a,clientWidth:s}=document.documentElement;return JSON.stringify({iframeHeight:n.height,iframeWidth:n.width,clientHeight:Math.max(a,o||0),clientWidth:Math.max(s,r||0),offsetTop:parseInt(n.top-e.top,10),offsetLeft:parseInt(n.left-e.left,10),scrollTop:i,scrollLeft:t,documentHeight:a,documentWidth:s,windowHeight:o,windowWidth:r})})),y=f("parentInfo",(function(){const{iframe:e}=B,{scrollWidth:n,scrollHeight:i}=document.documentElement,{width:t,height:o,offsetLeft:r,offsetTop:a,pageLeft:s,pageTop:c,scale:d}=window.visualViewport;return JSON.stringify({iframe:e.getBoundingClientRect(),document:{scrollWidth:n,scrollHeight:i},viewport:{width:t,height:o,offsetLeft:r,offsetTop:a,pageLeft:s,pageTop:c,scale:d}})})),x=m(w,"PageInfo"),N=m(y,"ParentInfo"),H=g("stopPageInfo"),E=g("stopParentInfo");function F(e){const n=e.getBoundingClientRect();return z(),{x:Math.floor(Number(n.left)+Number(p.position.x)),y:Math.floor(Number(n.top)+Number(p.position.y))}}function O(e){const n=e?F(B.iframe):{x:0,y:0};let i=((e,n)=>({x:Number(e.width)+n.x,y:Number(e.height)+n.y}))(B,n);window.top===window.self?(p.position=i,S()):window.parentIFrame?window.parentIFrame["scrollTo"+(e?"Offset":"")](i.x,i.y):l(D,"Unable to scroll to requested position, window.parentIFrame not found")}function S(){!1!==L("onScroll",p.position)?R():$()}function C(e){let n={};if(0===Number(B.width)&&0===Number(B.height)){const e=u(9).split(":");n={x:e[1],y:e[0]}}else n={x:B.width,y:B.height};L(e,{iframe:B.iframe,screenX:Number(n.x),screenY:Number(n.y),type:B.type})}const L=(e,n)=>b(D,e,n);let j=e.data,B={},D=null;"[iFrameResizerChild]Ready"!==j?n===`${j}`.slice(0,i)&&j.slice(i).split(":")[0]in h?(B=function(){const e=j.slice(i).split(":"),n=e[1]?Number(e[1]):0,t=h[e[0]]?.iframe,o=getComputedStyle(t);return{iframe:t,id:e[0],height:n+a(o)+s(o),width:Number(e[2]),type:e[3]}}(),D=B.id,D?(function(e){if(!h[e])throw new Error(`${B.type} No settings for ${e}. Message was: ${j}`)}(D),B.type in{true:1,false:1,undefined:1}||(h[D].loaded=!0,function(){let e=!0;return null===B.iframe&&(l(D,`The iframe (${B.id}) was not found.`),e=!1),e}()&&function(){const{origin:n,sameDomain:i}=e;if(i)return!0;let t=h[D]?.checkOrigin;if(t&&"null"!=`${n}`&&!(t.constructor===Array?function(){let e=0,i=!1;for(;e<t.length;e++)if(t[e]===n){i=!0;break}return i}():function(){const e=h[D]?.remoteHost;return n===e}()))throw new Error(`Unexpected message received from: ${n} for ${B.iframe.id}. Message was: ${e.data}. This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.`);return!0}()&&function(){switch(h[D]?.firstRun&&h[D]&&(h[D].firstRun=!1),B.type){case"close":v(B.iframe);break;case"message":e=u(6),L("onMessage",{iframe:B.iframe,message:JSON.parse(e)});break;case"mouseenter":C("onMouseEnter");break;case"mouseleave":C("onMouseLeave");break;case"autoResize":h[D].autoResize=JSON.parse(u(9));break;case"scrollTo":O(!1);break;case"scrollToOffset":O(!0);break;case"pageInfo":w("start",D),x();break;case"parentInfo":y("start",D),N();break;case"pageInfoStop":H();break;case"parentInfoStop":E();break;case"inPageLink":!function(e){const n=e.split("#")[1]||"",i=decodeURIComponent(n);let t=document.getElementById(i)||document.getElementsByName(i)[0];t?function(){const e=F(t);p.position={x:e.x,y:e.y},S()}():window.top!==window.self&&window.parentIFrame&&window.parentIFrame.moveToAnchor(n)}(u(9));break;case"reset":T(B);break;case"init":t(),function(e){try{h[e].sameDomain=!!h[e]?.iframe?.contentWindow?.iframeChildListener}catch(n){h[e].sameDomain=!1}}(D),W=!0,L("onReady",B.iframe);break;default:if(0===B.width&&0===B.height)return void l(`Unsupported message received (${B.type}), this is likely due to the iframe containing a later version of iframe-resizer than the parent page`);if(0===B.width||0===B.height)return;if(document.hidden)return;t()}var e}())):l("iframeResizer received messageData without id, message was: ",j)):d(D,`Ignored: ${j}`):Object.keys(h).forEach((e=>k("iFrame requested init",M(e),e)))}function b(e,n,i){let t=null,o=null;if(h[e]){if(t=h[e][n],"function"!=typeof t)throw new TypeError(`${n} on iFrame[${e}] is not a function`);o=t(i)}return o}function y(e){const n=e.id;delete h[n]}function v(e){const n=e.id;if(!1!==b(n,"onClose",n)){try{e.parentNode&&e.remove()}catch(e){l(e)}b(n,"onClosed",n),y(e)}}function z(e){null===p.position&&(p.position={x:window.scrollX,y:window.scrollY})}function $(){p.position=null}function R(e){null!==p.position&&(window.scrollTo(p.position.x,p.position.y),$())}function T(e){z(e.id),I(e),k("reset","reset",e.id)}function I(e){const n=e.id;function i(n){const i=`${e[n]}px`;e.iframe.style[n]=i}h[n].sizeHeight&&i("height"),h[n].sizeWidth&&i("width")}function k(e,i,t,o){h[t]&&(h[t]?.postMessageTarget?function(){const{postMessageTarget:e,targetOrigin:o}=h[t];if(h[t].sameDomain)try{return void h[t].iframe.contentWindow.iframeChildListener(n+i)}catch(e){d(t,"Same domain connection failed. Trying cross domain"),h[t].sameDomain=!1}e.postMessage(n+i,o)}():l(t,`[${e}] IFrame(${t}) not found`),o&&h[t]?.warningTimeout&&(h[t].msgTimeout=setTimeout((function(){void 0!==h[t]&&(h[t].loaded||h[t].loadErrorShown||(h[t].loadErrorShown=!0,u(t,`\n[31;1mNo response from iFrame[m\n            \nThe iframe ([3m${t}[m) has not responded within ${h[t].warningTimeout/1e3} seconds. Check [1m@iframe-resizer/child[m package has been loaded in the iframe.\n\nThis message can be ignored if everything is working, or you can set the [1mwarningTimeout[m option to a higher value or zero to suppress this warning.\n`)))}),h[t].warningTimeout)))}function M(e){const n=h[e];return[e,"8",n.sizeWidth,n.log,"32",n.enablePublicMethods,n.autoResize,n.bodyMargin,n.heightCalculationMethod,n.bodyBackground,n.bodyPadding,n.tolerance,n.inPageLinks,"child",n.widthCalculationMethod,n.mouseEvents,n.offsetHeight,n.offsetWidth,n.sizeHeight,m(n.license),p.version].join(":")}let x=0,W=!1;var N=n=>i=>{function r(e){if(!e)return{};if("object"!=typeof e)throw new TypeError("Options is not an object");return("sizeWidth"in e||"sizeHeight"in e||"autoResize"in e)&&u(a,'\n[31;1mDeprecated Optionm\n\nThe [1msizeWidth[m, [1msizeHeight[m and [1mautoResize[m options have been replaced with new [1mdirection[m option which expects values of [3m"vertical"[m, [3m"horizontal"[m or [3m"horizontal"[m.\n'),e}const a=function(e){if(e&&"string"!=typeof e)throw new TypeError("Invaild id for iFrame. Expected String");return""!==e&&e||(i.id=e=function(){let e=n?.id||g.id+x++;return null!==document.getElementById(e)&&(e+=x++),e}(),(n||{}).log),e}(i.id);return a in h&&"iFrameResizer"in i?l(a,"Ignored iFrame, already setup."):(d(`v${e}`),u(i.id,"[31;1mAlpha Release[m\n        \nDo not use in production, API is not stable."),function(e){var n;h[a]={iframe:i,firstRun:!0,remoteHost:i?.src.split("/").slice(0,3).join("/"),...g,...r(e)},function(){if("horizontal"===h[a].direction)return h[a].sizeWidth=!0,void(h[a].sizeHeight=!1);if("none"===h[a].direction)return h[a].sizeWidth=!1,h[a].sizeHeight=!1,void(h[a].autoResize=!1);if("vertical"!==h[a].direction)throw new TypeError(a,`Direction value of "${h[a].direction}" is not valid`)}(),null===h[a].postMessageTarget&&(h[a].postMessageTarget=i.contentWindow),h[a].targetOrigin=!0===h[a].checkOrigin?""===(n=h[a].remoteHost)||null!==n.match(/^(about:blank|javascript:|file:\/\/)/)?"*":n:"*"}(n),E(),function(){switch(i.style.overflow=!1===h[a]?.scrolling?"hidden":"auto",h[a]?.scrolling){case"omit":break;case!0:i.scrolling="yes";break;case!1:i.scrolling="no";break;default:i.scrolling=h[a]?h[a].scrolling:"no"}}(),function(){function e(e){const n=h[a][e];1/0!==n&&0!==n&&(i.style[e]=f(n)?`${n}px`:n)}function n(e){if(f(`min${e}`)&&f(`max${e}`)&&h[a][`min${e}`]>h[a][`max${e}`])throw new Error(`Value for min${e} can not be greater than max${e}`)}n("Height"),n("Width"),e("maxHeight"),e("minHeight"),e("maxWidth"),e("minWidth")}(),function(){const{bodyMargin:e}=h[a];"number"!=typeof e&&"0"!==e||(h[a].bodyMargin=`${e}px`)}(),function(e){const{id:n}=i;o(i,"load",(function(){k("iFrame.onload",`${e}:${W}`,n,!0),function(){const e=h[a]?.firstRun,n=h[a]?.heightCalculationMethod in t;!e&&n&&T({iframe:i,height:0,width:0,type:"init"})}()})),k("init",`${e}:${W}`,n,!0)}(M(a)),function(){if(h[a]){const e={close:v.bind(null,h[a].iframe),disconnect:y.bind(null,h[a].iframe),removeListeners(){u(a,"\n[31;1mDeprecated Method Namem\n\nThe [removeListeners()[m method has been renamed to [disconnect()[m.\n"),this.disconnect()},resize:k.bind(null,"Window resize","resize",a),moveToAnchor(e){k("Move to anchor",`moveToAnchor:${e}`,a)},sendMessage(e){k("Send Message",`message:${e=JSON.stringify(e)}`,a)}};h[a].iframe.iframeResizer=e,h[a].iframe.iFrameResizer=e}}()),i?.iFrameResizer};function H(){!1===document.hidden&&function(e,n){const i=e=>h[e]?.autoResize&&!h[e]?.firstRun;Object.keys(h).forEach((function(t){i(t)&&k(e,n,t)}))}("Tab Visible","resize")}const E=(e=>{let n=!1;return function(){return n?void 0:(n=!0,Reflect.apply(e,this,arguments))}})((()=>{o(window,"message",w),o(document,"visibilitychange",H),window.iframeParentListener=e=>w({data:e,sameDomain:!0})}));switch(!0){case void 0===window.jQuery:l("","Unable to bind to jQuery, it is not available.");break;case!window.jQuery.fn:l("","Unable to bind to jQuery, it is not fully loaded.");break;case window.jQuery.fn.iframeResize:l("","iframeResize is already assigned to jQuery.fn.");break;default:window.jQuery.fn.iframeResize=function(e){const n=N(e);return this.filter("iframe").each(n).end()},window.jQuery.fn.iFrameResize=function(e){return l("","Deprecated:  Use the iframeResize method instead of iFrameResize"),this.iframeResize(e)}}}();
