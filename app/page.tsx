import Header from "./components/Header";
import About from "./components/About";
import Hero from "./components/Hero";
import ProjectGrid from "./components/ProjectGrid";
import Techologies from './components/Technologies'
import ContactMe from "./components/Contact";


export default function Home() {

  return (
    <div className="">
      <Header />
      <Hero />
      <About />
      <ProjectGrid />
      <Techologies />
      <ContactMe />
    </div>
  );
}
