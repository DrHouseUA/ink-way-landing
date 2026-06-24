import { Icon } from "@/components/Icon";
import { features } from "@/lib/content";
import styles from "./Features.module.css";

export function Features() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={`${styles.bar} grain`}>
          {features.map((f) => (
            <div key={f.title} className={styles.item}>
              <span className={styles.iconWrap}>
                <Icon name={f.icon} className={styles.icon} />
              </span>
              <div>
                <h3 className={styles.title}>{f.title}</h3>
                <p className={styles.text}>{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
