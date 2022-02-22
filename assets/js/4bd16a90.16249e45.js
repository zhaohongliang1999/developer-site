"use strict";(self.webpackChunkdeveloper=self.webpackChunkdeveloper||[]).push([[5e3],{71766:function(e,t,n){var i=n(97218),o=n(67294),r=(n(31877),[{title:"\u5c5e\u6027\u540d",dataIndex:"attr",width:"20%"},{title:"\u5c5e\u6027Code",dataIndex:"code",width:"10%"},{title:"\u7c7b\u578b",dataIndex:"type",width:"10%"},{title:"\u6570\u636e\u793a\u4f8b",dataIndex:"demo",width:"30%"},{title:"\u5907\u6ce8",dataIndex:"desc",width:"20%"}]);t.Z=function(e){return o.createElement(i.Z,{dataSource:e.dataSource,columns:r,pagination:!1})}},9652:function(e,t,n){n.d(t,{Z:function(){return s}});var i=n(75068),o=n(67294),r=function(){function e(){this.subscriptions={},window.addEventListener("message",this.handleMsg.bind(this),!1)}var t=e.prototype;return t.on=function(e,t){this.subscriptions[e]=this.subscriptions[e]||[],this.subscriptions[e].push(t)},t.off=function(e,t){if(this.subscriptions[e]){var n=this.subscriptions[e].findIndex((function(e){return e===t}));this.subscriptions[e].splice(n,1)}},t.handleMsg=function(e){e.data&&e.data.type&&(this.subscriptions[e.data.type]||[]).forEach((function(t){t(e.data,e.origin,e.source)}))},t.destroy=function(){window.removeEventListener("message",this.handleMsg),this.subscriptions={}},e}(),s=function(e){function t(t){var n;return(n=e.call(this,t)||this).createRecevier=function(){n.destroyRecevier(),n.recevier=new r,n.recevier.on("updateHeight",(function(e,t,i){n.iframe&&i===n.iframe.contentWindow&&(n.container.style.height=(e.msg||0)+"px",n.props.onUpdateHeight(e.msg||"#"))}))},n.destroyRecevier=function(){n.recevier&&(n.recevier.destroy(),n.recevier=null)},n.container=null,n.iframe=null,n}(0,i.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.props.disableHeightSync||this.createRecevier()},n.componentDidUpdate=function(e){e.url.replace(/#.*$/,"")!==this.props.url.replace(/#.*$/,"")&&this.container&&(this.container.style.height=this.props.style&&this.props.style.height.toString()||"800px"),void 0!==e.disableHeightSync&&e.disableHeightSync!==this.props.disableHeightSync&&(this.props.disableHeightSync?this.destroyRecevier():this.createRecevier())},n.componentWillUnmount=function(){this.destroyRecevier()},n.render=function(){var e=this,t=this.props,n=t.className,i=t.id,r=t.style,s=t.url;return s?o.createElement("div",{className:"bg-iframe "+n,id:i,style:Object.assign({height:800,width:"100%"},r),ref:function(t){e.container=t}},o.createElement("iframe",{src:s,style:{border:"none",width:"100%",height:"100%"},ref:function(t){e.iframe=t}})):o.createElement("div",{className:"bg-iframe empty"},"Iframe")},t}(o.PureComponent);s.displayName="bg-iframe"},82550:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var i=n(87462),o=n(63366),r=(n(67294),n(3905)),s=n(9652),a=n(71766),c=["components"],d={title:"\u9009\u9879\u5361",order:1},l="\u9009\u9879\u5361",u={unversionedId:"components/layout/tabsLayout",id:"components/layout/tabsLayout",title:"\u9009\u9879\u5361",description:"\u9009\u9879\u5361\u5207\u6362\u7ec4\u4ef6\u3002",source:"@site/docs/components/layout/tabsLayout.mdx",sourceDirName:"components/layout",slug:"/components/layout/tabsLayout",permalink:"/developer-site/docs/components/layout/tabsLayout",editUrl:"https://github.com/dingtalk-yida/developer-site/edit/feat/init/docs/components/layout/tabsLayout.mdx",tags:[],version:"current",frontMatter:{title:"\u9009\u9879\u5361",order:1},sidebar:"components",next:{title:"\u5e03\u5c40\u5bb9\u5668",permalink:"/developer-site/docs/components/layout/regionalContainer"}},p=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",children:[],level:2},{value:"\u7ec4\u4ef6\u793a\u4f8b",id:"\u7ec4\u4ef6\u793a\u4f8b",children:[],level:2},{value:"\u7ec4\u4ef6\u5c5e\u6027",id:"\u7ec4\u4ef6\u5c5e\u6027",children:[],level:2}],h={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,c);return(0,r.kt)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u9009\u9879\u5361"},"\u9009\u9879\u5361"),(0,r.kt)("p",null,"\u9009\u9879\u5361\u5207\u6362\u7ec4\u4ef6\u3002"),(0,r.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,r.kt)("p",null,"TAB \u8ba9\u7528\u6237\u53ef\u4ee5\u5728\u4e0d\u540c\u5b50\u4efb\u52a1\u3001\u89c6\u56fe\u3001\u6a21\u5f0f\u4e4b\u95f4\u5207\u6362\uff0c\u5b83\u5177\u6709\u5168\u5c40\u5bfc\u822a\u7684\u4f5c\u7528\uff0c\u662f\u5168\u5c40\u529f\u80fd\u7684\u4e3b\u8981\u5c55\u793a\u548c\u5207\u6362\u533a\u57df\uff0c\u4e00\u4e2a TAB \u6807\u8bb0\u4e00\u4e2a\u6838\u5fc3\u529f\u80fd\uff0cTAB \u4e4b\u95f4\u53ef\u4ee5\u5feb\u901f\u70b9\u51fb\u5207\u6362\u3002\u8be5\u7a97\u53e3\u5305\u542b 2 \u4e2a\u4ee5\u4e0a\u7684\u9009\u9879\u5361\uff0c\u6240\u6709\u9009\u9879\u5361\u53ef\u4ee5\u6392\u5217\u5728\u4e00\u884c\u4e2d\uff0c\u5373\u4f7f\u8be5\u7528\u6237\u754c\u9762\u88ab\u672c\u5730\u5316\u540e\u4e5f\u662f\u5982\u6b64\u3002\u63d0\u4f9b\u5e73\u7ea7\u7684\u533a\u57df\u5c06\u5927\u5757\u5185\u5bb9\u8fdb\u884c\u6536\u7eb3\u548c\u5c55\u73b0\uff0c\u4fdd\u6301\u754c\u9762\u6574\u6d01\u3002"),(0,r.kt)("p",null,"\u5b9c\u642d\u63d0\u4f9b\u4e86\u4e09\u7ea7\u9009\u9879\u5361\uff0c\u5206\u522b\u7528\u4e8e\u4e0d\u540c\u7684\u573a\u666f\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u666e\u901a\u9009\u9879\u5361\uff0c\u5f15\u9886\u6574\u9875\u9762\u7684\u5185\u5bb9\uff0c\u8d77\u5bfc\u822a\u7684\u4f5c\u7528\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6587\u672c\u578b\u9009\u9879\u5361\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5305\u88f9\u578b\u9009\u9879\u5361\uff0c\u5728\u9875\u9762\u7ed3\u6784\u4e2d\uff0c\u53ea\u662f\u5c40\u90e8\u5c55\u793a\uff0c\u9700\u8981\u548c\u5176\u4ed6\u5185\u5bb9\u7ed3\u5408\u51fa\u73b0\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u80f6\u56ca\u578b\u9009\u9879\u5361\u3002")),(0,r.kt)("h2",{id:"\u7ec4\u4ef6\u793a\u4f8b"},"\u7ec4\u4ef6\u793a\u4f8b"),(0,r.kt)(s.Z,{url:"https://www.aliwork.com/developer/tabs-layout-v2?isRenderNav=false",mdxType:"Iframe"}),(0,r.kt)("h2",{id:"\u7ec4\u4ef6\u5c5e\u6027"},"\u7ec4\u4ef6\u5c5e\u6027"),(0,r.kt)(a.Z,{dataSource:[{attr:"\u9009\u9879",code:"items",type:"Array",demo:'[{ disabled: false, primaryKey: "2", title: "\u6807\u7b7e\u9879 2" }]',desc:"\u53ef\u4ee5\u8bbe\u7f6e\u9ed8\u8ba4\u6fc0\u6d3b\u9009\u9879\u3001\u7981\u7528\u9009\u9879\u548c\u6807\u7b7e\u540d"},{attr:"\u5f62\u6001",code:"shape",type:"String",demo:"\u666e\u901a\u578b",desc:"\u53ef\u9009\u9879\u6709\u666e\u901a\u578b\uff0c\u5305\u88f9\u578b\uff0c\u6587\u672c\u578b\uff0c\u80f6\u56ca\u578b\u7b49"},{attr:"\u5927\u5c0f",code:"size",type:"String",demo:"\u6b63\u5e38",desc:"\u53ef\u9009\u9879\u6709\u5c0f\uff0c\u6b63\u5e38\uff0c\u5927"},{attr:"\u9009\u9879\u5361\u8fc7\u591a\u65f6\u7684\u6ed1\u52a8\u6a21\u5f0f",code:"excessMode",type:"String",demo:"\u6ed1\u52a8",desc:"\u53ef\u9009\u9879\u4e3a\u6ed1\u52a8\u3001\u4e0b\u62c9"},{attr:"\u5bfc\u822a\u9009\u9879\u5361\u7684\u4f4d\u7f6e",code:"tabPosition",type:"String",demo:"\u4e0a",desc:"\u53ef\u9009\u9879\u4e3a\u4e0a\u3001\u4e0b\u3001\u5de6\u3001\u53f3"},{attr:"\u9009\u9879\u5361\u5207\u6362\u65f6",code:"onChange",type:"function",demo:"function onChange(activeIndex, key){console.log(activeIndex, key); }",desc:""}],mdxType:"AttrTable"}))}m.isMDXComponent=!0}}]);