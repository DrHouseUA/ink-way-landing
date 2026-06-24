import type { ReactNode } from "react";
import { cx } from "@/lib/cx";
import styles from "./SectionHeading.module.css";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={cx(styles.wrap, center && styles.center)}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
