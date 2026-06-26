/**
 * Центральне джерело контенту лендингу INKWAY.
 * Тут заглушки — замінюйте тексти, контакти та посилання на реальні.
 */

export const site = {
  name: "INKWAY",
  subtitle: "SERVICE",
  city: "Ужгород",
  phone: "+38 (063) 220 27 32",
  phoneHref: "tel:+380632202732",
  address: "м. Ужгород, Закарпатська обл.",
  hours: "Щодня з 9:00 до 22:00",
  /** Telegram-бот для замовлення послуг */
  telegramBot: "https://t.me/UzhDeliveryBot",
  telegramBotHandle: "@UzhDeliveryBot",
  socials: {
    instagram: "https://www.instagram.com/inkway_service",
    telegram: "https://t.me/UzhDeliveryBot",
  },
} as const;

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "Головна", href: "#home" },
  { label: "Послуги", href: "#services" },
  { label: "Зона доставки", href: "#coverage" },
  { label: "Як це працює", href: "#how" },
  { label: "Контакти", href: "#contact" },
];

export type Service = {
  id: string;
  title: string;
  description: string;
  /** ключ іконки — див. components/Icon.tsx */
  icon: "box" | "car" | "truck" | "trash";
  cta: string;
  highlight?: boolean;
};

export const services: Service[] = [
  {
    id: "delivery",
    title: "Доставка посилок",
    description:
      "Швидка та надійна доставка посилок, документів і покупок по Ужгороду та околицях. Від дверей до дверей.",
    icon: "box",
    cta: "Замовити доставку",
    highlight: true,
  },
  {
    id: "taxi",
    title: "Таксі",
    description:
      "Комфортні поїздки містом та за його межами. Подача авто за кілька хвилин, фіксована вартість.",
    icon: "car",
    cta: "Викликати таксі",
  },
  {
    id: "waste",
    title: "Вивіз сміття",
    description:
      "Винесемо та вивеземо ваше побутове сміття з дому чи квартири. Швидко, акуратно й без зайвих клопотів.",
    icon: "trash",
    cta: "Замовити вивіз",
  },
];

export type Feature = {
  title: string;
  description: string;
  icon: "bolt" | "shield" | "star" | "headset";
};

export const features: Feature[] = [
  {
    title: "Швидкість",
    description: "Виконуємо замовлення максимально швидко — від 15 хвилин на подачу.",
    icon: "bolt",
  },
  {
    title: "Надійність",
    description: "Гарантія збереження та відповідальність за кожне відправлення.",
    icon: "shield",
  },
  {
    title: "Якість",
    description: "Перевірені водії й кур'єри, акуратне поводження з кожним відправленням.",
    icon: "star",
  },
  {
    title: "Підтримка",
    description: "На зв'язку щодня з 9:00 до 22:00 та готові допомогти з будь-яким запитом.",
    icon: "headset",
  },
];

export type Step = { num: string; title: string; description: string };

export const steps: Step[] = [
  {
    num: "01",
    title: "Залишаєте заявку",
    description: "Телефонуйте або пишіть у месенджер — приймаємо замовлення щодня з 9:00 до 22:00.",
  },
  {
    num: "02",
    title: "Узгоджуємо деталі",
    description: "Уточнюємо адресу, час і вартість. Жодних прихованих доплат.",
  },
  {
    num: "03",
    title: "Виїжджаємо до вас",
    description: "Кур'єр або водій вирушає за вказаною адресою в узгоджений час.",
  },
  {
    num: "04",
    title: "Доставлено",
    description: "Отримуєте відправлення вчасно й у цілості. Оплата зручним способом.",
  },
];

/** Населені пункти зони обслуговування (околиці Ужгорода) */
export const coverageAreas: string[] = [
  "Ужгород",
  "Минай",
  "Барвінок",
  "Сторожниця",
  "Оноківці",
  "Коритняни",
  "Великі Лази",
  "Баранинці",
  "Концово",
  "Часлівці",
];

export const stats = [
  { value: "9–22", label: "Щодня без вихідних" },
  { value: "15 хв", label: "Середній час подачі" },
  { value: "10+", label: "Населених пунктів" },
  { value: "5★", label: "Оцінка клієнтів" },
];
