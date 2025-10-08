import type { Locale } from './config';
import commonEn from './locales/en/common.json';
import marketingEn from './locales/en/marketing.json';
import appEn from './locales/en/app.json';
import commonFr from './locales/fr/common.json';
import marketingFr from './locales/fr/marketing.json';
import appFr from './locales/fr/app.json';
import commonEs from './locales/es/common.json';
import marketingEs from './locales/es/marketing.json';
import appEs from './locales/es/app.json';
import commonZh from './locales/zh/common.json';
import marketingZh from './locales/zh/marketing.json';
import appZh from './locales/zh/app.json';

const dictionaries = {
  en: { common: commonEn, marketing: marketingEn, app: appEn },
  fr: { common: commonFr, marketing: marketingFr, app: appFr },
  es: { common: commonEs, marketing: marketingEs, app: appEs },
  zh: { common: commonZh, marketing: marketingZh, app: appZh },
} as const;

export async function getDictionary(locale: string) {
  if (!Object.keys(dictionaries).includes(locale)) {
    return dictionaries.en;
  }

  return dictionaries[locale as Locale];
}
