var express = require("express");
var router = express.Router();

function dealerPosition() {
  var robot = require("robotjs");

  var seatOne = robot.getPixelColor(552, 700);
  var seatTwo = robot.getPixelColor(340, 710);
  var seatThree = robot.getPixelColor(185, 665);
  var seatFour = robot.getPixelColor(211, 503);
  var seatFive = robot.getPixelColor(441, 420);
  var seatSix = robot.getPixelColor(519, 423);
  var seatSeven = robot.getPixelColor(752, 505);
  var seatEight = robot.getPixelColor(772, 664);
  var seatNine = robot.getPixelColor(619, 698);

  seats = [
    seatOne,
    seatTwo,
    seatThree,
    seatFour,
    seatFive,
    seatSix,
    seatSeven,
    seatEight,
    seatNine,
  ];

  const dealerSeat = (element) => element !== "444444";
  dealer = seats.findIndex(dealerSeat);

  console.log(dealer);
  return dealer;
}

dealerPosition();

router.get("/", function (req, res, next) {
  res.json(dealerPosition());
});

module.exports = router;
