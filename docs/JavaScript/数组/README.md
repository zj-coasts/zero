> <span style="background-color: #42b983;color: #ffffff">目前共有28个api</span>

### concat
    concat()方法用于连接两个或者多个数组。此方法不会改变现有数组，而是返回一个新数组，其中包含连接数组的值。

```Javascript
let arr1 = [1, 2, 3];
let arr2 = ['A', 'B', 'C'];
let newArr = arr1.concat(arr2)
console.log(newArr) // console: [1, 2, 3, 'A', 'B', 'C']
```

### copyWithin
    copyWithin()方法将数组元素复制到数组中的另一个位置，覆盖现在值。此方法永远不会像数组添加更多项。注意：此方法会覆盖袁术数组。
##### 语法
> arr.copyWithin(target[, start[, end]])
###### 参数
####### target
    0为基底的索引，复制序列到该位置。如果是负数，target将从末尾开始计算。
    如果target大于等于arr.length,将不会发生拷贝。如果target在start之后，复制的序列将被修改以符合arr.length。
####### start
    0为基底的索引，开始复制元素的起始位置。如果是负数，start将从末尾开始计算。
    如果start被忽略，copyWithin将会从0开始复制。
####### end
    0为基底的索引，开始复制元素的结束位置。copyWithin将会拷贝到该位置，但不包括end这个位置的元素。如果是负数，end将从末尾来势计算。
    如果end被忽略，copyWithin方法将会一直复制至数组结尾（默认为arr.length）。
###### 返回值
    改变以后的数组
##### 描述
    参数target、start和end必须为整数。
    如果start为负，则其指定的索引位置等同于length+start,length为数组长度。end也是如此。
    copyWithin方法不要求其this值必须是一个数组对象；除此之外，copyWithin是一个可变方法，他可以改变this对象本身，并且返回他，而不仅仅是它的拷贝。
    copyWithin就像C和C++的memcpy函数一样，且他是用来移动Array或者TypedArray数据的一个高性能方法。复制以及粘贴序列这两者是为了一体的操作即使复制和粘贴区域重叠，粘贴的序列也会有拷贝来的值。
    copyWithin函数被设计为通用式的，不要求其this值必须是一个数组对象。
    copyWithin是一个可变方法，他不会改变this的长度length,但是会改变this本身的内容，且需要时会创建新的属性。
```Javascript
    let arr = ['A', 'B', 'C'];
    arr.copyWithin(2.0)
    console.log(arr)
```
