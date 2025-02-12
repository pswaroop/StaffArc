import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Staffing() {
  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-8 text-center"
      >
        <h1 className="text-4xl font-bold text-blue-600">Staffing Services</h1>
        <p className="mt-4 text-lg text-gray-700">Providing top-notch staffing solutions for your business needs.</p>
      </motion.div>
      <Footer />
    </>
  );
}



