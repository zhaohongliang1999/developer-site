"use strict";(self.webpackChunkdeveloper=self.webpackChunkdeveloper||[]).push([[7063],{71766:function(e,t,i){var n=i(97218),r=i(67294),o=(i(31877),[{title:"\u5c5e\u6027\u540d",dataIndex:"attr",width:"20%"},{title:"\u5c5e\u6027Code",dataIndex:"code",width:"10%"},{title:"\u7c7b\u578b",dataIndex:"type",width:"10%"},{title:"\u6570\u636e\u793a\u4f8b",dataIndex:"demo",width:"30%"},{title:"\u5907\u6ce8",dataIndex:"desc",width:"20%"}]);t.Z=function(e){return r.createElement(n.Z,{dataSource:e.dataSource,columns:o,pagination:!1})}},9652:function(e,t,i){i.d(t,{Z:function(){return s}});var n=i(75068),r=i(67294),o=function(){function e(){this.subscriptions={},window.addEventListener("message",this.handleMsg.bind(this),!1)}var t=e.prototype;return t.on=function(e,t){this.subscriptions[e]=this.subscriptions[e]||[],this.subscriptions[e].push(t)},t.off=function(e,t){if(this.subscriptions[e]){var i=this.subscriptions[e].findIndex((function(e){return e===t}));this.subscriptions[e].splice(i,1)}},t.handleMsg=function(e){e.data&&e.data.type&&(this.subscriptions[e.data.type]||[]).forEach((function(t){t(e.data,e.origin,e.source)}))},t.destroy=function(){window.removeEventListener("message",this.handleMsg),this.subscriptions={}},e}(),s=function(e){function t(t){var i;return(i=e.call(this,t)||this).createRecevier=function(){i.destroyRecevier(),i.recevier=new o,i.recevier.on("updateHeight",(function(e,t,n){i.iframe&&n===i.iframe.contentWindow&&(i.container.style.height=(e.msg||0)+"px",i.props.onUpdateHeight(e.msg||"#"))}))},i.destroyRecevier=function(){i.recevier&&(i.recevier.destroy(),i.recevier=null)},i.container=null,i.iframe=null,i}(0,n.Z)(t,e);var i=t.prototype;return i.componentDidMount=function(){this.props.disableHeightSync||this.createRecevier()},i.componentDidUpdate=function(e){e.url.replace(/#.*$/,"")!==this.props.url.replace(/#.*$/,"")&&this.container&&(this.container.style.height=this.props.style&&this.props.style.height.toString()||"800px"),void 0!==e.disableHeightSync&&e.disableHeightSync!==this.props.disableHeightSync&&(this.props.disableHeightSync?this.destroyRecevier():this.createRecevier())},i.componentWillUnmount=function(){this.destroyRecevier()},i.render=function(){var e=this,t=this.props,i=t.className,n=t.id,o=t.style,s=t.url;return s?r.createElement("div",{className:"bg-iframe "+i,id:n,style:Object.assign({height:800,width:"100%"},o),ref:function(t){e.container=t}},r.createElement("iframe",{src:s,style:{border:"none",width:"100%",height:"100%"},ref:function(t){e.iframe=t}})):r.createElement("div",{className:"bg-iframe empty"},"Iframe")},t}(r.PureComponent);s.displayName="bg-iframe"},49086:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return h}});var n=i(87462),r=i(63366),o=(i(67294),i(3905)),s=i(9652),a=i(71766),d=["components"],c={title:"\u65f6\u95f4\u8f74",order:14},l="\u65f6\u95f4\u8f74",u={unversionedId:"components/advanced/timeLine",id:"components/advanced/timeLine",title:"\u65f6\u95f4\u8f74",description:"\u5782\u76f4\u5c55\u793a\u7684\u65f6\u95f4\u6d41\u4fe1\u606f\u3002",source:"@site/docs/components/advanced/timeLine.mdx",sourceDirName:"components/advanced",slug:"/components/advanced/timeLine",permalink:"/developer-site/docs/components/advanced/timeLine",editUrl:"https://github.com/dingtalk-yida/developer-site/edit/feat/init/docs/components/advanced/timeLine.mdx",tags:[],version:"current",frontMatter:{title:"\u65f6\u95f4\u8f74",order:14},sidebar:"components",previous:{title:"\u8fdb\u5ea6\u6761",permalink:"/developer-site/docs/components/advanced/progress"},next:{title:"\u6b65\u9aa4\u6761",permalink:"/developer-site/docs/components/advanced/steps"}},p=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",children:[],level:2},{value:"\u7ec4\u4ef6\u793a\u4f8b",id:"\u7ec4\u4ef6\u793a\u4f8b",children:[],level:2},{value:"\u7ec4\u4ef6\u5c5e\u6027",id:"\u7ec4\u4ef6\u5c5e\u6027",children:[],level:2}],m={toc:p};function h(e){var t=e.components,i=(0,r.Z)(e,d);return(0,o.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u65f6\u95f4\u8f74"},"\u65f6\u95f4\u8f74"),(0,o.kt)("p",null,"\u5782\u76f4\u5c55\u793a\u7684\u65f6\u95f4\u6d41\u4fe1\u606f\u3002"),(0,o.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5f53\u6709\u4e00\u7cfb\u5217\u4fe1\u606f\u9700\u8981\u4ece\u4e0a\u81f3\u4e0b\u6309\u65f6\u95f4\u6392\u5217\u65f6\uff1b"),(0,o.kt)("li",{parentName:"ul"},"\u9700\u8981\u6709\u4e00\u6761\u65f6\u95f4\u8f74\u8fdb\u884c\u89c6\u89c9\u4e0a\u7684\u4e32\u8054\u65f6\uff1b")),(0,o.kt)("h2",{id:"\u7ec4\u4ef6\u793a\u4f8b"},"\u7ec4\u4ef6\u793a\u4f8b"),(0,o.kt)(s.Z,{url:"https://www.aliwork.com/developer/timeLine-v2?isRenderNav=false",mdxType:"Iframe"}),(0,o.kt)("h2",{id:"\u7ec4\u4ef6\u5c5e\u6027"},"\u7ec4\u4ef6\u5c5e\u6027"),(0,o.kt)(a.Z,{dataSource:[{attr:"\u65f6\u95f4\u8f74\u6570\u636e",code:"dataSource",type:"object",demo:"[{ title: 'Cloudy', time: '2016-06-10 10:30:00' }]",dafault:"",desc:""},{attr:"\u6298\u53e0\u6570\u636e",code:"fold",type:"object",demo:"[{ foldArea: [1, 2], foldShow: false }] ",dafault:"",desc:""},{attr:"\u6807\u9898",code:"title",type:"string",demo:"'\u65f6\u95f4 1'",dafault:"",desc:""},{attr:"\u65f6\u95f4",code:"time",type:"string",demo:"'2019-01-05' \uff0c'2019-02-05'\uff0c'2019-02-05'",dafault:"",desc:""},{attr:"\u72b6\u6001",code:"state",type:"string",demo:"'process', 'success', 'error'",dafault:"",desc:""},{attr:"\u56fe\u6807",code:"icon",type:"string",demo:"'smile' ",dafault:"",desc:""}],mdxType:"AttrTable"}))}h.isMDXComponent=!0}}]);