let robot = require("robotjs");
let fs = require("fs");
let Jimp = require("jimp");

let size = 200;
let rimg = robot.screen.capture(0, 0, size, size);
let path = "myfile.png";

// Create a new blank image, same size as Robotjs' one
let jimg = new Jimp(size, size);
for (var x = 0; x < size; x++) {
  for (var y = 0; y < size; y++) {
    // hex is a string, rrggbb format
    var hex = rimg.colorAt(x, y);
    // Jimp expects an Int, with RGBA data,
    // so add FF as 'full opaque' to RGB color
    var num = parseInt(hex + "ff", 16);
    // Set pixel manually
    jimg.setPixelColor(num, x, y);
  }
}
jimg.write(path);
