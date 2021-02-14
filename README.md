# d_Eye
d_Eye is an eye reminder app.  
  
![Screenshot](previews/preview.png)  

## Features
- Modern UI with blurred background
- Adjustable screen time
- Play sound and send notification when it's break time

### Features to be added
- Close button minimizes to tray preference
- Custom notification sound support
- Run at startup preference
- Disable tray icon preference
- Auto updater

## Installers
| [Linux x64 (Debian)](hhttps://github.com/daydreamercodes/d_Eye/releases/download/v2.0.3/d_eye_2.0.3.deb) | [Linux x64 (tar.gz)](https://github.com/daydreamercodes/d_Eye/releases/download/v2.0.3/d_eye-2.0.3.tar.gz) | [Windows x64](https://github.com/daydreamercodes/d_Eye/releases/download/v2.0.3/d_Eye-Setup-2.0.3.exe) | [Mac x64 (tar.gz)](https://github.com/daydreamercodes/d_Eye/releases/download/v2.0.3/d_Eye-2.0.3-mac.tar.gz) |
| --- | --- | --- | --- |

## Building from source

### Prerequisites
- [Node.js and NPM](https://nodejs.org)
- [node-gyp](https://github.com/nodejs/node-gyp#readme) and the build tools for your OS
- [Git](https://git-scm.com) (Optional)

### Building
1. Clone the repository with `git clone https://github.com/daydreamercodes/d_Eye.git` if you have Git installed or download ZIP and extract.
2. Open a command line in the source folder and install dependencies with `npm i`.
3. 
- For Linux: `npm run build-linux`
- For Windows: `npm run build-windows`
- For macOS: `npm run build-mac`

### Running from source without building
1. Clone the repository with `git clone https://github.com/daydreamercodes/d_Eye.git` if you have Git installed or download ZIP and extract.
2. Open a command line in the source folder and install dependencies with `npm i`.
3. Run d_Eye with `npm run start`.
