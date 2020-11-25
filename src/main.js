const { app, Menu, Tray, BrowserWindow } = require('electron')
const path = require('path')

app.once('ready', async () => {
  var isClosingWithTrayIcon = 0;
  //Main window
  const mainWin = new BrowserWindow({
    width: 400,
    height: 400,
    webPreferences: {
      nodeIntegration: true
    },
    icon: path.join(__dirname, 'assets/icons/win/128x128.ico')
  })
  
  var minimizeToTray;
  mainWin.webContents
    .executeJavaScript('localStorage.getItem("minimizeToTray");', true)
    .then(result => {
      minimizeToTray = result;
    });
  mainWin.loadFile('index.html')
  mainWin.removeMenu()
  mainWin.setResizable(false)
  mainWin.on('close', (event) => {
    if (eval(minimizeToTray) === true && isClosingWithTrayIcon === 0) {
      event.preventDefault()
      mainWin.hide()
    } else {
      mainWin.destroy()
      optionsWin.destroy()
      app.isQuiting = true
      app.quit()
    }
  })
  //Options window
  const optionsWin = new BrowserWindow({
    width: 400,
    height: 400,
    webPreferences: {
      nodeIntegration: true
    },
    icon: path.join(__dirname, 'assets/icons/win/128x128.ico')
  })
  optionsWin.loadFile('options.html')
  optionsWin.removeMenu()
  optionsWin.setResizable(false)
  optionsWin.hide()
  optionsWin.on('close', (event) => {
    if (isClosingWithTrayIcon == 0) {
      event.preventDefault()
      optionsWin.hide()
    }
  })

  //Tray icon
  appTray = new Tray(path.join(__dirname, 'assets/icons/win/128x128.ico'))
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Options', click: function() {
      optionsWin.show()
    } },
    { label: 'Quit', click:  function() {
        app.isQuiting = true
        isClosingWithTrayIcon = 1;
        app.quit()
    } }
  ])
  appTray.setContextMenu(contextMenu)
  appTray.on('click', () => {
    mainWin.show()
  })
})