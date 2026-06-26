import { ButtonLink } from "@/components/ui/Button";
import { site, stats } from "@/lib/content";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section id="home" className={`${styles.hero} grain`}>
      <div className={`glowAmber ${styles.glow}`} aria-hidden="true" />
      <span className={styles.ghost} aria-hidden="true">
        IW
      </span>

      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <span className={styles.status}>
            <span className={styles.dot} />
            Онлайн — приймаємо замовлення
          </span>
          <span className={`eyebrow ${styles.eyebrow}`}>
            {site.name} · {site.city}
          </span>
          <h1 className={styles.title}>
            Доставка, що<br />
            <em className="textGradientAmber">говорить за тебе.</em>
          </h1>
          <p className={styles.subtitle}>
            Швидка та надійна доставка по {site.city}у й околицях. Посилки,
            таксі та вивіз сміття — усе в одному місці. {site.hours}.
          </p>
          <div className={styles.actions}>
            <ButtonLink
              href={site.telegramBot}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              withArrow
            >
              Замовити в Telegram
            </ButtonLink>
            <ButtonLink href="#services" size="lg" variant="outline">
              Наші послуги
            </ButtonLink>
          </div>
        </div>

        <dl className={styles.stats}>
          {stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <dd className={styles.statValue}>{s.value}</dd>
              <dt className={styles.statLabel}>{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
