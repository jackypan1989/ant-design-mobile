webpackJsonp([22,94],{308:function(n,a,s){var t=s(12),p='<symbol viewBox="0 0 38 43" id="menu" xmlns:xlink="http://www.w3.org/1999/xlink"> <!-- Generator: Sketch 42 (36781) - http://www.bohemiancoding.com/sketch --> <title>&#x83DC;&#x5355;</title> <desc>Created with Sketch.</desc> <defs/> <g id="menu_Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="menu_Artboard" transform="translate(-17.000000, -10.000000)" fill="#ffffff"> <g id="menu_&#x83DC;&#x5355;" transform="translate(17.000000, 10.000000)"> <path d="M4.97379915e-14,2.00199958 C4.97379915e-14,0.896325744 0.90185079,1.42108547e-14 2.00285922,1.42108547e-14 L35.9971408,1.42108547e-14 C37.1032894,1.42108547e-14 38,0.898116112 38,2.00199958 L38,40.9980004 C38,42.1036743 37.0981492,43 35.9971408,43 L2.00285922,43 C0.896710617,43 4.97379915e-14,42.1018839 4.97379915e-14,40.9980004 L4.97379915e-14,2.00199958 Z M3,3 L3,40 L35,40 L35,3 L3,3 Z" id="menu_Combined-Shape"/> <rect id="menu_Rectangle-433" x="7" y="12" width="24.3589744" height="2.92307692" rx="1"/> <rect id="menu_Rectangle-433-Copy" x="7" y="20.7692308" width="20.4615385" height="2.92307692" rx="1"/> <rect id="menu_Rectangle-433-Copy-2" x="7" y="29.5128205" width="14.6153846" height="2.92307692" rx="1"/> </g> </g> </g> </symbol>';n.exports=t.add(p,"menu")},415:function(n,a,s){n.exports={content:[],meta:{order:0,title:"\u83dc\u5355",filename:"components/menu/demo/basic.md",id:"components-menu-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token comment" spellcheck="true">/* eslint global-require:0, no-nested-ternary:0 */</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Menu<span class="token punctuation">,</span> ActivityIndicator<span class="token punctuation">,</span> NavBar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'1\'</span><span class="token punctuation">,</span>\n    label<span class="token punctuation">:</span> <span class="token string">\'\u5168\u90e8\u5206\u7c7b\'</span><span class="token punctuation">,</span>\n    isLeaf<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'2\'</span><span class="token punctuation">,</span>\n    label<span class="token punctuation">:</span> <span class="token string">\'\u7f8e\u98df\'</span><span class="token punctuation">,</span>\n    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'\u5168\u90e8\u7f8e\u98df\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'22\'</span><span class="token punctuation">,</span>\n        disabled<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'\u4e2d\u9910\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'21\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'\u706b\u9505\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'23\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'\u81ea\u52a9\u9910\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'24\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'\u5feb\u9910\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'25\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'\u5c0f\u5403\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'26\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'\u9762\u5305\u751c\u70b9\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'27\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'\u751f\u9c9c\u6c34\u679c\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'28\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'\u9762\u98df\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'29\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'\u4f11\u95f2\u98df\u54c1\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'210\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'3\'</span><span class="token punctuation">,</span>\n    label<span class="token punctuation">:</span> <span class="token string">\'\u8d85\u5e02\'</span><span class="token punctuation">,</span>\n    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'\u5168\u90e8\u8d85\u5e02\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'31\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'\u8d85\u5e02\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'32\'</span><span class="token punctuation">,</span>\n        disabled<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'\u4fbf\u5229\u5e97\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'33\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'\u4e2a\u4eba\u62a4\u7406\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'34\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">MenuExample</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n      initData<span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n      show<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  onChange <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> label <span class="token operator">=</span> <span class="token string">\'\'</span><span class="token punctuation">;</span>\n    data<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>dataItem<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>dataItem<span class="token punctuation">.</span>value <span class="token operator">===</span> value<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        label <span class="token operator">=</span> dataItem<span class="token punctuation">.</span>label<span class="token punctuation">;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>dataItem<span class="token punctuation">.</span>children <span class="token operator">&amp;&amp;</span> value<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          dataItem<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>cItem<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>cItem<span class="token punctuation">.</span>value <span class="token operator">===</span> value<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n              label <span class="token operator">+</span><span class="token operator">=</span> <span class="token template-string"><span class="token string">` </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>cItem<span class="token punctuation">.</span>label<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>label<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  handleClick <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// \u4fee\u590d Android \u4e0a\u70b9\u51fb\u7a7f\u900f</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      show<span class="token punctuation">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>show<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment" spellcheck="true">// mock for async data loading</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>initData<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n          initData<span class="token punctuation">:</span> data<span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> initData<span class="token punctuation">,</span> show <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">const</span> menuEl <span class="token operator">=</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu</span>\n        <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>foo-menu<span class="token punctuation">"</span></span>\n        <span class="token attr-name">data</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>initData<span class="token punctuation">}</span></span>\n        <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">\'2\'</span><span class="token punctuation">,</span> <span class="token string">\'22\'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>\n        <span class="token attr-name">height</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientHeight <span class="token operator">*</span> <span class="token number">0.6</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">/></span></span>\n      <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> loadingEl <span class="token operator">=</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token string">\'100%\'</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientHeight <span class="token operator">*</span> <span class="token number">0.6</span><span class="token punctuation">,</span> display<span class="token punctuation">:</span> <span class="token string">\'flex\'</span><span class="token punctuation">,</span> justifyContent<span class="token punctuation">:</span> <span class="token string">\'center\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ActivityIndicator</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>show <span class="token operator">?</span> <span class="token string">\'menu-active\'</span> <span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NavBar</span>\n            <span class="token attr-name">leftContent</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u83dc\u5355<span class="token punctuation">"</span></span>\n            <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>light<span class="token punctuation">"</span></span>\n            <span class="token attr-name">iconName</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./menu.svg\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">onLeftClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">}</span></span>\n            <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>top-nav-bar<span class="token punctuation">"</span></span>\n          <span class="token punctuation">></span></span>\n            \u6807\u9898\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NavBar</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span>show <span class="token operator">?</span> initData <span class="token operator">?</span> menuEl <span class="token punctuation">:</span> loadingEl <span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MenuExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}function a(n,a){for(var s=Object.getOwnPropertyNames(a),t=0;t<s.length;t++){var p=s[t],o=Object.getOwnPropertyDescriptor(a,p);o&&o.configurable&&void 0===n[p]&&Object.defineProperty(n,p,o)}return n}function t(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function p(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function o(n,s){if("function"!=typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function, not "+typeof s);n.prototype=Object.create(s&&s.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),s&&(Object.setPrototypeOf?Object.setPrototypeOf(n,s):a(n,s))}var e=s(1),c=(s(3),s(82),s(81)),u=n(c),l=(s(150),s(149)),i=n(l),k=(s(250),s(249)),r=n(k),d=[{value:"1",label:"\u5168\u90e8\u5206\u7c7b",isLeaf:!0},{value:"2",label:"\u7f8e\u98df",children:[{label:"\u5168\u90e8\u7f8e\u98df",value:"22",disabled:!1},{label:"\u4e2d\u9910",value:"21"},{label:"\u706b\u9505",value:"23"},{label:"\u81ea\u52a9\u9910",value:"24"},{label:"\u5feb\u9910",value:"25"},{label:"\u5c0f\u5403",value:"26"},{label:"\u9762\u5305\u751c\u70b9",value:"27"},{label:"\u751f\u9c9c\u6c34\u679c",value:"28"},{label:"\u9762\u98df",value:"29"},{label:"\u4f11\u95f2\u98df\u54c1",value:"210"}]},{value:"3",label:"\u8d85\u5e02",children:[{label:"\u5168\u90e8\u8d85\u5e02",value:"31"},{label:"\u8d85\u5e02",value:"32",disabled:!0},{label:"\u4fbf\u5229\u5e97",value:"33"},{label:"\u4e2a\u4eba\u62a4\u7406",value:"34"}]}],g=function(n){function a(){t(this,a);for(var s=arguments.length,o=Array(s),e=0;e<s;e++)o[e]=arguments[e];var c=p(this,n.call.apply(n,[this].concat(o)));return c.onChange=function(n){var a="";d.forEach(function(s){s.value===n[0]&&(a=s.label,s.children&&n[1]&&s.children.forEach(function(s){s.value===n[1]&&(a+=" "+s.label)}))}),console.log(a)},c.handleClick=function(n){n.preventDefault(),c.setState({show:!c.state.show}),c.state.initData||setTimeout(function(){c.setState({initData:d})},500)},c.state={initData:"",show:!1},c}return o(a,n),a.prototype.render=function(){var n=this.state,a=n.initData,t=n.show,p=e.createElement(r["default"],{className:"foo-menu",data:a,value:["2","22"],onChange:this.onChange,height:.6*document.documentElement.clientHeight}),o=e.createElement("div",{style:{width:"100%",height:.6*document.documentElement.clientHeight,display:"flex",justifyContent:"center"}},e.createElement(i["default"],{size:"large"}));return e.createElement("div",{className:t?"menu-active":""},e.createElement("div",null,e.createElement(u["default"],{leftContent:"\u83dc\u5355",mode:"light",iconName:s(308),onLeftClick:this.handleClick,className:"top-nav-bar"},"\u6807\u9898")),t?a?p:o:null)},a}(e.Component);return e.createElement(g,null)},style:".foo-menu {\n  z-index: 1000 !important;\n}\n.top-nav-bar {\n  background-color: #008AE6;\n  color: #FFF;\n}\n.am-navbar-title {\n  color: #FFF!important;\n}\n.menu-active:after {\n  content: ' ';\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: #000;\n  opacity: 0.4;\n  z-index: 1;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.foo-menu</span> </span><span class="token punctuation">{</span>\n  <span class="token property">z-index</span><span class="token punctuation">:</span> <span class="token number">1000</span> <span class="token important">!important</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.top-nav-bar</span> </span><span class="token punctuation">{</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token hexcode">#008AE6</span><span class="token punctuation">;</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token hexcode">#FFF</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.am-navbar-title</span> </span><span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token hexcode">#FFF</span>!important<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.menu-active</span><span class="token pseudo-element">:after</span> </span><span class="token punctuation">{</span>\n  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">\' \'</span><span class="token punctuation">;</span>\n  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token number">100%</span><span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token number">100%</span><span class="token punctuation">;</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token hexcode">#000</span><span class="token punctuation">;</span>\n  <span class="token property">opacity</span><span class="token punctuation">:</span> <span class="token number">0.4</span><span class="token punctuation">;</span>\n  <span class="token property">z-index</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},501:function(n,a,s){n.exports={basic:s(415)}}});