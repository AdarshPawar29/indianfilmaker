import NavigationBar from "@/components/NavBar";
import Hero from "@/components/HeroSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <NavigationBar className="theme-dark" />
      <Hero />
      <Footer />
    </>
  );
}
