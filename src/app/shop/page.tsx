import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { products } from "@/lib/data";

export default function Shop() {
  return (
    <>
      <Navbar />

      <section className="max-w-7xl mx-auto p-10">
        <h1 className="text-2xl font-bold mb-6">Katalog Produk</h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((p) => (
            <Link
              key={p.slug}
              href={`/product/${p.slug}`}
              className="border p-4"
            >
              <h3 className="text-sm font-medium">{p.name}</h3>
              <p className="text-sm text-gray-600">
                Rp {p.price.toLocaleString()}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
