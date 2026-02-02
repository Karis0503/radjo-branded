import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const products = [
  {
    name: "Kaos Basic Premium",
    slug: "kaos-basic-premium",
    price: "Rp 85.000",
    desc: "Nyaman dipakai harian",
  },
  {
    name: "Kaos Oversize",
    slug: "kaos-oversize",
    price: "Rp 95.000",
    desc: "Cutting santai & modern",
  },
  {
    name: "Crewneck Polos",
    slug: "crewneck-polos",
    price: "Rp 135.000",
    desc: "Hangat & simpel",
  },
  {
    name: "Celana Panjang Pria",
    slug: "celana-panjang-pria",
    price: "Rp 120.000",
    desc: "Nyaman & fleksibel",
  },
];

export default function ShopPage() {
  return (
    <>
      <Navbar />

      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Katalog Produk
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Produk fashion harian Radjo Branded — stok real, siap kirim, bisa
          order online atau datang langsung ke toko offline.
        </p>
      </section>

      {/* FILTER (opsional, future-proof) */}
      <section className="max-w-7xl mx-auto px-6 mb-10">
        <div className="flex flex-wrap gap-3 justify-center">
          {["Semua", "Kaos", "Outer", "Celana"].map((item) => (
            <div
              key={item}
              className="px-4 py-2 border border-gray-700 text-sm text-gray-300"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.slug}
              className="border border-gray-800 p-4 flex flex-col"
            >
              {/* IMAGE PLACEHOLDER */}
              <div className="bg-gray-100 text-gray-400 flex items-center justify-center aspect-square mb-4">
                Image
              </div>

              {/* INFO */}
              <h3 className="font-semibold text-lg mb-1">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                {product.desc}
              </p>
              <p className="font-bold mb-4">{product.price}</p>

              <div className="mt-auto flex flex-col gap-2">
                {/* DETAIL */}
                <Link
                    href={`/product/${product.slug}`}
                    className="block px-4 py-2 border text-center"
                >
                  Lihat Detail
                </Link>

                {/* WHATSAPP */}
                <a
                  href="https://wa.me/628xxxxxxxxxx"
                  target="_blank"
                  className="text-center px-4 py-2 bg-black border border-black text-white hover:bg-gray-900 transition"
                >
                  Order via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Bingung Pilih Produk?
        </h2>
        <p className="text-gray-400 mb-8">
          Hubungi kami, kami bantu rekomendasikan produk yang cocok buat kamu.
        </p>
        <a
          href="https://wa.me/628xxxxxxxxxx"
          target="_blank"
          className="inline-block px-8 py-4 border border-white hover:bg-white hover:text-black transition"
        >
          Chat Admin via WhatsApp
        </a>
      </section>

      <Footer />
    </>
  );
}
