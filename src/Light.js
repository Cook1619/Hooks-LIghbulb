import React, { useState } from "react";
import { networkDelay } from "./utils";
// Components
import { FaLightbulb } from "react-icons/fa";

const Light = () => {
  const [on, setOn] = useState(false);

  // TODO: edit this function
  const toggleLight = async () => {
    await networkDelay(); // DO NOT EDIT THIS LINE
    setOn((on) => !on)
  };

  return (
    <FaLightbulb
      onClick={toggleLight}
      className={`light ${on ? "light-on" : "light-off"}`}
    />
  );
};

export default Light;
