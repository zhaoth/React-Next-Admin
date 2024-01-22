import { notFound } from 'next/navigation';
import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';
import { locales } from '@/static/locales';
import { staticRouter } from '@/static/staticRouter';

export function generateStaticParams() {
  return ['en', 'zh'].map((locale) => ({ locale }));
}

//function to get the translations
async function getMessages(locale: string) {
  try {
    return (import(`@/i18n/${locale}.json`));
  } catch (error) {
    notFound();
  }
}

export const localePrefix = undefined;
export const pathnames = {} as any;

export const { Link, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({
    locales,
    pathnames,
    localePrefix,
  });

export type AppPathnames = keyof typeof staticRouter;

