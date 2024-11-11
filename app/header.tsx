import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Cractta</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/testimonials">Testimonials</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Link href="/join">
          <button className="button-primary">Join Now</button>
        </Link>
      </div>
    </header>
  );
}
