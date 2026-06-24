import { site } from "@/lib/content";
import { cx } from "@/lib/cx";
import styles from "./Logo.module.css";

/** Кругла "ink"-монограма IW — стилізована під лого з референсу. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f4a04a" />
          <stop offset="55%" stopColor="#e8821e" />
          <stop offset="100%" stopColor="#cf6f12" />
        </linearGradient>
      </defs>
      {/* розірване "намальоване" кільце */}
      <circle
        cx="50"
        cy="50"
        r="42"
        fill="none"
        stroke="url(#ringGrad)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="150 26 60 14 30 40"
        transform="rotate(-20 50 50)"
        opacity="0.95"
      />
      <circle
        cx="50"
        cy="50"
        r="42"
        fill="none"
        stroke="#f4f3f1"
        strokeWidth="1"
        strokeLinecap="round"
        strokeDasharray="8 18 40 90 20 30"
        transform="rotate(60 50 50)"
        opacity="0.5"
      />
      {/* бризки */}
      <g fill="url(#ringGrad)">
        <circle cx="14" cy="32" r="1.6" />
        <circle cx="88" cy="40" r="2.1" />
        <circle cx="24" cy="80" r="1.3" />
        <circle cx="78" cy="78" r="1.6" />
        <circle cx="50" cy="6" r="1.4" />
      </g>
      {/* монограма IW */}
      <text
        x="50"
        y="50"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="var(--font-display), Oswald, sans-serif"
        fontSize="34"
        fontWeight="700"
        letterSpacing="-1"
        fill="#f4f3f1"
      >
        IW
      </text>
    </svg>
  );
}

export function Logo({
  className,
  markClassName,
}: {
  className?: string;
  markClassName?: string;
}) {
  return (
    <a href="#home" className={cx(styles.logo, className)}>
      <LogoMark className={markClassName ?? styles.mark} />
      <span className={styles.text}>
        <span className={styles.name}>{site.name}</span>
        <span className={styles.subtitle}>· {site.subtitle} ·</span>
      </span>
    </a>
  );
}
