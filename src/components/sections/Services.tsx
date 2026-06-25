import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/Icon";
import { ButtonLink } from "@/components/ui/Button";
import { cx } from "@/lib/cx";
import { services, site } from "@/lib/content";
import styles from "./Services.module.css";

export function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <SectionHeading
            eyebrow="Наші послуги"
            title="Усе, що потрібно — в одному місці"
            subtitle="Логістика для дому та бізнесу: від маленької посилки до повного переїзду. Беремо на себе все, що пов'язано з доставкою."
          />
          <ButtonLink
            href={site.telegramBot}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
          >
            Замовити в Telegram
          </ButtonLink>
        </div>

        <div className={styles.grid}>
          {services.map((s) => (
            <article
              key={s.id}
              className={cx(styles.card, s.highlight && styles.highlight)}
            >
              {s.highlight && <span className={styles.badge}>Топ</span>}
              <span className={styles.iconWrap}>
                <Icon name={s.icon} className={styles.icon} />
              </span>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardText}>{s.description}</p>
              <a
                href={site.telegramBot}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardCta}
              >
                {s.cta}
                <Icon name="arrow" className={styles.ctaArrow} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
