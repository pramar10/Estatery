import React from "react";
import "./dropdown.style.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const DropDown = React.forwardRef((props, ref) => {
  const [type, setType] = React.useState(props.subHeading);
  const [visible, setVisible] = React.useState(false);
  const popertyType = () => {
    if (visible === false) setVisible(true);
    else setVisible(false);
  };
  React.useImperativeHandle(ref, () => ({ type }));
  const changeValue = (name) => {
    setType(name.target.textContent);
    setVisible(false);
  };
  return (
    <div className="main-filter-card">
      <div className="filter-card">
        <p className="filter-heading">{props.heading}</p>
        <div className="filter-div-subheading" onClick={popertyType}>
          <p className="dropdown">{type}</p>
          <KeyboardArrowDownIcon className="down-filter" />
        </div>
        {visible && (
          <div className="modal">
            {props.details.map((item) => {
              return <p onClick={(item) => changeValue(item)}>{item}</p>;
            })}
          </div>
        )}
      </div>
      <div className="vertical-line" />
    </div>
  );
});

export default DropDown;
