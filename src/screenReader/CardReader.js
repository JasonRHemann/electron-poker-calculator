import React, { useEffect, useState } from "react";
import axios from "axios";

const CardReader = () => {
  const [currentTime, setCurrentTime] = useState([0]);

  useEffect(() => {
    fetch("/hand")
      .then((res) => res.json())
      .then((data) => {
        setCurrentTime(data.hand);
      });
  }, []);

  return (
    <div>
      <p>The current time is {currentTime}.</p>
    </div>
  );
};

export default CardReader;
