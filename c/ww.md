## JS

-   你们这个 JSON 树是在哪里生成的，前端会生成吗？
-   说一下 EventLoop
-   js 中改变 transform 的 left 和 right 对比于 css 修改 transform
-   如果我将 key 设置为了一个 Math.random()可以吗
-   如何实现 if(a===1&&a===2&&a===3)
    -   是不可能成立的 一個變數同時只會有一個值
-   requestAnimationFrame 属于宏任务还是微任务

    -   宏任务（Macro Tasks）：包括 setTimeout、setInterval、I/O 操作 以及 requestAnimationFrame 等。每次事件循环都会从宏任务队列中取出一个任务来执行。
    -   微任务（Micro Tasks）：包括 Promise 的 .then()、.catch() 和 .finally() 回调，以及 MutationObserver 的回调。微任务会在当前任务执行完成后、下一个宏任务开始之前执行。

-   说一下==数据类型转换吧
-   说一说几种 this 指向
-   说一下 JS 内置对象
-   描述一下作用域链
-   闭包的使用场景
-   使用闭包需要注意什么
-   用过哪些 ES6 的功能
-   描述一下 Promise
-   Promise.all 中如果有一个抛出异常了会如何处理
-   Promise 为什么能链式调用
-   addEventListener 函数的第三个参数
-   有写过原生的自定义事件吗
-   冒泡和捕获的具体过程
-   描述下原型链
-   手写 new
-   typeof 和 instanceof 的区别
-   typeof 为什么对 null 错误的显示
-   apply/call/bind 的相同和不同
-   CommonJS 和 ES6 模块的区别
-   盒模型及如何转换
-   setTimeout 的执行原理(EventLoop)
-   如何实现一个 findIndex

## 其他

-   在项目里有用过 node 吗
-   如果一个移动端的项目要显示在 PC 端上保证结构稳定你会如何做？
-   你自己的项目里有做过哪些 webpack 上的优化
-   webpack 构建流程
-   webpack 插件原理
-   Webpack 打包原理
-   有做过哪些 webpack 优化吗
-   webpack 几种 hash 的实现原理
-   让你从零开始构建一个 webpack 项目你可以吗
-   具体说一下 splitChunksPlugin
-   你遍历 JSON 树的具体过程
-   从输入 URL 到页面呈现的过程
-   进程和线程的区别
-   有了解过微前端吗？
-   了解浏览器的哪些兼容问题
-   如果一个移动端的项目要显示在 PC 端上保证结构稳定你会如何做？
-   有用过 ngnix 吗？用它做过哪些事？
-   有给 git 上的比较好的项目提过 pull 吗
-   SSR 的使用场景
-   输入 URL 到页面的呈现
-   你们的 UI 组件库怎么实现按需引入的呢？
-   Object.defineProperty()有什么缺点？Vue3 为什么用 Proxy?
-   null 为什么被 typeof 错误的判断为了'object'
-   IE 有哪些兼容性问题
-   正则里的非如何实现的
-   V8 的垃圾回收是发生在什么时候？
-   具体说一下垃圾回收机制
-   混合加密的好处
-   浏览器如何验证服务器的身份

## CSS

-   position 属性有哪些值分别介绍一下
-   relative 的定位规则
-   inline-block 的使用场景
-   IE6 双边距问题；在 IE6 中设置了 float , 同时又设置 margin , 就会出现边距问题
    解决方案：设置 display:inline;
-   当标签的高度设置小于 10px，在 IE6、IE7 中会超出自己设置的高度
    解决方案：超出高度的标签设置 overflow:hidden,或者设置 line-height 的值小于你的设置高度
-   图片默认有间距
-   IE9 以下下浏览器不能使用 opacity
    解决方案：

    ```css
    div {
        opacity: 0.5;
        filter: alpha(opacity = 50);
        filter: progid:DXImageTransform.Microsoft.Alpha(style = 0, opacity = 50);
    }
    ```

-   边距重叠问题；当相邻两个元素都设置了 margin 边距时，margin 将取最大值，舍弃最小值；
    解决方案：为了不让边重叠，可以给子元素增加一个父级元素，并设置父级元素为 overflow:hidden；
-   cursor:hand 显示手型在 safari 上不支持
    解决方案：统一使用 cursor:pointer
-   两个块级元素，父元素设置了 overflow:auto；子元素设置了 position:relative ;且高度大于父元素，在 IE6、IE7 会被隐藏而不是溢出
    解决方案：父级元素设置 position:relative
-   移动端布局有哪些方案？
    -   `flex` + `rem`
    -   `vw` + `px`
-   实现水平垂直居中的几种方式
-   flex 的兼容性怎样
-   移动端中 css 你是使用什么单位
-   rem 和 em 的区别
-   在移动端中怎样初始化根元素的字体大小
-   移动端中不同手机 html 默认的字体大小都是一样的吗
-   animation 介绍一下
-   animation 有一个 steps()功能符知道吗？ 1.介绍一下标准的 CSS 的盒子模型？低版本 IE 的盒子模型有什么不同的？
-   CSS 选择符有哪些？
-   ::before 和:after 中双冒号和单冒号有什么区别？解释一下这 2 个伪元素的作用。 4.伪类与伪元素的区别
-   CSS 中哪些属性可以继承？
-   CSS 优先级算法如何计算？ 7.关于伪类 LVHA 的解释?
-   CSS3 新增伪类有那些？ 9.如何居中 div？
-   display 有哪些值？说明他们的作用。
-   position 的值 relative 和 absolute 定位原点是？
-   CSS3 有哪些新特性？（根据项目回答） 13.请解释一下 CSS3 的 Flex box（弹性盒布局模型），以及适用场景？ 14.用纯 CSS 创建一个三角形的原理是什么？ 15.一个满屏品字布局如何设计?
-   CSS 多列等高如何实现？ 17.经常遇到的浏览器的兼容性有哪些？原因，解决方法是什么，常用 hack 的技巧？
-   li 与 li 之间有看不见的空白间隔是什么原因引起的？有什么解决办法？ 19.为什么要初始化 CSS 样式？ 20.什么是包含块，对于包含块的理解?
-   CSS 里的 visibility 属性有个 collapse 属性值是干嘛用的？在不同浏览器下以后什么区别？
-   width:auto 和 width:100\x 的区别 23.绝对定位元素与非绝对定位元素的百分比计算的区别 24.简单介绍使用图片 base64 编码的优点和缺点。
-   'display'、'position'和'float'的相互关系？
-   margin 重叠问题的理解。 27.对 BFC 规范（块级格式化上下文：block formatting context）的理解？
-   IFC 是什么？ 29.请解释一下为什么需要清除浮动？清除浮动的方式 30.使用 clear 属性清除浮动的原理？
-   zoom:1 的清除浮动原理? 32.移动端的布局用过媒体查询吗？ 33.使用 CSS 预处理器吗？喜欢哪个？
-   CSS 优化、提高性能的方法有哪些？ 35.浏览器是怎样解析 CSS 选择器的？ 36.在网页中应该使用奇数还是偶数的字体？为什么呢？
-   margin 和 padding 分别适合什么场景使用？ 38.抽离样式模块怎么写，说出思路，有无实践经验？[阿里航旅的面试题] 39.简单说一下 css3 的 all 属性。 40.为什么不建议使用统配符初始化 css 样式。
-   absolute 的 containingblock（包含块）计算方式跟正常流有什么不同？ 42.对于 hasLayout 的理解？ 43.元素竖向的百分比设定是相对于容器的高度吗？ 44.全屏滚动的原理是什么？用到了 CSS 的哪些属性？（待深入实践） 45.什么是响应式设计？响应式设计的基本原理是什么？如何兼容低版本的 IE？（待深入了解） 46.视差滚动效果，如何给每页做不同的动画？（回到顶部，向下滑动要再次出现，和只出现一次分别怎么做？） - 如何修改 chrome 记住密码后自动填充表单的黄色背景？ 48.怎么让 Chrome 支持小于 12px 的文字？ 49.让页面里的字体变清晰，变细用 CSS 怎么做？
-   font-style 属性中 italic 和 oblique 的区别？ 51.设备像素、css 像素、设备独立像素、dpr、ppi 之间的区别？
-   layout viewport、visual viewport 和 ideal viewport 的区别？
-   position:fixed;在 android 下无效怎么处理？ 54.如果需要手动写动画，你认为最小时间间隔是多久，为什么？（阿里） 55.如何让去除 inline-block 元素间间距？
-   overflow:scroll 时不能平滑滚动的问题怎么处理？ 57.有一个高度自适应的 div，里面有两个 div，一个高度 100px，希望另一个填满剩下的高度。
-   png、jpg、gif 这些图片格式解释一下，分别什么时候用。有没有了解过 webp？ 59.浏览器如何判断是否支持 webp 格式图片 60.什么是 Cookie 隔离？（或者说：请求资源的时候不要让它带 cookie 怎么做）
-   style 标签写在 body 后与 body 前有什么区别？ 62.什么是 CSS 预处理器/后处理器？ 63.阐述一下 CSSSprites 64.使用 rem 布局的优缺点？ 65.几种常见的 CSS 布局 66.画一条 0.5px 的线
-   transition 和 animation 的区别 68.什么是首选最小宽度？ 69.为什么 height:100\x 会无效？
-   min-width/max-width 和 min-height/max-height 属性间的覆盖规则？ 71.内联盒模型基本概念 72.什么是幽灵空白节点？ 73.什么是替换元素？ 74.替换元素的计算规则？
-   content 与替换元素的关系？
-   margin:auto 的填充规则？
-   margin 无效的情形
-   border 的特殊性？ 79.什么是基线和 x-height？
-   line-height 的特殊性？
-   vertical-align 的特殊性？
-   overflow 的特殊性？ 83.无依赖绝对定位是什么？
-   absolute 与 overflow 的关系？
-   clip 裁剪是什么？
-   relative 的特殊性？ 87.什么是层叠上下文？ 88.什么是层叠水平？ 89.元素的层叠顺序？ 90.层叠准则？
-   font-weight 的特殊性？
-   text-indent 的特殊性？
-   letter-spacing 与字符间距？
-   word-spacing 与单词间距？
-   white-space 与换行和空格的控制？ 96.隐藏元素的 background-image 到底加不加载？ 97.如何实现单行／多行文本溢出的省略（...）？ 98.常见的元素隐藏方式？
-   css 实现上下固定中间自适应布局？
    -   css 两栏布局的实现？
    -   css 三栏布局的实现？ 102.实现一个宽高自适应的正方形 103.实现一个三角形 104.一个自适应矩形，水平垂直居中，且宽高比为 2:1 105.你知道 CSS 中不同属性设置为百分比\x 时对应的计算基准？

## HTML

-   script 放在 body 头部就一定会阻塞吗
-   添加删除了 DOM 节点会发生什么？(回流)
-   说一下虚拟 DOM 的作用以及实现原理
-   点击一个 input 依次触发的事件
-   docoment,window,html,body 的层级关系
-   DOCTYPE 的作用是什么？
-   标准模式与兼容模式各有什么区别？
-   HTML5 为什么只需要写 <!DOCTYPE HTML>，而不需要引入 DTD？
-   SGML 、 HTML 、XML 和 XHTML 的区别？
-   DTD 介绍
-   行内元素定义
-   块级元素定义
-   行内元素与块级元素的区别？
-   HTML5 元素的分类
-   空元素定义
-   link 标签定义
-   页面导入样式时，使用 link 和 @import 有什么区别？
-   你对浏览器的理解？
-   介绍一下你对浏览器内核的理解？
-   常见的浏览器内核比较
-   常见浏览器所用内核
-   浏览器的渲染原理？
-   渲染过程中遇到 JS 文件怎么处理？（浏览器解析过程）
-   async 和 defer 的作用是什么？有什么区别？（浏览器解析过程）
-   什么是文档的预解析？（浏览器解析过程）
-   CSS 如何阻塞文档解析？（浏览器解析过程）
-   渲染页面时常见哪些不良现象？（浏览器渲染过程）
-   如何优化关键渲染路径？（浏览器渲染过程）
-   什么是重绘和回流？（浏览器绘制过程）
-   如何减少回流？（浏览器绘制过程）
-   为什么操作 DOM 慢？（浏览器绘制过程）
-   DOMContentLoaded 事件和 Load 事件的区别？
-   HTML5 有哪些新特性、移除了那些元素？
-   如何处理 HTML5 新标签的浏览器兼容问题？
-   简述一下你对 HTML 语义化的理解？
-   b 与 strong 的区别和 i 与 em 的区别？
-   前端需要注意哪些 SEO ？
-   HTML5 的离线储存怎么使用，工作原理能不能解释一下？
-   浏览器是怎么对 HTML5 的离线储存资源进行管理和加载的呢？
-   常见的浏览器端的存储技术有哪些？
-   请描述一下 cookies，sessionStorage 和 localStorage 的区别？
-   iframe 有那些缺点？
-   Label 的作用是什么？是怎么用的？
-   HTML5 的 form 的自动完成功能是什么？
-   如何实现浏览器内多个标签页之间的通信?
-   webSocket 如何兼容低版本浏览器？
-   页面可见性（Page Visibility API） 可以有哪些用途？
-   如何在页面上实现一个圆形的可点击区域？
-   实现不使用 border 画出 1 px 高的线，在不同浏览器的标准模式与怪异模式下都能保持一致的效果。
-   title 与 h1 的区别？
-   <img> 的 title 和 alt 有什么区别？
-   Canvas 和 SVG 有什么区别？
-   网页验证码是干嘛的，是为了解决什么安全问题？
-   渐进增强和优雅降级的定义
-   attribute 和 property 的区别是什么？
-   对 web 标准、可用性、可访问性的理解
-   IE 各版本和 Chrome 可以并行下载多少个资源？
-   Flash、Ajax 各自的优缺点，在使用中如何取舍？
-   怎么重构页面？
-   浏览器架构
-   常用的 meta 标签
-   css reset 和 normalize.css 有什么区别？
-   用于预格式化文本的标签是？
-   DHTML 是什么？
-   head 标签中必不少的是？
-   HTML5 新增的表单元素有？
-   在 HTML5 中，哪个方法用于获得用户的当前位置？
-   文档的不同注释方式？
-   disabled 和 readonly 的区别？
-   主流浏览器内核私有属性 css 前缀？
-   前端性能优化？
-   Chrome 中的 Waterfall ？
-   扫描二维码登录网页是什么原理，前后两个事件是如何联系的？
-   Html 规范中为什么要求引用资源不加协议头 http 或者 https？

## vue

-   说一下 Vue-Router 的实现原理
-   Vue 中 key 的作用
-   说一下 Vue 的 diff 算法
-   Vue 的双向绑定原理
-   nextTick 实现原理
-   nextTick 中的 waiting 是什么时候变为 true 的呢
-   Vue3 有哪些新的 API 或者有做哪些优化？
-   Vue 的优点及缺点
-   Vue 中 computed 和 methods 的区别

## 效能

-   什么是 GPU 加速
-   如果让你设计一个双向绑定你会如何设计
-   首屏加载优化
-   script 与 css 还有页面的渲染顺序
-   script 标签的 async 是什么时候加载的

## 網路

-   了解浏览器的哪些兼容问题？
-   HTTP 3.0.1 和 HTTP 3.0.2 的区别？
-   为什么 TCP 要三次握手而不是两次？
-   HTTP 和 TCP 的区别？
-   TCP 和 UDP 的区别？
-   你们项目一般是如何做缓存的？
-   什么情况会阻塞页面的加载？
-   HTTP/2 对比 HTTP1.1？
-   HTTP/2 是怎么解决队头阻塞的？
-   HTTP/2 是如何压缩头部的？
-   为什么说 HTTPS 比 HTTP 安全？
-   说一下对称加密和非对称加密。
-   HTTP 请求什么时候用对称加密，什么时候用非对称加密？
-   你们的 token 一般是放在哪里？
-   token 放在 Cookie 和放在 localStorage、sessionStorage 中有什么不同？
-   SameSite 设置为 lax 后，如何控制 Cookie 的发送？
-   HTTP 缓存的首部字段？
-   HTTP 中的 keep-alive 有了解吗？
-   跨域是什么？
-   模块的异步加载？
-   如何将 http 的请求换成 https？
-   知道 meta 标签可以把 http 换成 https 吗？
-   如何拦截 http 请求？
-   https 的加密方式属于应用层吗？
-   HTTP 协议概况？
-   HTTP 请求报文？
-   HTTP 响应报文？
-   HTTP/1.1 协议缺点？
-   HTTP/2 协议？
-   二进制协议？
-   多路复用？
-   数据流？
-   服务器推送？
-   HTTP/3 协议？
-   HTTPS 协议？
-   TLS 握手过程？
-   DNS 协议概况？
-   域名的层级结构？
-   DNS 查询过程？
-   DNS 记录和报文？
-   DNS 的递归查询和迭代查询？
-   DNS 缓存？
-   DNS 实现负载平衡？
-   传输层概况？
-   多路复用与多路分解？
-   UDP 报文段结构？
-   TCP 报文段结构？
-   TCP 三次握手过程？
-   TCP 四次挥手过程？
-   TCP 状态转化图？
-   TCP 的可靠运输机制？
-   TCP 的流量控制机制？
-   TCP 的拥塞控制机制？
-   网络层概况？
-   数据链路层概况？
-   物理层概况？
-   即时通讯的实现方式（短轮询、长轮询、SSE 和 WebSocket 区别）？
-   如何实现多个网站之间共享登录状态？

## 網路安全

-   如果让你去实现一个 CSRF 攻击你会怎做？
-   还知道其它的攻击方式吗？
-   Cookie 存在哪些安全问题？如何预防？
-   还有哪些前端安全性问题
-   如果使用 jsonp 的话会有什么安全问题吗？
-   CORS 跨域的原理
-   CORS 预请求 OPTIONS 就一定是安全的吗？
-   输入 URL 到页面的呈现
-   CSP 白名单知道吗？
-   反向代理知道吗？
-   前端安全方面？XSS？CSRF？

## API

-   GET 和 POST 的区别
-   为什么说 GET 会留下历史记录？
-   GET 可以上传图片吗？
-   GET 和 POST 的安全性问题为什么说 POST 相对安全一些
-   GET 就一定是幂等的吗？

## 部屬

-   nginx 有配置过吗？
