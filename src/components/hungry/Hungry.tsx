import React from "react";
import styles from "../../scss/components/Hungry.module.scss";

export type Types = {
  value: number;
} & React.HTMLAttributes<HTMLHeadingElement>;

const Hungry: React.FC<Types> = ({ value, ...arg }) => {
  return (
    <div
      className={styles.hungry}
      {...arg}
      data-value={value}
      style={{ backgroundPositionY: value * 3.4 + "px" }}
    ></div>
  );
};
export default Hungry;
