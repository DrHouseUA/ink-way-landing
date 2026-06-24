import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Icon } from "@/components/Icon";
import { cx } from "@/lib/cx";
import styles from "./Button.module.css";

type Variant = "primary" | "outline" | "ghost";
type Size = "md" | "lg";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  children: ReactNode;
  className?: string;
};

function classes(variant: Variant, size: Size, className?: string) {
  return cx(styles.btn, styles[variant], styles[size], className);
}

export function Button({
  variant = "primary",
  size = "md",
  withArrow = false,
  className,
  children,
  ...props
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={classes(variant, size, className)} {...props}>
      {children}
      {withArrow && <Icon name="arrow" className={styles.arrow} />}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  withArrow = false,
  className,
  children,
  ...props
}: CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={classes(variant, size, className)} {...props}>
      {children}
      {withArrow && <Icon name="arrow" className={styles.arrow} />}
    </a>
  );
}
