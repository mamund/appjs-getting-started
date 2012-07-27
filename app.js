/**
 * Begin by requiring appjs.
 **/
var app = require('appjs');
var path = require('path');

// serve files to browser requests to "http://appjs/*"
app.serveFilesFrom(path.resolve(__dirname, 'public'));

/**
 * There are other routing functions that you can use like `post`, `get` or `all`.
 **/
app.post('/',function(req,res,next){
  res.send('<h1 style="color:white;background-color:black;">Hey! How are you, '+req.post('firstname')+'?</h1>');
})

/**
 * Create a window and point it to http://appjs/. This url is a special url. 
 * It is not a http request. AppJS manages these requests manually using routers you define.
 **/
var window = app.createWindow('http://appjs/', {
  width           : 640,
  height          : 460,
  left            : -1,    // optional, -1 centers
  top             : -1,    // optional, -1 centers
  autoResize      : false, // resizes in response to html content
  resizable       : true,  // controls whether window is resizable by user
  showChrome      : true,  // show border and title bar
  opacity         : 1,     // opacity from 0 to 1 (Linux)
  alpha           : false, // alpha composited background (Windows & Mac)
  fullscreen      : false, // covers whole screen and has no border
  disableSecurity : true   // allow cross origin requests
});

/**
 * This event is fired when window is ready and loading the first page is finished.
 **/
window.on("ready",function(){
  console.log("Event Ready called");

  this.frame.show();

});

