
import Hero from "./Components/Hero";
import MoversCarousel from "./Components/MoversCarousel";
import Navbar from "./Components/Navbar";
import WhyChooseUs from "./Components/WhyChooseUs";

export default function Home() {
 return (
    <main>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <MoversCarousel />
    </main>
  );
}
