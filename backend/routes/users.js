var express = require("express");
var router = express.Router();

function color() {
  // Get pixel color under the mouse.
  var robot = require("robotjs");

  // Get mouse position.
  // var mouse = robot.getMousePos();

  const cardOneRefPointX = 325;
  const cardOneRefPointY = 458;

  // Get pixel color in hex format.
  var cardOneSuitPixel = robot.getPixelColor(
    cardOneRefPointX,
    cardOneRefPointY
  );

  //Get matrix of card value
  var matrixPoint1 = robot.getPixelColor(309, 434);
  var matrixPoint1 = robot.getPixelColor(313, 434);
  var matrixPoint1 = robot.getPixelColor(317, 434);
  var matrixPoint1 = robot.getPixelColor(309, 441);
  var matrixPoint1 = robot.getPixelColor(313, 441);
  var matrixPoint1 = robot.getPixelColor(317, 441);
  var matrixPoint1 = robot.getPixelColor(309, 447);
  var matrixPoint1 = robot.getPixelColor(313, 447);
  var matrixPoint1 = robot.getPixelColor(317, 447);
  var cardOneMatrix = [
    matrixPoint1,
    matrixPoint2,
    matrixPoint3,
    matrixPoint4,
    matrixPoint5,
    matrixPoint6,
    matrixPoint7,
    matrixPoint8,
    matrixPoint9,
  ];
  console.log(cardOneMatrix);
  return cardOneSuitPixel;
}

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json(color());
});

module.exports = router;
