import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import { Products } from "./sections/Products";


export default function App() {
  return (
    <div className="font-sans bg-white">
      <Header />
      <Hero />
      <Benefits />
      <Products />
      <HowItWorks />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}