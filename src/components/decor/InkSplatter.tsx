/** Декоративні "чорнильні" бризки — суто оформлення, без семантики. */
export function InkSplatter({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      aria-hidden="true"
      fill="currentColor"
    >
      <circle cx="200" cy="200" r="6" />
      <circle cx="120" cy="150" r="3" />
      <circle cx="280" cy="120" r="4" />
      <circle cx="320" cy="240" r="2.5" />
      <circle cx="90" cy="260" r="2" />
      <circle cx="250" cy="300" r="3.5" />
      <circle cx="160" cy="90" r="2" />
      <circle cx="340" cy="180" r="1.6" />
      <circle cx="60" cy="200" r="1.6" />
      <circle cx="210" cy="340" r="2.4" />
      <path d="M200 60c10 30 8 60-2 90-6 20-4 40 6 60" opacity="0.4" />
      <path d="M70 130c40 10 70 40 90 80" opacity="0.3" />
      <path d="M330 300c-30-10-60-8-90 4" opacity="0.3" />
      <ellipse cx="150" cy="220" rx="2" ry="9" transform="rotate(25 150 220)" />
      <ellipse cx="260" cy="170" rx="1.6" ry="7" transform="rotate(-15 260 170)" />
    </svg>
  );
}
