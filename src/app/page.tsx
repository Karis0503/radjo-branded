import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Basic Wear Berkualitas <br className="hidden md:block" />
          untuk Aktivitas Harian
        </h1>

        <p className="text-gray-500 max-w-2xl mx-auto mb-8">
          Dipakai ribuan pelanggan sejak 2013. Nyaman dipakai, harga masuk akal,
          stok real, dan bisa dicek langsung di toko.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/shop"
            className="px-8 py-4 bg-black text-white font-medium hover:bg-gray-800 transition"
          >
            Lihat Katalog
          </Link>

          <a
            href="https://wa.me/628XXXXXXXXXX?text=Halo%20Radjo%20Branded,%20saya%20ingin%20lihat%20katalog."
            target="_blank"
            className="px-8 py-4 border border-black font-medium hover:bg-black hover:text-white transition"
          >
            Chat WhatsApp
          </a>
        </div>
      </section>

      {/* ================= TRUST / VALUE ================= */}
      <section className="border-t border-b">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="border p-8">
            <h3 className="font-semibold text-lg mb-2">Harga Terjangkau</h3>
            <p className="text-gray-500 text-sm">
              Harga realistis untuk pemakaian harian tanpa mengorbankan kualitas.
            </p>
          </div>

          <div className="border p-8">
            <h3 className="font-semibold text-lg mb-2">Stok Real</h3>
            <p className="text-gray-500 text-sm">
              Produk ready stock. Bukan pre-order, bukan tipu-tipu.
            </p>
          </div>

          <div className="border p-8">
            <h3 className="font-semibold text-lg mb-2">Toko Offline</h3>
            <p className="text-gray-500 text-sm">
              Bisa datang langsung dan cek kualitas barang di toko.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FEATURED PRODUCTS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-4">
          Produk Favorit Radjo Branded
        </h2>
        <p className="text-gray-500 text-center mb-12">
          Basic wear yang paling sering dibeli pelanggan.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              name: "Oversize Cotton T-Shirt",
              desc: "Kaos harian berbahan katun, adem & tahan lama",
            },
            {
              name: "Basic Long Pants",
              desc: "Celana basic untuk kerja & aktivitas harian",
            },
            {
              name: "Hoodie Basic",
              desc: "Nyaman dipakai, potongan rapi",
            },
            {
              name: "Crewneck Sweater",
              desc: "Simple dan cocok untuk gaya santai",
            },
          ].map((item) => (
            <div key={item.name} className="border p-6 flex flex-col">
              <div className="h-40 bg-gray-100 mb-4 flex items-center justify-center text-gray-400 text-sm">
                Image
              </div>

              <h3 className="font-semibold mb-2">{item.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{item.desc}</p>

              <a
                href="https://wa.me/628XXXXXXXXXX"
                target="_blank"
                className="mt-auto text-center py-2 border border-black hover:bg-black hover:text-white transition text-sm"
              >
                Beli via WhatsApp
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ================= OFFLINE STORE ================= */}
      <section className="border-t">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Tersedia Toko Offline</h2>
          <p className="text-gray-500 mb-8">
            Belanja online atau datang langsung ke toko kami.
          </p>

          <div className="flex justify-center gap-6 flex-wrap">
            <div className="border px-8 py-6">
              <h4 className="font-semibold">📍 Anggada, Bogor</h4>
              <p className="text-sm text-gray-500">Buka setiap hari</p>
            </div>

            <div className="border px-8 py-6">
              <h4 className="font-semibold">📍 Cikaret, Bogor</h4>
              <p className="text-sm text-gray-500">Buka setiap hari</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Siap Upgrade Pakaian Harian Lo?
          </h2>
          <p className="text-gray-300 mb-8">
            Lihat katalog lengkap atau langsung chat kami via WhatsApp.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/shop"
              className="px-8 py-4 bg-white text-black font-medium hover:bg-gray-200 transition"
            >
              Lihat Katalog
            </Link>

            <a
              href="https://wa.me/628XXXXXXXXXX"
              target="_blank"
              className="px-8 py-4 border border-white hover:bg-white hover:text-black transition"
            >
              Chat WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
