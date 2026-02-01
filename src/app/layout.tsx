import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://radjo-branded.vercel.app"),
  title: "Radjo Branded – Fashion Harian Berkualitas Sejak 2013",
  description:
    "Radjo Branded menyediakan fashion harian berkualitas sejak 2013. Tersedia online & toko offline Anggada dan Cikaret.",
  keywords: [
    "radjo branded",
    "fashion pria",
    "pakaian harian",
    "baju pria bogor",
    "toko baju anggada",
    "toko baju cikaret",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Radjo Branded",
    description: "Fashion Harian Berkualitas Sejak 2013",
    type: "website",
    locale: "id_ID",
    url: "https://radjo-branded.vercel.app",
    siteName: "Radjo Branded",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
