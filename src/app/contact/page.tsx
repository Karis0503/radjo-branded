import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="bg-black text-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hubungi Kami
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Punya pertanyaan, mau order, atau sekadar tanya stok?
            Tim Radjo Branded siap bantu kamu.
          </p>
        </div>
      </section>

      {/* CONTACT OPTIONS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* WhatsApp */}
          <div className="border p-8 text-center">
            <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
            <p className="text-gray-500 mb-6">
              Respon cepat untuk order & tanya produk
            </p>
            <a
              href="https://wa.me/628xxxxxxxxxx"
              target="_blank"
              className="inline-block px-6 py-3 bg-black text-white hover:bg-gray-800 transition"
            >
              Chat via WhatsApp
            </a>
          </div>

          {/* Email */}
          <div className="border p-8 text-center">
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-500 mb-6">
              Untuk kerja sama & pertanyaan resmi
            </p>
            <a
              href="mailto:radjobranded@gmail.com"
              className="inline-block px-6 py-3 border hover:bg-black hover:text-white transition"
            >
              Kirim Email
            </a>
          </div>

          {/* Instagram */}
          <div className="border p-8 text-center">
            <h3 className="text-xl font-semibold mb-2">Instagram</h3>
            <p className="text-gray-500 mb-6">
              Update produk & promo terbaru
            </p>
            <a
              href="https://instagram.com/radjo.branded"
              target="_blank"
              className="inline-block px-6 py-3 border hover:bg-black hover:text-white transition"
            >
              Kunjungi Instagram
            </a>
          </div>

        </div>
      </section>

      {/* OFFLINE STORE */}
      <section className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Datang ke Toko Offline
          </h2>
          <p className="text-gray-400 mb-10">
            Pelanggan juga bisa belanja langsung di toko kami
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <div className="border border-white/30 px-8 py-6">
              <p className="font-semibold">📍 Anggada, Bogor</p>
              <p className="text-sm text-gray-400">Buka setiap hari</p>
            </div>
            <div className="border border-white/30 px-8 py-6">
              <p className="font-semibold">📍 Cikaret, Bogor</p>
              <p className="text-sm text-gray-400">Buka setiap hari</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Siap Belanja?
        </h2>
        <p className="text-gray-500 mb-8">
          Klik tombol di bawah untuk langsung chat dengan admin kami.
        </p>
        <a
          href="https://wa.me/628xxxxxxxxxx"
          target="_blank"
          className="inline-block px-10 py-4 bg-black text-white hover:bg-gray-800 transition"
        >
          Hubungi via WhatsApp
        </a>
      </section>

      <Footer />
    </>
  );
}
