import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="p-8 text-center">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}
