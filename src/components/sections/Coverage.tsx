"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cx } from "@/lib/cx";
import { coverageAreas, site } from "@/lib/content";
import styles from "./Coverage.module.css";

export function Coverage() {
  const [active, setActive] = useState<string | null>(null);

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
              {coverageAreas.map((area) => {
                const isActive = active === area.name;
                return (
                  <li key={area.name}>
                    <button
                      type="button"
                      aria-pressed={isActive}
                      onClick={() =>
                        setActive(isActive ? null : area.name)
                      }
                      className={cx(styles.chip, isActive && styles.chipActive)}
                    >
                      <span className={styles.chipDot} />
                      {area.name}
                      <span className={styles.chipPrice}>
                        від {area.price} грн
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
            <p className={styles.note}>
              Натисніть район, щоб побачити базову вартість доставки. Виїзд за
              межі зони — за домовленістю. {site.hours}.
            </p>
          </div>

          <div className={styles.map}>
            <Image
              src="/assets/coverage-aerial.jpg"
              alt={`Нічний ${site.city} з висоти пташиного польоту`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className={styles.mapImg}
            />
            <div className={styles.mapOverlay} aria-hidden="true" />
            <span className={styles.marker} aria-hidden="true" />
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
