import React from "react";
import styles from "./Button.module.css";
import "./Style.css";
const Button = () => {
  return (
    <>
      <button className={styles.error}>Button</button>
      <button className="error">button</button>
    </>
  );
};

export default Button;
