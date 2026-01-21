import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Supplies from "../components/Supplies";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Supplies />
        <Projects />
        <About />
        <Contact />
      </main>
    </>
  );
}
