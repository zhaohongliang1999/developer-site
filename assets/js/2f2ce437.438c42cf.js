"use strict";(self.webpackChunkdeveloper=self.webpackChunkdeveloper||[]).push([[4567],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=l(n),f=i,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(m,c(c({ref:t},p),{},{components:n})):r.createElement(m,c({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9652:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(75068),i=n(67294),o=function(){function e(){this.subscriptions={},window.addEventListener("message",this.handleMsg.bind(this),!1)}var t=e.prototype;return t.on=function(e,t){this.subscriptions[e]=this.subscriptions[e]||[],this.subscriptions[e].push(t)},t.off=function(e,t){if(this.subscriptions[e]){var n=this.subscriptions[e].findIndex((function(e){return e===t}));this.subscriptions[e].splice(n,1)}},t.handleMsg=function(e){e.data&&e.data.type&&(this.subscriptions[e.data.type]||[]).forEach((function(t){t(e.data,e.origin,e.source)}))},t.destroy=function(){window.removeEventListener("message",this.handleMsg),this.subscriptions={}},e}(),c=function(e){function t(t){var n;return(n=e.call(this,t)||this).createRecevier=function(){n.destroyRecevier(),n.recevier=new o,n.recevier.on("updateHeight",(function(e,t,r){n.iframe&&r===n.iframe.contentWindow&&(n.container.style.height=(e.msg||0)+"px",n.props.onUpdateHeight(e.msg||"#"))}))},n.destroyRecevier=function(){n.recevier&&(n.recevier.destroy(),n.recevier=null)},n.container=null,n.iframe=null,n}(0,r.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.props.disableHeightSync||this.createRecevier()},n.componentDidUpdate=function(e){e.url.replace(/#.*$/,"")!==this.props.url.replace(/#.*$/,"")&&this.container&&(this.container.style.height=this.props.style&&this.props.style.height.toString()||"800px"),void 0!==e.disableHeightSync&&e.disableHeightSync!==this.props.disableHeightSync&&(this.props.disableHeightSync?this.destroyRecevier():this.createRecevier())},n.componentWillUnmount=function(){this.destroyRecevier()},n.render=function(){var e=this,t=this.props,n=t.className,r=t.id,o=t.style,c=t.url;return c?i.createElement("div",{className:"bg-iframe "+n,id:r,style:Object.assign({height:800,width:"100%"},o),ref:function(t){e.container=t}},i.createElement("iframe",{src:c,style:{border:"none",width:"100%",height:"100%"},ref:function(t){e.iframe=t}})):i.createElement("div",{className:"bg-iframe empty"},"Iframe")},t}(i.PureComponent);c.displayName="bg-iframe"},50507:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return f}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),c=n(9652),a=["components"],s={title:"HTML",order:2},l="HTML",p={unversionedId:"components/advanced/HTML",id:"components/advanced/HTML",title:"HTML",description:"HTML \u7ec4\u4ef6\u5141\u8bb8\u4f60\u8fdb\u884c\u4e00\u4e9b\u81ea\u5b9a\u4e49\u7684\u529f\u80fd\u5f00\u53d1\u3002\u5176\u4e2d\u9875\u9762\u8bbe\u8ba1\u9700\u8981\u6709\u4e00\u5b9a\u7684\u524d\u7aef\u57fa\u7840\uff0c\u81f3\u5c11\u9700\u8981\u638c\u63e1 HTML\u3001CSS\u3001JS \u7b49\u76f8\u5173\u7684\u57fa\u7840\u77e5\u8bc6\u3002",source:"@site/docs/components/advanced/HTML.mdx",sourceDirName:"components/advanced",slug:"/components/advanced/HTML",permalink:"/developer-site/docs/components/advanced/HTML",editUrl:"https://github.com/dingtalk-yida/developer-site/edit/feat/init/docs/components/advanced/HTML.mdx",tags:[],version:"current",frontMatter:{title:"HTML",order:2},sidebar:"components",previous:{title:"JSX",permalink:"/developer-site/docs/components/advanced/JSX"},next:{title:"Iframe",permalink:"/developer-site/docs/components/advanced/Iframe"}},d=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",children:[],level:2},{value:"\u7ec4\u4ef6\u793a\u4f8b",id:"\u7ec4\u4ef6\u793a\u4f8b",children:[],level:2},{value:"\u7ec4\u4ef6\u5c5e\u6027",id:"\u7ec4\u4ef6\u5c5e\u6027",children:[],level:2}],u={toc:d};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"html"},"HTML"),(0,o.kt)("p",null,"HTML \u7ec4\u4ef6\u5141\u8bb8\u4f60\u8fdb\u884c\u4e00\u4e9b\u81ea\u5b9a\u4e49\u7684\u529f\u80fd\u5f00\u53d1\u3002\u5176\u4e2d\u9875\u9762\u8bbe\u8ba1\u9700\u8981\u6709\u4e00\u5b9a\u7684\u524d\u7aef\u57fa\u7840\uff0c\u81f3\u5c11\u9700\u8981\u638c\u63e1 HTML\u3001CSS\u3001JS \u7b49\u76f8\u5173\u7684\u57fa\u7840\u77e5\u8bc6\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"HTML \u6559\u7a0b\uff1a",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTML"},"https://developer.mozilla.org/zh-CN/docs/Web/HTML")),(0,o.kt)("li",{parentName:"ul"},"CSS \u6559\u7a0b\uff1a",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS"},"https://developer.mozilla.org/zh-CN/docs/Web/CSS")),(0,o.kt)("li",{parentName:"ul"},"JavaScript \u6559\u7a0b\uff1a",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS"},"https://developer.mozilla.org/zh-CN/docs/Web/CSS"))),(0,o.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,o.kt)("h2",{id:"\u7ec4\u4ef6\u793a\u4f8b"},"\u7ec4\u4ef6\u793a\u4f8b"),(0,o.kt)(c.Z,{url:"https://www.aliwork.com/developer/html-v2?isRenderNav=false",mdxType:"Iframe"}),(0,o.kt)("h2",{id:"\u7ec4\u4ef6\u5c5e\u6027"},"\u7ec4\u4ef6\u5c5e\u6027"))}f.isMDXComponent=!0}}]);