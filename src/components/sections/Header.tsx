"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { Icon } from "@/components/Icon";
import { ButtonLink } from "@/components/ui/Button";
import { nav, site } from "@/lib/content";
import { cx } from "@/lib/cx";
import styles from "./Header.module.css";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={cx(styles.header, scrolled && styles.scrolled)}>
      <div className={cx("container", styles.bar)}>
        <Logo />

        {/* Desktop nav */}
        <nav className={styles.nav}>
          {nav.map((item) => (
            <a key={item.href} href={item.href} className={styles.link}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <a href={site.phoneHref} className={styles.phone}>
            {site.phone}
          </a>
          <ButtonLink
            href={site.telegramBot}
            target="_blank"
            rel="noopener noreferrer"
            withArrow
          >
            Замовити
          </ButtonLink>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Закрити меню" : "Відкрити меню"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={styles.toggle}
        >
          <Icon name={open ? "close" : "menu"} className={styles.toggleIcon} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={cx(styles.mobile, open && styles.mobileOpen)}>
        <nav className={cx("container", styles.mobileNav)}>
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={styles.mobileLink}
            >
              {item.label}
            </a>
          ))}
          <div className={styles.mobileActions}>
            <a href={site.phoneHref} className={styles.mobilePhone}>
              {site.phone}
            </a>
            <ButtonLink
              href={site.telegramBot}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              withArrow
              onClick={() => setOpen(false)}
            >
              Замовити
            </ButtonLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
