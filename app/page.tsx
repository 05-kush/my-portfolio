import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MetricsStrip from "@/components/sections/MetricsStrip";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <Hero />
        <About />
        <MetricsStrip />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
