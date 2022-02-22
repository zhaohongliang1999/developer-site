"use strict";(self.webpackChunkdeveloper=self.webpackChunkdeveloper||[]).push([[9054],{71766:function(e,t,i){var n=i(97218),o=i(67294),r=(i(31877),[{title:"\u5c5e\u6027\u540d",dataIndex:"attr",width:"20%"},{title:"\u5c5e\u6027Code",dataIndex:"code",width:"10%"},{title:"\u7c7b\u578b",dataIndex:"type",width:"10%"},{title:"\u6570\u636e\u793a\u4f8b",dataIndex:"demo",width:"30%"},{title:"\u5907\u6ce8",dataIndex:"desc",width:"20%"}]);t.Z=function(e){return o.createElement(n.Z,{dataSource:e.dataSource,columns:r,pagination:!1})}},9652:function(e,t,i){i.d(t,{Z:function(){return a}});var n=i(75068),o=i(67294),r=function(){function e(){this.subscriptions={},window.addEventListener("message",this.handleMsg.bind(this),!1)}var t=e.prototype;return t.on=function(e,t){this.subscriptions[e]=this.subscriptions[e]||[],this.subscriptions[e].push(t)},t.off=function(e,t){if(this.subscriptions[e]){var i=this.subscriptions[e].findIndex((function(e){return e===t}));this.subscriptions[e].splice(i,1)}},t.handleMsg=function(e){e.data&&e.data.type&&(this.subscriptions[e.data.type]||[]).forEach((function(t){t(e.data,e.origin,e.source)}))},t.destroy=function(){window.removeEventListener("message",this.handleMsg),this.subscriptions={}},e}(),a=function(e){function t(t){var i;return(i=e.call(this,t)||this).createRecevier=function(){i.destroyRecevier(),i.recevier=new r,i.recevier.on("updateHeight",(function(e,t,n){i.iframe&&n===i.iframe.contentWindow&&(i.container.style.height=(e.msg||0)+"px",i.props.onUpdateHeight(e.msg||"#"))}))},i.destroyRecevier=function(){i.recevier&&(i.recevier.destroy(),i.recevier=null)},i.container=null,i.iframe=null,i}(0,n.Z)(t,e);var i=t.prototype;return i.componentDidMount=function(){this.props.disableHeightSync||this.createRecevier()},i.componentDidUpdate=function(e){e.url.replace(/#.*$/,"")!==this.props.url.replace(/#.*$/,"")&&this.container&&(this.container.style.height=this.props.style&&this.props.style.height.toString()||"800px"),void 0!==e.disableHeightSync&&e.disableHeightSync!==this.props.disableHeightSync&&(this.props.disableHeightSync?this.destroyRecevier():this.createRecevier())},i.componentWillUnmount=function(){this.destroyRecevier()},i.render=function(){var e=this,t=this.props,i=t.className,n=t.id,r=t.style,a=t.url;return a?o.createElement("div",{className:"bg-iframe "+i,id:n,style:Object.assign({height:800,width:"100%"},r),ref:function(t){e.container=t}},o.createElement("iframe",{src:a,style:{border:"none",width:"100%",height:"100%"},ref:function(t){e.iframe=t}})):o.createElement("div",{className:"bg-iframe empty"},"Iframe")},t}(o.PureComponent);a.displayName="bg-iframe"},14403:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var n=i(87462),o=i(63366),r=(i(67294),i(3905)),a=i(9652),d=i(71766),s=["components"],c={title:"\u8f93\u5165\u6846",order:10},l="\u8f93\u5165\u6846",u={unversionedId:"components/form/textField",id:"components/form/textField",title:"\u8f93\u5165\u6846",description:"- \u7528\u4e8e\u6587\u5b57\u7c7b\u4fe1\u606f\u8f93\u5165\u573a\u666f\uff1b",source:"@site/docs/components/form/textField.mdx",sourceDirName:"components/form",slug:"/components/form/textField",permalink:"/developer-site/docs/components/form/textField",editUrl:"https://github.com/dingtalk-yida/developer-site/edit/feat/init/docs/components/form/textField.mdx",tags:[],version:"current",frontMatter:{title:"\u8f93\u5165\u6846",order:10},sidebar:"components",previous:{title:"\u4e0a\u4f20\u9644\u4ef6",permalink:"/developer-site/docs/components/form/uploadAppendix"},next:{title:"\u591a\u884c\u8f93\u5165\u6846",permalink:"/developer-site/docs/components/form/textInputs"}},p=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",children:[],level:2},{value:"\u7ec4\u4ef6\u793a\u4f8b",id:"\u7ec4\u4ef6\u793a\u4f8b",children:[],level:2},{value:"\u7ec4\u4ef6\u5c5e\u6027",id:"\u7ec4\u4ef6\u5c5e\u6027",children:[],level:2}],m={toc:p};function f(e){var t=e.components,i=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u8f93\u5165\u6846"},"\u8f93\u5165\u6846"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u6587\u5b57\u7c7b\u4fe1\u606f\u8f93\u5165\u573a\u666f\uff1b")),(0,r.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,r.kt)("h2",{id:"\u7ec4\u4ef6\u793a\u4f8b"},"\u7ec4\u4ef6\u793a\u4f8b"),(0,r.kt)(a.Z,{url:"https://www.aliwork.com/developer/text-field-v2?isRenderNav=false",mdxType:"Iframe"}),(0,r.kt)("h2",{id:"\u7ec4\u4ef6\u5c5e\u6027"},"\u7ec4\u4ef6\u5c5e\u6027"),(0,r.kt)(d.Z,{dataSource:[{attr:"\u6807\u9898",code:"label",type:"String",demo:"\u6807\u9898",dafault:"",desc:""},{attr:"\u503c",code:"value",type:"String/Number ",demo:'""',dafault:"",desc:""},{attr:"\u6807\u9898\u4f4d\u7f6e",code:"labelAlign",type:"String",demo:'"left"',dafault:"",desc:'\u53ef\u9009\u503c\uff1a"left", "top", "inset"'},{attr:"\u5360\u4f4d\u63d0\u793a",code:"placeholder",type:"String",demo:'"\u8bf7\u9009\u62e9\u65e5\u671f" ',dafault:"",desc:""},{attr:"\u63cf\u8ff0\u4fe1\u606f",code:"tips",type:"String",demo:'"\u8fd9\u662f\u4e00\u6bb5\u63cf\u8ff0\u4fe1\u606f"',dafault:"",desc:""},{attr:"\u5c3a\u5bf8",code:"size",type:"String",demo:'"small" ',dafault:"",desc:'\u53ef\u9009\u503c\uff1a"small", "medium", "large" '},{attr:"\u72b6\u6001",code:"behavior",type:"String",demo:'{fieldBehavior: "NORMAL"}',dafault:"",desc:'fieldBehavior \u53ef\u9009\u503c\uff1a"NORMAL", "DISABLED", "READONLY", "HIDDEN"'},{attr:"\u6807\u9898\u63d0\u793a",code:"labelTipsTypes",type:"String",demo:'"\u8bf7\u9009\u62e9\u65e5\u671f" ',dafault:"",desc:'"none", "text", "render" '},{attr:"\u7c7b\u578b",code:"htmlType",type:"String",demo:'"input"',dafault:"",desc:'"input", "textarea", "password"'},{attr:"\u72b6\u6001",code:"state",type:"String",demo:'"normal"  ',dafault:"",desc:'"error", "loading", "success"'},{attr:"\u8ba1\u6570\u5668",code:"hasLimitHint",type:"Bool",demo:"false",dafault:"",desc:""},{attr:"\u662f\u5426\u663e\u793a\u6e05\u9664\u6309\u94ae",code:"hasClear",type:"Bool",demo:"false",dafault:"",desc:""},{attr:"\u81ea\u52a8\u53bb\u9664\u5934\u5c3e\u7a7a\u5b57\u7b26",code:"trim",type:"Bool",demo:"false",dafault:"",desc:""},{attr:"\u81ea\u52a8\u805a\u7126",code:"autoFocus",type:"Bool",demo:"false ",dafault:"",desc:""},{attr:"\u8f93\u5165\u6846\u524d\u9644\u52a0\u5185\u5bb9",code:"addonBefore",type:"String",demo:" ",dafault:"",desc:""},{attr:"\u8f93\u5165\u6846\u540e\u9644\u52a0\u5185\u5bb9",code:"addonAfter",type:"addonAfter",demo:"",dafault:"",desc:""},{attr:"\u6821\u9a8c",code:"validation",type:"Array",demo:'[{type:"required"}] ',dafault:"",desc:'\u53ef\u9009\u503c\uff1a{type:"required"}, {type: "customValidate", message: "\u8bf7\u9009\u62e9\u4eca\u65e5\u4e4b\u524d\u7684\u65e5\u671f", param: "function validateRule(value) { return value <= new Date().getTime(); }"} '},{attr:"\u503c\u53d1\u751f\u6539\u53d8\u4e8b\u4ef6",code:"onChange",type:"Function",demo:'function onChange({ value }) {console.log("onChange", value);}  ',dafault:"",desc:" "}],mdxType:"AttrTable"}))}f.isMDXComponent=!0}}]);