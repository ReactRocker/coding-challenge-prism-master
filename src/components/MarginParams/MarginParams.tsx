import { useSpacingParams } from "../../hooks/useSpacingParams";
import { PaddingParams } from "../PaddingParams/PaddingParams";
import { ParamField } from "../ParamField/ParamField";

import styles from "./MarginParams.module.css";

export const MarginParams = () => {
  const { isLoading, params } = useSpacingParams("margin");
  if (isLoading) return <p>Loading...</p>;

  return (
    <div className={styles["margin-container"]}>
      {params.map((item) => (
        <div key={item.id} className={styles[item.name]}>
          <ParamField id={item.id} paramKey={item.name} param={item?.value} />
        </div>
      ))}
      <PaddingParams />
    </div>
  );
};
