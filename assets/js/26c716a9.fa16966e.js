"use strict";(self.webpackChunkdeveloper=self.webpackChunkdeveloper||[]).push([[4362],{71766:function(e,t,i){var n=i(97218),r=i(67294),o=(i(31877),[{title:"\u5c5e\u6027\u540d",dataIndex:"attr",width:"20%"},{title:"\u5c5e\u6027Code",dataIndex:"code",width:"10%"},{title:"\u7c7b\u578b",dataIndex:"type",width:"10%"},{title:"\u6570\u636e\u793a\u4f8b",dataIndex:"demo",width:"30%"},{title:"\u5907\u6ce8",dataIndex:"desc",width:"20%"}]);t.Z=function(e){return r.createElement(n.Z,{dataSource:e.dataSource,columns:o,pagination:!1})}},9652:function(e,t,i){i.d(t,{Z:function(){return a}});var n=i(75068),r=i(67294),o=function(){function e(){this.subscriptions={},window.addEventListener("message",this.handleMsg.bind(this),!1)}var t=e.prototype;return t.on=function(e,t){this.subscriptions[e]=this.subscriptions[e]||[],this.subscriptions[e].push(t)},t.off=function(e,t){if(this.subscriptions[e]){var i=this.subscriptions[e].findIndex((function(e){return e===t}));this.subscriptions[e].splice(i,1)}},t.handleMsg=function(e){e.data&&e.data.type&&(this.subscriptions[e.data.type]||[]).forEach((function(t){t(e.data,e.origin,e.source)}))},t.destroy=function(){window.removeEventListener("message",this.handleMsg),this.subscriptions={}},e}(),a=function(e){function t(t){var i;return(i=e.call(this,t)||this).createRecevier=function(){i.destroyRecevier(),i.recevier=new o,i.recevier.on("updateHeight",(function(e,t,n){i.iframe&&n===i.iframe.contentWindow&&(i.container.style.height=(e.msg||0)+"px",i.props.onUpdateHeight(e.msg||"#"))}))},i.destroyRecevier=function(){i.recevier&&(i.recevier.destroy(),i.recevier=null)},i.container=null,i.iframe=null,i}(0,n.Z)(t,e);var i=t.prototype;return i.componentDidMount=function(){this.props.disableHeightSync||this.createRecevier()},i.componentDidUpdate=function(e){e.url.replace(/#.*$/,"")!==this.props.url.replace(/#.*$/,"")&&this.container&&(this.container.style.height=this.props.style&&this.props.style.height.toString()||"800px"),void 0!==e.disableHeightSync&&e.disableHeightSync!==this.props.disableHeightSync&&(this.props.disableHeightSync?this.destroyRecevier():this.createRecevier())},i.componentWillUnmount=function(){this.destroyRecevier()},i.render=function(){var e=this,t=this.props,i=t.className,n=t.id,o=t.style,a=t.url;return a?r.createElement("div",{className:"bg-iframe "+i,id:n,style:Object.assign({height:800,width:"100%"},o),ref:function(t){e.container=t}},r.createElement("iframe",{src:a,style:{border:"none",width:"100%",height:"100%"},ref:function(t){e.iframe=t}})):r.createElement("div",{className:"bg-iframe empty"},"Iframe")},t}(r.PureComponent);a.displayName="bg-iframe"},36569:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return d},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var n=i(87462),r=i(63366),o=(i(67294),i(3905)),a=i(9652),s=i(71766),c=["components"],d={title:"\u591a\u9009",order:4},l="\u591a\u9009",u={unversionedId:"components/form/checkbox",id:"components/form/checkbox",title:"\u591a\u9009",description:"\u4f55\u65f6\u4f7f\u7528",source:"@site/docs/components/form/checkbox.mdx",sourceDirName:"components/form",slug:"/components/form/checkbox",permalink:"/developer-site/docs/components/form/checkbox",editUrl:"https://github.com/dingtalk-yida/developer-site/edit/feat/init/docs/components/form/checkbox.mdx",tags:[],version:"current",frontMatter:{title:"\u591a\u9009",order:4},sidebar:"components",previous:{title:"\u4e0b\u62c9\u9009\u62e9",permalink:"/developer-site/docs/components/form/select"},next:{title:"\u4e0b\u62c9\u591a\u9009",permalink:"/developer-site/docs/components/form/selects"}},p=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",children:[],level:2},{value:"\u7ec4\u4ef6\u793a\u4f8b",id:"\u7ec4\u4ef6\u793a\u4f8b",children:[],level:2},{value:"\u7ec4\u4ef6\u5c5e\u6027",id:"\u7ec4\u4ef6\u5c5e\u6027",children:[],level:2}],m={toc:p};function f(e){var t=e.components,i=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u591a\u9009"},"\u591a\u9009"),(0,o.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5728\u4e00\u7ec4\u53ef\u9009\u9879\u4e2d\u8fdb\u884c\u591a\u9879\u9009\u62e9\u65f6\uff1b"),(0,o.kt)("li",{parentName:"ul"},"\u5355\u72ec\u4f7f\u7528\u53ef\u4ee5\u8868\u793a\u4e24\u79cd\u72b6\u6001\u4e4b\u95f4\u7684\u5207\u6362\uff0c\u548c switch \u7c7b\u4f3c\u3002\u533a\u522b\u5728\u4e8e\u5207\u6362 switch \u4f1a\u76f4\u63a5\u89e6\u53d1\u72b6\u6001\u6539\u53d8\uff0c\u800c checkbox \u4e00\u822c\u7528\u4e8e\u72b6\u6001\u6807\u8bb0\uff0c\u9700\u8981\u548c\u63d0\u4ea4\u64cd\u4f5c\u914d\u5408\uff1b")),(0,o.kt)("h2",{id:"\u7ec4\u4ef6\u793a\u4f8b"},"\u7ec4\u4ef6\u793a\u4f8b"),(0,o.kt)(a.Z,{url:"https://www.aliwork.com/developer/check-v2?isRenderNav=false",mdxType:"Iframe"}),(0,o.kt)("h2",{id:"\u7ec4\u4ef6\u5c5e\u6027"},"\u7ec4\u4ef6\u5c5e\u6027"),(0,o.kt)(s.Z,{dataSource:[{attr:"\u6807\u9898",code:"text",type:"String",demo:"\u6807\u9898",dafault:"",desc:""},{attr:"\u503c",code:"String/Number",type:'"value"',demo:"",dafault:"",desc:""},{attr:"\u6807\u9898\u4f4d\u7f6e",code:"labelAlign",type:"String",demo:'"left"',dafault:"",desc:'\u53ef\u9009\u503c\uff1a"left", "top", "inset"'},{attr:"\u6807\u9898\u5bbd\u5ea6",code:"labelColSpan",type:"Number",demo:"4",dafault:"",desc:""},{attr:"\u6807\u9898\u504f\u79fb",code:"labelColOffset",type:"Number",demo:"0",dafault:"",desc:""},{attr:"\u5185\u5bb9\u5bbd\u5ea6",code:"wrapperColSpan",type:"Number",demo:"0",dafault:"",desc:""},{attr:"\u5185\u5bb9\u504f\u79fb",code:"wrapperColOffset",type:"Number",demo:"0",dafault:"",desc:""},{attr:"\u6807\u9898\u5bf9\u9f50",code:"labelTextAlign",type:"String",demo:'"left"',dafault:"",desc:'\u53ef\u9009\u503c\uff1a"left", "right"'},{attr:"\u63cf\u8ff0\u4fe1\u606f",code:"tips",type:"String",demo:"\u8fd9\u662f\u4e00\u6bb5\u63cf\u8ff0\u4fe1\u606f",dafault:"",desc:""},{attr:"\u5c3a\u5bf8",code:"size",type:"String",demo:'"small"',dafault:"",desc:'\u53ef\u9009\u503c\uff1a"small", "medium", "large"'},{attr:"\u72b6\u6001",code:"behavior",type:"String",demo:'"NORMAL"',dafault:"",desc:'fieldBehavior \u53ef\u9009\u503c\uff1a"NORMAL", "DISABLED", "READONLY", "HIDDEN"'},{attr:"\u6821\u9a8c",code:"validation",type:"Array",demo:'[{type:"required"}]',dafault:"",desc:'\u53ef\u9009\u503c\uff1a{type:"required"}, {type: "customValidate", message: "\u8bf7\u9009\u62e9\u4eca\u65e5\u4e4b\u524d\u7684\u65e5\u671f", param: "function validateRule(value) { return value <= new Date().getTime(); }"}'},{attr:"\u503c\u53d1\u751f\u6539\u53d8\u4e8b\u4ef6",code:"onChange",type:"Function",demo:"function(value){ console.log(value); }",dafault:"",desc:""}],mdxType:"AttrTable"}))}f.isMDXComponent=!0}}]);