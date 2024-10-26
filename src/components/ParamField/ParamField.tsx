import { useCallback, useRef, useState } from "react";
import styles from "./ParamField.module.css";
import { updateSpacingParam } from "../../api/updateSpacingParam";
import { convertParam } from "../../utils/convertParam";
import { useEventListener } from "../../hooks/useEventListener";
import { UnitSelect } from "../UnitSelect/UnitSelect";
import { useSpacigContex } from "../../context/SpacingContext";

type FieldProps = {
  id: number;
  paramKey: string;
  param: string;
};

export const ParamField = ({ id, paramKey, param }: FieldProps) => {
  const { default_value, default_unit } = convertParam(param || "");

  const [spacingValue, setSpacingValue] = useState(default_value);
  const [unit, setUnit] = useState(default_unit);

  const { activeParam, setActiveParam } = useSpacigContex();

  const isFieldActive = activeParam === paramKey;

  const paramRef = useRef<HTMLDivElement | null>(null);

  const onChange = async (newValue: string) => {
    if (newValue === "") {
      setSpacingValue(newValue);
      await updateSpacingParam(id, newValue, unit);
      return;
    }
    const numericValue = newValue.replace(/\D/g, "");
    if (numericValue && numericValue !== spacingValue) {
      setSpacingValue(numericValue);
      await updateSpacingParam(id, numericValue, unit);
    }
  };

  const onUnitChange = async (newUnit: string) => {
    if (unit !== newUnit) {
      setUnit(newUnit);
      await updateSpacingParam(id, spacingValue, newUnit);
    }
  };

  const onBlur = useCallback(
    (e: MouseEvent) => {
      const element = e.target as HTMLElement;

      if (
        isFieldActive &&
        paramRef.current &&
        !paramRef.current.contains(element)
      ) {
        setActiveParam(null);
      }
    },
    [isFieldActive, setActiveParam]
  );

  useEventListener("click", onBlur);

  return (
    <div
      ref={paramRef}
      className={`${styles["wrapper"]} ${
        spacingValue?.length > 0 ? styles["dirty"] : ""
      }`}
    >
      {isFieldActive ? (
        <>
          <input
            className={styles["field"]}
            value={spacingValue}
            autoFocus
            onChange={(e) => {
              e.stopPropagation();
              onChange(e.target.value);
            }}
            placeholder="auto"
          />
          <div className={styles["option"]}>
            <UnitSelect unit={unit} onChange={onUnitChange} />
          </div>
        </>
      ) : (
        <p
          className={styles["default"]}
          onClick={(e) => {
            e.stopPropagation();
            setActiveParam(paramKey);
          }}
        >
          {spacingValue.length > 0 ? `${spacingValue} ${unit}` : "auto"}
        </p>
      )}
    </div>
  );
};
