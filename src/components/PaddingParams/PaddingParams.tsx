import styles from "./PaddingParams.module.css";

import { useSpacingParams } from "../../hooks/useSpacingParams";
import { ParamField } from "../ParamField/ParamField";

export const PaddingParams = () => {
  const { isLoading, params } = useSpacingParams("padding");
  if (isLoading) return <p>Loading...</p>;

  return (
    <div className={styles["padding-container"]}>
      {params.map((item) => (
        <div key={item.id} className={styles[item.name]}>
          <ParamField id={item.id} paramKey={item.name} param={item?.value} />
        </div>
      ))}
    </div>
  );
};
