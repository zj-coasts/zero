const { Menu, BrowserWindow } = require('electron')

const template = [
  {
    label: '主菜单1',
    submenu: [
      {
        label: '子菜单1',
        accelerator: 'ctrl+n', // 快键键
        click: () => {
          let win = new BrowserWindow({
            width: 300,
            height: 200
          })
          win.loadFile('dialog.html')
          win.on('close', () => { // 避免暂用内存
            win = null
          })
        }
      },
      { label: '子菜单2' },
      { label: '子菜单3' },
      { label: '子菜单4' },
      { label: '子菜单5' },
    ]
  }
]

Menu.setApplicationMenu(Menu.buildFromTemplate(template))
