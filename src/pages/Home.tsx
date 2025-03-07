import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import HeroSection from "@/components/hero/Hero";
import Services from "@/components/Services/Services";
import TestimonialSection from "@/components/testimonials/testimonials";

const Home = () => {
  return (
    <section>
      <Header />
      <HeroSection />
      <Services />
      <TestimonialSection />
      <Footer />
    </section>
  );
};

export default Home;
