import React from "react";

import InputMask from "react-input-mask";

import styles from "./InputDate.module.scss";

const InputDate = ({ label, onChange, defaultValue }) => {
  return (
    <div className={styles.inputDateContainer}>
      <span>{label}</span>
      <InputMask
        mask="99/99/9999"
        defaultValue={defaultValue}
        onChange={onChange}
      />
    </div>
  );
};

export default InputDate;
