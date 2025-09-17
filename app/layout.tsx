import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";
import WhatsAppButton from "./components/WhatsAppButton";
import Script from 'next/script';

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat", 
});

export const metadata: Metadata = {
  title: "ALL Decor - Cortinas e persianas",
  description: "Especialistas em cortinas e persianas para transformar seu ambiente.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W8R6XV4M');`}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body className={`${montserrat.variable} font-sans`}>
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W8R6XV4M"
height="0" width="0" style={{display:"none",visibility:"hidden"}}></iframe></noscript>
        {/* End Google Tag Manager (noscript) */}
        <Navbar />
        <main className="pt-[90px]">{children}</main>
        <Footer />
        <CookieConsent />
        <WhatsAppButton />
      </body>
    </html>
  )
}
