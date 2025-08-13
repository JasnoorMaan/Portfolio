import { useState } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

function App() {
  const [loaderComplete, setLoaderComplete] = useState(false);
  const [splineLoaded, setSplineLoaded] = useState(false);
  const [shutterOpening, setShutterOpening] = useState(false);

  return (
    <section className="bg-black text-white font-[Font2]">
      {/* landing is always loaded in bg */}
      {/* ensuring content is always available */}
      <div>
        {/* fixed and begins anim once shutter starts */}
        <Navbar startAnimation={shutterOpening} />

        {/* always rendered and visible for preloading */}
        <Hero
          startAnimations={shutterOpening}
          onSplineLoad={() => setSplineLoaded(true)}
        />

        <About />
        <Projects />
        <Footer />
      </div>

      {/* loader overlays on top */}
      {!loaderComplete && (
        <Loader
          onComplete={() => setLoaderComplete(true)}
          onShutterStart={() => setShutterOpening(true)}
          splineLoaded={splineLoaded}
        />
      )}
    </section>
  );
}

export default App;
