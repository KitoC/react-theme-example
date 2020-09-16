import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";

let cx = classNames.bind(styles);

const Button = (props) => {
  const { children, onCLick } = props;

  const className = cx({
    base: true,
    ...props,
  });

  return (
    <button className={className} onClick={onCLick}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  dark: true,
};

export default Button;
