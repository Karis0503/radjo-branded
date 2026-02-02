import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const products = [
  {
    slug: "kaos-basic-premium",
    name: "Kaos Basic Premium",
    price: "Rp 85.000",
    desc: "Kaos basic premium berbahan cotton lembut, nyaman dipakai untuk aktivitas harian.",
    details: [
      "Bahan cotton combed",
      "Adem & nyaman",
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
      "Model oversize",
      "Bahan adem",
      "Nyaman & stylish",
    ],
  },
  {
    slug: "crewneck-polos",
    name: "Crewneck Polos",
    price: "Rp 135.000",
    desc: "Crewneck polos yang hangat dan simpel.",
    details: [
      "Bahan tebal",
      "Hangat dipakai",
      "Desain minimal",
    ],
  },
  {
    slug: "celana-panjang-pria",
    name: "Celana Panjang Pria",
    price: "Rp 120.000",
    desc: "Celana panjang nyaman dan fleksibel untuk aktivitas harian.",
    details: [
      "Bahan fleksibel",
      "Nyaman bergerak",
      "Cocok kerja & santai",
    ],
  },
];

type Props = {
  params: {
    slug: string;
  };
};

export default function ProductDetailPage({ params }: Props) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const waLink = `https://wa.me/628XXXXXXXXXX?text=Halo%20admin,%20saya%20ingin%20order%20${encodeURIComponent(
    product.name
  )}`;

  return (
    <>
      <Navbar />

      <section className="border-b">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <p className="text-sm text-gray-400 mb-3">
            <Link href="/shop" className="hover:underline">
              Shop
            </Link>{" "}
            / {product.name}
          </p>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {product.name}
          </h1>

          <p className="text-xl font-semibold">
            {product.price}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="border h-[380px] flex items-center justify-center text-gray-400">
          Image Produk
        </div>

        <div>
          <p className="text-gray-300 mb-6">
            {product.desc}
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-300 mb-10">
            {product.details.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <a
            href={waLink}
            target="_blank"
            className="inline-block px-8 py-4 bg-black text-white border hover:bg-white hover:text-black transition"
          >
            Order via WhatsApp
          </a>

          <div className="mt-6">
            <Link
              href="/shop"
              className="text-sm text-gray-400 hover:underline"
            >
              ← Kembali ke Katalog
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
