## 目录结构
```
|- lib  // 项目源码
    |-  adapters    // 定义发送请求的适配器
        |-  http.js     // node环境http对象
        |-  xhr // 浏览器环境XML对象
    |-  cancel      // 定义取消请求功能
    |-  helpers     // 一些辅助方法
    |- core         // 核心功能
        |-  Axios // 构造函数
        |-  buildFullPath.js
        |-  createError.js  // 抛出错误
        |-  dispatchRequest.js
        |-  enhanceError.js
        |-  InterceptorManager.js
        |-  mergeConfig.js
        |-  settle.js
        |-  transformData.js
    |-  axios.js
    |-  defaults.js
    |-  utils.js
```