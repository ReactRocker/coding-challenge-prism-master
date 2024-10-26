import { useState } from "react";
import styles from "./Collapsible.module.css";

type CollapsibleProps = {
  title: string;
  children: React.ReactNode;
};

export const Collapsible = ({ title, children }: CollapsibleProps) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <section className={styles["collapsible"]}>
      <button
        className={styles["collapsible-button"]}
        onClick={() => setCollapsed((p) => !p)}
      >
        <span> {title} </span> <span> {collapsed ? "+" : "-"} </span>
      </button>
      {collapsed ? null : (
        <div className={styles["collapsible-content"]}> {children} </div>
      )}
    </section>
  );
};
