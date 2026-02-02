import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Dummy data (nanti bisa diganti DB / CMS)
const products = [
  {
    slug: "kaos-basic-premium",
    name: "Kaos Basic Premium",
    price: "Rp 85.000",
    desc: "Kaos basic premium berbahan cotton lembut, nyaman dipakai seharian.",
    details: [
      "Bahan cotton combed",
      "Nyaman & adem",
      "Jahitan rapi",
      "Cocok untuk harian",
    ],
  },
  {
    slug: "kaos-oversize",
    name: "Kaos Oversize",
    price: "Rp 95.000",
    desc: "Kaos oversize dengan cutting santai dan modern.",
    details: [
      "Cutting oversize",
      "Bahan tebal & jatuh",
      "Style streetwear",
    ],
  },
  {
    slug: "crewneck-polos",
    name: "Crewneck Polos",
    price: "Rp 135.000",
    desc: "Crewneck polos hangat, simpel, dan mudah dipadukan.",
    details: [
      "Bahan fleece",
      "Hangat & nyaman",
      "Cocok indoor / outdoor",
    ],
  },
];

export default function ProductDetail({
  params,
}: {
  params: { slug: string };
}) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) return notFound();

  return (
    <>
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* IMAGE */}
          <div className="border aspect-square flex items-center justify-center text-gray-500">
            Image
          </div>

          {/* INFO */}
          <div>
            <h1 className="text-3xl font-bold mb-2">
              {product.name}
            </h1>

            <p className="text-xl font-semibold mb-4">
              {product.price}
            </p>

            <p className="text-gray-600 mb-6">
              {product.desc}
            </p>

            <ul className="list-disc list-inside text-sm text-gray-500 mb-8">
              {product.details.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <a
              href={`https://wa.me/628xxxxxxxxxx?text=Halo%20Radjo%2C%20saya%20tertarik%20dengan%20produk%20${product.name}`}
              target="_blank"
              className="inline-block px-8 py-4 bg-black text-white hover:opacity-90 transition"
            >
              Order via WhatsApp
            </a>

            <div className="mt-6">
              <Link
                href="/shop"
                className="text-sm text-gray-500 hover:underline"
              >
                ← Kembali ke katalog
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
