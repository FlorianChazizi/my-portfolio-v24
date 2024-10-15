import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import ProjectGrid from "./components/ProjectGrid";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <About />
      <ProjectGrid />
      <Projects />
      <Contact />
    </div>
  );
}
