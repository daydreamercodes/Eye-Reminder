# Eye Reminder
An app to remind you to take a break for your eyes.

## Package Yourself
### Requirements
[npm](https://www.npmjs.com/)  
[asar](https://github.com/electron/asar)  
[Electron](https://github.com/electron/electron/releases/latest)  
[humanize-duration](https://www.npmjs.com/package/humanize-duration)

### File Tree  
Eye-Reminder app's file tree should be like:  
```
Eye-Reminder
├── package.json
├── main.js
├── index.html
└── (Other app files and folders like assets)
```  
So don't put this repository directly in a folder.
### Packaging
#### Windows  
1. Pack app with asar `asar pack Eye-Reminder app.asar`.  
2. Put the app.asar file into `electron/resources`.  
3. Execute electron.exe to start the app. You can rename electron.exe to any name and edit the electron.exe's icon, file description, etc. with tools like [rcedit](https://github.com/electron/rcedit).  
#### Linux  
1. Pack app with asar `asar pack Eye-Reminder app.asar`.  
2. Put the app.asar file into `electron/resources`.
3. Execute electron to start the app. You can rename electron to any name.
#### macOS  
1. Pack app with asar `asar pack Eye-Reminder app.asar`.  
2. Put the app.asar file into `electron/Electron.app/Contents/Resources/`.  
3. Execute Electron.app to start the app.  
  
See [Electron docs](https://www.electronjs.org/docs/tutorial/application-distribution) for more information.