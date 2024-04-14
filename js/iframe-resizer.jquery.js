/*!
 *  @preserve
 *  
 *  @module     iframe-resizer/jquery 5.0.0-alpha.4 (iife) 
 *
 *  @license    GPL-3.0 for non-commercial use only.
 *              For commercial use, you must purchase a license from
 *              https://iframeresizer.com/pricing
 * 
 *  @desciption Keep same and cross domain iFrames sized to their content 
 *
 *  @author     David J. Bradshaw <dave@bradshaw.net>
 * 
 *  @see        {@link https://iframeresizer.com}
 * 
 *  @copyright  (c) 2013 - 2024, David J. Bradshaw. All rights reserved.
 */


!function(){"use strict";const e="5.0.0-alpha.4",i="[iFrameSizer]",n=i.length,t=Object.freeze({max:1,scroll:1,bodyScroll:1,documentElementScroll:1}),o=(e,i,n,t)=>e.addEventListener(i,n,t||!1),r=(e,i,n)=>e.removeEventListener(i,n,!1),s="[iframeResizer]";let a={},d=!1;const c=e=>`${s}[${function(e){return window.top===window.self?`Host page: ${e}`:window?.parentIFrame?.getId?`${window.parentIFrame.getId()}: ${e}`:`Nested host page: ${e}`}(e)}]`,l=(e,i,...n)=>window?.console[e](c(i),...n),m=(e,...i)=>!0===(e=>a[e]?a[e].log:d)(e)?l("log",e,...i):null,f=(e,...i)=>l("info",e,...i),u=(e,...i)=>l("warn",e,...i),h=(e,i)=>window?.console.warn(((e,...i)=>[`${s}[${e}]`,...i].join(" "))(e,window.chrome?i:i.replaceAll(/\u001B\[[\d;]*m/gi,""))),g=e=>!Number.isNaN(e);var p=e=>{if(!e)return"";let i=-559038744,n=1103547984;for(let t,o=0;o<e.length;o++)t=e.codePointAt(o),i=Math.imul(i^t,2246822519),n=Math.imul(n^t,3266489917);return i^=Math.imul(i^n>>>15,1935289751),n^=Math.imul(n^i>>>15,3405138345),i^=n>>>16,n^=i>>>16,(2097152*(n>>>0)+(i>>>11)).toString(36)},w={};var b=Object.freeze({autoResize:!0,bodyBackground:null,bodyMargin:null,bodyPadding:null,checkOrigin:!0,direction:"vertical",inPageLinks:!1,enablePublicMethods:!0,heightCalculationMethod:"auto",id:"iFrameResizer",log:!0,license:void 0,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,mouseEvents:!0,offsetHeight:0,offsetWidth:0,postMessageTarget:null,sameDomain:!1,scrolling:!1,sizeHeight:!0,sizeWidth:!1,warningTimeout:5e3,tolerance:0,widthCalculationMethod:"auto",onClose:()=>!0,onClosed(){},onInit:!1,onMessage:null,onMouseEnter(){},onMouseLeave(){},onReady:e=>{"function"==typeof w[e.id].onInit&&(h(e.id,"\n[31;1mDeprecated Option[m\n\nThe [1monInit()[m function is deprecated and has been replaced with [1monReady()[m. It will be removed in a future version of iFrame Resizer.\n      "),w[e.id].onInit(e))},onResized(){},onScroll:()=>!0}),y={position:null,version:e};function $(e){function t(){d("Height"),d("Width"),M(j),k(B),D("onResized",j)}function s(e){if("border-box"!==e.boxSizing)return 0;return(e.paddingTop?parseInt(e.paddingTop,10):0)+(e.paddingBottom?parseInt(e.paddingBottom,10):0)}function a(e){if("border-box"!==e.boxSizing)return 0;return(e.borderTopWidth?parseInt(e.borderTopWidth,10):0)+(e.borderBottomWidth?parseInt(e.borderBottomWidth,10):0)}function d(e){const i=Number(w[B][`max${e}`]),n=Number(w[B][`min${e}`]),t=e.toLowerCase();let o=Number(j[t]);m(B,`Checking ${t} is in range ${n}-${i}`),o<n&&(o=n,m(B,`Set ${t} to min value`)),o>i&&(o=i,m(B,`Set ${t} to max value`)),j[t]=`${o}`}function c(e){return L.slice(L.indexOf(":")+7+e)}const l=(e,i)=>(n,t)=>{const o={};var r,s;r=function(){W(`Send ${e} (${n})`,`${e}:${i()}`,t)},o[s=t]||(r(),o[s]=requestAnimationFrame((()=>{o[s]=null})))},h=(e,i)=>()=>{const n=i=>()=>{w[a]?e(i,a):s()};function t(e,t){m(a,`${e} listeners for send${i}`),t(window,"scroll",n("scroll")),t(window,"resize",n("resize window"))}function s(){t("Remove ",r),d.disconnect()}const a=B,d=new ResizeObserver(n("iframe observed"));t("Add ",o),d.observe(document.body,{attributes:!0,childList:!0,subtree:!0}),w[a]&&(w[a][`stop${i}`]=s)},g=e=>()=>{e in w[B]&&(w[B][e](),delete w[B][e])},p=l("pageInfo",(function(){const e=document.body.getBoundingClientRect(),i=j.iframe.getBoundingClientRect(),{scrollY:n,scrollX:t,innerHeight:o,innerWidth:r}=window,{clientHeight:s,clientWidth:a}=document.documentElement;return JSON.stringify({iframeHeight:i.height,iframeWidth:i.width,clientHeight:Math.max(s,o||0),clientWidth:Math.max(a,r||0),offsetTop:parseInt(i.top-e.top,10),offsetLeft:parseInt(i.left-e.left,10),scrollTop:n,scrollLeft:t,documentHeight:s,documentWidth:a,windowHeight:o,windowWidth:r})})),b=l("parentInfo",(function(){const{iframe:e}=j,{scrollWidth:i,scrollHeight:n}=document.documentElement,{width:t,height:o,offsetLeft:r,offsetTop:s,pageLeft:a,pageTop:d,scale:c}=window.visualViewport;return JSON.stringify({iframe:e.getBoundingClientRect(),document:{scrollWidth:i,scrollHeight:n},viewport:{width:t,height:o,offsetLeft:r,offsetTop:s,pageLeft:a,pageTop:d,scale:c}})})),$=h(p,"PageInfo"),z=h(b,"ParentInfo"),N=g("stopPageInfo"),S=g("stopParentInfo");function H(e){const i=e.getBoundingClientRect();return I(B),{x:Math.floor(Number(i.left)+Number(y.position.x)),y:Math.floor(Number(i.top)+Number(y.position.y))}}function C(e){const i=e?H(j.iframe):{x:0,y:0};let n=((e,i)=>({x:Number(e.width)+i.x,y:Number(e.height)+i.y}))(j,i);m(B,`Reposition requested from iFrame (offset x:${i.x} y:${i.y})`),window.top===window.self?(y.position=n,E(),m(B,"--")):window.parentIFrame?window.parentIFrame["scrollTo"+(e?"Offset":"")](n.x,n.y):u(B,"Unable to scroll to requested position, window.parentIFrame not found")}function E(){!1!==D("onScroll",y.position)?k(B):T()}function O(e){let i={};if(0===Number(j.width)&&0===Number(j.height)){const e=c(9).split(":");i={x:e[1],y:e[0]}}else i={x:j.width,y:j.height};D(e,{iframe:j.iframe,screenX:Number(i.x),screenY:Number(i.y),type:j.type})}const D=(e,i)=>v(B,e,i);let L=e.data,j={},B=null;"[iFrameResizerChild]Ready"!==L?i===`${L}`.slice(0,n)&&L.slice(n).split(":")[0]in w?(j=function(){const e=L.slice(n).split(":"),i=e[1]?Number(e[1]):0,t=w[e[0]]?.iframe,o=getComputedStyle(t);return{iframe:t,id:e[0],height:i+s(o)+a(o),width:Number(e[2]),type:e[3]}}(),B=j.id,B?(function(e){if(!w[e])throw new Error(`${j.type} No settings for ${e}. Message was: ${L}`)}(B),function(){const e=j.type in{true:1,false:1,undefined:1};return e&&m(B,"Ignoring init message from meta parent page"),e}()||(m(B,`Received: ${L}`),w[B].loaded=!0,function(){let e=!0;return null===j.iframe&&(u(B,`The iframe (${j.id}) was not found.`),e=!1),e}()&&function(){const{origin:i,sameDomain:n}=e;if(n)return!0;let t=w[B]?.checkOrigin;if(t&&"null"!=`${i}`&&!(t.constructor===Array?function(){let e=0,n=!1;for(m(B,`Checking connection is from allowed list of origins: ${t}`);e<t.length;e++)if(t[e]===i){n=!0;break}return n}():function(){const e=w[B]?.remoteHost;return m(B,`Checking connection is from: ${e}`),i===e}()))throw new Error(`Unexpected message received from: ${i} for ${j.iframe.id}. Message was: ${e.data}. This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.`);return!0}()&&function(){switch(w[B]?.firstRun&&w[B]&&(w[B].firstRun=!1),j.type){case"close":R(j.iframe);break;case"message":e=c(6),m(B,`onMessage passed: {iframe: ${j.iframe.id}, message: ${e}}`),D("onMessage",{iframe:j.iframe,message:JSON.parse(e)}),m(B,"--");break;case"mouseenter":O("onMouseEnter");break;case"mouseleave":O("onMouseLeave");break;case"autoResize":w[B].autoResize=JSON.parse(c(9));break;case"scrollTo":C(!1);break;case"scrollToOffset":C(!0);break;case"pageInfo":p("start",B),$();break;case"parentInfo":b("start",B),z();break;case"pageInfoStop":N();break;case"parentInfoStop":S();break;case"inPageLink":!function(e){const i=e.split("#")[1]||"",n=decodeURIComponent(i);let t=document.getElementById(n)||document.getElementsByName(n)[0];t?function(){const e=H(t);m(B,`Moving to in page link (#${i}) at x: ${e.x} y: ${e.y}`),y.position={x:e.x,y:e.y},E(),m(B,"--")}():window.top!==window.self?window.parentIFrame?window.parentIFrame.moveToAnchor(i):m(B,`In page link #${i} not found and window.parentIFrame not found`):m(B,`In page link #${i} not found`)}(c(9));break;case"reset":x(j);break;case"init":t(),function(e){try{w[e].sameDomain=!!w[e]?.iframe?.contentWindow?.iframeChildListener}catch(i){w[e].sameDomain=!1}m(e,`sameDomain: ${w[e].sameDomain}`)}(B),D("onReady",j.iframe);break;default:if(0===j.width&&0===j.height)return void u(`Unsupported message received (${j.type}), this is likely due to the iframe containing a later version of iframe-resizer than the parent page`);if(0===j.width||0===j.height)return void m(B,"Ignoring message with 0 height or width");if(document.hidden)return void m(B,"Page hidden - ignored resize request");t()}var e}())):u("iframeResizer received messageData without id, message was: ",L)):f(B,`Ignored: ${L}`):Object.keys(w).forEach((e=>W("iFrame requested init",F(e),e)))}function v(e,i,n){let t=null,o=null;if(w[e]){if(t=w[e][i],"function"!=typeof t)throw new TypeError(`${i} on iFrame[${e}] is not a function`);o=t(n)}return o}function z(e){const i=e.id;delete w[i]}function R(e){const i=e.id;if(!1!==v(i,"onClose",i)){m(i,`Removing iFrame: ${i}`);try{e.parentNode&&e.remove()}catch(e){u(e)}v(i,"onClosed",i),m(i,"--"),z(e)}else m(i,"Close iframe cancelled by onClose event")}function I(e){null===y.position&&(y.position={x:window.scrollX,y:window.scrollY},m(e,`Get page position: ${y.position.x}, ${y.position.y}`))}function T(){y.position=null}function k(e){null!==y.position&&(window.scrollTo(y.position.x,y.position.y),m(e,`Set page position: ${y.position.x}, ${y.position.y}`),T())}function x(e){m(e.id,"Size reset requested by "+("init"===e.type?"host page":"iFrame")),I(e.id),M(e),W("reset","reset",e.id)}function M(e){const i=e.id;function n(n){const t=`${e[n]}px`;e.iframe.style[n]=t,m(i,`IFrame (${i}) ${n} set to ${t}`)}w[i].sizeHeight&&n("height"),w[i].sizeWidth&&n("width")}function W(e,n,t,o){w[t]&&(w[t]?.postMessageTarget?function(){const{postMessageTarget:o,targetOrigin:r}=w[t];if(w[t].sameDomain)try{return w[t].iframe.contentWindow.iframeChildListener(i+n),void m(t,`[${e}] Sending message to iframe[${t}] (${n}) via sameDomain`)}catch(e){f(t,"Same domain connection failed. Trying cross domain"),w[t].sameDomain=!1}m(t,`[${e}] Sending message to iframe[${t}] (${n}) targetOrigin: ${r}`),o.postMessage(i+n,r)}():u(t,`[${e}] IFrame(${t}) not found`),o&&w[t]?.warningTimeout&&(w[t].msgTimeout=setTimeout((function(){void 0!==w[t]&&(w[t].loaded||w[t].loadErrorShown||(w[t].loadErrorShown=!0,h(t,`\n[31;1mNo response from iFrame[m\n            \nThe iframe ([3m${t}[m) has not responded within ${w[t].warningTimeout/1e3} seconds. Check [1miFrameResizer.contentWindow.js[m has been loaded in the iframe.\n\nThis message can be ignored if everything is working, or you can set the [1mwarningTimeout[m option to a higher value or zero to suppress this warning.\n`)))}),w[t].warningTimeout)))}function F(e){const i=w[e];return[e,"8",i.sizeWidth,i.log,"32",i.enablePublicMethods,i.autoResize,i.bodyMargin,i.heightCalculationMethod,i.bodyBackground,i.bodyPadding,i.tolerance,i.inPageLinks,"child",i.widthCalculationMethod,i.mouseEvents,i.offsetHeight,i.offsetWidth,i.sizeHeight,p(i.license),y.version].join(":")}a=w;let N=0;var S=i=>n=>{function r(e){if(!e)return{};if("object"!=typeof e)throw new TypeError("Options is not an object");return("sizeWidth"in e||"sizeHeight"in e||"autoResize"in e)&&h(s,'\n[31;1mDeprecated Optionm\n\nThe [1msizeWidth[m, [1msizeHeight[m and [1mautoResize[m options have been replaced with new [1mdirection[m option which expects values of [3m"vertical"[m, [3m"horizontal"[m or [3m"horizontal"[m.\n'),e}const s=function(e){if(e&&"string"!=typeof e)throw new TypeError("Invaild id for iFrame. Expected String");var t;return""!==e&&e||(n.id=e=function(){let e=i?.id||b.id+N++;return null!==document.getElementById(e)&&(e+=N++),e}(),t=(i||{}).log,d=t,m(e,`Added missing iframe ID: ${e} (${n.src})`)),e}(n.id);return s in w&&"iFrameResizer"in n?u(s,"Ignored iFrame, already setup."):(m("Version",e),function(e){var i;w[s]={iframe:n,firstRun:!0,remoteHost:n?.src.split("/").slice(0,3).join("/"),...b,...r(e)},function(){if("horizontal"===w[s].direction)return w[s].sizeWidth=!0,w[s].sizeHeight=!1,void m(s,'Direction set to "horizontal"');if("none"===w[s].direction)return w[s].sizeWidth=!1,w[s].sizeHeight=!1,w[s].autoResize=!1,void m(s,'Direction set to "none"');if("vertical"!==w[s].direction)throw new TypeError(s,`Direction value of "${w[s].direction}" is not valid`);m(s,'Direction set to "vertical"')}(),null===w[s].postMessageTarget&&(w[s].postMessageTarget=n.contentWindow),w[s].targetOrigin=!0===w[s].checkOrigin?""===(i=w[s].remoteHost)||null!==i.match(/^(about:blank|javascript:|file:\/\/)/)?"*":i:"*"}(i),C(),function(){switch(m(s,`IFrame scrolling ${w[s]?.scrolling?"enabled":"disabled"} for ${s}`),n.style.overflow=!1===w[s]?.scrolling?"hidden":"auto",w[s]?.scrolling){case"omit":break;case!0:n.scrolling="yes";break;case!1:n.scrolling="no";break;default:n.scrolling=w[s]?w[s].scrolling:"no"}}(),function(){function e(e){const i=w[s][e];1/0!==i&&0!==i&&(n.style[e]=g(i)?`${i}px`:i,m(s,`Set ${e} = ${n.style[e]}`))}function i(e){if(g(`min${e}`)&&g(`max${e}`)&&w[s][`min${e}`]>w[s][`max${e}`])throw new Error(`Value for min${e} can not be greater than max${e}`)}i("Height"),i("Width"),e("maxHeight"),e("minHeight"),e("maxWidth"),e("minWidth")}(),function(){const{bodyMargin:e}=w[s];"number"!=typeof e&&"0"!==e||(w[s].bodyMargin=`${e}px`)}(),function(e){const{id:i}=n;o(n,"load",(function(){W("iFrame.onload",e,i,!0),function(){const e=w[s]?.firstRun,i=w[s]?.heightCalculationMethod in t;!e&&i&&x({iframe:n,height:0,width:0,type:"init"})}()})),W("init",e,i,!0)}(F(s)),function(){if(w[s]){const e={close:R.bind(null,w[s].iframe),disconnect:z.bind(null,w[s].iframe),removeListeners(){h(s,"\n[31;1mDeprecated Method Namem\n\nThe [removeListeners()[m method has been renamed to [disconnect()[m.\n"),this.disconnect()},resize:W.bind(null,"Window resize","resize",s),moveToAnchor(e){W("Move to anchor",`moveToAnchor:${e}`,s)},sendMessage(e){W("Send Message",`message:${e=JSON.stringify(e)}`,s)}};w[s].iframe.iframeResizer=e,w[s].iframe.iFrameResizer=e}}()),n?.iFrameResizer};function H(){!1===document.hidden&&(m("document","Trigger event: Visibility change"),function(e,i){const n=e=>w[e]?.autoResize&&!w[e]?.firstRun;Object.keys(w).forEach((function(t){n(t)&&W(e,i,t)}))}("Tab Visible","resize"))}const C=(e=>{let i=!1;return function(){return i?void 0:(i=!0,Reflect.apply(e,this,arguments))}})((()=>{o(window,"message",$),o(document,"visibilitychange",H),window.iframeParentListener=e=>$({data:e,sameDomain:!0})}));switch(!0){case void 0===window.jQuery:u("","Unable to bind to jQuery, it is not available.");break;case!window.jQuery.fn:u("","Unable to bind to jQuery, it is not fully loaded.");break;case window.jQuery.fn.iframeResize:u("","iframeResize is already assigned to jQuery.fn.");break;default:window.jQuery.fn.iframeResize=function(e){const i=S(e);return this.filter("iframe").each(i).end()},window.jQuery.fn.iFrameResize=function(e){return u("","Deprecated:  Use the iframeResize method instead of iFrameResize"),this.iframeResize(e)}}}();
//# sourceMappingURL=iframe-resizer.jquery.js.map
