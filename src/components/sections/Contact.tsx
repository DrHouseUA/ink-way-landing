"use client";

import { useState, type FormEvent } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/Icon";
import { services, site } from "@/lib/content";
import styles from "./Contact.module.css";

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: підключити реальну відправку (API route / Telegram-бот / пошта)
    setSent(true);
  }

  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.info}>
            <SectionHeading
              eyebrow="Контакти"
              title="Замовте доставку просто зараз"
              subtitle="Зателефонуйте або залиште заявку — передзвонимо за кілька хвилин і все організуємо."
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
              <a href={site.emailHref} className={styles.contactRow}>
                <span className={styles.contactIcon}>
                  <Icon name="mail" />
                </span>
                <span>
                  <span className={styles.contactLabel}>Пошта</span>
                  <span className={styles.contactValue}>{site.email}</span>
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

          <div className={styles.form}>
            {sent ? (
              <div className={styles.success}>
                <span className={styles.successIcon}>
                  <Icon name="check" />
                </span>
                <h3 className={styles.formTitle}>Заявку прийнято!</h3>
                <p className={styles.hint}>
                  Дякуємо. Ми зв’яжемося з вами найближчим часом.
                </p>
                <Button variant="outline" onClick={() => setSent(false)}>
                  Надіслати ще одну
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h3 className={styles.formTitle}>Залишити заявку</h3>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="name">
                    Ваше ім’я
                  </label>
                  <input
                    id="name"
                    name="name"
                    className={styles.input}
                    placeholder="Як до вас звертатися"
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="phone">
                    Телефон
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className={styles.input}
                    placeholder="+38 (0__) ___ __ __"
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="service">
                    Послуга
                  </label>
                  <select id="service" name="service" className={styles.select} defaultValue={services[0].id}>
                    {services.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title}
                      </option>
                    ))}
                    <option value="other">Інше</option>
                  </select>
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="comment">
                    Коментар
                  </label>
                  <textarea
                    id="comment"
                    name="comment"
                    className={styles.textarea}
                    placeholder="Звідки, куди та що доставити"
                  />
                </div>

                <Button type="submit" size="lg" withArrow className={styles.submit}>
                  Надіслати заявку
                </Button>
                <p className={styles.hint}>
                  Натискаючи кнопку, ви погоджуєтесь на обробку даних.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
