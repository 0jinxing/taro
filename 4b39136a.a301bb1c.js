(window.webpackJsonp=window.webpackJsonp||[]).push([[631],{2199:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},2200:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))},2201:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return j}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),i=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=i(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=i(n),O=r,j=b["".concat(c,".").concat(O)]||b[O]||u[O]||o;return n?a.a.createElement(j,l(l({ref:t},p),{},{components:n})):a.a.createElement(j,l({ref:t},p))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=O;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},697:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return i}));var r=n(2199),a=n(2200),o=(n(0),n(2201)),c={title:"\u751f\u547d\u5468\u671f & State"},l={unversionedId:"state",id:"version-1.x/state",isDocsHomePage:!1,title:"\u751f\u547d\u5468\u671f & State",description:"\u5728\u672c\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u5b66\u4e60\u5982\u4f55\u91cd\u7528\u548c\u5c01\u88c5\u4e00\u4e2a Clock \u7ec4\u4ef6\u3002\u5b83\u5c06\u8bbe\u7f6e\u81ea\u5df1\u7684\u8ba1\u65f6\u5668\uff0c\u5e76\u6bcf\u79d2\u949f\u66f4\u65b0\u4e00\u6b21\u3002",source:"@site/versioned_docs/version-1.x/state.md",slug:"/state",permalink:"/taro/docs/1.x/state",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.x/state.md",version:"1.x",sidebar:"version-1.x/docs",previous:{title:"\u7ec4\u4ef6\u5316 & Props",permalink:"/taro/docs/1.x/props"},next:{title:"\u4e8b\u4ef6\u5904\u7406",permalink:"/taro/docs/1.x/event"}},s=[{value:"\u4e3a\u4e00\u4e2a\u7c7b\u6dfb\u52a0\u5c40\u90e8\u72b6\u6001",id:"\u4e3a\u4e00\u4e2a\u7c7b\u6dfb\u52a0\u5c40\u90e8\u72b6\u6001",children:[]},{value:"\u5c06\u751f\u547d\u5468\u671f\u65b9\u6cd5\u6dfb\u52a0\u5230\u7c7b\u4e2d",id:"\u5c06\u751f\u547d\u5468\u671f\u65b9\u6cd5\u6dfb\u52a0\u5230\u7c7b\u4e2d",children:[]},{value:"\u6b63\u786e\u5730\u4f7f\u7528 State",id:"\u6b63\u786e\u5730\u4f7f\u7528-state",children:[{value:"\u4e0d\u8981\u76f4\u63a5\u66f4\u65b0\u72b6\u6001",id:"\u4e0d\u8981\u76f4\u63a5\u66f4\u65b0\u72b6\u6001",children:[]},{value:"\u72b6\u6001\u66f4\u65b0\u4e00\u5b9a\u662f\u5f02\u6b65\u7684",id:"\u72b6\u6001\u66f4\u65b0\u4e00\u5b9a\u662f\u5f02\u6b65\u7684",children:[]},{value:"state \u66f4\u65b0\u4f1a\u88ab\u5408\u5e76",id:"state-\u66f4\u65b0\u4f1a\u88ab\u5408\u5e76",children:[]}]}],p={rightToc:s};function i(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u5728\u672c\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u5b66\u4e60\u5982\u4f55\u91cd\u7528\u548c\u5c01\u88c5\u4e00\u4e2a Clock \u7ec4\u4ef6\u3002\u5b83\u5c06\u8bbe\u7f6e\u81ea\u5df1\u7684\u8ba1\u65f6\u5668\uff0c\u5e76\u6bcf\u79d2\u949f\u66f4\u65b0\u4e00\u6b21\u3002"),Object(o.b)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4ece\u5c01\u88c5\u65f6\u949f\u5f00\u59cb\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"class Clock extends Component {\n  render () {\n    return (\n      <View>\n        <Text>Hello, world!</Text>\n        <Text>\u73b0\u5728\u7684\u65f6\u95f4\u662f {this.state.date.toLocaleTimeString()}.</Text>\n      </View>\n    )\n  }\n}\n")),Object(o.b)("p",null,"Clock \u73b0\u5728\u88ab\u5b9a\u4e49\u4e3a\u4e00\u4e2a\u7c7b\uff0c\u4f7f\u7528\u7c7b\u5c31\u5141\u8bb8\u6211\u4eec\u4f7f\u7528\u5176\u5b83\u7279\u6027\uff0c\u4f8b\u5982\u5c40\u90e8\u72b6\u6001\u3001\u751f\u547d\u5468\u671f\u94a9\u5b50\u3002"),Object(o.b)("h2",{id:"\u4e3a\u4e00\u4e2a\u7c7b\u6dfb\u52a0\u5c40\u90e8\u72b6\u6001"},"\u4e3a\u4e00\u4e2a\u7c7b\u6dfb\u52a0\u5c40\u90e8\u72b6\u6001"),Object(o.b)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u9700\u8981\u6dfb\u52a0\u4e00\u4e2a\u7c7b\u6784\u9020\u51fd\u6570\u6765\u521d\u59cb\u5316\u72b6\u6001 ",Object(o.b)("inlineCode",{parentName:"p"},"this.state"),"\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"class Clock extends Component {\n  constructor (props) {\n    super(props)\n    this.state = { date: new Date() }\n  }\n\n  render () {\n    return (\n      <View>\n        <Text>Hello, world!</Text>\n        <Text>\u73b0\u5728\u7684\u65f6\u95f4\u662f {this.state.date.toLocaleTimeString()}.</Text>\n      </View>\n    )\n  }\n}\n")),Object(o.b)("p",null,"\u6ce8\u610f\u6211\u4eec\u5982\u4f55\u4f20\u9012 props \u5230\u57fa\u7840\u6784\u9020\u51fd\u6570\u7684\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"constructor (props) {\n  super(props)\n  this.state = { date: new Date() }\n}\n")),Object(o.b)("p",null,"\u7c7b\u7ec4\u4ef6\u5e94\u59cb\u7ec8\u4f7f\u7528 props \u8c03\u7528\u57fa\u7840\u6784\u9020\u51fd\u6570\u3002\n\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5c06\u4f7f Clock \u8bbe\u7f6e\u81ea\u5df1\u7684\u8ba1\u65f6\u5668\u5e76\u6bcf\u79d2\u66f4\u65b0\u4e00\u6b21\u3002"),Object(o.b)("h2",{id:"\u5c06\u751f\u547d\u5468\u671f\u65b9\u6cd5\u6dfb\u52a0\u5230\u7c7b\u4e2d"},"\u5c06\u751f\u547d\u5468\u671f\u65b9\u6cd5\u6dfb\u52a0\u5230\u7c7b\u4e2d"),Object(o.b)("p",null,"\u5728\u5177\u6709\u8bb8\u591a\u7ec4\u4ef6\u7684\u5e94\u7528\u7a0b\u5e8f\u4e2d\uff0c\u5728\u9500\u6bc1\u65f6\u91ca\u653e\u7ec4\u4ef6\u6240\u5360\u7528\u7684\u8d44\u6e90\u975e\u5e38\u91cd\u8981\u3002"),Object(o.b)("p",null,"\u6bcf\u5f53 ",Object(o.b)("inlineCode",{parentName:"p"},"Clock")," \u7ec4\u4ef6\u7b2c\u4e00\u6b21\u52a0\u8f7d\u5230 DOM \u4e2d\u7684\u65f6\u5019\uff0c\u6211\u4eec\u90fd\u60f3\u751f\u6210\u5b9a\u65f6\u5668\uff0c\u8fd9\u5728 Taro/React \u4e2d\u88ab\u79f0\u4e3a\u6302\u8f7d\u3002"),Object(o.b)("p",null,"\u540c\u6837\uff0c\u6bcf\u5f53 Clock \u751f\u6210\u7684\u8fd9\u4e2a DOM \u88ab\u79fb\u9664\u7684\u65f6\u5019\uff0c\u6211\u4eec\u4e5f\u4f1a\u60f3\u8981\u6e05\u9664\u5b9a\u65f6\u5668\uff0c\u8fd9\u5728 Taro/React \u4e2d\u88ab\u79f0\u4e3a\u5378\u8f7d\u3002"),Object(o.b)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5728\u7ec4\u4ef6\u7c7b\u4e0a\u58f0\u660e\u7279\u6b8a\u7684\u65b9\u6cd5\uff0c\u5f53\u7ec4\u4ef6\u6302\u8f7d\u6216\u5378\u8f7d\u65f6\uff0c\u6765\u8fd0\u884c\u4e00\u4e9b\u4ee3\u7801\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"class Clock extends Component {\n  constructor (props) {\n    super(props)\n    this.state = { date: new Date() }\n  }\n\n  componentDidMount() {\n\n  }\n\n  componentWillUnmount() {\n\n  }\n\n  render () {\n    return (\n      <View>\n        <Text>Hello, world!</Text>\n        <Text>\u73b0\u5728\u7684\u65f6\u95f4\u662f {this.state.date.toLocaleTimeString()}.</Text>\n      </View>\n    )\n  }\n}\n")),Object(o.b)("p",null,"\u8fd9\u4e9b\u65b9\u6cd5\u88ab\u79f0\u4f5c\u751f\u547d\u5468\u671f\u94a9\u5b50\u3002"),Object(o.b)("p",null,"\u5f53\u7ec4\u4ef6\u8f93\u51fa\u5230 DOM \u540e\u4f1a\u6267\u884c ",Object(o.b)("inlineCode",{parentName:"p"},"componentDidMount()")," \u94a9\u5b50\uff0c\u8fd9\u662f\u4e00\u4e2a\u5efa\u7acb\u5b9a\u65f6\u5668\u7684\u597d\u5730\u65b9\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"componentDidMount() {\n  this.timerID = setInterval(\n    () => this.tick(),\n    1000\n  )\n}\n")),Object(o.b)("p",null,"\u6ce8\u610f\u6211\u4eec\u5982\u4f55\u5728 this \u4e2d\u4fdd\u5b58\u5b9a\u65f6\u5668 ID\u3002"),Object(o.b)("p",null,"\u867d\u7136 ",Object(o.b)("inlineCode",{parentName:"p"},"this.props")," \u7531 Taro \u672c\u8eab\u8bbe\u7f6e\u4ee5\u53ca ",Object(o.b)("inlineCode",{parentName:"p"},"this.state")," \u5177\u6709\u7279\u6b8a\u7684\u542b\u4e49\uff0c\u4f46\u5982\u679c\u9700\u8981\u5b58\u50a8\u4e0d\u7528\u4e8e\u89c6\u89c9\u8f93\u51fa\u7684\u4e1c\u897f\uff0c\u5219\u53ef\u4ee5\u624b\u52a8\u5411\u7c7b\u4e2d\u6dfb\u52a0\u5176\u4ed6\u5b57\u6bb5\u3002"),Object(o.b)("p",null,"\u5982\u679c\u4f60\u4e0d\u5728 ",Object(o.b)("inlineCode",{parentName:"p"},"render()")," \u4e2d\u4f7f\u7528\u67d0\u4e9b\u4e1c\u897f\uff0c\u5b83\u5c31\u4e0d\u5e94\u8be5\u5728\u72b6\u6001\u4e2d\u3002"),Object(o.b)("p",null,"\u6211\u4eec\u5c06\u5728 ",Object(o.b)("inlineCode",{parentName:"p"},"componentWillUnmount()")," \u751f\u547d\u5468\u671f\u94a9\u5b50\u4e2d\u5378\u8f7d\u8ba1\u65f6\u5668\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"componentWillUnmount () {\n  clearInterval(this.timerID)\n}\n")),Object(o.b)("p",null,"\u6700\u540e\uff0c\u6211\u4eec\u5b9e\u73b0\u4e86\u6bcf\u79d2\u949f\u6267\u884c\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"tick()")," \u65b9\u6cd5\u3002"),Object(o.b)("p",null,"\u5b83\u5c06\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"this.setState()")," \u6765\u66f4\u65b0\u7ec4\u4ef6\u5c40\u90e8\u72b6\u6001\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro, { Component } from '@tarojs/taro'\n\nclass Clock extends Component {\n  constructor (props) {\n    super(props)\n    this.state = { date: new Date() }\n  }\n\n  componentDidMount () {\n    this.timerID = setInterval(\n      () => this.tick(),\n      1000\n    );\n  }\n\n  componentWillUnmount () {\n    clearInterval(this.timerID)\n  }\n\n  tick () {\n    this.setState({\n      date: new Date()\n    });\n  }\n\n  render() {\n    return (\n      <View>\n        <Text>Hello, world!</Text>\n        <Text>\u73b0\u5728\u7684\u65f6\u95f4\u662f {this.state.date.toLocaleTimeString()}.</Text>\n      </View>\n    )\n  }\n}\n")),Object(o.b)("h2",{id:"\u6b63\u786e\u5730\u4f7f\u7528-state"},"\u6b63\u786e\u5730\u4f7f\u7528 State"),Object(o.b)("p",null,"\u5173\u4e8e setState() \u8fd9\u91cc\u6709\u4e09\u4ef6\u4e8b\u60c5\u9700\u8981\u77e5\u9053\uff1a"),Object(o.b)("h3",{id:"\u4e0d\u8981\u76f4\u63a5\u66f4\u65b0\u72b6\u6001"},"\u4e0d\u8981\u76f4\u63a5\u66f4\u65b0\u72b6\u6001"),Object(o.b)("p",null,"\u4f8b\u5982\uff0c\u6b64\u4ee3\u7801\u4e0d\u4f1a\u91cd\u65b0\u6e32\u67d3\u7ec4\u4ef6\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"// Wrong\nthis.state.comment = 'Hello'\n")),Object(o.b)("p",null,"\u5e94\u5f53\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"setState()"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"// Correct\nthis.setState({ comment: 'Hello' })\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"setState()")," \u51fd\u6570\u662f\u552f\u4e00\u80fd\u591f\u66f4\u65b0 ",Object(o.b)("inlineCode",{parentName:"p"},"this.state")," \u7684\u5730\u65b9\u3002"),Object(o.b)("h3",{id:"\u72b6\u6001\u66f4\u65b0\u4e00\u5b9a\u662f\u5f02\u6b65\u7684"},"\u72b6\u6001\u66f4\u65b0\u4e00\u5b9a\u662f\u5f02\u6b65\u7684"),Object(o.b)("p",null,"Taro \u53ef\u4ee5\u5c06\u591a\u4e2a ",Object(o.b)("inlineCode",{parentName:"p"},"setState()")," \u8c03\u7528\u5408\u5e76\u6210\u4e00\u4e2a\u8c03\u7528\u6765\u63d0\u9ad8\u6027\u80fd\u3002"),Object(o.b)("p",null,"\u56e0\u4e3a ",Object(o.b)("inlineCode",{parentName:"p"},"this.state")," \u548c ",Object(o.b)("inlineCode",{parentName:"p"},"props")," \u4e00\u5b9a\u662f\u5f02\u6b65\u66f4\u65b0\u7684\uff0c\u6240\u4ee5\u4f60\u4e0d\u80fd\u5728 ",Object(o.b)("inlineCode",{parentName:"p"},"setState")," \u9a6c\u4e0a\u62ff\u5230 ",Object(o.b)("inlineCode",{parentName:"p"},"state")," \u7684\u503c\uff0c\u4f8b\u5982\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"// \u5047\u8bbe\u6211\u4eec\u4e4b\u524d\u8bbe\u7f6e\u4e86 this.state.counter = 0\nupdateCounter () {\n  this.setState({\n    counter: 1\n  })\n  console.log(this.state.counter) // \u8fd9\u91cc counter \u8fd8\u662f 0\n}\n")),Object(o.b)("p",null,"\u6b63\u786e\u7684\u505a\u6cd5\u662f\u8fd9\u6837\uff0c\u5728 ",Object(o.b)("inlineCode",{parentName:"p"},"setState")," \u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4f20\u5165\u4e00\u4e2a callback\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"// \u5047\u8bbe\u6211\u4eec\u4e4b\u524d\u8bbe\u7f6e\u4e86 this.state.counter = 0\nupdateCounter () {\n  this.setState({\n    counter: 1\n  }, () => {\n    // \u5728\u8fd9\u4e2a\u51fd\u6570\u5185\u4f60\u53ef\u4ee5\u62ff\u5230 setState \u4e4b\u540e\u7684\u503c\n  })\n}\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u8fd9\u662f Taro \u548c React \u53e6\u4e00\u4e2a\u4e0d\u540c\u7684\u5730\u65b9\uff1aReact \u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"setState")," \u4e0d\u4e00\u5b9a\u603b\u662f\u5f02\u6b65\u7684\uff0c\u4ed6\u5185\u90e8\u6709\u4e00\u5957\u4e8b\u52a1\u673a\u5236\u63a7\u5236\uff0c\u4e14 React 15/16 \u7684\u5b9e\u73b0\u4e5f\u5404\u4e0d\u76f8\u540c\u3002\u800c\u5bf9\u4e8e Taro \u800c\u8a00\uff0c",Object(o.b)("inlineCode",{parentName:"p"},"setState")," \u4e4b\u540e\uff0c\u4f60\u63d0\u4f9b\u7684\u5bf9\u8c61\u4f1a\u88ab\u52a0\u5165\u4e00\u4e2a\u6570\u7ec4\uff0c\u7136\u540e\u5728\u6267\u884c\u4e0b\u4e00\u4e2a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/aooy/blog/issues/5"}),"eventloop")," \u7684\u65f6\u5019\u5408\u5e76\u5b83\u4eec\u3002")),Object(o.b)("h3",{id:"state-\u66f4\u65b0\u4f1a\u88ab\u5408\u5e76"},"state \u66f4\u65b0\u4f1a\u88ab\u5408\u5e76"),Object(o.b)("p",null,"\u5f53\u4f60\u8c03\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"setState()"),"\uff0cTaro \u5c06\u5408\u5e76\u4f60\u63d0\u4f9b\u7684\u5bf9\u8c61\u5230\u5f53\u524d\u7684\u72b6\u6001\u4e2d\u3002"),Object(o.b)("p",null,"\u4f8b\u5982\uff0c\u4f60\u7684\u72b6\u6001\u53ef\u80fd\u5305\u542b\u51e0\u4e2a\u72ec\u7acb\u7684\u53d8\u91cf\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"constructor(props) {\n  super(props)\n  this.state = {\n    posts: [],\n    comments: []\n  }\n}\n")),Object(o.b)("p",null,"\u7136\u540e\u901a\u8fc7\u8c03\u7528\u72ec\u7acb\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"setState()")," \u8c03\u7528\u5206\u522b\u66f4\u65b0\u5b83\u4eec:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"componentDidMount() {\n  fetchPosts().then(response => {\n    this.setState({\n      posts: response.posts\n    });\n  });\n\n  fetchComments().then(response => {\n    this.setState({\n      comments: response.comments\n    })\n  })\n}\n")),Object(o.b)("p",null,"\u5408\u5e76\u662f\u6d45\u5408\u5e76\uff0c\u6240\u4ee5 ",Object(o.b)("inlineCode",{parentName:"p"},"this.setState({comments})")," \u4e0d\u4f1a\u6539\u53d8 ",Object(o.b)("inlineCode",{parentName:"p"},"this.state.posts")," \u7684\u503c\uff0c\u4f46\u4f1a\u5b8c\u5168\u66ff\u6362 ",Object(o.b)("inlineCode",{parentName:"p"},"this.state.comments")," \u7684\u503c\u3002"))}i.isMDXComponent=!0}}]);