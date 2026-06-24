import { SectionHeading } from "@/components/ui/SectionHeading";
import { steps } from "@/lib/content";
import styles from "./HowItWorks.module.css";

export function HowItWorks() {
  return (
    <section id="how" className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <SectionHeading
            eyebrow="Як це працює"
            title="Чотири кроки до доставки"
            subtitle="Жодної бюрократії — від заявки до отримання вантажу за лічені хвилини."
            center
          />
        </div>
        <ol className={styles.grid}>
          {steps.map((step) => (
            <li key={step.num} className={styles.step}>
              <span className={styles.num}>{step.num}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepText}>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
