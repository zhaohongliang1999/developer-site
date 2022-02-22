"use strict";(self.webpackChunkdeveloper=self.webpackChunkdeveloper||[]).push([[2748],{71766:function(e,t,i){var n=i(97218),o=i(67294),r=(i(31877),[{title:"\u5c5e\u6027\u540d",dataIndex:"attr",width:"20%"},{title:"\u5c5e\u6027Code",dataIndex:"code",width:"10%"},{title:"\u7c7b\u578b",dataIndex:"type",width:"10%"},{title:"\u6570\u636e\u793a\u4f8b",dataIndex:"demo",width:"30%"},{title:"\u5907\u6ce8",dataIndex:"desc",width:"20%"}]);t.Z=function(e){return o.createElement(n.Z,{dataSource:e.dataSource,columns:r,pagination:!1})}},9652:function(e,t,i){i.d(t,{Z:function(){return d}});var n=i(75068),o=i(67294),r=function(){function e(){this.subscriptions={},window.addEventListener("message",this.handleMsg.bind(this),!1)}var t=e.prototype;return t.on=function(e,t){this.subscriptions[e]=this.subscriptions[e]||[],this.subscriptions[e].push(t)},t.off=function(e,t){if(this.subscriptions[e]){var i=this.subscriptions[e].findIndex((function(e){return e===t}));this.subscriptions[e].splice(i,1)}},t.handleMsg=function(e){e.data&&e.data.type&&(this.subscriptions[e.data.type]||[]).forEach((function(t){t(e.data,e.origin,e.source)}))},t.destroy=function(){window.removeEventListener("message",this.handleMsg),this.subscriptions={}},e}(),d=function(e){function t(t){var i;return(i=e.call(this,t)||this).createRecevier=function(){i.destroyRecevier(),i.recevier=new r,i.recevier.on("updateHeight",(function(e,t,n){i.iframe&&n===i.iframe.contentWindow&&(i.container.style.height=(e.msg||0)+"px",i.props.onUpdateHeight(e.msg||"#"))}))},i.destroyRecevier=function(){i.recevier&&(i.recevier.destroy(),i.recevier=null)},i.container=null,i.iframe=null,i}(0,n.Z)(t,e);var i=t.prototype;return i.componentDidMount=function(){this.props.disableHeightSync||this.createRecevier()},i.componentDidUpdate=function(e){e.url.replace(/#.*$/,"")!==this.props.url.replace(/#.*$/,"")&&this.container&&(this.container.style.height=this.props.style&&this.props.style.height.toString()||"800px"),void 0!==e.disableHeightSync&&e.disableHeightSync!==this.props.disableHeightSync&&(this.props.disableHeightSync?this.destroyRecevier():this.createRecevier())},i.componentWillUnmount=function(){this.destroyRecevier()},i.render=function(){var e=this,t=this.props,i=t.className,n=t.id,r=t.style,d=t.url;return d?o.createElement("div",{className:"bg-iframe "+i,id:n,style:Object.assign({height:800,width:"100%"},r),ref:function(t){e.container=t}},o.createElement("iframe",{src:d,style:{border:"none",width:"100%",height:"100%"},ref:function(t){e.iframe=t}})):o.createElement("div",{className:"bg-iframe empty"},"Iframe")},t}(o.PureComponent);d.displayName="bg-iframe"},64622:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var n=i(87462),o=i(63366),r=(i(67294),i(3905)),d=i(9652),a=i(71766),s=["components"],c={title:"\u660e\u7ec6",order:16},l="\u660e\u7ec6",u={unversionedId:"components/form/tableField",id:"components/form/tableField",title:"\u660e\u7ec6",description:"\u4f55\u65f6\u4f7f\u7528",source:"@site/docs/components/form/tableField.mdx",sourceDirName:"components/form",slug:"/components/form/tableField",permalink:"/developer-site/docs/components/form/tableField",editUrl:"https://github.com/dingtalk-yida/developer-site/edit/feat/init/docs/components/form/tableField.mdx",tags:[],version:"current",frontMatter:{title:"\u660e\u7ec6",order:16},sidebar:"components",previous:{title:"\u7ea7\u8054\u9009\u62e9",permalink:"/developer-site/docs/components/form/cascadeSelectField"},next:{title:"JSX",permalink:"/developer-site/docs/components/advanced/JSX"}},p=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",children:[],level:2},{value:"\u7ec4\u4ef6\u793a\u4f8b",id:"\u7ec4\u4ef6\u793a\u4f8b",children:[],level:2},{value:"\u7ec4\u4ef6\u5c5e\u6027",id:"\u7ec4\u4ef6\u5c5e\u6027",children:[],level:2}],f={toc:p};function m(e){var t=e.components,i=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},f,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u660e\u7ec6"},"\u660e\u7ec6"),(0,r.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u5b50\u8868\u5355\u63d0\u4ea4\u573a\u666f\uff1b")),(0,r.kt)("h2",{id:"\u7ec4\u4ef6\u793a\u4f8b"},"\u7ec4\u4ef6\u793a\u4f8b"),(0,r.kt)(d.Z,{url:"https://www.aliwork.com/developer/table-field-v2?isRenderNav=false",mdxType:"Iframe"}),(0,r.kt)("h2",{id:"\u7ec4\u4ef6\u5c5e\u6027"},"\u7ec4\u4ef6\u5c5e\u6027"),(0,r.kt)(a.Z,{dataSource:[{attr:"\u6807\u9898",code:"label",type:"String",demo:"\u6807\u9898",dafault:"",desc:""},{attr:"\u663e\u793a\u6807\u9898",code:"showLabel",type:"bool",demo:"true",dafault:"",desc:""},{attr:"\u9ed8\u8ba4\u503c",code:"value",type:"Array",demo:'[{"fieldId1": "123", "fieldId2": "456"}, {"fieldId1": "abc", "fieldId2": "def"}] ',dafault:"",desc:""},{attr:"\u6392\u5217\u65b9\u5f0f",code:"representation",type:"string",demo:'"TILED"',dafault:"",desc:'\u53ef\u9009\u503c\uff1a"TILED", "TABLE"'},{attr:"\u5c55\u73b0\u65b9\u5f0f",code:"layout",type:"string",demo:'"VERTICAL"',dafault:"",desc:'\u53ef\u9009\u503c\uff1a"VERTICAL", "HORIZONTAL"'},{attr:"\u4e3b\u9898",code:"theme",type:"string",demo:'"split"',dafault:"",desc:'\u53ea\u5728 PC \u8868\u683c\u6a21\u5f0f\u4e0b\u6709\u6548\uff0c\u53ef\u9009\u503c\uff1a"zebra", "split", "border"'},{attr:"\u663e\u793a\u5e8f\u53f7",code:"showIndex",type:"bool",demo:"true",dafault:"",desc:"\u53ea\u5728 PC \u8868\u683c\u6a21\u5f0f\u4e0b\u6709\u6548 "},{attr:"\u663e\u793a\u8868\u5934",code:"showTableHead",type:"bool",demo:"true",dafault:"",desc:"\u53ea\u5728 PC \u8868\u683c\u6a21\u5f0f\u4e0b\u6709\u6548"},{attr:"\u6309\u94ae\u540d\u79f0",code:"buttonName",type:"string",demo:' "\u65b0\u589e\u4e00\u6761"',dafault:"",desc:'\u53ef\u9009\u503c\uff1a"left", "right"'},{attr:"\u5220\u9664\u6309\u94ae",code:"deleteButtonName",type:"string",demo:'"\u5220\u9664"',dafault:"",desc:""},{attr:"\u72b6\u6001",code:"behavior",type:"string",demo:'{fieldBehavior: "NORMAL"}',dafault:"",desc:'fieldBehavior \u53ef\u9009\u503c\uff1a"NORMAL", "DISABLED", "READONLY", "HIDDEN"'},{attr:"\u6700\u5927\u5bbd\u5ea6",code:"style",type:"object",demo:'{ maxWidth:"100%" } ',dafault:"",desc:"\u4ec5 PC \u7aef\u652f\u6301"},{attr:"\u6700\u5927\u6761\u6570",code:"listNum",type:"number",demo:"10",dafault:"",desc:""},{attr:"\u6700\u5c0f\u6761\u6570",code:"listMinNum",type:"number",demo:"1",dafault:"",desc:""},{attr:"\u989d\u5916\u6309\u94ae",code:"importButton",type:"string",demo:'"\u5176\u4ed6\u6309\u94ae"',dafault:"",desc:""},{attr:"\u70b9\u51fb\u6dfb\u52a0\u4e8b\u4ef6",code:"onAddClick",type:"function",demo:"function(ctx) {} ",dafault:"",desc:""},{attr:"\u70b9\u51fb\u5220\u9664\u4e8b\u4ef6",code:"onDelClick",type:"function",demo:"function(ctx) {} ",dafault:"",desc:""},{attr:"\u70b9\u51fb\u81ea\u5b9a\u4e49\u6309\u94ae\u4e8b\u4ef6",code:"onClick",type:"function",demo:"function(ctx) {}",dafault:"",desc:""},{attr:"\u503c\u53d1\u751f\u6539\u53d8\u4e8b\u4ef6",code:"onChange",type:"function",demo:"function({ values, extra }) {}",dafault:"",desc:"'extra \u7ed3\u6784\uff1a{ from: '\u52a8\u4f5c\u6765\u6e90\uff0c\u5982 add_item / del_item', formGroupId: '\u8868\u5355\u5206\u7ec4 ID', changes: { name: '\u5b57\u6bb5\u540d\u79f0', value: '\u5b57\u6bb5\u503c' } }'"}],mdxType:"AttrTable"}))}m.isMDXComponent=!0}}]);