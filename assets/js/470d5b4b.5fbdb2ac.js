"use strict";(self.webpackChunkdeveloper=self.webpackChunkdeveloper||[]).push([[5686],{71766:function(e,t,i){var n=i(97218),r=i(67294),o=(i(31877),[{title:"\u5c5e\u6027\u540d",dataIndex:"attr",width:"20%"},{title:"\u5c5e\u6027Code",dataIndex:"code",width:"10%"},{title:"\u7c7b\u578b",dataIndex:"type",width:"10%"},{title:"\u6570\u636e\u793a\u4f8b",dataIndex:"demo",width:"30%"},{title:"\u5907\u6ce8",dataIndex:"desc",width:"20%"}]);t.Z=function(e){return r.createElement(n.Z,{dataSource:e.dataSource,columns:o,pagination:!1})}},9652:function(e,t,i){i.d(t,{Z:function(){return a}});var n=i(75068),r=i(67294),o=function(){function e(){this.subscriptions={},window.addEventListener("message",this.handleMsg.bind(this),!1)}var t=e.prototype;return t.on=function(e,t){this.subscriptions[e]=this.subscriptions[e]||[],this.subscriptions[e].push(t)},t.off=function(e,t){if(this.subscriptions[e]){var i=this.subscriptions[e].findIndex((function(e){return e===t}));this.subscriptions[e].splice(i,1)}},t.handleMsg=function(e){e.data&&e.data.type&&(this.subscriptions[e.data.type]||[]).forEach((function(t){t(e.data,e.origin,e.source)}))},t.destroy=function(){window.removeEventListener("message",this.handleMsg),this.subscriptions={}},e}(),a=function(e){function t(t){var i;return(i=e.call(this,t)||this).createRecevier=function(){i.destroyRecevier(),i.recevier=new o,i.recevier.on("updateHeight",(function(e,t,n){i.iframe&&n===i.iframe.contentWindow&&(i.container.style.height=(e.msg||0)+"px",i.props.onUpdateHeight(e.msg||"#"))}))},i.destroyRecevier=function(){i.recevier&&(i.recevier.destroy(),i.recevier=null)},i.container=null,i.iframe=null,i}(0,n.Z)(t,e);var i=t.prototype;return i.componentDidMount=function(){this.props.disableHeightSync||this.createRecevier()},i.componentDidUpdate=function(e){e.url.replace(/#.*$/,"")!==this.props.url.replace(/#.*$/,"")&&this.container&&(this.container.style.height=this.props.style&&this.props.style.height.toString()||"800px"),void 0!==e.disableHeightSync&&e.disableHeightSync!==this.props.disableHeightSync&&(this.props.disableHeightSync?this.destroyRecevier():this.createRecevier())},i.componentWillUnmount=function(){this.destroyRecevier()},i.render=function(){var e=this,t=this.props,i=t.className,n=t.id,o=t.style,a=t.url;return a?r.createElement("div",{className:"bg-iframe "+i,id:n,style:Object.assign({height:800,width:"100%"},o),ref:function(t){e.container=t}},r.createElement("iframe",{src:a,style:{border:"none",width:"100%",height:"100%"},ref:function(t){e.iframe=t}})):r.createElement("div",{className:"bg-iframe empty"},"Iframe")},t}(r.PureComponent);a.displayName="bg-iframe"},34601:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var n=i(87462),r=i(63366),o=(i(67294),i(3905)),a=i(9652),s=i(71766),d=["components"],c={title:"\u5355\u9009",order:2},l="\u5355\u9009",u={unversionedId:"components/form/radio",id:"components/form/radio",title:"\u5355\u9009",description:"\u4f55\u65f6\u4f7f\u7528",source:"@site/docs/components/form/radio.mdx",sourceDirName:"components/form",slug:"/components/form/radio",permalink:"/developer-site/docs/components/form/radio",editUrl:"https://github.com/dingtalk-yida/developer-site/edit/feat/init/docs/components/form/radio.mdx",tags:[],version:"current",frontMatter:{title:"\u5355\u9009",order:2},sidebar:"components",previous:{title:"\u6570\u5b57\u8f93\u5165\u6846",permalink:"/developer-site/docs/components/form/number"},next:{title:"\u4e0b\u62c9\u9009\u62e9",permalink:"/developer-site/docs/components/form/select"}},p=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",children:[],level:2},{value:"\u7ec4\u4ef6\u793a\u4f8b",id:"\u7ec4\u4ef6\u793a\u4f8b",children:[],level:2},{value:"\u7ec4\u4ef6\u5c5e\u6027",id:"\u7ec4\u4ef6\u5c5e\u6027",children:[],level:2}],m={toc:p};function f(e){var t=e.components,i=(0,r.Z)(e,d);return(0,o.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5355\u9009"},"\u5355\u9009"),(0,o.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5355\u9009\u6846\u5141\u8bb8\u7528\u6237\u4ece\u4e00\u4e2a\u6570\u636e\u96c6\u4e2d\u9009\u62e9\u5355\u4e2a\u9009\u9879\u3002\u9762\u5411\u7528\u6237\u9700\u8981\u5e76\u6392\u770b\u5230\u6240\u6709\u7684\u53ef\u9009\u9879\uff0c\u5e76\u4f7f\u7528\u5355\u9009\u6846\u8fdb\u884c\u6392\u4ed6\u64cd\u4f5c\u7684\u573a\u666f\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u9009\u9879\u8fc7\u591a\u7684\u573a\u666f\uff0c\u8003\u8651\u4f7f\u7528\u4e0b\u62c9\u5217\u8868\uff0c\u76f8\u5bf9\u4e8e\u663e\u793a\u6240\u6709\u7684\u9009\u9879\u5360\u7528\u66f4\u5c11\u7684\u7a7a\u95f4\u3002")),(0,o.kt)("h2",{id:"\u7ec4\u4ef6\u793a\u4f8b"},"\u7ec4\u4ef6\u793a\u4f8b"),(0,o.kt)(a.Z,{url:"https://www.aliwork.com/developer/radio-v2?isRenderNav=false",mdxType:"Iframe"}),(0,o.kt)("h2",{id:"\u7ec4\u4ef6\u5c5e\u6027"},"\u7ec4\u4ef6\u5c5e\u6027"),(0,o.kt)(s.Z,{dataSource:[{attr:"\u6807\u9898",code:"label",type:"String",demo:"\u6807\u9898",dafault:"",desc:""},{attr:"\u503c",code:"fieldData",type:"Object",demo:'{dataType:"CHANGED", value:"moon"}',dafault:"",desc:""},{attr:"\u6807\u9898\u4f4d\u7f6e",code:"labelAlign",type:"String",demo:'"left"',dafault:"",desc:'\u53ef\u9009\u503c\uff1a"left", "top"'},{attr:"\u6807\u9898\u5bbd\u5ea6",code:"labelColSpan",type:"Number",demo:"4",dafault:"",desc:""},{attr:"\u6807\u9898\u504f\u79fb",code:"labelColOffset",type:"Number",demo:"0",dafault:"",desc:""},{attr:"\u5185\u5bb9\u5bbd\u5ea6",code:"wrapperColSpan",type:"Number",demo:"0",dafault:"",desc:""},{attr:"\u5185\u5bb9\u504f\u79fb",code:"wrapperColOffset",type:"Number",demo:"0",dafault:"",desc:""},{attr:"\u63cf\u8ff0\u4fe1\u606f",code:"tips",type:"String",demo:"\u8fd9\u662f\u4e00\u6bb5\u63cf\u8ff0\u4fe1\u606f",dafault:"",desc:""},{attr:"\u5c3a\u5bf8",code:"size",type:"String",demo:'"small"',dafault:"",desc:'\u53ef\u9009\u503c\uff1a"small", "medium", "large"'},{attr:"\u72b6\u6001",code:"behavior",type:"String",demo:'{fieldBehavior: "NORMAL"}',dafault:"",desc:'fieldBehavior \u53ef\u9009\u503c\uff1a"NORMAL", "DISABLED", "READONLY", "HIDDEN"'},{attr:"\u6821\u9a8c",code:"validation",type:"Array",demo:'[{type:"required"}] ',dafault:"",desc:'\u53ef\u9009\u503c\uff1a{type:"required"}, {type: "customValidate", message: "\u8bf7\u9009\u62e9\u6307\u5b9a\u9009\u9879", param: "function validateRule(value) { return value === "test" }"}'},{attr:"\u503c\u53d1\u751f\u6539\u53d8\u4e8b\u4ef6",code:"onChange",type:"Function",demo:"function(value){ console.log(value); }",dafault:"",desc:""}],mdxType:"AttrTable"}))}f.isMDXComponent=!0}}]);