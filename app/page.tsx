import Hero from "@/components/Hero"
import About from "@/components/About";
import Skills from "@/components/Skills"
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <main className="space-y-32 px-6 md:px-20">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
