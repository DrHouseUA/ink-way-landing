import { SectionHeading } from "@/components/ui/SectionHeading";
import { coverageAreas, site } from "@/lib/content";
import styles from "./Coverage.module.css";

export function Coverage() {
  return (
    <section id="coverage" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <SectionHeading
              eyebrow="Зона доставки"
              title={<>Працюємо по {site.city}у та околицях</>}
              subtitle="Доставляємо в межах міста і до сусідніх населених пунктів. Не знайшли свій населений пункт — напишіть нам, домовимось."
            />
            <ul className={styles.areas}>
              {coverageAreas.map((area) => (
                <li key={area} className={styles.chip}>
                  <span className={styles.chipDot} />
                  {area}
                </li>
              ))}
            </ul>
            <p className={styles.note}>
              Виїзд за межі зони — за домовленістю. {site.hours}.
            </p>
          </div>

          <div className={styles.map} aria-hidden="true">
            <svg className={styles.mapSvg} viewBox="0 0 400 400">
              <defs>
                <radialGradient id="mapGlow">
                  <stop offset="0%" stopColor="rgba(232,130,30,0.5)" />
                  <stop offset="100%" stopColor="rgba(232,130,30,0)" />
                </radialGradient>
              </defs>
              {/* умовні дороги */}
              <g stroke="var(--ink-600)" strokeWidth="1.5" fill="none">
                <path d="M40 200 H360" />
                <path d="M200 40 V360" />
                <path d="M70 90 L330 320" opacity="0.5" />
                <path d="M330 90 L70 320" opacity="0.5" />
                <circle cx="200" cy="200" r="120" opacity="0.4" />
                <circle cx="200" cy="200" r="170" opacity="0.25" />
              </g>
              {/* пульсуюча зона */}
              <circle cx="200" cy="200" fill="url(#mapGlow)" className={styles.pulse} />
              {/* точки населених пунктів */}
              <g fill="var(--amber-500)">
                <circle cx="200" cy="200" r="6" />
                <circle cx="120" cy="140" r="3" />
                <circle cx="285" cy="150" r="3" />
                <circle cx="150" cy="285" r="3" />
                <circle cx="300" cy="270" r="3" />
                <circle cx="95" cy="230" r="3" />
                <circle cx="265" cy="320" r="3" />
              </g>
            </svg>
            <div className={styles.mapLabel}>
              <div className={styles.mapLabelCity}>{site.city}</div>
              <div className={styles.mapLabelSub}>центр зони обслуговування</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
