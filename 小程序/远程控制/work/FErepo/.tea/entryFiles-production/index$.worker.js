/**! __BUGME_START__ */ !function(){"use strict";var e=self;var t,n,o,r,i,a,s,c,u,p;!function(){function e(e,t){this.options={},this.messageQueue=[],this.opened=!1,this.url="",this.url=e,t&&(this.options=t)}Object.defineProperty(e.prototype,"isSocketOpened",{get:function(){return this.opened},enumerable:!1,configurable:!0}),e.prototype.getOptions=function(){return this.options},e.prototype.open=function(){var e=this;this.socketTask=AFAppX.bridge.connectSocket({url:this.url,multiple:this.options.multiple,fail:function(t){e.onSocketError(t)}}),this.socketTask.onOpen((function(){e.handleSocketOpen()})),this.socketTask.onError((function(t){e.onSocketError(t.data)})),this.socketTask.onClose((function(){e.opened=!1,e.onSocketClose()})),this.socketTask.onMessage((function(t){e.opened||e.handleSocketOpen(),e.onSocketMessage(t.data.data)}))},e.prototype.send=function(e){var t=function(e){var t="string"==typeof e?e:JSON.stringify(e);return t.length>1e6?void console.warn("abort send websocket message due to size:",t.length):t}(e);null!=t&&(this.opened?this.socketTask.send({data:t,isBuffer:!1}):this.messageQueue.push(t))},e.prototype.close=function(){this.opened&&this.socketTask.close()},e.prototype.onSocketMessage=function(e){},e.prototype.onSocketOpen=function(){},e.prototype.onSocketError=function(e){},e.prototype.onSocketClose=function(){},e.prototype.handleSocketOpen=function(){var e=this;this.opened||(this.opened=!0,this.messageQueue.length&&(this.messageQueue.forEach((function(t){e.send(t)})),this.messageQueue=[]),this.onSocketOpen())}}();!function(e){e.PageResume="pageResume",e.PagePause="pagePause",e.DebugPanelClick="tinyRemoteDebugPanelButtonClick",e.DebugConsole="onTinyDebugConsole",e.DebugNetworkRequest="tinyAppRemoteDebug_network_request",e.DebugNetworkResponse="tinyAppRemoteDebug_network_response",e.DebugNetworkError="tinyAppRemoteDebug_network_error",e.DebugStorageChanged="tinyAppRemoteDebug_storage",e.MessageFromVConsole="onMessageFromVConsole"}(t||(t={})),function(e){e.GetPagesData="Tiny.Data.getPageData",e.SetPageData="Tiny.Data.setPageData"}(n||(n={})),function(e){e.DataChanged="Tiny.Data.dataChanged"}(o||(o={})),function(e){e.GetStorageInfo="Tiny.Storage.getStorageInfo",e.ClearStorage="Tiny.Storage.clearStorage",e.RemoveStorage="Tiny.Storage.removeStorage",e.SetStorage="Tiny.Storage.setStorage"}(r||(r={})),function(e){e.StorageChanged="Tiny.Storage.storageChanged"}(i||(i={})),function(e){e.Enable="MiniAppLog.enable"}(a||(a={})),function(e){e.ApiSyncCall="MiniAppLog.onApiSyncCall",e.ApiSyncCallback="MiniAppLog.onApiSyncCallback",e.ApiCall="MiniAppLog.onApiCall",e.ApiCallback="MiniAppLog.onApiCallback",e.SetData="MiniAppLog.onSetData",e.SetDataCallback="MiniAppLog.onSetDataCallback",e.ShareAppMessage="MiniAppLog.onShareAppMessage"}(s||(s={})),function(e){e.consoleAPICalled="Runtime.consoleAPICalled",e.executionContextDestroyed="Runtime.executionContextDestroyed",e.executionContextsCleared="Runtime.executionContextsCleared",e.executionContextCreated="Runtime.executionContextCreated"}(c||(c={})),function(e){e.RequestWillBeSent="Network.requestWillBeSent",e.ResponseReceived="Network.responseReceived",e.LoadingFinished="Network.loadingFinished",e.LoadingFailed="Networkw.loadingFailed",e.GetResponseBody="Network.getResponseBody"}(u||(u={})),function(e){e.Data="data",e.Storage="storage",e.AppLog="applog"}(p||(p={}));var l="\\x"+("0"+"~".charCodeAt(0).toString(16)).slice(-2),g="\\"+l,f=new RegExp(l,"g"),d=new RegExp(g,"g"),h=new RegExp("(?:^|([^\\\\]))"+g),y=[].indexOf||function(e){for(var t=this.length;t--&&this[t]!==e;);return t},k=String;function S(e,t,n){return t instanceof Array?function(e,t,n){for(var o=0,r=t.length;o<r;o++)t[o]=S(e,t[o],n);return t}(e,t,n):t instanceof k?t.length?n.hasOwnProperty(t)?n[t]:n[t]=function(e,t){for(var n=0,o=t.length;n<o;e=e[t[n++].replace(d,"~")]);return e}(e,t.split("~")):e:t instanceof Object?function(e,t,n){for(var o in t)t.hasOwnProperty(o)&&(t[o]=S(e,t[o],n));return t}(e,t,n):t}var C={stringify:function(e,t,n,o){return C.parser.stringify(e,function(e,t,n){var o,r,i=!1,a=!!t,s=[],c=[e],u=[e],p=[n?"~":"[Circular]"],d=e,h=1;return a&&(r="object"==typeof t?function(e,n){return""!==e&&t.indexOf(e)<0?void 0:n}:t),function(e,t){return a&&(t=r.call(this,e,t)),i?(d!==this&&(o=h-y.call(c,this)-1,h-=o,c.splice(h,c.length),s.splice(h-1,s.length),d=this),"object"==typeof t&&t?(y.call(c,t)<0&&c.push(d=t),h=c.length,(o=y.call(u,t))<0?(o=u.push(t)-1,n?(s.push((""+e).replace(f,l)),p[o]="~"+s.join("~")):p[o]=p[0]):t=p[o]):"string"==typeof t&&n&&(t=t.replace(l,g).replace("~",l))):i=!0,t}}(e,t,!o),n)},parse:function(e,t){return C.parser.parse(e,function(e){return function(t,n){var o="string"==typeof n;return o&&"~"===n.charAt(0)?new k(n.slice(1)):(""===t&&(n=S(n,n,{})),o&&(n=n.replace(h,"$1~").replace(g,l)),e?e.call(this,t,n):n)}}(t))},parser:JSON},m=C.stringify,b=e.AlipayJSBridge&&e.AlipayJSBridge.call;function A(e,t){b&&b("internalAPI",{method:e,param:t})}function v(e,t){return void 0===t?"©undefined":null===t?"©null":t===-1/0?"©-Infinity":t===1/0?"©Infinity":"number"==typeof t&&isNaN(t)?"©NaN":"function"==typeof t?"©Function":t}var D=Function;function w(){e.document&&e.document.addEventListener("push",(function(e){var t=e.data;if(t&&"onMessageFromVConsole"===t.func){var n;try{var o=t.param.content||t.param.data.content;if(!o)return;n=JSON.parse(o)}catch(e){return}if(n.fromVConsoleToWorker&&"exec"===n.method)try{new D("requestId","sendBack","var res = "+n.script+";console.log(res);")(n.requestId,(function(e){return function(e,t){A("tinyDebugConsole",{type:"msgFromWorkerToVConsole",content:m({requestId:e,returnValue:t},v)})}(n.requestId,e)}))}catch(e){console.warn("bugme execute script error",e)}}}))}if(!e.__BUGME_ON__){e.__BUGME_ON__=!0;try{w(),Object.defineProperties(console,["log","info","error","debug","warn"].reduce((function(e,t){var n=console[t];return e[t]={value:function(){for(var e=[],o=0;o<arguments.length;o++)e[o]=arguments[o];n.apply(console,e);try{var r=m(e.map((function(e){return e instanceof Error?e.name+": "+e.message:e})),v);A("tinyDebugConsole",{content:r,type:"console_"+t})}catch(e){n("bugme console error",e)}},configurable:!0,writable:!0,enumerable:!0},e}),{}))}catch(e){console.warn("bugme init error",e)}}}();
 /**! __BUGME_END__ */
if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');
require('./importScripts$');

var AFAppX = self.AFAppX;
self.getCurrentPages = AFAppX.getCurrentPages;
self.getApp = AFAppX.getApp;
self.Page = AFAppX.Page;
self.App = AFAppX.App;
self.my = AFAppX.bridge || AFAppX.abridge;
self.abridge = self.my;
self.Component = AFAppX.WorkerComponent || function(){};
self.$global = AFAppX.$global;
self.requirePlugin = AFAppX.requirePlugin;


if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../node_modules/mini-ali-ui/es/multi-liner/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/am-icon/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/index/index?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/luckDraw/index?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/form/index?hash=ef11459fa8738078eaa8d1eb758aa0b1b7df9c60');
require('../../pages/result/index?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/detail/index?hash=15a5a5a00c913cbbe9f1b387e1a69eedcca8174e');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}