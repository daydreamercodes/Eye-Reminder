const { app, Tray, Menu, ipcMain, shell } = require('electron'),
      { BrowserWindow } = require('glasstron'),
      path = require('path'),
      electronStore = require('electron-store'),
      store = new electronStore();

app.commandLine.appendSwitch('enable-transparent-visuals');

var isClosingWithTrayIcon = false;

app.whenReady().then(() => {
    if (store.get('preferences.sendNotification') == undefined) {
        store.set('preferences.sendNotification', true);
    };
    if (store.get('preferences.playSound') == undefined) {
        store.set('preferences.playSound', true);
    };
    if (store.get('preferences.screenTime') == undefined) {
        store.set('preferences.screenTime', 20);
    };
    setTimeout(() => {
        const mainWin = new BrowserWindow({
            width: 400,
            height: 400,
            frame: false,
            transparent: true,
            resizable: false,
            blurType: 'blurbehind',
            icon: path.join(__dirname, 'assets/icons/icon.png'),
            webPreferences: {
                enableRemoteModule: true,
                contextIsolation: true,
                preload: path.join(__dirname, 'assets/scripts/preload.js')
            }
        }),
        preferencesWin = new BrowserWindow({
            width: 400,
                height: 400,
                frame: false,
                transparent: true,
                resizable: false,
                blurType: 'blurbehind',
                icon: path.join(__dirname, 'assets/icons/icon.png'),
                webPreferences: {
                    enableRemoteModule: true,
                    contextIsolation: true,
                    preload: path.join(__dirname, 'assets/scripts/preload.js')
                },
                show: false
        }),
        aboutWin = new BrowserWindow({
            width: 400,
            height: 400,
            frame: false,
            transparent: true,
            resizable: false,
            blurType: 'blurbehind',
            icon: path.join(__dirname, 'assets/icons/icon.png'),
            webPreferences: {
                enableRemoteModule: true,
                contextIsolation: true,
                preload: path.join(__dirname, 'assets/scripts/preload.js')
            },
            show: false
        });
    
        mainWin.loadFile(path.join(__dirname, 'index.html'));
        mainWin.setBlur(true);

        preferencesWin.loadFile(path.join(__dirname, 'preferences.html'));
        preferencesWin.setBlur(true);

        aboutWin.loadFile(path.join(__dirname, 'about.html'));
        aboutWin.setBlur(true);

        ipcMain.on('showPreferences', (s) => {
            preferencesWin.show();
        });

        mainWin.on('close', event => {
            if (!isClosingWithTrayIcon) {
                event.preventDefault();
                mainWin.hide();
            };
        });
    
        preferencesWin.on('close', event => {
            if (!isClosingWithTrayIcon) {
                event.preventDefault();
                preferencesWin.hide();
            };
        });

        aboutWin.on('close', event => {
            if (!isClosingWithTrayIcon) {
                event.preventDefault();
                aboutWin.hide();
            };
        });

        aboutWin.webContents.on('new-window', (e, url) => {
            e.preventDefault();
            shell.openExternal(url);
        });

        tray = new Tray(path.join(__dirname, 'assets/icons/icon.png'));
        tray.setToolTip('d_Eye');
        tray.on('click', () => {
            mainWin.show();
        });
        tray.setContextMenu(Menu.buildFromTemplate([
            {
                label: 'Show d_Eye',
                click: () => {
                    mainWin.show();
                }
            },
            {
                label: 'Preferences',
                click: () => {
                    preferencesWin.show();
                }
            },
            {
                label: 'About',
                click: () => {
                    aboutWin.show();
                }
            },
            {
                label: 'Exit',
                click: () => {
                    isClosingWithTrayIcon = true;
                    app.quit();
                }
            }
        ]));
    }, process.platform == 'linux' ? 1000 : 0);
});