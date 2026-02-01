import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/lib/data";

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const product = products.find(p => p.slug === params.slug);

  if (!product) return <div>Produk tidak ditemukan</div>;

  return (
    <>
      <Navbar />

      <section className="max-w-5xl mx-auto p-10">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="text-xl mt-2">
          Rp {product.price.toLocaleString()}
        </p>

        <div className="mt-6">
          <a
            href="https://wa.me/628xxxxxxxxxx"
            className="px-4 py-2 border inline-block"
          >
            Chat WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
