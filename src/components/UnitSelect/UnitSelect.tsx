import { useState } from "react";
import styles from "./UnitSelect.module.css";

type SelectProps = {
  unit: string;
  onChange: (value: string) => void;
};

export const UnitSelect = ({ unit, onChange }: SelectProps) => {
  const [isActive, setActive] = useState(false);
  const options = ["pt", "%"];
  const changeHandler = (value: string) => {
    onChange(value);
    setActive(false);
  };
  return (
    <div className={styles["unit-wrapper"]}>
      <p className={styles["unit-value"]} onClick={() => setActive((p) => !p)}>
        {unit}
      </p>
      {isActive && (
        <ul className={styles["unit-options"]}>
          {options.map((item, i) => (
            <li
              className={styles["unit-option"]}
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                changeHandler(item);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
