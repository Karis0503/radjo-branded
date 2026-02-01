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
  verification: {
    google: "626rJmKfLYgqRHtJBOrICuJT1Q2_qsrgc2EWq5U-mr8", // 🔴 ISI SESUAI DARI GSC
  },
  openGraph: {
    title: "Radjo Branded",
    description: "Fashion Harian Berkualitas Sejak 2013",
    type: "website",
    locale: "id_ID",
    url: "https://radjo-branded.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
