"use strict";(self.webpackChunkdeveloper=self.webpackChunkdeveloper||[]).push([[8288],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=c(n),d=a,g=s["".concat(o,".").concat(d)]||s[d]||u[d]||i;return n?r.createElement(g,p(p({ref:t},m),{},{components:n})):r.createElement(g,p({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=s;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var c=2;c<i;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},30262:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return m},default:function(){return s}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),p=["components"],l={title:"\u5faa\u73af\u6e32\u67d3",order:7},o="\u5faa\u73af\u6e32\u67d3",c={unversionedId:"guide/concept/loop",id:"guide/concept/loop",title:"\u5faa\u73af\u6e32\u67d3",description:"\u5bf9\u4e8e\u9700\u8981\u5faa\u73af\u6e32\u67d3\u7684\u573a\u666f\uff0c\u7c7b\u4f3c React \u4e2d\u7684\u4e0b\u9762\u7684\u5199\u6cd5\uff0c\u5b9c\u642d\u63d0\u4f9b\u5faa\u73af\u6570\u636e\u7684\u914d\u7f6e\u9879\uff0c\u901a\u8fc7\u7ed1\u5b9a\u53d8\u91cf\u6211\u4eec\u65b9\u4fbf\u5b9e\u73b0\u5faa\u73af\u6e32\u67d3\uff1a",source:"@site/docs/guide/concept/loop.md",sourceDirName:"guide/concept",slug:"/guide/concept/loop",permalink:"/developer-site/docs/guide/concept/loop",editUrl:"https://github.com/dingtalk-yida/developer-site/edit/feat/init/docs/guide/concept/loop.md",tags:[],version:"current",frontMatter:{title:"\u5faa\u73af\u6e32\u67d3",order:7},sidebar:"guide",previous:{title:"\u6761\u4ef6\u6e32\u67d3",permalink:"/developer-site/docs/guide/concept/condition"},next:{title:"\u81ea\u5b9a\u4e49\u6837\u5f0f",permalink:"/developer-site/docs/guide/concept/style"}},m=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[],level:2},{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",children:[],level:2}],u={toc:m};function s(e){var t=e.components,n=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u5faa\u73af\u6e32\u67d3"},"\u5faa\u73af\u6e32\u67d3"),(0,i.kt)("p",null,"\u5bf9\u4e8e\u9700\u8981\u5faa\u73af\u6e32\u67d3\u7684\u573a\u666f\uff0c\u7c7b\u4f3c React \u4e2d\u7684\u4e0b\u9762\u7684\u5199\u6cd5\uff0c\u5b9c\u642d\u63d0\u4f9b",(0,i.kt)("strong",{parentName:"p"},"\u5faa\u73af\u6570\u636e"),"\u7684\u914d\u7f6e\u9879\uff0c\u901a\u8fc7\u7ed1\u5b9a\u53d8\u91cf\u6211\u4eec\u65b9\u4fbf\u5b9e\u73b0\u5faa\u73af\u6e32\u67d3\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function NameList() {\n  const names = [{\n    name: 'Jack'\n  }, {\n    name: 'Rose'\n  }];\n    return (\n    <div>\n    {\n      names.map((item, index) => (\n        <span>{ `No.${index}: ${item.name}` }</span>\n      ))\n    }\n    </div>\n  );\n}\n")),(0,i.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,i.kt)("p",null,"\u5faa\u73af\u6570\u636e\u8981\u6c42\u662f \u6570\u7ec4\u7ed3\u6784\uff0c\u5b57\u7b26\u4e32\u6570\u7ec4\u3001\u6570\u5b57\u6570\u7ec4\u6216\u8005\u5bf9\u8c61\u6570\u7ec4\u90fd\u53ef\u4ee5\uff0c\u7528\u6237\u901a\u8fc7\u9ad8\u7ea7\u5c5e\u6027\u4e2d\u7684\u5faa\u73af\u6570\u636e\u8bbe\u7f6e\u6765\u8bbe\u7f6e\u5faa\u73af\uff1a\n",(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i2/O1CN01zZOVg61iim2fEeZq7_!!6000000004447-2-tps-3582-2016.png_.webp",alt:null})),(0,i.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u4e24\u79cd\u65b9\u5f0f\u7ed1\u5b9a\u5faa\u73af\u6570\u636e\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u9759\u6001\u8bbe\u7f6e"),"- \u914d\u7f6e\u9700\u8981\u6e32\u67d3\u7684\u9759\u6001\u6570\u7ec4\u6570\u636e\uff1b"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u53d8\u91cf\u7ed1\u5b9a"),"- \u7528\u6237\u53ef\u4ee5\u7ed1\u5b9a\u53d8\u91cf\u6765\u4ece\u5168\u5c40\u53d8\u91cf\u6216\u8005\u8fdc\u7a0b API \u83b7\u53d6\u5faa\u73af\u6570\u636e\uff1b")),(0,i.kt)("p",null,"\u5b8c\u6210\u5faa\u73af\u8bbe\u7f6e\u540e\uff0c\u5728\u5faa\u73af\u4e3b\u4f53\u5185\u90e8\u7684\u7ec4\u4ef6\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u4e24\u4e2a\u6ce8\u5165\u4e0a\u4e0b\u95ee\u83b7\u53d6\u5faa\u73af\u6570\u636e\u5185\u90e8\u7684\u7ed3\u6784\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"this.item"),"- \u83b7\u53d6\u5f53\u524d\u884c\u7684\u5faa\u73af\u6570\u636e\uff1b"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"this.index"),"- \u83b7\u53d6\u5f53\u524d\u884c\u7684\u5faa\u73af\u7d22\u5f15\uff08\u4ece 0 \u5f00\u59cb\u8ba1\u6570\uff09\uff1b")),(0,i.kt)("p",null,"\u5728\u5faa\u73af\u5d4c\u5957\u573a\u666f\uff0c\u6211\u4eec\u53ef\u4ee5\u81ea\u5b9a\u4e49\u8fed\u4ee3\u53d8\u91cf\u540d\u53ca\u7d22\u5f15\u53d8\u91cf\u540d\u6765\u6307\u5b9a\u4e0a\u4e0b\u6587\u6ce8\u5165\u53d8\u91cf\u4fe1\u606f\uff0c\u907f\u514d\u4ea7\u751f\u51b2\u7a81\uff0c\u5982\u4e0b\u6240\u793a\uff1a\n",(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i2/O1CN018ydzZM25tytcc8Gu5_!!6000000007585-2-tps-3582-2022.png_.webp",alt:null})),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u914d\u7f6e\u4e86\u5faa\u73af\u6570\u636e\u7684\u7ec4\u4ef6\u4f1a\u5728\u5927\u7eb2\u6811\u4e2d\u5c55\u793a\u4e00\u4e2a\u5faa\u73af\u7684\u5c0f Icon \u6807\u8bb0\u7ec4\u4ef6\u8bbe\u7f6e\u4e86\u5faa\u73af\u6570\u636e\uff1a"),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i4/O1CN01NCRDAo1RxZMhgrtlV_!!6000000002178-2-tps-734-844.png_.webp",alt:null})))),(0,i.kt)("h2",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),(0,i.kt)("p",null,"\u4e0b\u9762\u6211\u4eec\u7528\u4e00\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\u6765\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7\u5faa\u73af\u6570\u636e\u6765\u5c55\u793a\u5b66\u751f\u5217\u8868\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u5168\u5c40\u53d8\u91cf\u7528\u4e8e\u5b58\u50a8\u5b66\u751f\u4fe1\u606f\uff0c\u5982\u4e0b\u6240\u793a\uff1a\n",(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01RdDGNN1n4XK7jR0dQ_!!6000000005036-2-tps-3582-2018.png_.webp",alt:null}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5728\u9875\u9762\u4e2d\u62d6\u5165\u4e00\u4e2a\u5bb9\u5668\u7ec4\u4ef6\u7528\u4e8e\u7ed1\u5b9a\u5faa\u73af\u6570\u636e\uff0c\u5982\u4e0b\u6240\u793a\uff1a\n",(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i2/O1CN0144N24G1qrwtuervo3_!!6000000005550-2-tps-3582-2014.png_.webp",alt:null}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5728\u5bb9\u5668\u4e2d\u653e\u5165\u4e24\u4e2a\u6587\u6848\u7ec4\u4ef6\u7528\u4e8e\u7ed1\u5b9a\u5b66\u751f\u59d3\u540d (name) \u53ca\u5b66\u751f\u5e74\u9f84 (age)\uff0c\u5982\u4e0b\u6240\u793a\uff1a\n",(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i3/O1CN019B277E1SP384IRrjn_!!6000000002238-2-tps-3582-2016.png_.webp",alt:null}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01qT43by1UEdMCpEkc6_!!6000000002486-2-tps-3582-2018.png_.webp",alt:null}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u8fd9\u65f6\u5019\u901a\u8fc7\u70b9\u51fb\u53f3\u4e0a\u89d2\u7684\u9884\u89c8\u6309\u94ae\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u770b\u5230\u5faa\u73af\u6e32\u67d3\u7684\u6548\u679c\u4e86\uff0c\u5982\u4e0b\u6240\u793a\uff1a\n",(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN019HdqaJ1LrGDX1iZzV_!!6000000001352-2-tps-3582-590.png_.webp",alt:null}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6211\u4eec\u53d1\u73b0\u5b66\u751f\u7684\u7231\u597d (hobby) \u53c8\u662f\u4e00\u4e2a\u6570\u7ec4\uff0c\u5982\u679c\u9700\u8981\u6e32\u67d3\u5b83\u4eec\u5219\u9700\u8981\u4f7f\u7528\u5faa\u73af\u5d4c\u5957\uff0c\u4e8e\u662f\u53c8\u5f80\u5bb9\u5668\u4e2d\u62d6\u5165\u4e86\u4e00\u4e2a\u6587\u672c\u7ec4\u4ef6\u7528\u4e8e\u5faa\u73af\u6e32\u67d3\u7231\u597d (\u4e3a\u4e86\u80fd\u8ba9\u6587\u6848\u4e2d\u80fd\u591f\u540c\u65f6\u8bbf\u95ee\u5916\u5c42\u5faa\u73af\u7684\u5185\u5bb9\uff0c\u6211\u4eec\u4e3a\u6587\u6848\u7ec4\u4ef6\u8bbe\u7f6e\u4e86\u81ea\u5b9a\u4e49\u7684\u8fed\u4ee3\u53d8\u91cf\u540d\u53ca\u7d22\u5f15\u53d8\u91cf\u540d\uff09\uff1a\n",(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i2/O1CN01Voi5E91vw8bYmn266_!!6000000006236-2-tps-3582-2014.png_.webp",alt:null}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u63a5\u4e0b\u6765\u6211\u4eec\u5c31\u53ef\u4ee5\u4e3a\u6587\u6848\u7684\u5185\u5bb9\u5c5e\u6027\u7ed1\u5b9a\u53d8\u91cf\u540c\u65f6\u5c55\u793a\u4e24\u6b21\u5faa\u73af\u7684\u5185\u5bb9\uff0c\u5982\u4e0b\u6240\u793a\uff1a\n",(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i3/O1CN01Y4o6Va1rzZ6XggGyr_!!6000000005702-2-tps-3582-2020.png_.webp",alt:null}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6700\u7ec8\u6211\u4eec\u70b9\u51fb\u9884\u89c8\u6309\u94ae\u4fbf\u53ef\u4ee5\u770b\u5230\u4ee5\u4e0b\u9884\u89c8\u6548\u679c\uff1a\n",(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i4/O1CN01BEyiaQ1kBSSq7bJmL_!!6000000004645-2-tps-3582-774.png_.webp",alt:null})))))}s.isMDXComponent=!0}}]);