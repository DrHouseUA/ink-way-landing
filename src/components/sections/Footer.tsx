import { Logo } from "@/components/Logo";
import { Icon } from "@/components/Icon";
import { nav, services, site } from "@/lib/content";
import styles from "./Footer.module.css";

const year = 2026;

export function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.ghost} aria-hidden="true">
        IW
      </span>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.about}>
            <Logo />
            <p className={styles.tagline}>
              {site.name} — швидка та надійна доставка по {site.city}у й
              околицях. Робимо логістику простою та зручною для вас.
            </p>
            <div className={styles.socials}>
              <a className={styles.social} href={site.socials.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <Icon name="instagram" />
              </a>
              <a className={styles.social} href={site.socials.telegram} aria-label="Telegram" target="_blank" rel="noopener noreferrer">
                <Icon name="telegram" />
              </a>
              <a className={styles.social} href={site.socials.viber} aria-label="Viber">
                <Icon name="viber" />
              </a>
            </div>
          </div>

          <div>
            <h3 className={styles.colTitle}>Меню</h3>
            <nav className={styles.list}>
              {nav.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className={styles.colTitle}>Послуги</h3>
            <nav className={styles.list}>
              {services.map((s) => (
                <a key={s.id} href="#services">
                  {s.title}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className={styles.colTitle}>Контакти</h3>
            <div className={styles.list}>
              <a href={site.phoneHref}>{site.phone}</a>
              <a href={site.emailHref}>{site.email}</a>
              <span>{site.address}</span>
              <span>{site.hours}</span>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>
            © {year} {site.name}. Усі права захищені.
          </span>
          <span>
            Створено з душею <span className={styles.heart}>♥</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
