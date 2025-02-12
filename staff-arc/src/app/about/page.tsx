import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <>
      <Navbar />
      <div className="p-8 text-center">
        <h1 className="text-3xl font-bold">About Staff Arc</h1>
        <p className="mt-4 text-gray-600">We specialize in staffing, recruitment, and payroll solutions.</p>
      </div>
      <Footer />
    </>
  );
}
