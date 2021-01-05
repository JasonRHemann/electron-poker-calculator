import React, { useEffect, useState } from "react";
import axios from "axios";

const SuitReader = () => {
  const [cardOneArray, setCardOneArray] = useState([]);
  const [currentTime, setCurrentTime] = useState();
  useEffect(() => {
    axios.get("http://localhost:3001/users").then((response) => {
      setCardOneArray(response.data);
      console.log("res for suit", response.data);
    });
  });

  // useEffect(() => {
  //   fetch("/time")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCurrentTime(data.time);
  //     });
  // });

  let suitArrayColor = ["b6000d", "1a81bd", "36932b", "000000", "3f3f3f3"];
  let suitArray = ["Heart", "Diamond", "Club", "Spade", "No Cards"];

  var indexOfMatch = suitArrayColor.indexOf(cardOneArray.toString());
  console.log(indexOfMatch);
  let cardOneSuit = ("suit", suitArray[indexOfMatch]);

  return (
    <div>
      <p>{cardOneSuit}</p>
    </div>
  );
};

export default SuitReader;
