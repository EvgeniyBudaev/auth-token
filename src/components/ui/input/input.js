import React from "react";
import classes from "./input.module.css";

const isInvalid = ({ valid, touched, shouldValidate }) => {
  return !valid && shouldValidate && touched;
};

const Input = props => {
  const inputType = props.type || "text";
  const inputName = props.name || "";
  // const inputPlaceholder = props.placeholder || "";
  const cls = [classes.Input];
  const htmlFor = `${inputType}-${Math.random()}`;

  if (isInvalid(props)) {
    cls.push(classes.invalid);
  }

  return (
    <div className={cls.join(" ")}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <input
        type={inputType}
        id={htmlFor}
        value={props.value}
        onChange={props.onChange}
        name={inputName}
        // placeholder={inputPlaceholder}
      ></input>

      {isInvalid(props) ? <span>{props.errorMessage}</span> : null}
    </div>
  );
};

export default Input;
