import React, { useEffect, useState } from "react";
import axios from "axios";

const CardReader = () => {
  const [hole1, setHole1] = useState();

  useEffect(() => {
    fetch("/hole1")
      .then((res) => res.json())
      .then((data) => {
        setHole1(data.hole1);
      });
  });
  return (
    <div>
      <p>{hole1}</p>
    </div>
  );
};

export default CardReader;
