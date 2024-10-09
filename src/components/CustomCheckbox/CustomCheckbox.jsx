import React from "react";
import PropTypes from "prop-types";
import { Checkbox, Radio } from "antd";

//Components - UI - Shared

//Components - UI - Styled

//Components - UI - Tables

//Components - Global - Shared

//Components - Global - Logic

//Sections

//Contexts

//Styles
import "./customCheckbox.css";

//Utils

const CustomCheckbox = ({
  onChange,
  checked,
  disabled,
  className,
  children,
}) => {
  return (
    <>
      <div className="sp1_custom_checkbox_wrapper sp1_custom_checkbox_secondary sp1_custom_checkbox_radio">
        <Checkbox className="mr-5" />
        <Radio />
      </div>
      <div className="sp1_custom_checkbox_ternary ml-5">
        <Checkbox className="mr-5" />
      </div>
      <div className="sp1_custom_checkbox_primary ml-5">
        <Checkbox className="mr-5" />
      </div>
      <div className="sp1_custom_checkbox_disabled ml-5">
        <Checkbox checked disabled className="mr-5" />
      </div>
    </>
  );
};

export default CustomCheckbox;

CustomCheckbox.propTypes = {
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};
