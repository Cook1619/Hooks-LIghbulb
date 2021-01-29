import React from "react";
import PropTypes from "prop-types";
// Components
import { FaLightbulb } from "react-icons/fa";
import { MdRemoveCircleOutline } from "react-icons/md";

const Light = ({
  id,
  on = false,
  onClickLight = () => null,
  onClickRemove = () => null
}) => {
  if (!id) return null;

  return (
    <div className="light-container">
      <FaLightbulb
        onClick={() => onClickLight(id)}
        className={`light ${on ? "light-on" : "light-off"}`}
      />
      <span>ID: {id}</span>
      <MdRemoveCircleOutline
        className="remove"
        title="Remove light"
        onClick={() => onClickRemove(id)}
      />
    </div>
  );
};

Light.propTypes = {
  id: PropTypes.string.isRequired,
  on: PropTypes.bool,
  onClickLight: PropTypes.func,
  onClickRemove: PropTypes.func
};

export default Light;
