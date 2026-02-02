import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/** Dummy data (nanti bisa dipindah ke lib / DB / CMS) */
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
      "Model oversize",
      "Bahan tebal & jatuh",
      "Tampilan modern",
    ],
  },
  {
    slug: "crewneck-polos",
    name: "Crewneck Polos",
    price: "Rp 135.000",
    desc: "Crewneck polos hangat & simpel untuk berbagai aktivitas.",
    details: [
      "Bahan fleece lembut",
      "Tidak panas",
      "Cocok santai / nongkrong",
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

  return (
    <>
      <Navbar />

      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* IMAGE */}
          <div className="border h-[350px] flex items-center justify-center text-gray-500">
            Product Image
          </div>

          {/* INFO */}
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-400 mb-4">{product.desc}</p>
            <p className="text-xl font-semibold mb-6">{product.price}</p>

            <ul className="list-disc list-inside text-gray-400 mb-8 space-y-1">
              {product.details.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <a
              href={`https://wa.me/628xxxxxxxxxx?text=Halo,%20saya%20ingin%20order%20${encodeURIComponent(
                product.name
              )}`}
              target="_blank"
              className="inline-block px-8 py-3 border border-white hover:bg-white hover:text-black transition"
            >
              Order via WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
