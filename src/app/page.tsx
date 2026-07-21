import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Credentials from "@/components/Credentials";
import HowIBuild from "@/components/HowIBuild";
import Skills from "@/components/Skills";
import Socials from "@/components/Socials";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-[#0a0a0f] min-h-screen font-sans selection:bg-white/20">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Credentials />
      <HowIBuild />
      <Skills />
      <Socials />
      <Footer />
    </main>
  );
}
