# react-usb-viewer

A simple two part utility to show your server's connected USB devices in real time. 

## Requirements
Node.js 14+

## Setup 
### Front-End App
To run the front-end React.js app you can either host the files from the "build" directory on a local server or use an npm module as so: 
```
npm install -g serve
serve -s build
```
If you wish to run in in development mode, run `npm install` in the "usb-viewer" directory. After a successful installation you can run the app with `npm start`.

### Server
Navigate to the "usb-viewer-server" app and run `npm install`. After a complete installation, run `node server.js` to start the server. 

## Expected Behavior
In my home setup, I have a computer that utilizes 
- Two USB sound cards
- One USB Hub
  - Two input devices (mouse, keyboard)

For a total of 5 default devices. With them, I get the following output on the app in the default view: 

![screencapture-localhost-3000-2021-09-04-02_04_59](https://user-images.githubusercontent.com/8621109/132072940-13054173-8169-4467-8d52-5b1d426b75b5.png)

**Hub View** will keep a flat structure for devices connected straight to the PC and group devices connected to an external USB hub

**Type View** will group devices in type - storage, input, audio, etc.

**Bus View** will group devices by the USB bus they're currently using.

**Flat View** will just display all devices without grouping.


**Any added or removed devices will update the view in real time**

All parent device accordions are expanded by default, all children are not. 
