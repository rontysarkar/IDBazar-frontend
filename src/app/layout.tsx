import type { Metadata } from "next";
import { Roboto_Mono,Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer"
import LayoutWrapper from "./LayoutWrapper";



const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: 'swap',
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // optional
});

export const metadata: Metadata = {
  title: "ID Bazar",
  description: "This is e-commerce platform where buy or sell Your Gamming account",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <LayoutWrapper>
          <Header />
          {children}
          <Footer />
        </LayoutWrapper>
      </body>
    </html>
  );
}
