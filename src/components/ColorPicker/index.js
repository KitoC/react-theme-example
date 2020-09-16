import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";

let cx = classNames.bind(styles);

const Slider = (props) => {
  const { label, onChange, value } = props;

  const className = cx({
    base: true,
    // "flex-column": true,
    ...props,
  });

  return (
    <label className={className}>
      <span>{label}</span>

      <input type="color" onChange={onChange} value={value} />
    </label>
  );
};

Slider.defaultProps = {
  dark: true,
};

export default Slider;
