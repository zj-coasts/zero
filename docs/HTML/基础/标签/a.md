# 超链接

> **HTML <a> 元素**（或称为锚元素）可用通过他的<code>href</code>属性创建通向其他网页、文件、同一页面内的位置、电子邮件地址或者任何其他的URL的超链接。<a>中的内容应该指明链接的意图。如果存在<code>href</code>属性，当<a>聚焦时按下回车键就会激活它

> 注意：开始标签和结束标签都不能省略
<div id="top"></div>
# 属性
### download <code>HTML5</code>
  此属性指示浏览器下载URL而不是导航它，因此将提示用户将其保存问本地文件。如果属性有一个值，那么此值将在下载保存过程中作为预填充的文件名（如果用户需要，仍然可以更改文件名）。
此属性对允许的值没有限制，但是/和\会被转换为下划线。大多数文件系统限制了文件名中的标点符号，故此，浏览器将相应的调整建议的文件名

### href
  包含超链接指向的URL或者URL片段
  URL片段是哈希标记（#）前面的名称，哈希标记指定当前文档中的内部目标位置（HTML元素的ID）。URL不限于基于Web（HTTP）的文档，也可以使用浏览器支持的协议。例如，在大多数浏览器
中正常工作的file:、ftp:、和mailto:。
> 注意：可以使用<code>href="#top"</code>或者<code>href="#"</code>链接返回到页面的顶部。这种行为是HTML的特性

### target 
  该属性指定在何处显示链接的资源。取值为标签（tab），窗口（window），或框架（iframe）等浏览器上下文的名称或其他关键词。
  * _self: 当前页面加载，即当前的响应到同一HTML 4 frame（或HTML5浏览上下文）。此值是默认的如果没有指定的话。
  * _blank: 新窗口打开，即到一个新的未命名的HTML4窗口或者HTML5浏览器上下文。
  * _parent: 加载响应到当前框架父框架。如果没有parent框架或者浏览器上下文，此选项的行为方式与_self相同。
  * _top:
    * HTML4中加载的响应成完整的，原来的窗口，取消所有其他frame。
    * HTML5中加载响应进入顶层浏览上下文。如果没有parent框架或者浏览上下文。此选项的行为方式与_self相同。

# 示例
### 链接到外部地址
##### 代码
```html
<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a">
    点击跳转MDN
</a>
```
##### 结果
<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a">
    点击跳转MDN
</a>

### 链接到本页的某个部分
##### 代码
```html
<a href="#属性">点击跳转属性</a>
```
##### 结果
请复制代码到HTML文件中查看效果

### 创建一个可点击的图片
    这个小栗子使用图像链接到MDN主页。
##### 代码
```html
<a href="https://developer.mozilla.org/zh-CN/">
    <img src="https://mdn.mozillademos.org/files/6851/mdn_logo.png" alt="MDN logo">
</a>
```
##### 结果
<a href="https://developer.mozilla.org/zh-CN/" target="_blank">
    <img src="https://mdn.mozillademos.org/files/6851/mdn_logo.png" alt="MDN logo">
</a>

### 创建一个email链接
    这是常见的创建按钮或者链，将用户的电子邮件程序打来，让他们发送新邮件。
##### 代码
```html
<a href="mailto:906035221@qq.com">发送一个邮件</a>
```
##### 结果
<a href="mailto:906035221@qq.com">发送一个邮件</a>
> 如果需要传递多个参数的话，第一个参数必须以<code>?</code>开头, 后面的参数都以<code>&</code>分隔
```html
<a href="mailto:906035221@qq.com?906035221@qq.com&906035221@qq.com">发送一个邮件</a>
```

### 创建电话链接
    提供电话链接有助于用户查看连接到手机的网络文档和笔记本电脑。
##### 代码
```html
<a href="tel:15922937286">15922937286</a>
```
##### 结果
<a href="tel:15922937286">15922937286</a>

### 使用<code>download</code>属性将canvas保存为png图片
    如果你想允许用户下载一个HTML画布，可以创建一个下属属性和画布数据作为文件URL连接图像
##### 代码
```html
let link = document.createElement('a');
link.innerHTML = 'download image';

link.addEventListener('click', function(ev) {
    link.href = canvas.toDataURL();
    link.download = 'test.png';
}, false);

document.body.appendChild(link);
```
##### 结果
> 请在指示文件中查看效果<code>base/HTML/基础/标签/A标签.html</code>

