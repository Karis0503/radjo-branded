import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Tentang Radjo Branded
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Brand pakaian harian yang fokus pada kenyamanan, kualitas,
          dan harga yang masuk akal — sejak 2013.
        </p>
      </section>

      {/* ================= STORY ================= */}
      <section className="border-t">
        <div className="max-w-5xl mx-auto px-6 py-20 space-y-6">
          <h2 className="text-2xl font-bold">Cerita Kami</h2>

          <p className="text-gray-600 leading-relaxed">
            Radjo Branded berdiri sejak tahun 2013, berawal dari kebutuhan
            sederhana: pakaian harian yang nyaman dipakai, terlihat rapi,
            dan harganya tidak berlebihan. Kami percaya bahwa pakaian bukan
            hanya soal gaya, tapi soal rasa percaya diri saat dipakai
            setiap hari.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Sejak awal, Radjo Branded berkomitmen untuk menyediakan produk
            yang benar-benar bisa dipakai dalam aktivitas sehari-hari —
            bekerja, nongkrong, jalan santai, maupun kegiatan ringan lainnya.
            Tidak sekadar mengikuti tren, tapi fokus pada fungsi dan kualitas.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Hingga hari ini, produk Radjo Branded telah digunakan oleh
            ribuan pelanggan, baik melalui penjualan online maupun
            kunjungan langsung ke toko offline kami.
          </p>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-2xl font-bold text-center mb-12">
            Prinsip yang Kami Pegang
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border p-8 text-center">
              <h3 className="font-semibold text-lg mb-3">
                Kualitas yang Konsisten
              </h3>
              <p className="text-gray-600 text-sm">
                Kami menjaga kualitas bahan dan jahitan agar produk
                tetap nyaman dipakai dalam jangka panjang.
              </p>
            </div>

            <div className="bg-white border p-8 text-center">
              <h3 className="font-semibold text-lg mb-3">
                Harga yang Masuk Akal
              </h3>
              <p className="text-gray-600 text-sm">
                Harga kami sesuaikan dengan nilai produk, tanpa markup
                berlebihan dan tanpa gimmick palsu.
              </p>
            </div>

            <div className="bg-white border p-8 text-center">
              <h3 className="font-semibold text-lg mb-3">
                Kejujuran ke Pelanggan
              </h3>
              <p className="text-gray-600 text-sm">
                Stok real, foto sesuai barang, dan informasi produk apa adanya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OFFLINE STORE ================= */}
      <section className="border-t">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Tersedia Toko Offline
          </h2>
          <p className="text-gray-500 mb-10">
            Selain online, pelanggan juga bisa datang langsung ke toko kami.
          </p>

          <div className="flex justify-center gap-6 flex-wrap">
            <div className="border px-8 py-6">
              <h4 className="font-semibold mb-1">📍 Anggada, Bogor</h4>
              <p className="text-sm text-gray-500">
                Buka setiap hari
              </p>
            </div>

            <div className="border px-8 py-6">
              <h4 className="font-semibold mb-1">📍 Cikaret, Bogor</h4>
              <p className="text-sm text-gray-500">
                Buka setiap hari
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Terima Kasih Telah Mendukung Brand Lokal
          </h2>
          <p className="text-gray-300 mb-8">
            Kami terus berkembang berkat kepercayaan pelanggan sejak 2013.
          </p>

          <a
            href="https://wa.me/628XXXXXXXXXX"
            target="_blank"
            className="inline-block px-8 py-4 border border-white hover:bg-white hover:text-black transition"
          >
            Hubungi Kami via WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
