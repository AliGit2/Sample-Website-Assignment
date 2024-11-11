import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white py-16">
        <div className="absolute inset-0 bg-blur"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900">Elegant Modern Laptop</h1>
          <p className="mt-4 text-lg text-gray-600">
            We build your company's core-needed dashboard for work management.
          </p>
          <Link href="/buy">
            <button className="button-primary mt-6">Buy Now</button>
          </Link>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Latest Products</h2>
          <div className="mt-8 grid grid-cols-3 gap-8">
            <div className="bg-white p-4 shadow-md">
              <Link href="/product1">
                <img src="/laptoop2.jpeg" alt="Laptop 1" className="w-full h-48 object-cover" />
                <h3 className="mt-4 text-xl font-semibold">Laptop Ultra Power</h3>
                <p className="mt-2 text-gray-600">$12,000</p>
              </Link>
            </div>
            <div className="bg-white p-4 shadow-md">
              <Link href="/product2">
                <img src="/laptop5.jpg" alt="Laptop 2" className="w-full h-48 object-cover" />
                <h3 className="mt-4 text-xl font-semibold">Laptop Carbon</h3>
                <p className="mt-2 text-gray-600">$14,000</p>
              </Link>
            </div>
            <div className="bg-white p-4 shadow-md">
              <Link href="/product3">
                <img src="/laptop4.webp" alt="Laptop 3" className="w-full h-48 object-cover" />
                <h3 className="mt-4 text-xl font-semibold">Laptop Power Carbon</h3>
                <p className="mt-2 text-gray-600">$16,000</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
