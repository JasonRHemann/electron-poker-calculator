import React, { useEffect, useState } from "react";
import axios from "axios";

const SuitReader = () => {
  const [cardOneArray, setCardOneArray] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/users").then((response) => {
      setCardOneArray(response.data);
      console.log("res", response.data);
    });
  }, []);

  console.log("card one", cardOneArray);

  let suitArrayColor = ["c70000", "0089ce", "329f28", "000000", "444444"];
  let suitArray = ["Heart", "Diamond", "Club", "Spade", "No Cards"];

  var indexOfMatch = suitArrayColor.indexOf(cardOneArray.toString());
  console.log(indexOfMatch);
  let cardOneSuit = ("suit", suitArray[indexOfMatch]);

  return (
    <div>
      <p>{cardOneArray}</p>
    </div>
  );
};

export default SuitReader;
