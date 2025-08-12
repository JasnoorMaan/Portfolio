import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SplineScene from "./components/SplineScene";
import About from "./components/About";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

function App() {
  return (
    <section className="bg-black text-white font-[Font2]">
      {/* <div className="relative pointer-events-none text-white"> */}
      <Navbar />
      <Hero />
      {/* </div> */}
      <About />
      <Projects />
      <Footer />
    </section>
  );
}

export default App;
