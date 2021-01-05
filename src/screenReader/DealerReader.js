import React, { useEffect, useState } from "react";
import axios from "axios";

const DealerReader = () => {
  const [dealer, setDealer] = useState();

  useEffect(() => {
    axios.get("http://localhost:3001/dealer").then((response) => {
      setDealer(response.data);
      console.log("dealer", response.data);
    });
  });
  return (
    <div>
      <p>{dealer}</p>
    </div>
  );
};

export default DealerReader;
