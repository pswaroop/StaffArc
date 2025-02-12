import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between shadow-lg">
      <Link href="/" className="text-2xl font-bold">Staff Arc</Link>
      <div className="space-x-4">
        <Link href="/about">About Us</Link>
        <Link href="/services/staffing">Services</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
