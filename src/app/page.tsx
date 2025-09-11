
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import MoversCarousel from "./Components/MoversCarousel";
import Navbar from "./Components/Navbar";
import Newsletter from "./Components/Newsleeter";
import Testimonials from "./Components/Testimonials";
import WhyChoose from "./Components/WhyChoose";
import WhyChooseUs from "./Components/WhyChooseUs";

export default function Home() {
 return (
    <main>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <MoversCarousel />
      <WhyChoose />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}
