import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return ['en', 'zh'].map((locale) => ({ locale }))
}

//function to get the translations
async function getMessages(locale: string) {
  try {
    return (import(`@/i18n/${locale}.json`))
  } catch (error) {
    notFound()
  }
}
