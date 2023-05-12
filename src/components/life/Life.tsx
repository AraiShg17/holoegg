import React from "react";
import styles from "../../scss/components/Life.module.scss";

export type Types = {
  value: number;
} & React.HTMLAttributes<HTMLHeadingElement>;

const Life: React.FC<Types> = ({ value, ...arg }) => {
  return (
    <div
      className={styles.life}
      {...arg}
      data-value={value}
      style={{ backgroundPositionX: value * -3.8 + "px" }}
    ></div>
  );
};
export default Life;
