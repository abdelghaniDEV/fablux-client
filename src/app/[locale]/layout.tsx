import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import Header from '@/components/Header';
import '../globals.css'
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Fablux Group',
  description: 'Awesome app',
};
 
export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  console.log('locale' , locale)
  const dir = locale === "ar" ? 'rtl' : 'ltr' 
  
  return (
    <html lang={locale} dir={dir}>
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={`${locale === "ar" ? "font-arabic" : "font-primary"}`}>
         
        <NextIntlClientProvider>
        <Header />
          {children}
          <Footer />
          </NextIntlClientProvider>
      </body>
    </html>
  );
}