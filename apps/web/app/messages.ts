import 'server-only';
import { getDictionary } from '@/lib/i18n/get-dictionary';

export async function getMessages(locale: string) {
  return getDictionary(locale);
}
