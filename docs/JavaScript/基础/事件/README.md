#  GlobalEventHandlers 
    GlobalEventHandlers描述了一系列web worker的事件接口。这里的每一个接口都可以添加更多的事件句柄。
> GlobalEventHandlers是一个混入对象（mixin）而不是一个真正的接口，所以无法创建直接基于GlobalEventHandlers的对象。

### onanimationcancel
    当CSS动画意外终止时发送animationcancel事件，也就是说，当它停止运行而没有发送animationend事件时。
例如，当动画名称被更改以至于动画被删除时，或者当动画节点被隐藏(直接或因为包含它的任何节点被隐藏)时，会发生这种情况。
##### 语法
```javascript
target.onanimationcancel = function () {}
```

### onanimationend
    当CSS动画正常结束时触发此事件。
##### 语法
```javascript
target.onanimationend = event => {}
```

### onanimationstart
    当CSS动画开始进行时触发此事件
##### 语法
```javascript
target.onanimationstart = event => {}
```

### onanimationiteration <span style="background: yellow">草案</span>
    当CSS动画重新开始播放是触发此事件
```javascript
target.onanimationiteration = event => {}
```

### onblur
    当元素失去焦点时触发此事件
```javascript
element.onblur = event => {}
```
> 在IE中，几乎所有类型的元素都可以触发blur事件，但是在基于gecko的浏览器中，大部分元素都不能触发blur事件。


### oncancel
    当用户需要离开一个<dialog>元素时就会触发cancel事件。这个事件处理器会防止事件向上传递，因此任何父处理器都不会接受到该事件。
```javascript
target.oncancel = event => {}
```

### oncanplay 
    当视频（video）准备开始播放时触发此事件
```javascript
<video oncanplay="canplay()">

```

### oncanplaythrough
    当视频（video）可以正常播放且无需停顿时触发此事件。

### onchange
    当元素的值发生改变并失去焦点时，会触发此事件；
    对于单选框和复选框，在被选择的状态改变时，会触发此事件。

### onclick
    当用户点击一个元素时，会触发click事件。在每次点击的整个过程中，click事件的运行顺序在mousedown和mouseup事件之后

### oncontextmenu
    当用户在窗口上单击鼠标右键时，通常会触发contextmenu事件。除非阻止默认行为，否则浏览器上下文菜单将被激活。、

###  oncuechange
    当<track>更改了当前显示的提示时，将会触发此事件。

### ondblclick
    双击元素时触发此事件。

### ondurationchange
    duration发生变更时触发此事件。

### onended
    当音频播放结束后触发此事件。

### onerror
    * 当**JavaScript运行时错误**发生时，window会触发一个ErrorEvent接口的error事件，并执行window.onerror()。
    * 当一项资源(<img>或<script>)**加载失败**，加载资源的元素会触发一个Event接口的error事件，并执行该元素上的onerror()处理函数。
这些事件不会向上冒泡到window，不过(至少在Firefox中)能被单一的window.addEventLisyener捕获。
> 加载一个全局的error事件处理函数可用于自动手机错误报告。

> 由于历史原因，window.onerror和element.onerror接收不同的参数
> window.onerror = function(message, source, lineno, colno, error) {}
> 函数参数：
> *message: 错误信息（字符串）。可用于HTML onerror=""处理程序中的event。
> * source: 发生错误的脚本URL(字符串)。
> * lineno: 发生错误的行号（数字）.
> * colno: 发生错误的列号（数字）.
> * error: Errord对象（对象）。
> 
> 若该函数返回true，阻止执行默认事件处理函数

### onfocus
    当元素或得键盘焦点时触发此事件。

### ongotpointercapture
    ???

### oninput
    当用户向<input>中输入内容时触发此事件。
> 与oninput不同的是，onchange事件处理程序不一定会针对元素值的每次更改而调用。

### oninvalid
    提交的input值为无效值时会触发此事件
> 例如：input设置了required属性，但是提交时该处为空就会触发oninvalid事件

### onkeydown
    当用户按下键盘上的按键时会触发此事件。

### onkeyup
    在当前元素上释放键盘按键时会触发此事件
