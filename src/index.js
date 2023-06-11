const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

let mainWindow;
let clowWindow;
let sakuraWindow;

const createWindow = () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, "./container/home/index.html"));

  // Open the DevTools.
  //mainWindow.webContents.openDevTools();
  mainWindow.on("close", (event) => {
    if (process.platform === "darwin") {
      event.preventDefault();
      mainWindow.hide();
    }
  });

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
};

const createClowWindow = () => {
  clowWindow = new BrowserWindow({
    width: 1450,
    height: 1012,
    parent: mainWindow,
    modal: true,
    show: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  clowWindow.loadFile(path.join(__dirname, "./container/card/clow.html"));

  clowWindow.on("closed", () => {
    clowWindow = null;
  });
};

const createSakuraWindow = () => {
  sakuraWindow = new BrowserWindow({
    width: 800,
    height: 600,
    parent: mainWindow,
    modal: true,
    show: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  sakuraWindow.loadFile(path.join(__dirname, "./container/card/sakura.html"));

  sakuraWindow.on("closed", () => {
    sakuraWindow = null;
  });
};

app.whenReady().then(() => {
  createWindow();
  createClowWindow();
  createSakuraWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

ipcMain.on('openClowWindow', () => {
  if(clowWindow === null)
  {
    createClowWindow();
  }
  clowWindow.show();
});

ipcMain.on('openSakuraWindow', () => {
  if(sakuraWindow === null)
  {
    createSakuraWindow();
  }
  sakuraWindow.show();
});