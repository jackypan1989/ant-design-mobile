webpackJsonp([17,94],{433:function(n,s,a){n.exports={content:[["p","Popup \u5411\u4e0a\u5f39\u51fa\u6548\u679c"]],meta:{order:1,title:"\u5411\u4e0a\u5f39\u51fa\u6548\u679c",filename:"components/popup/demo/basic-up.md",id:"components-popup-demo-basic-up"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Popup<span class="token punctuation">,</span> List<span class="token punctuation">,</span> Button<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// fix touch to scroll background page on iOS</span>\n<span class="token comment" spellcheck="true">// https://github.com/ant-design/ant-design-mobile/issues/307</span>\n<span class="token comment" spellcheck="true">// https://github.com/ant-design/ant-design-mobile/issues/163</span>\n<span class="token keyword">const</span> isIPhone <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string">\'\\\\biPhone\\\\b|\\\\biPod\\\\b\'</span><span class="token punctuation">,</span> <span class="token string">\'i\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> wrapProps<span class="token punctuation">;</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span>isIPhone<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment" spellcheck="true">// Note: the popup content will not scroll.</span>\n  wrapProps <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// onTouchStart: e => e.preventDefault(),</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    sel<span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  onClick <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    Popup<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span> <span class="token attr-name">renderHeader</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n        <span class="token operator">&lt;</span>div style<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> position<span class="token punctuation">:</span> <span class="token string">\'relative\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          \u59d4\u6258\u4e70\u5165\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span>\n            <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n              position<span class="token punctuation">:</span> <span class="token string">\'absolute\'</span><span class="token punctuation">,</span> right<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span> top<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onClose</span><span class="token punctuation">(</span><span class="token string">\'cancel\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>cross<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n        className<span class="token operator">=</span><span class="token string">"popup-list"</span>\n      <span class="token operator">></span>\n        <span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">\'\u80a1\u7968\u540d\u79f0\'</span><span class="token punctuation">,</span> <span class="token string">\'\u80a1\u7968\u4ee3\u7801\'</span><span class="token punctuation">,</span> <span class="token string">\'\u4e70\u5165\u4ef7\u683c\'</span><span class="token punctuation">,</span> <span class="token string">\'\u4e70\u5165\u6570\u91cf\'</span><span class="token punctuation">,</span> <span class="token string">\'\u66f4\u591a\'</span><span class="token punctuation">,</span> <span class="token string">\'\u66f4\u591a\'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>i<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> padding<span class="token punctuation">:</span> <span class="token string">\'0.18rem 0.3rem\'</span><span class="token punctuation">,</span> listStyle<span class="token punctuation">:</span> <span class="token string">\'none\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>\u6295\u8d44\u8bf4\u660e\u6295\u8d44\u8bf4\u660e<span class="token operator">...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginTop<span class="token punctuation">:</span> <span class="token string">\'0.18rem\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onClose</span><span class="token punctuation">(</span><span class="token string">\'cancel\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u4e70\u5165<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> <span class="token punctuation">{</span> animationType<span class="token punctuation">:</span> <span class="token string">\'slide-up\'</span><span class="token punctuation">,</span> wrapProps<span class="token punctuation">,</span> maskClosable<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  onClose <span class="token operator">=</span> <span class="token punctuation">(</span>sel<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> sel <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    Popup<span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> padding<span class="token punctuation">:</span> <span class="token string">\'0.15rem\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onClick<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u663e\u793a<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Test</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}function s(n,s){for(var a=Object.getOwnPropertyNames(s),t=0;t<a.length;t++){var p=a[t],o=Object.getOwnPropertyDescriptor(s,p);o&&o.configurable&&void 0===n[p]&&Object.defineProperty(n,p,o)}return n}function t(n,s){if(!(n instanceof s))throw new TypeError("Cannot call a class as a function")}function p(n,s){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!s||"object"!=typeof s&&"function"!=typeof s?n:s}function o(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):s(n,a))}var e=a(1),c=(a(3),a(23),a(22)),u=n(c),l=(a(14),a(17)),i=n(l),k=(a(20),a(19)),r=n(k),g=(a(172),a(171)),m=n(g),d=new RegExp("\\biPhone\\b|\\biPod\\b","i").test(window.navigator.userAgent),f=void 0;d&&(f={});var h=function(n){function s(){var a,o,c;t(this,s);for(var l=arguments.length,k=Array(l),g=0;g<l;g++)k[g]=arguments[g];return a=o=p(this,n.call.apply(n,[this].concat(k))),o.state={sel:""},o.onClick=function(){m["default"].show(e.createElement("div",null,e.createElement(i["default"],{renderHeader:function(){return e.createElement("div",{style:{position:"relative"}},"\u59d4\u6258\u4e70\u5165",e.createElement("span",{style:{position:"absolute",right:3,top:-5},onClick:function(){return o.onClose("cancel")}},e.createElement(r["default"],{type:"cross"})))},className:"popup-list"},["\u80a1\u7968\u540d\u79f0","\u80a1\u7968\u4ee3\u7801","\u4e70\u5165\u4ef7\u683c","\u4e70\u5165\u6570\u91cf","\u66f4\u591a","\u66f4\u591a"].map(function(n,s){return e.createElement(i["default"].Item,{key:s},n)})),e.createElement("ul",{style:{padding:"0.18rem 0.3rem",listStyle:"none"}},e.createElement("li",null,"\u6295\u8d44\u8bf4\u660e\u6295\u8d44\u8bf4\u660e..."),e.createElement("li",{style:{marginTop:"0.18rem"}},e.createElement(u["default"],{type:"primary",onClick:function(){return o.onClose("cancel")}},"\u4e70\u5165")))),{animationType:"slide-up",wrapProps:f,maskClosable:!1})},o.onClose=function(n){o.setState({sel:n}),m["default"].hide()},c=a,p(o,c)}return o(s,n),s.prototype.render=function(){return e.createElement("div",{style:{padding:"0.15rem"}},e.createElement(u["default"],{onClick:this.onClick},"\u663e\u793a"))},s}(e.Component);return e.createElement(h,null)},style:".popup-list .am-list-body {\n  height: 4.2rem;\n  overflow: auto;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.popup-list</span> <span class="token class">.am-list-body</span> </span><span class="token punctuation">{</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token number">4.2</span>rem<span class="token punctuation">;</span>\n  <span class="token property">overflow</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},434:function(n,s,a){n.exports={content:[["p","Popup \u5411\u4e0b\u5f39\u51fa\u6548\u679c"]],meta:{order:0,title:"\u5411\u4e0b\u5f39\u51fa\u6548\u679c",filename:"components/popup/demo/basic.md",id:"components-popup-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Popup<span class="token punctuation">,</span> List<span class="token punctuation">,</span> Button<span class="token punctuation">,</span> InputItem <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">PopupContent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    sel<span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  onSel <span class="token operator">=</span> <span class="token punctuation">(</span>sel<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> sel <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">onClose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span> <span class="token attr-name">renderHeader</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token template-string"><span class="token string">`\u8d26\u6237\u603b\u89c8\uff0c\u9009\u62e9\u4e86\uff1a</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>sel<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span>\n          <span class="token attr-name">thumb</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png<span class="token punctuation">"</span></span>\n          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onSel</span><span class="token punctuation">(</span><span class="token string">\'\u4e1c\u5434\u8bc1\u5238\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n        <span class="token punctuation">></span></span>\u4e1c\u5434\u8bc1\u5238<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span>\n          <span class="token attr-name">thumb</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png<span class="token punctuation">"</span></span>\n          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onSel</span><span class="token punctuation">(</span><span class="token string">\'\u897f\u5434\u8bc1\u5238\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n        <span class="token punctuation">></span></span>\u897f\u5434\u8bc1\u5238<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InputItem</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>val<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>val <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> val <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u8f93\u5165\u5185\u5bb9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>InputItem</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> Test <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> onMaskClose <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'onMaskClose\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment" spellcheck="true">// also support Promise</span>\n    <span class="token comment" spellcheck="true">// return new Promise((resolve) => {</span>\n    <span class="token comment" spellcheck="true">//   console.log(\'1000ms \u540e\u5173\u95ed\');</span>\n    <span class="token comment" spellcheck="true">//   setTimeout(resolve, 1000);</span>\n    <span class="token comment" spellcheck="true">// });</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> onClick <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// \u4fee\u590d Android \u4e0a\u70b9\u51fb\u7a7f\u900f</span>\n    Popup<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PopupContent</span> <span class="token attr-name">onClose</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> Popup<span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> <span class="token punctuation">{</span> onMaskClose <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token comment" spellcheck="true">// newInstance() {</span>\n  <span class="token comment" spellcheck="true">//  const ins = Popup.newInstance();</span>\n  <span class="token comment" spellcheck="true">//  ins.show(&lt;Button onClick={() => ins.hide()}>\u5173\u95ed&lt;/Button>);</span>\n  <span class="token comment" spellcheck="true">// },</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> padding<span class="token punctuation">:</span> <span class="token string">\'0.15rem\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onClick<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u663e\u793a<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Test</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'
}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}function s(n,s){for(var a=Object.getOwnPropertyNames(s),t=0;t<a.length;t++){var p=a[t],o=Object.getOwnPropertyDescriptor(s,p);o&&o.configurable&&void 0===n[p]&&Object.defineProperty(n,p,o)}return n}function t(n,s){if(!(n instanceof s))throw new TypeError("Cannot call a class as a function")}function p(n,s){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!s||"object"!=typeof s&&"function"!=typeof s?n:s}function o(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):s(n,a))}var e=a(1),c=(a(3),a(23),a(22)),u=n(c),l=(a(172),a(171)),i=n(l),k=(a(112),a(111)),r=n(k),g=(a(14),a(17)),m=n(g),d=function(n){function s(){var a,o,e;t(this,s);for(var c=arguments.length,u=Array(c),l=0;l<c;l++)u[l]=arguments[l];return a=o=p(this,n.call.apply(n,[this].concat(u))),o.state={sel:""},o.onSel=function(n){o.setState({sel:n}),o.props.onClose()},e=a,p(o,e)}return o(s,n),s.prototype.render=function(){var n=this;return e.createElement(m["default"],{renderHeader:function(){return"\u8d26\u6237\u603b\u89c8\uff0c\u9009\u62e9\u4e86\uff1a"+n.state.sel}},e.createElement(m["default"].Item,{thumb:"https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png",onClick:function(){n.onSel("\u4e1c\u5434\u8bc1\u5238")}},"\u4e1c\u5434\u8bc1\u5238"),e.createElement(m["default"].Item,{thumb:"https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png",onClick:function(){n.onSel("\u897f\u5434\u8bc1\u5238")}},"\u897f\u5434\u8bc1\u5238"),e.createElement(r["default"],{value:this.state.val,onChange:function(s){return n.setState({val:s})}},"\u8f93\u5165\u5185\u5bb9"))},s}(e.Component),f=function(){var n=function(){console.log("onMaskClose")},s=function(s){s.preventDefault(),i["default"].show(e.createElement(d,{onClose:function(){return i["default"].hide()}}),{onMaskClose:n})};return e.createElement("div",{style:{padding:"0.15rem"}},e.createElement(u["default"],{onClick:s},"\u663e\u793a"))};return e.createElement(f,null)}}},509:function(n,s,a){n.exports={"basic-up":a(433),basic:a(434)}}});