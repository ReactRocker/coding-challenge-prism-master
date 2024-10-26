import { Collapsible } from "../Collapsible/Collapsible";
import { MarginParams } from "../MarginParams/MarginParams";
import styles from "./ProppertiesPanel.module.css";

export const PropertiesPanel = () => {
  return (
    <aside className={styles["properties-panel"]}>
      <Collapsible title="Load examples">Example</Collapsible>
      <Collapsible title="Margin & Padding">
        <MarginParams />
      </Collapsible>
      <Collapsible title="Size">Example</Collapsible>
    </aside>
  );
};
