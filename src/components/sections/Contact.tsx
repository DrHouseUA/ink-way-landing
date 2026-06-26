import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/Icon";
import { site } from "@/lib/content";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.info}>
            <SectionHeading
              eyebrow="Контакти"
              title="Замовте послугу за хвилину"
              subtitle="Усі замовлення приймаємо в Telegram — натисніть кнопку, і наш бот одразу допоможе оформити заявку. Без дзвінків та очікування."
            />

            <div className={styles.contacts}>
              <a href={site.phoneHref} className={styles.contactRow}>
                <span className={styles.contactIcon}>
                  <Icon name="phone" />
                </span>
                <span>
                  <span className={styles.contactLabel}>Телефон</span>
                  <span className={styles.contactValue}>{site.phone}</span>
                </span>
              </a>
              <div className={styles.contactRow}>
                <span className={styles.contactIcon}>
                  <Icon name="pin" />
                </span>
                <span>
                  <span className={styles.contactLabel}>Адреса</span>
                  <span className={styles.contactValue}>{site.address}</span>
                </span>
              </div>
              <div className={styles.contactRow}>
                <span className={styles.contactIcon}>
                  <Icon name="clock" />
                </span>
                <span>
                  <span className={styles.contactLabel}>Графік</span>
                  <span className={styles.contactValue}>{site.hours}</span>
                </span>
              </div>
            </div>
          </div>

          <div className={styles.cta}>
            <span className={styles.ctaIcon}>
              <Icon name="telegram" />
            </span>
            <h3 className={styles.ctaTitle}>Замовлення в Telegram</h3>
            <p className={styles.ctaText}>
              Натисніть кнопку — і оформіть замовлення прямо в чаті з нашим
              ботом. Швидко та зручно, щодня з 9:00 до 22:00.
            </p>
            <ButtonLink
              href={site.telegramBot}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              withArrow
              className={styles.ctaButton}
            >
              Написати боту
            </ButtonLink>
            <span className={styles.ctaHandle}>{site.telegramBotHandle}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
