import {app, BrowserWindow} from 'electron';

console.log('main process', __dirname);

app.on('ready', () => {
  const mainWindow = new BrowserWindow();
  const rendererUrl = 'file://' + __dirname + '/renderer/index.html';
  console.log('rendererUrl', rendererUrl);
  mainWindow.loadURL(rendererUrl);
});
