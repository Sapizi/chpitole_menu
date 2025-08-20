import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Чипотл | Мексиканское кафе в Челябинске",
  description: "Чипотл — кафе мексиканской кухни. Буррито, тако, кесадильи и другие блюда с доставкой и в уютном зале. Заказывайте прямо сейчас!",
  keywords: [
  "мексиканская кухня",
  "буррито",
  "тако",
  "кесадилья",
  "начос",
  "энчилада",
  "фахитас",
  "чили кон карне",
  "гуакамоле",
  "сальса",
  "мексиканский ресторан",
  "кафе",
  "доставка еды",
  "доставка буррито",
  "доставка тако",
  "заказать мексиканскую еду",
  "ресторан мексиканской кухни",
  "фастфуд мексиканский",
  "уличная еда Мексика",
  "острая кухня",
  "кухня Техас-Мекс",
  "мексиканские блюда",
  "лучшая мексиканская еда",
  "Чипотл",
  "Chipotle Russia",
  "еда на вынос",
  "еда с собой",
  "доставка из ресторана",
  "мексиканский гриль",
  "quesadilla",
  "taco",
  "burrito",
  "nachos",
  "mexican food",
  "mexican restaurant",
  "заказать еду онлайн"
],

  authors: [{ name: "Чипотл" }],
  creator: "Чипотл",
  publisher: "Чипотл",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Чипотл | Настоящая мексиканская кухня",
    description: "Попробуйте настоящую мексиканскую кухню в кафе Чипотл — буррито, тако, кесадильи и многое другое.",
    url: "https://chipotle-tawny.vercel.app", // замени на свой домен
    siteName: "Чипотл",
    images: [
      {
        url: "/test.png", // сделай красивую картинку 1200x630
        width: 1200,
        height: 630,
        alt: "Чипотл — мексиканская кухня",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Чипотл | Настоящая мексиканская кухня",
    description: "Буррито, тако и кесадильи в кафе Чипотл. С любовью из Мексики!",
    images: ["/test.png"], // та же картинка
    creator: "@chipotle_ru", // если есть аккаунт
  },
  alternates: {
    canonical: "https://chipotle-tawny.vercel.app",
  },
  icons: {
    icon: "/logo.ico",
    shortcut: "/logo.ico",
    apple: "/logo.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
