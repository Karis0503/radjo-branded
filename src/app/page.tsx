import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="max-w-7xl mx-auto p-10 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Fashion Harian Berkualitas — Sejak 2013
        </h1>
        <p className="text-gray-600 mb-6">
          Dipercaya pelanggan online & offline. Ada toko fisik.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/shop"
            className="px-6 py-3 bg-black text-white"
          >
            Lihat Katalog
          </Link>

          <a
            href="https://wa.me/628xxxxxxxxxx"
            className="px-6 py-3 border"
          >
            Chat WhatsApp
          </a>
        </div>
      </section>

      {/* VALUE */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto p-10">
        {[
          "Harga Terjangkau",
          "Stok Real",
          "Toko Offline",
        ].map((item) => (
          <div key={item} className="border p-6 text-center">
            <h3 className="font-semibold">{item}</h3>
          </div>
        ))}
      </section>

      <Footer />
    </>
  );
}
