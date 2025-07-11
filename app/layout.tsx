import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";
import WhatsAppButton from "./components/WhatsAppButton";

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        <Navbar/>
        <main className="pt-22">
          {children}
        </main>
        <Footer />
        <CookieConsent /> 
        <WhatsAppButton />
      </body>
    </html>
  );
}