const humanize = require('humanize-duration'),
      { remote, ipcRenderer, contextBridge } = require('electron'),
      electronStore = require('electron-store'),
      store = new electronStore();

contextBridge.exposeInMainWorld('scripts', {
    minimizeCurrentWin: () => remote.getCurrentWindow().minimize(),
    hideCurrentWin: () => remote.getCurrentWindow().hide(),
    ipcSend: (ch, a) => ipcRenderer.send(ch, a),
    humanize: d => humanize(d)
});

contextBridge.exposeInMainWorld('store', {
    set: (key, value) => store.set(key, value),
    get: key => store.get(key),
    delete: key => store.delete(key)
});