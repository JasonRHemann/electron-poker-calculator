var express = require("express");
var router = express.Router();

function color() {
  // Get pixel color under the mouse.
  var robot = require("robotjs");

  // Get mouse position.
  // var mouse = robot.getMousePos();

  const cardOneRefPointX = 457;
  const cardOneRefPointY = 746;

  // Get pixel color in hex format.
  var cardOneSuitPixel = robot.getPixelColor(
    cardOneRefPointX,
    cardOneRefPointY
  );

  console.log(cardOneSuitPixel);
  return cardOneSuitPixel;
}

function number() {
  var robot = require("robotjs");

  let point1 = robot.getPixelColor(435, 702);
  let point2 = robot.getPixelColor(442, 702);
  let point3 = robot.getPixelColor(450, 702);
  let point4 = robot.getPixelColor(435, 711);
  let point5 = robot.getPixelColor(442, 711);
  let point6 = robot.getPixelColor(450, 711);
  let point7 = robot.getPixelColor(435, 719);
  let point8 = robot.getPixelColor(442, 719);
  let point9 = robot.getPixelColor(450, 719);
  let point10 = robot.getPixelColor(437, 707);
  let point11 = robot.getPixelColor(436, 714);
  let point12 = robot.getPixelColor(447, 706);

  //checking the pixel colors and these 12 points
  let matrix = [
    point1,
    point2,
    point3,
    point4,
    point5,
    point6,
    point7,
    point8,
    point9,
    point10,
    point11,
    point12,
  ];

  console.log(matrix);

  numbArr = [];

  //returns an array of all the indexes that are not white
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i] != "ffffff") {
      numbArr.push(i + 1);
    }
  }

  var compressedNumb = numbArr.join("");

  //these are the values that for each card we are looking for
  numberValuesArr = [
    "25781012",
    "25812",
    "2581112",
    "245810",
    "24581011",
    "125812",
    "258101112",
    "24581012",
    "2356891012",
    "81112",
    "2689101112",
    "134579101112",
    "2567912",
    "123456789101112",
  ];
  console.log(numberValuesArr[1]);

  console.log(compressedNumb);

  for (let i = 0; i < numberValuesArr.length; i++) {
    if (numberValuesArr[i] === compressedNumb) {
      console.log("test", i + 2);
    }
  }
}

number();
color();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json(color());
});

module.exports = router;
