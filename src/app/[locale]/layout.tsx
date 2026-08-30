import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { ThemeProvider } from "../../lib/theme";
import "./globals.css";

export const metadata: Metadata = {
  title: "SmartMaid — خدمات منزلية احترافية",
  description: "احجز عاملات منزل موثّقات خلال دقيقة واحدة. دفع آمن وتتبّع لحظي.",
  icons: { icon: "/logos/logo-standard.svg" },
  openGraph: {
    title: "SmartMaid",
    description: "خدمات منزلية احترافية بلمسة واحدة",
    locale: "ar_SA",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!["ar", "en"].includes(locale)) notFound();
  const messages = await getMessages();
  const dir = locale === "ar" ? "rtl" : "ltr";
  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800;900&family=Sora:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
