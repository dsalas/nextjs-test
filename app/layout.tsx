import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts'
import Script from 'next/script';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-XYPQ3PD711"></script>
      <Script
          src="ga4.js"
          strategy="lazyOnload"
        />
    </html>
  );
}
