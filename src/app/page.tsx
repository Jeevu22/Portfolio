import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Socials from "@/components/Socials";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-[#121212] min-h-screen font-sans selection:bg-white/20">
      <Navbar />
      <div className="relative h-[800vh]">
        {/* Invisible anchor exactly mapped to the 0.25 (25%) scroll mark of the 800vh container */}
        <div id="about" className="absolute top-[200vh] w-full" />
        <ScrollyCanvas />
        <Overlay />
      </div>
      <Projects />
      <Skills />
      <Socials />
      <Footer />
    </main>
  );
}
