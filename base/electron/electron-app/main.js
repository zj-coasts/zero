// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
require('./menu.js')

// function createWindow () {
//   const mainWindow = new BrowserWindow({
//     width: 800,
//     height: 600,
//     webPreferences: {
//       preload: path.join(__dirname, 'preload.js')
//     }
//   })
//
//   mainWindow.loadFile('index.html')
// }
//
// app.whenReady().then(() => {
//   createWindow()
// })

app.on('ready', () => {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    // minWidth,ninHeight,maxWidth,maxHeight
    x: 100, // 窗口x坐标
    y: 50,
    webPreferences: {
      // contextIsolation: true // 取消窗口的警告
      nodeIntegration: true // 使用node引入  与上面那个不能同时存在
    }
  })
  win.webContents.openDevTools() // 打开开发工具
  win.loadFile('index.html')
  win.on('close', () => {
    win = null // 释放窗口内存
  })
})

