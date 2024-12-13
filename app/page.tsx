import NavigationBar from "@/components/NavBar";
import Hero from "@/components/HeroSection";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";

export default function Home() {
  return (
    <>
      <Cursor />
      <NavigationBar className="theme-dark" />
      <Hero />
      <Footer />
    </>
  );
}