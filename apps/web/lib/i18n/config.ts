export const locales = ['en', 'fr', 'es', 'zh'] as const;
export const defaultLocale = 'en';
export type Locale = (typeof locales)[number];

export const namespaces = ['common', 'marketing', 'app'] as const;
