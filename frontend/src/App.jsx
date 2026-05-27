import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Services from "./sections/Services";
import WorkValues from "./sections/WorkValues";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 transition-colors duration-300 dark:bg-black dark:text-white">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <WorkValues />
        <Contact />
      </main>

      <Footer />
      <ScrollTop />
    </div>
  );
}