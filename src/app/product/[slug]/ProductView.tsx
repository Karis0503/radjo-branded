"use client";

export default function ProductView({ product }: any) {
  return (
    <section className="max-w-5xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-2">
        {product.name}
      </h1>

      <p className="text-gray-400 mb-4">
        {product.desc}
      </p>

      <p className="text-2xl font-semibold mb-6">
        {product.price}
      </p>

      <ul className="list-disc list-inside text-gray-300 mb-8">
        {product.details.map((d: string) => (
          <li key={d}>{d}</li>
        ))}
      </ul>

      <a
        href={`https://wa.me/628XXXXXXXXXX?text=Saya mau pesan ${product.name}`}
        target="_blank"
        className="inline-block px-6 py-3 border hover:bg-white hover:text-black transition"
      >
        Order via WhatsApp
      </a>
    </section>
  );
}
