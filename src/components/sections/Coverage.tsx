import Image from "next/image";
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
