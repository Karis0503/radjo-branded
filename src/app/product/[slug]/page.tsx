import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Kaos Basic Premium",
    price: "Rp 85.000",
    note: "Nyaman dipakai harian",
  },
  {
    id: 2,
    name: "Kaos Oversize",
    price: "Rp 95.000",
    note: "Cutting santai & modern",
  },
  {
    id: 3,
    name: "Crewneck Polos",
    price: "Rp 135.000",
    note: "Hangat & simpel",
  },
  {
    id: 4,
    name: "Hoodie Basic",
    price: "Rp 175.000",
    note: "Bahan tebal, nyaman",
  },
  {
    id: 5,
    name: "Celana Santai",
    price: "Rp 120.000",
    note: "Cocok buat harian",
  },
  {
    id: 6,
    name: "Topi Basic",
    price: "Rp 55.000",
    note: "Simple & fungsional",
  },
];

export default function ShopPage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="bg-black text-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Katalog Produk
          </h1>
          <p className="text-gray-400">
            Produk fashion harian Radjo Branded — stok real & siap kirim
          </p>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="border p-6 flex flex-col justify-between hover:shadow-lg transition"
            >
              {/* IMAGE PLACEHOLDER */}
              <div className="bg-gray-100 h-48 mb-6 flex items-center justify-center text-gray-400">
                Image
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  {product.note}
                </p>
                <p className="font-bold mb-4">
                  {product.price}
                </p>
              </div>

              <a
                href="https://wa.me/628xxxxxxxxxx"
                target="_blank"
                className="text-center px-4 py-3 bg-black text-white hover:bg-gray-800 transition"
              >
                Order via WhatsApp
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Mau Tanya Stok atau Ukuran?
          </h2>
          <p className="text-gray-400 mb-8">
            Admin kami siap bantu kamu memilih produk terbaik.
          </p>
          <a
            href="https://wa.me/628xxxxxxxxxx"
            target="_blank"
            className="inline-block px-10 py-4 border border-white hover:bg-white hover:text-black transition"
          >
            Chat Admin Sekarang
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
